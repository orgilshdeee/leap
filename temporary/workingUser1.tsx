import { useMutation, useQuery } from '@apollo/client';
import { GraphqlErrorAlert, Spinner } from '@pinecone-studio/int-lms-web/ui-components';
import jwtDecode from 'jwt-decode';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { CHATS, CREATE_CHAT } from '../graphql';

type Chat = {
  text: string;
  __typename: 'Chat';
  _id: string;
};
export function User1() {
  const [conver, setConver] = useState<Chat[]>([]);
  const { loading, error, data } = useQuery(CHATS);
  const [userID, setUserID] = useState<string>(jwtDecode(localStorage.getItem('token')));
  const [createChat, { loading: load }] = useMutation(CREATE_CHAT, {
    onCompleted() {
      toast.info('Амжилттай хадгаллаа.');
    },
    onError(error) {
      toast.error(error?.graphQLErrors[0]?.message);
    },
  });
  useEffect(() => {
    if (data) {
      setConver(data.chats);
    }
  }, [data]);
  if (loading || conver.length == 0) return <Spinner />;
  if (error) return <GraphqlErrorAlert message={error.message} />;
  const { chats } = data; //
  console.log(chats);
  function sendTextHandler(e: any) {
    e.preventDefault();
    console.log(e.target.message.value);
    setConver([...conver, { text: e.target.message.value, _id: 'asd', __typename: 'Chat' }]);
    createChat({
      variables: {
        createChatInput: {
          text: e.target.message.value,
          receiver_id: 'string',
        },
      },
    });
  }

  return (
    <div className="w-1/2 mx-auto relative h-100 bg-grey bg-slate-500 p-2" style={{ overflowY: 'scroll' }}>
      <div>
        {conver &&
          conver.map((item: any, index) => (
            <div>
              {userID.sub == item.sender_id ? (
                <ul>
                  <li key={index} className="mb-1 py-1 px-3 inline-block rounded-2xl bg-gray-100">
                    {item.text}
                  </li>
                </ul>
              ) : (
                <ul className="flex">
                  <li key={index} className="mb-1 ml-auto py-1 px-3 inline-block rounded-2xl bg-[#0b93f6] text-white">
                    {item.text}
                  </li>
                </ul>
              )}
            </div>
          ))}
      </div>
      <form className="sticky bottom-0 text-white" onSubmit={sendTextHandler}>
        <input type="text" name="message" className="w-4/5 bg-[#3A3A3A] px-1 border-0" />
        <button className="w-1/5 bg-[#38388F]" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

{
  /* <div className="p-5 relative h-[80vh] bg-grey flex justify-between"></div> */
}
