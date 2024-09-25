import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'
import './index.css'
import Root, { 
  Loader as rootLoader,
  action as rootAction 
} from './routes/root'
import ErrorPage from './error-page'
import Contact, {
  Loader as contactLoader
} from './routes/contact'
import EditContact, {
  action as editAction
} from './routes/edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction
      }
    ]
  },
  {
    path: 'blog/:blogId',
    element: <Contact/>,
    errorElement: <ErrorPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
