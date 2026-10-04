import React from 'react'

import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'

import Seo from '../components/Seo'

const PrivacyPage = () => (
    <VStack align="stretch" spacing={5} maxW="760px" mx="auto" py={6}>
        <Seo
            title="Privacy notice"
            pathname="/privacy/"
            description="How tettinger.dev handles hosting data, contact messages and optional Google Analytics, and how to change your consent."
        />
        <Heading as="h1">Privacy notice</Heading>
        <Text fontSize="sm">Last updated: October 4, 2026</Text>
        <Text>
            I’m Antal Tettinger, based in Berlin, Germany, and I am responsible for personal data
            processing on tettinger.dev. For privacy questions or requests, contact{' '}
            <Link href="mailto:tettinger.dev@gmail.com">tettinger.dev@gmail.com</Link>.
        </Text>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                Hosting and delivery
            </Heading>
            <Text>
                Netlify hosts this site. Its infrastructure processes technical request data such as
                your IP address, requested URL, browser information and access time to deliver pages
                and protect the service. This serves my legitimate interest in running a reliable,
                secure website (Article 6(1)(f) GDPR). Hosting and security records are retained
                according to Netlify’s operational and security requirements; this site does not
                maintain a separate visitor-log database.
            </Text>
            <Text mt={2}>
                Netlify is a US provider with international infrastructure. Its{' '}
                <Link href="https://www.netlify.com/privacy/">privacy statement</Link> and{' '}
                <Link href="https://www.netlify.com/gdpr-ccpa/">data-protection information</Link>{' '}
                describe its processing and international-transfer safeguards, including applicable
                standard contractual clauses.
            </Text>
        </Box>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                Optional Google Analytics
            </Heading>
            <Text>
                Google Analytics loads only after you choose “Allow analytics.” It helps me
                understand page visits and site usage. It can process page views, interaction and
                device information, approximate location and cookie identifiers. Google receives
                network information when your browser contacts its services and may process data
                outside the EEA, including in the US.
            </Text>
            <Text mt={2}>
                The legal basis is your consent (Article 6(1)(a) GDPR). Rejecting analytics does not
                restrict access. No Google analytics script or consent ping is sent before
                permission. Advertising consent remains denied; Google signals and advertising
                personalization are disabled in this site’s tag configuration. Page URLs supplied by
                this site omit query strings and fragments.
            </Text>
            <Text mt={2}>
                First-party cookies such as <code>_ga</code> and <code>_ga_*</code> have a maximum
                lifetime of 180 days, without extending it on each visit. Google’s server-side
                retention is separate and depends on the Analytics property settings and Google’s
                policies; contact me for the applicable retention settings. See{' '}
                <Link href="https://policies.google.com/privacy">Google’s privacy policy</Link> and{' '}
                <Link href="https://business.safety.google/adsprocessorterms/">
                    data-processing terms
                </Link>{' '}
                for processing and transfer safeguards.
            </Text>
        </Box>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                Your choice and withdrawal
            </Heading>
            <Text>
                Use “Analytics settings” in the footer to change your choice. Rejecting after
                previously allowing analytics stops further measurement, removes this site’s
                analytics cookies and reloads the page without analytics. Withdrawal does not affect
                processing that already took place while you had consented.
            </Text>
            <Text mt={2}>
                Your preference and its expiry are saved in local storage for 180 days, solely to
                remember your choice. This preference storage is necessary to honor your choice.
                After expiry or clearing browser storage, you will be asked again. If storage is
                unavailable, your choice may need to be repeated. Fonts and site images are served
                with the website.
            </Text>
        </Box>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                Email and external links
            </Heading>
            <Text>
                If you email me, your address, message and information you include are processed to
                respond, using Gmail. The basis is taking steps toward a contract (Article 6(1)(b)
                GDPR), where applicable, or my legitimate interest in responding to correspondence
                (Article 6(1)(f)). Messages are kept as long as needed to handle your request and
                any applicable legal obligations. Please avoid sending unnecessary sensitive
                information.
            </Text>
            <Text mt={2}>
                Links to GitHub, LinkedIn and other sites lead to services with their own privacy
                practices. This website has no contact form or user accounts.
            </Text>
        </Box>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                Your rights
            </Heading>
            <Text>
                Subject to the applicable conditions, you may request access, correction, erasure,
                restriction and portability of your personal data. You may object to processing
                based on legitimate interests and withdraw consent at any time. Contact the email
                address above to exercise these rights. You may also complain to a supervisory
                authority, including the{' '}
                <Link href="https://www.datenschutz-berlin.de/">
                    Berlin Commissioner for Data Protection and Freedom of Information
                </Link>{' '}
                or the authority where you live or work.
            </Text>
        </Box>
    </VStack>
)
export default PrivacyPage
