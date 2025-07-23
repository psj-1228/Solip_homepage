import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'       // Tailwind 초기화 파일

const root = createRoot(document.getElementById('root'))
root.render(<App />)