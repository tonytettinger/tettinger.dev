import { extendTheme } from "@chakra-ui/react"

const theme = {
  components: {
    Button: {
      variants: {
      outline: {
        _hover: {
          bg: "#FFF",
          color: "bgColor",
          textDecoration: "none"
        }
      }
      }
    },
  },
  fonts: {
    heading: 'Manrope, sans-serif',
    body: 'Manrope, sans-serif'
  },
  colors: {
    bgColor: "#2D3239",
    linkColor: "#25BFEB"
  },
  styles: {
    global: (props) => ({
      '#gatsby-focus-wrapper,#___gatsby,html,body': {
        height: '100%',
        width: '100%',
        fontSize: "lg",
        color: "#fff",
        backgroundColor: 'bgColor',
      },
      'a': {
        color: 'linkColor'
      },
      'a:hover': {
        textDecoration: 'underline'
      },
      '.blog-post main > *': {
        width: "100%",
      },
      'h1': {
        fontWeight: 'bold'
      },
      'pre': {
        fontSize: '0.85rem'
      },
      [`@media screen and (min-width: ${props.theme.breakpoints.md})`] : {
        'pre': {
          fontSize: '1rem'
        }
    },
  })
}
}

export default extendTheme(theme)