import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import DiscoverPage from './pages/DiscoverPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ThemeProvider from './components/ThemeProvider.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/news",
    element: <NewsPage/>
  },
  {
    path: "/discover",
    element: <DiscoverPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routers}/>
    </ThemeProvider>
  </StrictMode>
)
