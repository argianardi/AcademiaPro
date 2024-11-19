import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkBlue: "#10054D",
    midnightBlue: "#151F62",
    gray: "#787A91",
    lightGray: "#EEEEEE",
    brghtRed: "#FF4D4D",
    linen: "#FAF0E6",
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Helvetica, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "lightGray",
        color: "gray",
      },
      a: {
        color: "midnightBlue",
      },
    },
  },
});

export default theme;
