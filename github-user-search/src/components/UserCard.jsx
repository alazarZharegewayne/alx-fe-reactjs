const UserCard = ({ user }) => {
    return (
      <div>
        <img src={user.avatar_url} alt={user.login} width="100" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;