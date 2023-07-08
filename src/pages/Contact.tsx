import * as React from 'react'

import { Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'

const ContactPage = () => {
    return (
        <VStack textAlign="center">
            <Heading as="h1">Contact Page</Heading>
            <Heading as="h2" size="sm">
                Preferred way to contact me: via Linkedin
            </Heading>
            <form
                id="contactform"
                method="post"
                action="https://getform.io/f/fca490da-1af0-4ff8-811f-dcbd7276c374"
            >
                <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" type="text" name="name" placeholder="John Wick" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input id="email" type="email" name="email" placeholder="your@email.com" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <Input id="subject" type="text" name="subject" placeholder="Subject" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                        size="lg"
                        form="contactform"
                        id="message"
                        type="text"
                        name="message"
                        placeholder="Your message"
                    />
                </FormControl>

                <Button colorScheme="gray" variant="outline" mt={4} type="submit">
                    Send
                </Button>
            </form>
        </VStack>
    )
}

export default ContactPage
