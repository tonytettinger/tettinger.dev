import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { Button, ButtonProps } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'

type LinkButtonProps = ButtonProps & {
    isExternal?: boolean
    to?: string
    href?: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({
    isExternal = false,
    to = '',
    href = '',
    children,
    ...buttonProps
}) => {
    const LinkComponent = isExternal ? ChakraLink : GatsbyLink
    const linkProps = isExternal ? { href, isExternal: true as const } : { to }

    return (
        <Button
            as={LinkComponent}
            colorScheme="gray"
            variant="outline"
            size="md"
            {...linkProps}
            {...buttonProps}
        >
            {children}
        </Button>
    )
}
