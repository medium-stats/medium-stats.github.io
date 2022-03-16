import { Stack, Skeleton } from '@chakra-ui/react';

const SkeletonStack = () => {
  return (
    <Stack mt="32px">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default SkeletonStack;
