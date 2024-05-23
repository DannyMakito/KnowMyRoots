import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Categorise according to their tribe</h3>
            <p>We help a users know which tribe they fall into.</p>
          </div>
          <div className="service-item">
            <h3>Ritual knowledge</h3>
            <p>we help users know about the rituals of their tribe.</p>
          </div>
          <div className="service-item">
            <h3>History</h3>
            <p>We help users to have deep knowledge about who they are and where they are coming from.</p>
          </div>
          <div className="service-item">
            <h3>Clan knowledge</h3>
            <p>We help users ton deeply know their clan names.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;