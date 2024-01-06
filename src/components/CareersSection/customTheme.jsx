// customTheme.js

import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black", // Set the background color to black
        color: "white", // Set the text color to white or any other color you prefer
      },
    },
  },
});

export default customTheme;
