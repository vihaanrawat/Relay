import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react';
import {WallpaperProvider} from "./context/WallpaperContext"
import {ThemeProvider} from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
    <WallpaperProvider>
      
    </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
