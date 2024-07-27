import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/Home.jsx';
import { Student } from './components/Student.jsx';
import { Volunteer } from './components/Volunteer.jsx';
import CircleLeader from './components/CircleLeader.jsx';
import ChapterLeader from './components/ChapterLeader.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/student/:id",
    element: <Student/>
  },
  {
    path: "/volunteer/:id",
    element: <Volunteer/>
  },
  {
    path: "/circleleader/:id",
    element: <CircleLeader/>
  },
  {
    path: "/chapterleader/:id",
    element: <ChapterLeader/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
