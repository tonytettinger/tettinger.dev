import React from 'react'

import { BoxProps, Button, Flex, Icon, Link } from '@chakra-ui/react'

import { SiGithub, SiGooglehome, SiLinkedin } from 'react-icons/si'

const Nav = (props: BoxProps) => (
    <Flex
        as="nav"
        fontFamily="Barlow"
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
            <Link href="/" aria-label="Back to homepage">
                <Icon
                    sx={{ transition: 'all .25s ease-in' }}
                    _hover={{ transform: 'scale(1.2)' }}
                    as={SiGooglehome}
                    mx="2px"
                    boxSize={{ base: 6, md: 8 }}
                />
            </Link>
            <Link
                ml={4}
                href="https://github.com/tonytettinger"
                aria-label="tonytettinger github profile"
                isExternal
            >
                <Icon
                    sx={{ transition: 'all .25s ease-in' }}
                    _hover={{ transform: 'scale(1.2)' }}
                    as={SiGithub}
                    mx="2px"
                    boxSize={{ base: 6, md: 8 }}
                />
            </Link>
            <Link
                ml={4}
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
                    boxSize={{ base: 6, md: 8 }}
                />
            </Link>
        </Flex>

        <Flex align="center" mt={['4', '4', '0']} basis={['100%', '100%', 'auto']}>
            <Button
                as={Link}
                colorScheme="gray"
                variant="outline"
                size="md"
                mr={2}
                href="/projects"
            >
                Projects
            </Button>
            <Button as={Link} colorScheme="gray" variant="outline" size="md" href="/about">
                About
            </Button>
        </Flex>
    </Flex>
)

export default Nav
