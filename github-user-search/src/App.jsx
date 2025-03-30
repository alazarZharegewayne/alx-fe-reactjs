import { useState } from 'react';
import { searchUser, searchUsers } from './services/githubService';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Search from './components/Search';

function App() {
  
  const [basicUser, setBasicUser] = useState(null);
  const [basicError, setBasicError] = useState('');
  
  
  const [advancedUsers, setAdvancedUsers] = useState([]);
  const [advancedError, setAdvancedError] = useState('');
  const [activeTab, setActiveTab] = useState('basic');

  const handleBasicSearch = async (username) => {
    try {
      const userData = await searchUser(username);
      setBasicUser(userData);
      setBasicError('');
    } catch (err) {
      setBasicError('User not found');
      setBasicUser(null);
    }
  };

  const handleAdvancedSearch = async (searchParams) => {
    try {
      const usersData = await searchUsers(searchParams);
      setAdvancedUsers(usersData.items);
      setAdvancedError('');
    } catch (err) {
      setAdvancedError('Error searching users');
      setAdvancedUsers([]);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">GitHub User Search</h1>
      
      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 ${activeTab === 'basic' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Search
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'advanced' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
          onClick={() => setActiveTab('advanced')}
        >
          Advanced Search
        </button>
      </div>

      {activeTab === 'basic' ? (
        <div>
          <SearchBar onSearch={handleBasicSearch} />
          {basicError && <p className="text-red-500 mt-2">{basicError}</p>}
          {basicUser && <UserCard user={basicUser} className="mt-4" />}
        </div>
      ) : (
        <div>
          <Search onSearch={handleAdvancedSearch} />
          {advancedError && <p className="text-red-500 mt-2">{advancedError}</p>}
          <div className="grid gap-4 mt-4">
            {advancedUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;