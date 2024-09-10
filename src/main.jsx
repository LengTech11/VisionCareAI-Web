import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsPage from './pages/news/NewsPage.jsx'
import DiscoverPage from './pages/DiscoverPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ThemeProvider from './hooks/ThemeProvider.jsx'
import Layout from './layout.jsx'
import NewsDetailPage from './pages/news/NewsDetailPage.jsx'
import NotFound from './NotFound.jsx'
import ScanPage from './pages/ScanPage.jsx'
import AuthProvider from './hooks/AuthProvider.jsx'
import ProtectedRoute from './components/auth_components/ProtectedRoute.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
    ), // Layout with Navbar and Footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/news/:id", element: <NewsDetailPage/> },
      { path: "/discover", element: <DiscoverPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/scan", element: <ScanPage/> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "*",// Catch-all route for undefined paths
    element: <NotFound/> // NotFound without Layout (No Navbar or Footer)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={routers}/>
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
