import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-page">
      <h1 id="profile-title" className="profile-title">
        Profile Page
      </h1>
      <div className="profile-body">
        <div className="profile-img">
          <img src={user.picture} alt="Profile" className="profile-user" />
        </div>
        <div className="profile-text">
          <h2 className="profile-details">
            <strong>Username:</strong> {user.name}
          </h2>
          <h3 className="profile-details">
            <strong>Email:</strong> {user.email}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;