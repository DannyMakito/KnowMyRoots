import React from 'react';

const zulu = {
  name: 'IsiZulu',
  imageUrl: 'https://i.pinimg.com/originals/f5/6b/d5/f56bd5e8f8074de6c31bbc2d6e8bfe2b.jpg',
  imageSize: 150,
  linkUrl: 'https://isizulu.net',
  description: `Discover the rich tapestry of IsiZulu culture! Embracing your cultural heritage is a journey of self-discovery and enrichment. Dive into the vibrant traditions, language, history, and customs that define the essence of who you are. Explore the unique beauty of IsiZulu culture and let its depth and diversity inspire you on your journey of cultural exploration and appreciation.`,
};

const pedi = {
  name: 'Sepedi',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWs8qRLHXm4c9vLgvzHpW6clRBkjk57qea6yDXQExXvw&s.jpg',
  imageSize: 150,
  linkUrl: '/aboutus',
  description: 'Explore the vibrant tapestry of Sepedi culture! Embark on a journey of self-discovery and enrichment as you delve into the rich traditions, language, history, and customs that shape the essence of who you are. Immerse yourself in the unique beauty of Sepedi culture, allowing its depth and diversity to ignite your passion for cultural exploration and appreciation.',
};

const Selection = () => {
  return (
    <div style={{ backgroundColor: '#f1d4a7', padding: '20px', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '10px', width: 'calc(50% - 10px)' }}>
          <div style={{ textAlign: 'center', border: '2px solid #ddd', padding: '10px', borderRadius: '10px', margin: '10px' }}>
            <a href={zulu.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={zulu.imageUrl}
                alt={'Photo of ' + zulu.name}
                style={{
                  width: zulu.imageSize,
                  height: zulu.imageSize,
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.border = '2px solid #555';
                  e.currentTarget.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </a>
            <p style={{ fontSize: '14px' }}>{zulu.description}</p>
          </div>
        </div>
        <div style={{ marginLeft: '10px', width: 'calc(50% - 10px)' }}>
          <div style={{ textAlign: 'center', border: '2px solid #ddd', padding: '10px', borderRadius: '10px', margin: '10px' }}>
            <a href={pedi.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={pedi.imageUrl}
                alt={'Photo of ' + pedi.name}
                style={{
                  width: pedi.imageSize,
                  height: pedi.imageSize,
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.border = '2px solid #555';
                  e.currentTarget.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </a>
            <p style={{ fontSize: '14px' }}>{pedi.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
