import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

export default function Cabecalho() {
    return (
        <header>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-2'>
                <div className='flex justify-center'>
                    <p className='flex items-center gap-1'>
                        economy@email.com
                    </p>
                </div>

                <div className='flex justify-center gap-2'>
                    <p className='flex items-center gap-1'>
                        11 4444-4444
                    </p>
                    <p className='flex items-center gap-1'>
                        11 9 9999-9999
                    </p>
                </div>
            </div>

            <div className='flex'>
                <div className="flex items-center space-x-2">
                    <Link to="/">logo</Link>           
                </div>
                <Menu />
            </div>
        </header>
    )
}