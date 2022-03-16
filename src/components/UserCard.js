import dayjs from 'dayjs';
import { Box, HStack, Link, Avatar, Heading, Text } from '@chakra-ui/react';
import { FaTwitter, FaMedium, FaClock, FaCheck, FaTimes } from 'react-icons/fa';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const UserCard = (props) => {
  const { user } = props;
  const {
    name,
    bio,
    isCreatorPartnerProgramEnrolled,
    mediumMemberAt,
    createdAt,
    imageId,
    twitterScreenName,
    username,
  } = user;
  return (
    <Box
      w="full"
      mt="32px"
      mb="32px"
      padding="32px"
      borderRadius="lg"
      bg="#9D8189"
      color="#FCF7F8"
      borderColor="#9D8189"
    >
      <HStack spacing="12px">
        <Avatar
          src={`https://miro.medium.com/fit/c/80/80/${imageId}`}
          size="md"
        />
        <Heading as="h4" size="md">
          {name}
        </Heading>

        <Link href={`https://medium.com/@${username}`} isExternal>
          <FaMedium />
        </Link>
        {twitterScreenName && (
          <Link href={`https://twitter.com/${twitterScreenName}`}>
            <FaTwitter />
          </Link>
        )}
      </HStack>
      <Text padding="12px 0">{bio}</Text>
      <HStack>
        <FaClock />
        <Text>Signed up {dayjs(createdAt).fromNow()}</Text>
      </HStack>
      <HStack>
        {isCreatorPartnerProgramEnrolled ? (
          <FaCheck style={{ display: 'inline-flex' }} />
        ) : (
          <FaTimes style={{ display: 'inline-flex' }} />
        )}
        <Text>In partner program</Text>
      </HStack>
      <HStack>
        {mediumMemberAt ? (
          <FaCheck style={{ display: 'inline-flex' }} />
        ) : (
          <FaTimes style={{ display: 'inline-flex' }} />
        )}
        <Text>
          Medium member{' '}
          {mediumMemberAt ? ` since ${dayjs(mediumMemberAt).fromNow()}` : ''}
        </Text>
      </HStack>
    </Box>
  );
};

export default UserCard;
