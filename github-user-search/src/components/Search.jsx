import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: '',
    minRepos: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleUser, setSingleUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (searchParams.query && !searchParams.location && !searchParams.minRepos) {
        const user = await fetchUserData(searchParams.query);
        setSingleUser(user);
        setResults([]);
      } else {
        const data = await searchUsers(searchParams);
        setResults(data.items || []);
        setSingleUser(null);
      }
    } catch (err) {
      setError('Failed to fetch data');
      setResults([]);
      setSingleUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={searchParams.query}
          onChange={handleInputChange}
          placeholder="Search users"
          required
        />
        <input
          type="text"
          name="location"
          value={searchParams.location}
          onChange={handleInputChange}
          placeholder="Location (optional)"
        />
        <input
          type="number"
          name="minRepos"
          value={searchParams.minRepos}
          onChange={handleInputChange}
          placeholder="Min repositories (optional)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p>{error}</p>}

      {singleUser && (
        <div>
          <img src={singleUser.avatar_url} alt={singleUser.login} width="50" />
          <h3>{singleUser.login}</h3>
          <a href={singleUser.html_url} target="_blank" rel="noreferrer">
            Profile
          </a>
        </div>
      )}

      <div>
        {results.map(user => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;