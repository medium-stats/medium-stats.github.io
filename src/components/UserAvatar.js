import dayjs from 'dayjs';
import { useState } from 'react';
import { some } from 'lodash';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Heading,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const green = '#4E8098';
const pink = '#9D818990';

const UserAvatar = (props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { user, listType, otherList, highlightedProperty } = props;
  const {
    bio,
    imageId,
    name,
    username,
    isCreatorPartnerProgramEnrolled,
    mediumMemberAt,
  } = user;

  const isUserInOtherList = some(
    otherList,
    (user) => user.username === username
  );

  const determineBgColor = () => {
    if (highlightedProperty === 'follow-back') {
      return isUserInOtherList ? green : pink;
    } else if (highlightedProperty === 'partner-program') {
      return isCreatorPartnerProgramEnrolled ? green : pink;
    } else if (highlightedProperty === 'medium-member') {
      return mediumMemberAt ? green : pink;
    } else {
      return pink;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      style={{ position: 'relative' }}
    >
      <Tag
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        size="md"
        borderRadius="full"
        variant="solid"
        cursor="pointer"
        bgColor={determineBgColor()}
        color="#FCF7F8"
        fontSize={12}
      >
        {username}
      </Tag>
      {isTooltipVisible && (
        <Box
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          w="lg"
          borderWidth="1px"
          borderRadius="lg"
          bg="#FCF7F8"
          position="absolute"
          bottom="24px"
          display={isTooltipVisible ? 'block' : 'none'}
          padding="12px 24px"
          borderColor="#4E8098"
          zIndex={100}
          fontSize={14}
        >
          <HStack spacing="12px">
            <Avatar
              src={`https://miro.medium.com/fit/c/80/80/${imageId}`}
              size="sm"
            />
            <Heading as="h4" size="md">
              {name}
            </Heading>
          </HStack>
          <Text padding="12px 0">{bio}</Text>
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
              {mediumMemberAt
                ? ` since ${dayjs(mediumMemberAt).fromNow()}`
                : ''}
            </Text>
          </HStack>
          <Divider m="12px 0" />
          <HStack justify="space-between">
            <Link
              href={`https://medium.com/@${username}`}
              isExternal
              textDecoration="underline"
            >
              See Medium profile
            </Link>
            <Text>
              {listType === 'followings'
                ? isUserInOtherList
                  ? 'follows you back'
                  : 'does not follow you'
                : isUserInOtherList
                ? 'you follow them back'
                : "you don't follow them"}
            </Text>
          </HStack>
        </Box>
      )}
    </div>
  );
};

export default UserAvatar;
