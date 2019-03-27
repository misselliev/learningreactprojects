import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';

class ProfileCard extends React.Component {
  render(){
    return (
      <div className="profilecard">
        <ProfilePhoto />
        <ProfileInfo />
      </div>
    )
  }
}

export default ProfileCard