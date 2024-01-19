import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from '../pages'
import '../shared/styles/global/normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>,
)

