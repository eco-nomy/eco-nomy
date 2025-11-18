import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden z-50 px-4 py-2 bg-[#0b521f] text-white rounded-md shadow-md hover:bg-[#2e7c10] transition"
            >
                Menu ▼
            </button>

            {isOpen && (
                <div className="lg:hidden absolute right-0 mt-2 w-48 bg-[#0b521f] text-white rounded-md shadow-lg border border-[#414141]">
                    <nav className="flex flex-col p-4 space-y-2">
                        <Link to="/" className="hover:text-[#2e7c10] transition">Home</Link>
                        <Link to="/integrantes" className="hover:text-[#2e7c10] transition">Integrantes</Link>
                        <Link to="/sobre" className="hover:text-[#2e7c10] transition">Sobre</Link>
                        <Link to="/perguntas" className="hover:text-[#2e7c10] transition">Perguntas (FAQ)</Link>
                        <Link to="/trabalhos" className="hover:text-[#2e7c10] transition">Trabalhos</Link>
                        <Link to="/contato" className="hover:text-[#2e7c10] transition">Contato</Link>
                    </nav>
                </div>
            )}

            <div className="hidden lg:flex space-x-6 bg-[#0b521f] text-white px-6 py-3 rounded-md shadow-md">
                <Link to="/" className="hover:text-[#2e7c10] transition">Home</Link>
                <Link to="/integrantes" className="hover:text-[#2e7c10] transition">Integrantes</Link>
                <Link to="/sobre" className="hover:text-[#2e7c10] transition">Sobre</Link>
                <Link to="/perguntas" className="hover:text-[#2e7c10] transition">Perguntas (FAQ)</Link>
                <Link to="/trabalhos" className="hover:text-[#2e7c10] transition">Trabalhos</Link>
                <Link to="/contato" className="hover:text-[#2e7c10] transition">Contato</Link>
            </div>
        </div>
    );
}
