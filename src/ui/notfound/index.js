import React from 'react';

export default function Component({ message = 'Not Found' }) {
  
  return (
    <div>
        <p>{message}</p>
    </div>
  );
}
