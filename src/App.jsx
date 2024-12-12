import { system } from "@chakra-ui/react/preset";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Home/>
    </ChakraProvider>
  )
}