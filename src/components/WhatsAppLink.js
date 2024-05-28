import React, { useState } from 'react';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppLink = () => {
  const [phoneNumber, setPhoneNumber] = useState('+27766682639');
  const [message, setMessage] = useState('Hi Know My Roots');


  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      <p onClick={handleWhatsAppClick}>
        Whatsapp Us <Whatsapp size={20} className="mr-2" style={{ color: 'green' , marginLeft: '2.5px', marginRight: '2.5px'}}/> At: 0766 682639
      </p>
    </div>
  );
};

export default WhatsAppLink;
