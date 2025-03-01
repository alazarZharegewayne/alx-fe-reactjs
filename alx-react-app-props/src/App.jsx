
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;