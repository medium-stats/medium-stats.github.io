import { Box, Heading, Input, Button, HStack } from '@chakra-ui/react';

const Form = (props) => {
  const { onSubmit, username, setUsername } = props;

  return (
    <Box m="24px 0">
      <Heading as="h4" size="md">
        Enter a Medium username to get started
      </Heading>
      <form onSubmit={onSubmit}>
        <HStack align="flex-end">
          <Input
            id="username"
            type="text"
            placeholder="Medium username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            w="12rem"
            mt="32px"
          />
          <Button type="submit" bgColor="#4E8098" color="#FCF7F8">
            Process
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default Form;
