import React, { useState } from 'react';
import CommentForm from './comments';

function Message({ data, onDelete, onUpdate, onAddComment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(data.text);

  const handleUpdate = () => {
    onUpdate(data.id, editText);
    setIsEditing(false); // Switch back to view mode
  };

  return (
    <div style={{ marginBottom: '40px', padding: '10px', border: '1px solid #eee' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{data.author} - {data.date}</h4>
        
        {/* CRUD Controls */}
        <div>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button 
            onClick={() => onDelete(data.id)} 
            style={{ color: 'red', marginLeft: '10px' }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Edit Mode */}
      {isEditing ? (
        <div>
          <textarea 
            style={{ width: '100%' }}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save Changes</button>
        </div>
      ) : (
        <p>{data.text}</p>
      )}

      {/* Comment Section */}
      <div style={{ marginLeft: '40px' }}>
        {data.comments.map(comment => (
          <div key={comment.id} style={{ marginBottom: '10px' }}>
            <strong>{comment.author} - {comment.date}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
        
        <CommentForm messageId={data.id} onAddComment={onAddComment} />
      </div>
    </div>
  );
}

export default Message;