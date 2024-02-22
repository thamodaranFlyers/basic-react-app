import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import SupportPage from './pages/SupportPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/project/:id',
    element: <ProjectPage />
  },
  {
    path:'/support',
    element: <SupportPage/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App />
    <RouterProvider router={router}/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
