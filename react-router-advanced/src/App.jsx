import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import BlogPost from './BlogPost';
import ProtectedRoute from './ProtectedRoute';

const isAuthenticated = false;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/profile/:userId" element={<Profile />} />
        {/* Add the dynamic route for blog post */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
