import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Menu from './pages/Menu/Menu.tsx'
import Aside from './components/Aside/Aside.tsx'
import {ROTAS_PRINCIPAIS} from './routes.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Aside rotaAtual={ROTAS_PRINCIPAIS[0].id} />
  </StrictMode>,
)
