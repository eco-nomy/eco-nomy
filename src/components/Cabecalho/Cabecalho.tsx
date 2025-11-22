import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return(
    <header>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-2'>
        <div className='flex justify-center'>
          <p className='flex items-center gap-1'>
            <img src={} className='w-4 h-4' alt="ícone email" />
            economy@gmail.com
          </p>
        </div>
      </div>

      <div>
        <p>
          <img src={}/>
          11 4444-4444
        <p/>
        <p>
          <img src={}/>
          11 9 9999-9999
        <p/>
      </div> 

       
      <div>
        <div>
          <Link to="/"><img src={} className="" alt="" /></Link>           
        <div/>
      <div/>

    </header>
  )
}
