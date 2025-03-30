import { useState } from 'react';
import { searchUser } from './services/api';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      const userData = await searchUser(username);
      setUser(userData);
      setError('');
    } catch (err) {
      setError('User not found');
      setUser(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <searchUser />
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;