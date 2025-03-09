import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';  // We will create this component later

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
