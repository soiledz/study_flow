import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.tsx";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main style={{
                padding: "20px"
            }}>
                <Outlet/>
            </main>
        </>
    )
}