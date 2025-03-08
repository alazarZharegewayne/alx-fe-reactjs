import UserContext from './Context/UserContext';
function UserDetails({ userData }) {
    const UserData = useContext(UserContext)
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;