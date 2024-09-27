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
import { action as destroyAction } from './routes/destroy'
import Index from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index/>},
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
      },
      {
        path: '/contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <h3>Oops! something went wrong trying to delete contact.</h3>
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
