import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Perguntas from './routes/Perguntas/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Trabalhos from './routes/Trabalhos/index.tsx'
import Contratacao from './routes/Contratacao/index.tsx'
import Contato from './routes/Contato/index.tsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/sobre", element:<Sobre/>},
    {path:"/faq", element:<Perguntas/>},
    {path:"/integrantes", element:<Integrantes/>},
    {path:"/trabalhos", element:<Trabalhos/>},
    {path:"/contratacao", element:<Contratacao/>},
    {path:"/contato", element:<Contato/>}
  ]}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)