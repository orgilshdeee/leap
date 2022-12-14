import { useMutation, useQuery } from '@apollo/client';
import { GraphqlErrorAlert, Spinner } from '@pinecone-studio/int-lms-web/ui-components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { CHATS, CREATE_CHAT } from '../graphql';

type Chat = {
  text: string;
  __typename: 'Chat';
  _id: string;
  receiver_id?: string;
  sender_id?: string;
  readStatus?: [];
};

const socket = io('http://localhost:3334');

export function User1() {
  const [conver, setConver] = useState<Chat[]>([]);
  const { loading, error, data } = useQuery(CHATS);
  const [userID, setUserID] = useState<string>('');
  const [createChat, { loading: load }] = useMutation(CREATE_CHAT, {
    onError(error) {
      toast.error(error?.graphQLErrors[0]?.message);
    },
  });
  console.log(data);
  useEffect(() => {
    if (data) {
      setConver(data.chats);
    }
  }, [data]);

  useEffect(() => {
    socket.on('recieveMessage', (data) => {
      if (data) setConver([...conver, data]);
    });
  }, []);

  if (loading || load || conver.length === 0) return <Spinner />;
  if (error) return <GraphqlErrorAlert message={error.message} />;

  function sendTextHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      message: { value: string };
    };
    createChat({
      variables: {
        createChatInput: {
          text: target.message.value,
          receiver_id: 'string',
        },
      },
    });
  }

  return (
    <div className="w-screen mx-auto h-100 bg-grey bg-slate-500 p-2 flex flex-col justify-between" style={{ overflowY: 'scroll' }}>
      <div>
        {conver &&
          conver.map((item: any, index) => (
            <div key={index}>
              {userID.sub == item.sender_id ? (
                <ul>
                  <li key={index} className="mb-1 py-1 px-3 inline-block rounded-2xl bg-gray-100">
                    {item.text}
                  </li>
                </ul>
              ) : (
                <ul>
                  <li key={index} className="mb-1 ml-auto py-1 px-3 inline-block rounded-2xl bg-[#0b93f6] text-white">
                    {item.text}
                  </li>
                </ul>
              )}
            </div>
          ))}
      </div>
      <form className="text-white" onSubmit={sendTextHandler}>
        <input type="text" name="message" className="w-4/5 bg-[#3A3A3A] px-1 border-0" />
        <button className="w-1/5 bg-[#38388F]" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

// {conver &&
//   conver.map((item: any, index) => (
//     <div key={index}>
//       {userID.sub == item.sender_id ? (
//         <ul>
//           <li key={index} className="mb-1 py-1 px-3 inline-block rounded-2xl bg-gray-100">
//             {item.text}
//           </li>
//         </ul>
//       ) : (
//         <ul className="flex">
//           <li key={index} className="mb-1 ml-auto py-1 px-3 inline-block rounded-2xl bg-[#0b93f6] text-white">
//             {item.text}
//           </li>
//         </ul>
//       )}
//     </div>
//   ))}
