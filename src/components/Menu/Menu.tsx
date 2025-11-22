import { useState, useEffect, useRef } from "react";
import {useLocation } from "react-router-dom";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location])
  
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
