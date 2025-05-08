import {Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home"
import Schedule from "./pages/Schedule"
import {Homework} from "./pages/Homework"
import {Layout} from "./layouts/Layout"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="homework" element={<Homework />} />
            </Route>
        </Routes>
    )
}

export default App