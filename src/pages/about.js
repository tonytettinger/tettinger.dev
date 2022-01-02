import * as React from "react"
import { Text, VStack, Heading } from "@chakra-ui/react";


const AboutPage = () => {
  return (
    <VStack>
      <Heading as="h1">About me</Heading>
      <Text>
      I'm a web developer with experience in developing web applications, finding maintainable solutions with front and back-end technologies that have proven to increase performance, ranking, user experience and in general contributed to bottom line results and business goals for the companies I have worked with.
      </Text>
      <Text>
    My main areas of expertise are HTML5, CSS3, JavaScript, ReactJS, PHP and have work experience with Cloudflare Workers, Bitbucket Pipelines and TypeScript, Python, SQL.
</Text>

<Text>
  I'm familiar working with git based workflows and agile methodologies, striving to maintain best practices in terms of user stories and documentation. I have some experience with unit testing in Python and looking forward to participating in working with UI Test Automation frameworks such as Cypress and learning more how to integrate this into a CI/CD system.
</Text>

<Text>
  I have been using BEM and SMACSS based CSS and SCSS in my projects and I am interested in using more utility-first CSS frameworks.

  I'm striving for simplicity, maintainable code and providing robust solutions. I have developed applications and solved issues that require a comprehensive knowledge of web stacks and technologies.

  I'm a believer of continuous self-improvement and the principles of YAGNI, KISS. No over-engineering, no over-abstraction, listen to others, take criticism and improve continuously.
  </Text>
    </VStack>
  )
}

export default AboutPage