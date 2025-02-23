import * as React from 'react'

import { Link } from 'gatsby'

import { Box, Heading, Image, Text } from '@chakra-ui/react'

const NotFoundPage = () => {
    return (
        <Box color="#FFF" padding="96px" fontFamily="-apple-system, Roboto, sans-serif, serif">
            <Heading marginTop={0} marginBottom={64} maxWidth={320}>
                404 - Page not found
            </Heading>
            <Text marginBottom={48}>
                Sorry{' '}
                <Image as="span" aria-label="Pensive emoji">
                    😔
                </Image>{' '}
                we couldn’t find what you were looking for. <Link to="/">Go home</Link>.
            </Text>
        </Box>
    )
}

export default NotFoundPage
