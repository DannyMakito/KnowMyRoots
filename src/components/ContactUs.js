import React from 'react';
import { Phone, Whatsapp } from 'react-bootstrap-icons';

export default function ContactUs() {
  return (
    <div>
      <h5>Contact Details</h5>
      <p>
        
        Phone Call Us<Phone size={20} className="mr-2" /> At: 000 000 0000
      </p>
      <p>
       
        Whatsapp Us<Whatsapp size={20} className="mr-2" /> At: 000 000 0000
      </p>
    </div>
  );
}
