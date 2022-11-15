import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import { Contact, Services, About } from './components';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contacts",
    element: <Contact/>
  },
  {
    path: "services",
    element: <Services/>
  },
  {
    path: "About",
    element: <About/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
