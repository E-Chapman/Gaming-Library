import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config,
  colors: {
    gray: {
      50: "#f0f7ff",
      100: "#c2e2ff",
      200: "#94ccff",
      300: "#66b7ff",
      400: "#38a2ff",
      500: "#0a8dff",
      600: "#0071b3",
      700: "#1c3a64",
      800: "#0e233e",
      900: "#00201a",
    },
  },
});

export default theme;
