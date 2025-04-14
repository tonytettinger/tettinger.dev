import React from 'react'

import { BoxProps, Flex } from '@chakra-ui/react'

import { SiGithub, SiGooglehome, SiLinkedin } from 'react-icons/si'

import { LinkButton } from './LinkButton'
import { NavIcon } from './NavIcon'

const navIcons = [
    {
        icon: SiGooglehome,
        href: '/',
        label: 'tonytettinger back to homepage',
        isExternal: false,
    },
    {
        icon: SiGithub,
        href: 'https://github.com/tonytettinger',
        label: 'tonytettinger github profile',
        isExternal: true,
    },
    {
        icon: SiLinkedin,
        href: 'https://www.linkedin.com/in/antaltettinger/',
        label: 'tonytettinger linkedin profile',
        isExternal: true,
    },
]

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
            {navIcons.map((icon) => (
                <NavIcon
                    key={icon.href}
                    icon={icon.icon}
                    href={icon.href}
                    label={icon.label}
                    isExternal={icon.isExternal}
                />
            ))}
        </Flex>

        <Flex align="center" mt={['4', '4', '0']} basis={['100%', '100%', 'auto']}>
            <LinkButton mr={2} to="/projects">
                Projects
            </LinkButton>
            <LinkButton to="/about">About</LinkButton>
        </Flex>
    </Flex>
)

export default Nav
