import React , { useEffect, useState } from "react";

export default function Avatar( { isOnline } ) {

  const [ seed , setSeed ] = useState('');

  useEffect( () => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [] );
  
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="" />
      </div>
      <span className={`isOnline ${isOnline}`}></span>
    </div>
  );
}
