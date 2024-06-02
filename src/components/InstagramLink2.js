import React from 'react';
import { Instagram } from 'react-bootstrap-icons';

const InstagramLink2 = () => {
  const instagramUrl = 'https://www.instagram.com/manyane_maifo'; // Replace 'yourusername' with the actual Instagram username

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <div>
      <p 

        onClick={handleInstagramClick}>Instagram Us<Instagram
          size={20}
          style={{
            color: '#E4405F', // Instagram brand color
            backgroundColor: 'none', // Background color for the icon
            borderRadius: '5%', // Rounded corners to make it circular
            margin: '5px' // Padding to add some space around the icon
          }}
        />
        At: <i>knowmyroots</i>
      </p>
    </div>
  );
};

export default InstagramLink2;