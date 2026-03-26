import React, { useState } from 'react';

function MessageForm({ onPost }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onPost(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Post a message</h3>
      <textarea 
        rows="4" 
        style={{ width: '100%' }} 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit">Post a message</button>
    </form>
  );
}

export default MessageForm;