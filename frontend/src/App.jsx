import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
import { WallpaperProvider } from "./context/WallpaperContext"
import { ThemeProvider } from "./context/ThemeContext"
import { Routes } from 'react-router';

function App() {

  return (
    <ThemeProvider>
      <WallpaperProvider>

        <Routes>

        </Routes>

      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
