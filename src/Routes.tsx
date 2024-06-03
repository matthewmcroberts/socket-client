import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { Chats } from "./components/Chat";
import { Login } from "./components/Login";
import { Messages } from "./components/Messages";
import { Register } from "./components/Register";




const router = createBrowserRouter([
    {path: '/', element:<Login />},
    {path: 'chats', element: <Chats/> },
    {path: 'messages', element: <Messages/> },
    {path: '/register',element: <Register/>}


    ]);

function Routes(){
    return <RouterProvider router={router}/>
}

export default Routes;