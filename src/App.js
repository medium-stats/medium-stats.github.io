import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import Form from 'components/Form';
import Header from 'components/Header';
import Results from 'components/Results';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const colors = {
  brand: {
    900: '#4E8098',
    800: '#9D8189',
    700: '#56CBF9',
  },
};
const theme = extendTheme({ colors });

const App = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState(username);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Header />
          <Form
            onSubmit={onSubmit}
            username={username}
            setUsername={setUsername}
          />
          {submittedUsername && <Results username={submittedUsername} />}
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
