import React, { useState } from 'react';

// --- SUB-COMPONENT: Message Form ---
const MessageForm = ({ onPost }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onPost(text);
    setText('');
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        <strong>Post a message</strong>
        <textarea 
          style={{ width: '100%', display: 'block', margin: '10px 0' }} 
          rows="3" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type="submit" style={{ backgroundColor: '#3b5998', color: 'white', border: 'none', padding: '5px 10px' }}>
          Post a message
        </button>
      </form>
    </div>
  );
};

// --- SUB-COMPONENT: Comment Form ---
const CommentForm = ({ messageId, onAddComment }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddComment(messageId, text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <label style={{ fontSize: '0.9rem' }}>Post a comment</label>
      <textarea 
        style={{ width: '100%', display: 'block', margin: '5px 0' }} 
        rows="2" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit" style={{ backgroundColor: '#42b72a', color: 'white', border: 'none', padding: '3px 8px' }}>
        Post a comment
      </button>
    </form>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  // Initial state with the data from your image
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Michael Smith",
      date: "January 23rd 2013",
      text: "This is my message. This is my message. This is my message.",
      comments: [
        { id: 101, author: "Victor Tran", date: "Feb 1st 2013", text: "This is a comment." },
        { id: 102, author: "Eva Roa", date: "Feb 3rd 2013", text: "This is another comment." }
      ]
    },
    {
      id: 2,
      author: "Cory House",
      date: "January 15th 2013",
      text: "This is my message. This is my message.",
      comments: []
    }
  ]);

  // CRUD: Create Message
  const addMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      author: "Current User",
      date: new Date().toLocaleDateString(),
      text: content,
      comments: []
    };
    setMessages([newMessage, ...messages]); // Newest first
  };

  // CRUD: Create Comment
  const addComment = (messageId, text) => {
    setMessages(messages.map(msg => {
      if (msg.id === messageId) {
        return {
          ...msg,
          comments: [...msg.comments, { id: Date.now(), author: "Current User", date: "Just now", text }]
        };
      }
      return msg;
    }));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc' }}>
      <header style={{ borderBottom: '2px solid #000', marginBottom: '20px' }}>
        <h2>Timeline</h2>
      </header>

      <MessageForm onPost={addMessage} />

      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderTop: '1px solid #eee', padding: '15px 0' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{msg.author} - {msg.date}</h4>
            <p style={{ margin: '0 0 15px 0' }}>{msg.text}</p>

            {/* Comments List (Oldest First) */}
            <div style={{ marginLeft: '30px' }}>
              {msg.comments.map(c => (
                <div key={c.id} style={{ marginBottom: '10px' }}>
                  <strong style={{ fontSize: '0.9rem' }}>{c.author} - {c.date}</strong>
                  <p style={{ margin: '2px 0', fontSize: '0.9rem' }}>{c.text}</p>
                </div>
              ))}
              <CommentForm messageId={msg.id} onAddComment={addComment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}