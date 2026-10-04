import React, { useEffect, useRef, useState } from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'

import {
    CONSENT_KEY,
    Consent,
    disableAnalytics,
    readConsent,
    saveConsent,
    trackPage,
} from '../analytics'

const AnalyticsConsent = ({ pathname }: { pathname: string }) => {
    const [choice, setChoice] = useState<Consent | null>(null)
    const [open, setOpen] = useState(false)
    const [storageUnavailable, setStorageUnavailable] = useState(false)
    const settingsButton = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const stored = readConsent()
        setChoice(stored)
        setOpen(stored === null)
        if (stored !== 'granted') disableAnalytics()

        const syncConsent = (event: StorageEvent) => {
            if (event.key === CONSENT_KEY || event.key === null) {
                // Reload also unloads any previously accepted Google code in this tab.
                disableAnalytics()
                window.location.reload()
            }
        }
        window.addEventListener('storage', syncConsent)
        return () => window.removeEventListener('storage', syncConsent)
    }, [])

    useEffect(() => {
        if (choice === 'granted') trackPage()
    }, [choice, pathname])

    const choose = (next: Consent) => {
        const saved = saveConsent(next)
        setStorageUnavailable(!saved)
        if (next === 'denied') {
            disableAnalytics()
            if (choice === 'granted') {
                window.location.reload()
                return
            }
        }
        setChoice(next)
        setOpen(false)
        settingsButton.current?.focus()
    }

    return (
        <>
            <Button
                ref={settingsButton}
                variant="link"
                color="linkColor"
                fontSize="sm"
                onClick={() => setOpen(true)}
            >
                Analytics settings
            </Button>
            {storageUnavailable && (
                <Text fontSize="sm">
                    Your browser could not save this choice. It applies to this page only.
                </Text>
            )}
            {open && (
                <Box
                    as="section"
                    aria-labelledby="analytics-heading"
                    position="fixed"
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex="banner"
                    bg="bgColor"
                    borderTop="1px solid"
                    borderColor="whiteAlpha.500"
                    p={{ base: 5, md: 6 }}
                    textAlign="left"
                    maxH="80vh"
                    overflowY="auto"
                    boxShadow="lg"
                >
                    <Box maxW="1000px" mx="auto">
                        <Heading id="analytics-heading" as="h2" size="md">
                            Optional analytics
                        </Heading>
                        <Text mt={2} fontSize="sm">
                            May I use Google Analytics to understand which pages people visit and
                            how they use this site? It uses cookies and sends usage and device
                            information to Google, which may process it in the US. Analytics stays
                            off unless you allow it. You can withdraw consent anytime through
                            Analytics settings.
                        </Text>
                        <Text mt={2} fontSize="sm">
                            Your choice is remembered for 180 days.{' '}
                            <Link as={GatsbyLink} to="/privacy/">
                                Read the privacy notice
                            </Link>
                            .
                            {choice &&
                                ` Current choice: ${
                                    choice === 'granted' ? 'allowed' : 'rejected'
                                }.`}
                        </Text>
                        <Flex mt={4} gap={3} wrap="wrap">
                            <Button
                                variant="outline"
                                color="white"
                                onClick={() => choose('denied')}
                            >
                                Reject analytics
                            </Button>
                            <Button
                                variant="outline"
                                color="white"
                                onClick={() => choose('granted')}
                            >
                                Allow analytics
                            </Button>
                            {choice && (
                                <Button
                                    variant="ghost"
                                    color="white"
                                    onClick={() => {
                                        setOpen(false)
                                        settingsButton.current?.focus()
                                    }}
                                >
                                    Close
                                </Button>
                            )}
                        </Flex>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default AnalyticsConsent
