import React from "react";
import { Icon, Flex, Link, Button, Text } from "@chakra-ui/react";
import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'

const Nav = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      mt={6}
      mb={6}
      wrap={["wrap", "wrap", "nowrap"]}
      maxWidth="1024px"
      px={4}
      {...props}
    >
    <Flex align="center">
      <Text as={Link} href="/" fontFamily="Rammetto One, cursive;"
  fontSize='2xl'
  fontWeight='extrabold'>TonyTettinger</Text>
      <Flex ml={4} as={Link} href='https://github.com/tonytettinger' isExternal>
        <Icon sx={{transition: 'all .15s ease-in'}} _hover={{transform: 'scale(1.2)'}} as={SiGithub} mx='2px' />
      </Flex>
      <Flex ml={4} as={Link} href='https://www.linkedin.com/in/antaltettinger/' isExternal>
        <Icon sx={{transition: 'all .15s ease-in'}} _hover={{transform: 'scale(1.2)'}} ml={4} as={SiLinkedin} mx='2px' />
      </Flex>
      <Flex ml={4} as={Link} href='https://twitter.com' isExternal>
        <Icon sx={{transition: 'all .15s ease-in'}} _hover={{transform: 'scale(1.2)'}} as={SiTwitter} mx='2px' />
      </Flex>
    </Flex>

        <Flex
          align="center"
          mt={["4", "4", "0"]}
          basis={["100%", "100%", "auto"]}
        >
          <Button as={Link} colorScheme="gray" variant="outline" size="xs" mr={2} to="/about">About</Button>
          <Button as={Link} colorScheme="gray" variant="outline" size="xs" to="/contact">Contact</Button>
        </Flex>
    </Flex>
  );
};

export default Nav;
