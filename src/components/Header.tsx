import {Link} from "react-router-dom";

export  const Header = () => {
    return (
        <header style={{width: "100%", background: "#f2f2f2", padding: "10px 20px"}}>
            <nav style={{display: "flex", gap: "15px"}}>
                <Link to="/">Главная</Link>
                <Link to="/schedule">Расписание</Link>
                <Link to="/homework">Домашка</Link>
            </nav>
        </header>
    )
}