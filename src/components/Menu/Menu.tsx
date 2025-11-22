import { useState, useEffect, useRef } from "react";
import {Link, useLocation } from "react-router-dom";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location])
  
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

  return(
      <div className="relative" ref={dropdownRef}>
        <button onClick={
          ()=> setIsOpen(!isOpen) 
        }>
          Menu
        <button/>
        {isOpen && (
          <div className="lg:hidden absolute right-0 menu-dropdown">
            <nav className="">
              <Link to="/">Home</Link>
              <Link to="/integrantes">Integrantes</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/perguntas-frequentes">Perguntas(FAQ)</Link>
              <Link to="/trabalhos">Trabalhos</Link>
              <Link to="/contato">Contato</Link>
            </nav>
          </div>
              )}
      <div/>
  )
}
