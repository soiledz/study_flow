import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.tsx";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main style={{
                width: "800px",
                margin: "0 auto",
                padding: "20px"
            }}>
                <Outlet/>
            </main>
        </>
    )
}