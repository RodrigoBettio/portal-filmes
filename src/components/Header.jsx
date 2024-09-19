import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex bg-green-100 text-blue-700"> 
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}