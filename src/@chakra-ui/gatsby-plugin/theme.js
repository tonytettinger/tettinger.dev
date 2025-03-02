import { extendTheme } from '@chakra-ui/react'

const theme = {
    components: {
        Button: {
            variants: {
                outline: {
                    _hover: {
                        bg: '#FFF',
                        color: 'bgColor',
                        textDecoration: 'none',
                    },
                },
            },
        },
    },
    fonts: {
        heading: 'Barlow, sans-serif',
        body: `'Zilla Slab', sans-serif`,
    },
    colors: {
        bgColor: '#2D3239',
        linkColor: '#25BFEB',
    },
    styles: {
        global: (props) => ({
            '#gatsby-focus-wrapper,#___gatsby,html,body': {
                height: '100%',
                width: '100%',
                fontSize: 'lg',
                color: '#fff',
                background: 'linear-gradient(180deg, #2D3239, #78757a 80%)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            },
            a: {
                color: 'linkColor',
            },
            'a:hover': {
                textDecoration: 'underline',
            },
            '.blog-post main > *': {
                width: '100%',
            },
            h1: {
                fontWeight: 'bold',
            },
            pre: {
                fontSize: '0.85rem',
            },
            [`@media screen and (min-width: ${props.theme.breakpoints.md})`]: {
                pre: {
                    fontSize: '1rem',
                },
            },
        }),
    },
}

export default extendTheme(theme)
