import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import {
    Button,
    ButtonProps,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps,
    Icon,
    IconProps,
} from '@chakra-ui/react'

import { IconType } from 'react-icons/lib'

type SmartLinkProps = {
    isExternal?: boolean
    to?: string
    href?: string
} & Omit<ChakraLinkProps, 'href' | 'to'> &
    (
        | {
              icon: IconType
              iconProps?: IconProps
              children?: never
              buttonProps?: never
          }
        | {
              icon?: never
              iconProps?: never
              children: React.ReactNode
              buttonProps?: ButtonProps
          }
    )

const defaultButtonProps = {
    colorScheme: 'gray',
    variant: 'outline',
    size: 'md',
}

const defaultIconProps = {
    sx: { transition: 'all .25s ease-in' },
    _hover: { transform: 'scale(1.2)' },
    mx: '1',
    boxSize: { base: 6, md: 8 },
    cursor: 'pointer',
}

const LinkContent: React.FC<{
    icon?: IconType
    iconProps?: IconProps
    children?: React.ReactNode
    buttonProps?: ButtonProps
}> = ({ icon, iconProps, children, buttonProps = {} }) => {
    if (icon) {
        return <Icon as={icon} {...defaultIconProps} {...iconProps} />
    }

    return (
        <Button {...defaultButtonProps} {...buttonProps}>
            {children}
        </Button>
    )
}

export const SmartLink: React.FC<SmartLinkProps> = ({
    isExternal = false,
    to = '',
    href = '',
    icon,
    iconProps,
    children,
    buttonProps = {},
    ...rest
}) => {
    if (isExternal) {
        return (
            <ChakraLink
                href={href}
                _hover={{ textDecoration: 'none' }}
                display="inline-flex"
                {...rest}
            >
                <LinkContent icon={icon} iconProps={iconProps} buttonProps={buttonProps}>
                    {children}
                </LinkContent>
            </ChakraLink>
        )
    }

    return (
        <GatsbyLink to={to} style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <ChakraLink {...rest}>
                <LinkContent icon={icon} iconProps={iconProps} buttonProps={buttonProps}>
                    {children}
                </LinkContent>
            </ChakraLink>
        </GatsbyLink>
    )
}
