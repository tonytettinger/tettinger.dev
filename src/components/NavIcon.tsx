import * as React from 'react'

import { Icon, Link } from '@chakra-ui/react'

import { IconType } from 'react-icons'

export const NavIcon = ({ icon, href, label }: { icon: IconType; href: string; label: string }) => {
    return (
        <Link ml={4} href={href} aria-label={label} isExternal>
            <Icon
                sx={{ transition: 'all .25s ease-in' }}
                _hover={{ transform: 'scale(1.2)' }}
                as={icon}
                mx="1"
                boxSize={{ base: 6, md: 8 }}
            />
        </Link>
    )
}
