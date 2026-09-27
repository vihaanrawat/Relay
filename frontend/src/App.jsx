import { WallpaperProvider } from "./context/WallpaperContext"
import { ThemeProvider } from "./context/ThemeContext"
import { Navigate, Route, Routes } from 'react-router';
import ChatPage from './pages/ChatPage';
import AuthPage from "./pages/AuthPage";
import { useAuth } from '@clerk/react'
import PageLoader from "./components/PageLoader";
import { useAuthStore } from "./store/useAuthStore";


function App() {
  const { isSignedIn, isLoaded } = useAuth()

  //option 1 : 
  // const {checkAuth , isCheckingAuth , clearAuth} = useAuthStore();

  //option 2 : better for performance
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);






  if (!isLoaded) return <PageLoader />

  return (
    <ThemeProvider>
      <WallpaperProvider>

        <Routes>

          <Route path='/' element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />

          <Route path='/auth' element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />} />

        </Routes>

      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
