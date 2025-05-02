import {Header} from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Schedule} from "./pages/Schedule.tsx";
import {Homework} from "./pages/Homework.tsx";

function App() {

    return (
        <>
            <div style={{
                width: "800px",
                height: "100vh",
                display: "block",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Header/>
                <div style={{padding: "20px"}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/schedule" element={<Schedule/>}/>
                        <Route path="/homework" element={<Homework/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App

