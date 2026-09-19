import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
import { WallpaperProvider } from "./context/WallpaperContext"
import { ThemeProvider } from "./context/ThemeContext"
import { Route, Routes } from 'react-router';

function App() {

  return (
    <ThemeProvider>
      <WallpaperProvider>

        <Routes>
          <Route path='/' element={<ChatPage />} />
        </Routes>

      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
