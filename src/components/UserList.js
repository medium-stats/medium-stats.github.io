import { useState } from 'react';
import { sortBy } from 'lodash';
import { Link, Wrap } from '@chakra-ui/react';

import UserAvatar from './UserAvatar';

const UserList = (props) => {
  const [showMore, setShowMore] = useState(false);
  const sortedUsers = sortBy(props.users, [
    (user) => user.username.toLowerCase(),
  ]);

  const users = showMore ? sortedUsers : sortedUsers.slice(0, 30);

  return (
    <Wrap>
      {users.map((user) => (
        <UserAvatar
          user={user}
          key={user.userId}
          listType={props.listType}
          otherList={props.otherList}
          highlightedProperty={props.highlightedProperty}
        />
      ))}
      {!showMore && (
        <Link
          onClick={() => setShowMore(true)}
          padding="2px 6px"
          fontSize={12}
          alignSelf="center"
        >
          {props.users.length - 30} More
        </Link>
      )}
    </Wrap>
  );
};

export default UserList;
