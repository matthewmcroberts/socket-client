import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { User } from "../api/authenticate";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api/authService";


export function Register(){
    const nav = useNavigate();



    async function onSignInClick(event:any){

        
        event.preventDefault();
        let username = event.target[0].value;
        let password = event.target[1].value;

        let user = await registerUser(username,password);
        if(user) {
           nav('/');
          }
        else {
            console.log('Something went wrong while registering');
        }
       


      }


    return (
        <main className="py-8">
            <form onSubmit={onSignInClick}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <label>Password:</label>
            <input type="password" id="password" />
            <button type='submit'>Submit</button>
            </form>
        </main>
    )
}