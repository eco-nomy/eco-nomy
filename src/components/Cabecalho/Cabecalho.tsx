import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from '../../img/logo.png'

export default function Cabecalho() {
    return (
        <header className="bg-white  text-[#0b521f]  shadow-md">
            <div className="bg-[#2e7c10] flex flex-col sm:flex-row sm:justify-between sm:items-center text-white px-4 py-2 text-sm ">
                <div className="flex justify-center">
                    <p className="flex items-center gap-1">
                        economy@email.com
                    </p>
                </div>

                <div className="flex justify-center gap-4 mt-2 sm:mt-0">
                    <p className="flex items-center gap-1">
                        11 4444-4444
                    </p>
                    <p className="flex items-center gap-1">
                        11 9 9999-9999
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
                    <Link 
                        to="/" 
                        className="text-2xl font-bold hover:text-[#0b521f]  transition"
                    >
                        <img src={logo} alt="Logo Eco-nomy" className="w-30 h-auto" />
                    </Link>           
                </div>
                <Menu />
            </div>
        </header>
    )
}
