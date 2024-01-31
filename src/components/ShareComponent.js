// src/ShareComponent.js

import React from 'react';

const ShareComponent = () => {
  const shareInfo = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Web Share Example',
        text: 'Check out this cool website!',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };

  return (
    <button onClick={shareInfo}>Share this page</button>
  );
};

export default ShareComponent;
