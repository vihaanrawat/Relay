import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
import { WallpaperProvider } from "./context/WallpaperContext"
import { ThemeProvider } from "./context/ThemeContext"
import { Route, Routes } from 'react-router';
import ChatPage from './pages/ChatPage';


function App() {

  return (
    <ThemeProvider>
      <WallpaperProvider>

        <Routes>

          <Route path='/' element={<ChatPage />} />
          <Route path='/auth' element={<AuthPage/>} />

        </Routes>

      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
