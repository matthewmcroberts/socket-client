import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Login } from "./components/Login";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="max-w-7x1 mx-auto px-4">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  )
}

export default App