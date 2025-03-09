import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import ProtectedRoute from './ProtectedRoute';

const isAuthenticated = false; // Simulate authentication status

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
