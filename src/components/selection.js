import React from 'react';

const zulu = {
  name: 'IsiZulu',
  imageUrl: 'https://i.pinimg.com/originals/f5/6b/d5/f56bd5e8f8074de6c31bbc2d6e8bfe2b.jpg',
  imageSize: 90,
  linkUrl: 'https://isizulu.net',
};

const pedi = {
  name: 'Sepedi',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWs8qRLHXm4c9vLgvzHpW6clRBkjk57qea6yDXQExXvw&s.jpg',
  imageSize: 90,
  linkUrl: 'https://sepedi.net',
};


export default function selection() {
  return (
    <div style={{ backgroundColor: '#f1d4a7', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <h1>{zulu.name}</h1>
          <a href={zulu.linkUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={zulu.imageUrl}
              alt={'Photo of ' + zulu.name}
              style={{
                width: zulu.imageSize,
                height: zulu.imageSize,
              }}
            />
          </a>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1>{pedi.name}</h1>
          <a href={pedi.linkUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={pedi.imageUrl}
              alt={'Photo of ' + pedi.name}
              style={{
                width: pedi.imageSize,
                height: pedi.imageSize,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
