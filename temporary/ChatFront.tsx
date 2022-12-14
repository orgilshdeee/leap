import { User1 } from './User1';
import { User2 } from './User2';

export function ChatFront() {
  return (
    <div className="p-5 relative h-[80vh] bg-grey flex justify-between">
      <User1 />
      {/* <User2 /> */}
    </div>
  );
}
