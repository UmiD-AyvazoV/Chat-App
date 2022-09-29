import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function ChatListItems({ name, id }) {
  return (
    <Link to={`/room/${id}`}>
      <div className="chatlist__item">
        <Avatar />
        <div className="userMeta">
          <p>{name}</p>
          <span className="activeTime">33 mins ago</span>
        </div>
      </div>
    </Link>
  );
}
