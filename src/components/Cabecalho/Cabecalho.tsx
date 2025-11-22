import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.png';
import login from '../../img/icone/login.png'
import { ThemeContext } from '../../context/ThemeContext';

export default function Cabecalho() {
    const { theme, toggleTheme } = useContext(ThemeContext)!;

    return (
        <header className="bg-[var(--c-bg)] text-[var(--c-text)] shadow-md transition">

            <div className="bg-[var(--c-primary)] text-white flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-2 text-sm">

                <div className="flex justify-center">
                    <p className="flex items-center gap-1">economy@email.com</p>
                </div>

                <div className="flex justify-center gap-4 mt-2 sm:mt-0">
                    <p className="flex items-center gap-1">11 4444-4444</p>
                    <p className="flex items-center gap-1">11 9 9999-9999</p>
                </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
                    <Link to="/login"><img src={login} className="w-13 h-auto mt-3" alt="Icone Login" /></Link>
                    <Link to="/"><img src={logo} alt="Logo Eco-nomy" className="w-30 h-auto" /></Link>
                </div>

                <div className="flex items-center gap-4">
                    <Menu />

                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer px-3 py-2 rounded-lg shadow bg-[var(--c-primary)] text-white hover:bg-[var(--c-primary-light)] transition"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </header>
    );
}
