import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { User } from "../api/authenticate";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authService";


export function Login() {
  const nav = useNavigate();

  const dispatch = useDispatch();


  async function onSignInClick(event: any) {

    dispatch(userActions.authenticateAction());

    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;

    let user = await loginUser(username, password);
    console.log(user);
    if (user) {
      let authenticatedUser: User = { username: username };
      dispatch(userActions.authenticatedAction(authenticatedUser));

      if (authenticatedUser !== undefined) {
        dispatch(userActions.authorizeAction());

        dispatch(userActions.authorizedAction());

      }

      nav(`/chats`);
    } else {
      console.log('error: ', user);
    }


  }
  const register = () => {
    nav('/register');
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
      <button type='button' onClick={register}>Register</button>

    </main>
  )
}