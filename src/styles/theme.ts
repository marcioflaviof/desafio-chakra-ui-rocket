import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#000000",
      "600": "#47585B",
      "400": "#999999",
      "200": "#DADADA",
    },

    yellow: {
      "900": "#FFBA08",
    },

    white: {
      "900": "#FFFFFF",
      "700": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.700",
        color: "gray.600",
        margin: 0,
        padding: 0,
      },
    },
  },
});
