import React from 'react';
import { Link } from 'react-router-dom';
import { Profile, ProfileContainer } from './styles';

export default function () {
  return (
    <Profile>
      <ProfileContainer>
        <div>
          <strong>rgrassi1@gmail.com</strong>
          <Link to='#'>My profile</Link>
        </div>
      </ProfileContainer>
    </Profile>
  )
}
