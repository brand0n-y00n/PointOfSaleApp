import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

import Root from "./routes/root.tsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraBaseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraBaseProvider>

)
