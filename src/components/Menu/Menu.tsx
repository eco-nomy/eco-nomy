import { useState, useEffect, useRef } from "react";
import {useLocation } from "react-router-dom";

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
      <div/>
  )
}
