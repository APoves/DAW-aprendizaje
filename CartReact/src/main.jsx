import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartApp} from './CartApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartApp />
  </StrictMode>,
)
