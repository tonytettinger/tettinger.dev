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
                src="../../static/images/tony_tettinger.jpeg"
                placeholder="blurred"
                quality={100}
                loading="eager"
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
                Welcome to my homepage!

                I'm <b>Antal 'Tony' Tettinger</b>, a Berlin-based <b>AI Frontend Engineer with an MSc in Full Stack Software Engineering</b>. 
                I have a product-minded approach that focuses on building delightful user experiences and robust solutions. 
                I believe in continuous self-improvement and leveraging technology to solve meaningful problems.
            </Text>
        </VStack>
    </>
)
export default IndexPage
