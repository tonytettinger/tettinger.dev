import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { BoxProps, Flex } from '@chakra-ui/react'

import { SiGithub, SiGooglehome, SiLinkedin } from 'react-icons/si'

import { SmartLink } from './SmartLink'

const navIcons = [
    {
        icon: SiGooglehome,
        to: '/',
        label: 'Homepage',
    },
    {
        icon: SiGithub,
        href: 'https://github.com/tonytettinger',
        label: 'GitHub profile',
    },
    {
        icon: SiLinkedin,
        href: 'https://www.linkedin.com/in/antal-tettinger/',
        label: 'LinkedIn profile',
    },
]

const Nav = (props: BoxProps) => (
    <Flex
        as={'nav' as const}
        align="center"
        justify="space-between"
        w="100%"
        mt={4}
        mb={4}
        wrap={['wrap', 'wrap', 'nowrap']}
        maxWidth="1024px"
        px={4}
        {...props}
    >
        <Flex align="center" gap={4}>
            {navIcons.map((icon) => (
                <SmartLink
                    key={icon.label}
                    icon={icon.icon}
                    href={icon.href}
                    to={icon.to}
                    aria-label={icon.label}
                />
            ))}
        </Flex>
        <Flex align="center" justify="center">
            <StaticImage
                placeholder="blurred"
                loading="eager"
                height={90}
                src="../../static/images/tony_tettinger_logo.png"
                alt="Logo"
                quality={100}
            />
        </Flex>

        <Flex gap={4} align="center" mt={['4', '4', '0']} basis={['100%', '100%', 'auto']}>
            <SmartLink to="/projects">Projects</SmartLink>
            <SmartLink to="/about">About</SmartLink>
            {/* <SmartLink to="/articles">Articles</SmartLink> */}
        </Flex>
    </Flex>
)

export default Nav
