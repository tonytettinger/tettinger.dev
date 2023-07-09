import React from 'react'

import { BoxProps, Button, Flex, Icon, Link, Text } from '@chakra-ui/react'

import { SiGithub, SiLinkedin } from 'react-icons/si'

const Nav = (props: BoxProps) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            w="100%"
            mt={6}
            mb={6}
            wrap={['wrap', 'wrap', 'nowrap']}
            maxWidth="1024px"
            px={4}
            {...props}
        >
            <Flex align="center">
                <Text
                    as={Link}
                    href="/"
                    fontFamily="Rammetto One, cursive;"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    aria-label="Back to homepage"
                >
                    TonyTettinger
                </Text>
                <Flex
                    ml={4}
                    as={Link}
                    href="https://github.com/tonytettinger"
                    aria-label="tonytettinger github profile"
                    isExternal
                >
                    <Icon
                        sx={{ transition: 'all .25s ease-in' }}
                        _hover={{ transform: 'scale(1.2)' }}
                        as={SiGithub}
                        mx="2px"
                        boxSize={8}
                    />
                </Flex>
                <Flex
                    ml={4}
                    as={Link}
                    href="https://www.linkedin.com/in/antaltettinger/"
                    aria-label="tonytettinger linkedin profile"
                    isExternal
                >
                    <Icon
                        sx={{ transition: 'all .25s ease-in' }}
                        _hover={{ transform: 'scale(1.2)' }}
                        ml={4}
                        as={SiLinkedin}
                        mx="2px"
                        boxSize={8}
                    />
                </Flex>
            </Flex>

            <Flex align="center" mt={['4', '4', '0']} basis={['100%', '100%', 'auto']}>
                <Button
                    as={Link}
                    colorScheme="gray"
                    variant="outline"
                    size="md"
                    mr={2}
                    href="/about"
                >
                    About
                </Button>
                <Button as={Link} colorScheme="gray" variant="outline" size="md" href="/contact">
                    Contact
                </Button>
            </Flex>
        </Flex>
    )
}

export default Nav
