import { Button, ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      Hello World!
    </ChakraProvider>
  )
}