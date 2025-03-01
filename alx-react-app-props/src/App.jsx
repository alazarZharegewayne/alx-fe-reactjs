
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserContext />
    </UserContext.Provider>
  );
}

export default App;