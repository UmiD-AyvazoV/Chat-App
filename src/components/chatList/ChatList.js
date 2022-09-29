import { useState, useEffect } from "react";
import "./chatList.css";
import db from "../../firebase";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import ChatListItems from "./ChatListItems";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChatList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rooms"));
    onSnapshot(q, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const createChat = async () => {
    const room = prompt("Please enter room name");
    if (room) {
      await addDoc(collection(db, "rooms"), { name: room, message: [] });
      toast.success("🙂 Success 🙂");
    } else {
      toast.info("😠 Enter room name 😠");
    }
  };

  return (
    <div className="main__chatlist">
      <button className="btn" onClick={createChat}>
        <i className="fa fa-plus"></i>
        <span>New Conversation</span>
        <ToastContainer />
      </button>
      <Link to="/">
        <h2>Chats</h2>
      </Link>
      <div className="chatlist__items">
        {rooms.map((room) => (
          <ChatListItems key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
