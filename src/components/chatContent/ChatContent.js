import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../../firebase";
import ChatItem from "./ChatItem";

export default function ChatContent() {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (roomId) {
      const q = query(collection(db, "rooms"));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.find((doc) => {
          if (doc.id === roomId) {
            setRoomName(doc.data().name);
            setMessages(doc.data().message);
          }
        });
      });
    }
  }, [roomId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Bir şeylər yazın...');
      setInput("");
    }
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar />
            <p>{roomName}</p>
          </div>
        </div>
      </div>
      <div className="content__body">
        {messages.map((msg, i) => (
          <div className="chat__items" key={i}>
            <ChatItem className="chat__item" msg={msg} />
          </div>
        ))}
      </div>
      <div className="content__footer">
        <form className="sendNewMessage" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message here"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
