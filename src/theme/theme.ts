import {extendTheme, ThemeConfig} from "@chakra-ui/react";
import {colors} from "./colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

// export const components = { Button }

export const theme = extendTheme({
  colors,
  // components,
  config,
});
