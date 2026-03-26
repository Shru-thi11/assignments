import React, { useState } from 'react';

function CommentForm({ messageId, onAddComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddComment(messageId, text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <p>Post a comment</p>
      <textarea 
        rows="2" 
        style={{ width: '100%' }} 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
        Post a comment
      </button>
    </form>
  );
}

export default CommentForm;