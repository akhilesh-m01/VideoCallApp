import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Call from './components/Call.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path: "/call",
    element: <Call/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
