import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import './sass/styles.scss';


const root = ReactDOM.createRoot(document.querySelector('#root'))
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


root.render(<App/>)