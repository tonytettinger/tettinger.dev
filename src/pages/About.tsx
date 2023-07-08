import * as React from 'react'

import { Heading, Text, VStack } from '@chakra-ui/react'

const AboutPage = () => {
    return (
        <VStack>
            <Heading as="h1">About me</Heading>
            <Text>
                I'm a Full Stack Engineer with wide range of experience in developing web
                applications, finding maintainable solutions with front and back-end technologies
                that have proven to increase performance, ranking, user experience and in general
                contributed to bottom line results and business goals for the companies I have
                worked with.
            </Text>
            <Text>
                My main areas of expertise are JavaScript, TypeScript, ReactJS, PHP, HTML5, CSS3 and
                I have some work experience with Python, serverles functions, GraphQL and SQL.
            </Text>

            <Text>
                I have been using BEM and SMACSS based CSS and SCSS and also utility-first CSS
                frameworks in my projects. I'm striving for simplicity, maintainable code and
                providing robust solutions. I have developed applications and solved issues that
                require a comprehensive knowledge of web technologies. I'm a believer of continuous
                self-improvement and the principles of YAGNI, KISS. No over-engineering, no
                over-abstraction, listen to others, take criticism and improve continuously.
            </Text>
        </VStack>
    )
}

export default AboutPage
