import axios,{AxiosInstance} from "axios";
import {store} from '../store/store';
import { userActions } from "../store/userSlice";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7000',
    withCredentials: true
});
const {dispatch} = store;
instance.interceptors.response.use(
    (response)=>response,
    (error):void=>{
        const status =error.response.error;
        switch(status){
            case 400:
                console.log('Error: ',error.response.data.message);
                break;
            case 401:
                console.log('Error: ',error.response.data.message);
                dispatch(userActions.logout());
                break;
            case 404:
                console.log('Error: ',error.response.data.message);
                break;
            case 500:
                console.log('Error: ',error.response.data.message);
                break;
            default:
                console.log("Got an unexpected status code");
                break;
        }
    },
);
export default instance