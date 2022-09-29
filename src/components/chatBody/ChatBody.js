import React, { useState } from "react";
import ChatList from "../chatList/ChatList";
import UserProfile from "../userProfile/UserProfile";
import ChatContent from "../chatContent/ChatContent";
import "./chatBody.css";
import { useParams } from "react-router-dom";
import sms from '../../images/chat.png';

export default function ChatBody() {
  const { roomId } = useParams();
  const [ msg , setMsg ] = useState('');
  return (
    <div className="main__chatbody">
      <ChatList msg={msg} setMsg={setMsg}/>
      {
        roomId ? <ChatContent msg={msg}/> : <img src={sms} className='msg'/>
      }
      <UserProfile />
    </div>
  );
}