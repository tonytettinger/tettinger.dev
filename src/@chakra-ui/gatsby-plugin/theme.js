import { extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
    bgColor: "#2D3239"
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'bgColor',
        fontSize: "xl",
        color: "#fff",
      },
      'h1': {
        fontSize: "42px"
      }
    },
  }
}

export default extendTheme(theme)