import React from 'react';
import { Facebook } from 'react-bootstrap-icons';

const FacebookLink = () => {
  const facebookUrl = ''; // Replace with the actual Facebook profile/page URL

  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank');
  };

  return (
    <div>
      <p onClick={handleFacebookClick}>
        Facebook Us <Facebook size={20} style={{color: '#3b5998'}}></Facebook> At: KnowMyRoots
      </p>
    </div>
  );
};

export default FacebookLink;
