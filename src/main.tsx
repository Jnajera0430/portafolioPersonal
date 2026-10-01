import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './api/ContextProvider.tsx'

export const createRoot = ViteReactSSG(
  <ContextProvider>
    <App />
  </ContextProvider>
)
