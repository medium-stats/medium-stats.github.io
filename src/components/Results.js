import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import {
  Box,
  Heading,
  Stack,
  Wrap,
  Skeleton,
  Divider,
  Select,
} from '@chakra-ui/react';

import UserList from './UserList';
import MediumMembersPie from './charts/MediumMembersPie';
import PartnerProgramMembersPie from './charts/PartnerProgramMembersPie';
import UserCard from './UserCard';

const serverUrl = 'https://mediumstatsapi.herokuapp.com';

const getUserByUsername = (username) => {
  return axios
    .get(`${serverUrl}/user?username=${username}`)
    .then((res) => res.data);
};

const getFollowingsByUserId = (userId) => {
  return axios
    .get(`${serverUrl}/followings?userId=${userId}`)
    .then((res) => res.data);
};

const getFollowersByUserId = (userId) => {
  return axios
    .get(`${serverUrl}/followers?userId=${userId}`)
    .then((res) => res.data);
};

const Results = (props) => {
  const [highlightedProperty, setHighlightedProperty] = useState('follow-back');
  const { username } = props;
  const {
    isLoading: isLoadingUser,
    isError: isErrorUser,
    data: user,
  } = useQuery(['user', username], () => getUserByUsername(username), {
    retry: false,
  });

  const { isLoading: isLoadingFollowings, data: followings } = useQuery(
    ['followings', username],
    () => getFollowingsByUserId(user?.userId),
    {
      enabled: !!user?.userId,
    }
  );

  const { isLoading: isLoadingFollowers, data: followers } = useQuery(
    ['followers', username],
    () => getFollowersByUserId(user?.userId),
    {
      enabled: !!user?.userId,
    }
  );

  if (isLoadingUser) {
    return (
      <Stack mt="32px">
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  if (isErrorUser) return 'error';

  return (
    <div>
      {user && <UserCard user={user} />}

      {followings && followers && (
        <Box m="24px 0">
          <Select
            value={highlightedProperty}
            onChange={(event) => {
              setHighlightedProperty(event.target.value);
            }}
            placeholder="Select property to highlight in below tags"
          >
            <option value="follow-back">Highlight people following back</option>
            <option value="partner-program">
              Highlight partner program members
            </option>
            <option value="medium-member">Highlight Medium members</option>
          </Select>
        </Box>
      )}

      {isLoadingFollowers && (
        <>
          <Box m="12px 0">Getting follower list...</Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </>
      )}
      <Divider m="24px 0" />
      {followers && (
        <>
          <Heading as="h5" mb="24px" size="md">
            <span style={{ color: '#4E8098' }}>{followers?.length}</span> people
            follow {user.username}
          </Heading>
          <UserList
            listType="followers"
            users={followers}
            otherList={followings}
            highlightedProperty={highlightedProperty}
          />
          <Wrap>
            <MediumMembersPie users={followers} />
            <PartnerProgramMembersPie users={followers} />
          </Wrap>
        </>
      )}
      <Divider m="24px 0" />
      {isLoadingFollowings && (
        <>
          <Box m="12px 0">Getting following list...</Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </>
      )}
      {followings && (
        <>
          <Heading as="h5" mb="24px" size="md">
            {user.username} follows{' '}
            <span style={{ color: '#4E8098' }}>{followings?.length}</span>{' '}
            people
          </Heading>
          <UserList
            listType="followings"
            users={followings}
            otherList={followers}
            highlightedProperty={highlightedProperty}
          />
          <Wrap>
            <MediumMembersPie users={followings} />
            <PartnerProgramMembersPie users={followings} />
          </Wrap>
        </>
      )}
    </div>
  );
};

export default Results;
