import { Content } from "./Content";
import { RootState } from "../store/store";
import { FormEvent, useState } from "react";
import { authorize } from "../api/authorize";
import { User } from "../api/authenticate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chatSlice";
import { userActions } from "../store/userSlice";
import instance from "../api/core";
import { useAllChatData } from "../hooks/chatDataHook";


export function Chats() {
  const user = useSelector((state: RootState) => state.user.user);
  const chat = useSelector((state: RootState) => state.chat);
  const [reload, setReload] = useState(false);
  const { data } = useAllChatData(reload);

  const dispatch = useDispatch();

  const nav = useNavigate();

  function createChatroom() {
    console.log('create');
    var name = prompt('Please enter a new chatname', '');
    if (name != null && name != "") {
      dispatch(chatActions.addChat(name));
    }
  }

  function deleteChatroom() {
    console.log('delete');
    var name = prompt('Please enter a chatname to delete', '');
    if (name != null && name != "") {
      dispatch(chatActions.removeChat(name));
    }
  }

  function selectChatroom(room: any) {
    console.log(chat);
   // dispatch(chatActions.enterChat(room.name))

    //nav('/messages');
  }

  function logOut() {
    nav('/');
    dispatch(userActions.logout());


  }



  // <button name='chat room 1' className={`bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={selectChatroom}>{item}</button>


  return (
    <main className="py-8">
      <h1>Chats:</h1>
      <div>
        {data.map((room) => (
          <button name={room.name} className={`bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={() => selectChatroom(room)}>{room.name}</button>
        ))}
      </div>
      <div>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={createChatroom}>Create Chatroom</button>
      </div>
      <div>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={deleteChatroom}>Delete Chatroom</button>
      </div>
      <div>
        <button name='logout' className={`bg-red-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2`} onClick={logOut}>Logout</button>
      </div>



    </main>
  )
}