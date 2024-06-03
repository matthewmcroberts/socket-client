import { useEffect, useState } from "react";
import { ChatWithMessage, getAllChats } from "../api/chatService";
import { useDispatch } from "react-redux";
import { chatActions } from "../store/chatSlice";

export const useAllChatData = (reload: boolean) => {
    const [chats, setChats] = useState<ChatWithMessage[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getChats = async() => {
            const chatData = await getAllChats();
            if(chatData) {
                setChats(chatData);
                chatData.map(chat=>{
                    dispatch(chatActions.addChat(chat.name));
                })
            }
        };
        getChats();
    }, [reload]);
    return {data: chats};
}