import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  return <div>User Profile for ID: {userId}</div>;
}

export default Profile;
