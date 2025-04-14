import * as React from 'react'

import { Link } from 'gatsby'

import { Box, Heading, Text } from '@chakra-ui/react'

const NotFoundPage = () => {
    return (
        <Box color="#FFF" padding="96px" fontFamily="-apple-system, Roboto, sans-serif, serif">
            <Heading marginTop={0} marginBottom={64} maxWidth={320}>
                Page not found
            </Heading>
            <Text marginBottom={48}>
                Sorry this page couldn't be found. <Link to="/">Go home</Link>.
            </Text>
        </Box>
    )
}

export default NotFoundPage
