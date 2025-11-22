import {useLocation} from "react-router-dom";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location])
  
  return(
      <div>
        <button onClick={
          ()=> setIsOpen(!isOpen) 
        }>
          Menu
        <button/>
      <div/>
  )
}
