import { resolve } from "path";
import instance from "./core";
import { rejects } from "assert";

export type User = {
    _id: string;
    username:string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

type UserData = {
    success: boolean;
    data: User;
}

export const loginUser = async (username:string, password: string):Promise<UserData|undefined>=>{
    return new Promise(async(resolve,reject)=>{ 
        const response = await instance.post('/user/login',{username,password});
        if(response){
            resolve(response.data);
         } else{
            resolve(undefined);
         }
    });
}

export const registerUser = async (username:string, password: string):Promise<UserData|undefined>=>{
    return new Promise(async(resolve,reject)=>{ 
        const response = await instance.post('/user/register',{username,password});
        if(response){
            resolve(response.data);
         } else{
            resolve(undefined);
         }
    });
}