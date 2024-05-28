import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes/routes";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App () {
    return (
      <>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </>
    );
}