import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout () {
    return (
        <>
        <div className="d-flex justify-content-start">
            <main className="w-100 flex-grow-1">
              <Header/>
              <Outlet/>
            </main>
          </div>
        </>
    )
}