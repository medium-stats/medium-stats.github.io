import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider, Box } from '@chakra-ui/react';

import Form from 'components/Form';
import Header from 'components/Header';
import Results from 'components/Results';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState(username);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box
          className="App"
          bg="#FCF7F8"
          color="#2F2F2F"
          minH="100vh"
          p={{ sm: '60px 30px', md: '60px 120px' }}
        >
          <Header />
          <Form
            onSubmit={onSubmit}
            username={username}
            setUsername={setUsername}
          />
          {submittedUsername && <Results username={submittedUsername} />}
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
