import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsPage from './pages/news/NewsPage.jsx'
import DiscoverPage from './pages/DiscoverPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ThemeProvider from './components/ThemeProvider.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ThemeProvider from './hooks/ThemeProvider.jsx'
import Layout from './layout.jsx'
import NewsDetailPage from './pages/news/NewsDetailPage.jsx'
import NotFound from './NotFound.jsx'
import ScanPage from './pages/ScanPage.jsx'
import { useLoading } from './hooks/LoadingProvider.jsx'
import LoadingProvider from './hooks/LoadingProvider.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout with Navbar and Footer
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
    element: <RegisterPage/>,
    path: "*",// Catch-all route for undefined paths
    element: <NotFound/> // NotFound without Layout (No Navbar or Footer)
  }
])

function App() {
  const { startLoading, stopLoading, isLoading } = useLoading()
  const location = useLocation()

  useEffect(() => {
    // Start loading animation on route change
    startLoading()

    // Simulate loading time (replace this with actual data loading)
    const timeoutId = setTimeout(() => {
      stopLoading()
    }, 1000); // Adjust this time as needed
    return () => clearTimeout(timeoutId) // Clean up timeout on component unmount
  }, [location, startLoading, stopLoading]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <RouterProvider router={routers}/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <LoadingProvider>
      <RouterProvider router={routers}>
        <App/>
      </RouterProvider>
    </LoadingProvider>
    </ThemeProvider>
  </StrictMode>
)
