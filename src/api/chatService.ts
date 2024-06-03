import instance from "./core";

export type Message = {
    _id: string;
    userId: string;
    chatId: string;
    message: string;
    createdAt: Date;
}

export type ChatWithMessage = {
    _id: string;
    name: string;
    lastMessage: Message;
    createdAt: Date;
    updatedAt: Date;
}

export const getAllChats = async (): Promise<ChatWithMessage[]> => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.get("/chat/get/all");
        if (response) {
            resolve(response.data.data);
        } else {
            resolve([]);
        }
    });
}