import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from "../store/store";
import { chatActions } from "../store/chatSlice";
import { userActions } from '../store/userSlice';


export function Messages() {
  const nav = useNavigate();

  const dispatch = useDispatch();

  const room = useSelector((state: RootState) => state.chat.activeChatroom);
  const messages = useSelector((state: RootState) => state.chat.chats);
  const user = useSelector((state: RootState) => state.user.user);


  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePostClick = () => {
    if (user) {
      console.log(user);
      dispatch(chatActions.addMessage({ sender: user.username, message: inputValue, room: room }));
    }
  };
  function goBack() {
    nav('/chats');
  }
  function logOut() {
    dispatch(userActions.logout());
    nav('/');
    


  }

  return (
    <main className="py-8">
      <button onClick={goBack} className={`bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`}>Go back</button>
      <button name='logout' className={`bg-red-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={logOut}>Logout</button>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full ">
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={handleInputChange}
            className="border p-2 rounded mr-2 w-1/3"
          />
          <button
            onClick={handlePostClick}
            className="bg-blue-500 text-white p-2 pl-4 pr-4 rounded"
          >
            Post
          </button>
        </div>
      </div>
      <h1>Messages:</h1>
      <div className={`break-all`}>
        {messages[room].map((message) => (
          (message.sender === user?.username) ? (<p>You: {message.message}</p>): (<p>{message.sender}: {message.message}</p>)
        ))}
      </div>
    </main>
  );
}
