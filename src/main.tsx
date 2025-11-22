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
import Hub from './routes/Hub/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Login from './routes/Login/index.tsx'
import { ThemeProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/perguntas", element: <Perguntas /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/trabalhos", element: <Trabalhos /> },
      { path: "/contratacao", element: <Contratacao /> },
      { path: "/hub", element: <Hub /> },
      { path: "/contato", element: <Contato /> },
      { path: "/login", element: <Login /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
