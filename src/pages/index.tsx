import '@fontsource/zilla-slab'
import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { Box, Icon, Text, VStack } from '@chakra-ui/react'

import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di'

import Wave from '../components/motion/Wave'

const iconsOverImage = [
    { icon: DiHtml5 },
    { icon: DiJavascript1 },
    { icon: DiReact },
    { icon: DiCss3 },
]

const IndexPage = () => (
    <>
        <Box style={{ position: 'relative' }}>
            <StaticImage
                alt="Tony by the ocean"
                src="../images/tony_tettinger.jpeg"
                style={{
                    width: '100%',
                    maxHeight: '320px',
                    borderRadius: '0.5rem',
                    objectFit: 'contain',
                }}
            />
            <Box
                style={{
                    position: 'absolute',
                    right: '8%',
                    top: '40%',
                    backgroundColor: 'transparent',
                    display: 'flex',
                }}
            >
                {iconsOverImage.map(({ icon: IconComponent }, index) => (
                    <Wave key={index} delay={0.3 * index}>
                        <Icon
                            as={IconComponent}
                            w={{ base: 10, md: 14 }}
                            h={{ base: 10, md: 14 }}
                            color="gray.900"
                        />
                    </Wave>
                ))}
            </Box>
        </Box>
        <VStack spacing={4} my={4}>
            <Text>
                Hello there! 😄 I’m <b>Tony Tettinger</b>, a Berlin-based{' '}
                <b>Full Stack Software Engineer</b> with a product-minded approach to building
                exceptional user experiences and scalable, maintainable solutions. I’m passionate
                about leveraging technology to solve real-world problems and thrive in environments
                that challenge me to grow and innovate. When I’m not coding, you’ll find me reading
                books, travelling, playing board games, computer games, squid games or stepping out
                of my comfort zone trying out new things such as improv comedy. Let’s connect and
                create something amazing together! 🚀
            </Text>
        </VStack>
    </>
)
export default IndexPage
