import {
  Box,
  HStack,
  VStack,
  Heading,
  Spacer,
  Text,
  Link,
  Wrap,
} from '@chakra-ui/react';
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <Box>
      <Heading mb="24px">Medium Follower Stats</Heading>
      <Wrap align="center">
        <VStack maxW="600px" align="left">
          <Text>Hello,</Text>
          <Text>
            This is a tool to help you analyze your Medium followers and
            followings, find out who is following you back, how many of your
            followers are in Medium Partner Program, etc.
          </Text>
        </VStack>
        <Spacer />
        <VStack align="flex-end">
          <HStack>
            <Text>Built by</Text>
            <Link
              href="https://mmelikes.medium.com"
              isExternal
              textDecoration="underline"
            >
              mmelikes
            </Link>
            <Link href={'mailto:mericmelikeyilmaz@gmail.com'}>
              <FaEnvelope />
            </Link>
            <Link href="https://www.linkedin.com/in/mericyilmaz/" isExternal>
              <FaLinkedinIn />
            </Link>
            <Link href={'https://twitter.com/mmelikes_en'}>
              <FaTwitter />
            </Link>
            <Link href={'https://github.com/melikesofta'}>
              <FaGithub />
            </Link>
          </HStack>
          <Box>
            <Link href="https://www.buymeacoffee.com/meric" isExternal>
              <img
                src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&slug=meric&button_colour=4d8198&font_colour=FCF7F8&font_family=Cookie&outline_colour=FCF7F8&coffee_colour=FFDD00"
                alt="Buy Me A Coffee"
                height={60}
                width={217}
              />
            </Link>
          </Box>

          <Box align="right" maxW="300px">
            <Link
              href="https://mmelikes.medium.com/membership"
              isExternal
              textDecoration="underline"
            >
              Support my writing by becoming a Medium member using my referral
              link
            </Link>
          </Box>
        </VStack>
      </Wrap>
    </Box>
  );
};

export default Header;
