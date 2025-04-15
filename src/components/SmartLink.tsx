import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { Button, ButtonProps, Link as ChakraLink, Icon, IconProps } from '@chakra-ui/react'

import { IconType } from 'react-icons/lib'

type SmartLinkProps = {
    to?: string
    href?: string
    label?: string
} & (
    | {
          icon: IconType
          children?: never
      }
    | {
          icon?: never
          children: React.ReactNode
      }
) &
    ButtonProps &
    IconProps

const defaultButtonProps: ButtonProps = {
    colorScheme: 'gray',
    variant: 'outline',
    size: 'md',
    color: 'white',
    textDecoration: 'none',
}

const defaultIconProps: IconProps = {
    sx: { transition: 'all .25s ease-in' },
    _hover: { transform: 'scale(1.2)' },
    mx: '1',
    boxSize: { base: 6, md: 8 },
    cursor: 'pointer',
    color: 'white',
}

export const SmartLink: React.FC<SmartLinkProps> = ({
    to = '',
    href = '',
    label = '',
    icon,
    children,
    ...rest
}) => {
    const isExternal = href ? true : false
    const content = icon ? (
        <Icon as={icon} {...defaultIconProps} {...rest} />
    ) : (
        <Button {...defaultButtonProps} {...rest}>
            {children}
        </Button>
    )

    if (isExternal) {
        return (
            <ChakraLink aria-label={label} href={href} isExternal={true}>
                {content}
            </ChakraLink>
        )
    }

    // Handle internal Gatsby links
    return (
        <GatsbyLink aria-label={label} to={to}>
            {content}
        </GatsbyLink>
    )
}
