import React, { useState } from 'react';
import { TelephoneFill } from 'react-bootstrap-icons';

const PhoneBook = () => {
  const [phoneNumber, setPhoneNumber] = useState('+27766682639');

  const handlePhoneClick = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    window.location.href = phoneUrl;
  };

  return (
    <div>
      <p onClick={handlePhoneClick}>
        Phone Call Us<TelephoneFill size={20} className="mr-2" style={{ color: 'green', marginLeft: '2.5px', marginRight: '2.5px' }} /> At: 0766 682639
      </p>
    </div>
  );
};

export default PhoneBook;
