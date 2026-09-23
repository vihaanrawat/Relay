import { WallpaperProvider } from "./context/WallpaperContext"
import { ThemeProvider } from "./context/ThemeContext"
import { Navigate, Route, Routes } from 'react-router';
import ChatPage from './pages/ChatPage';
import AuthPage from "./pages/AuthPage";
import { useAuth } from '@clerk/react'


function App() {

  const { isSignedIn , isLoaded } = useAuth()

  //todo: make this better component
  if(!isLoaded) return <PageLoader/>

  return (
    <ThemeProvider>
      <WallpaperProvider>

        <Routes>

          <Route path='/' element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />

          <Route path='/auth' element={!isSignedIn ? <AuthPage/> : <Navigate to={"/"} replace />} />

        </Routes>

      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
