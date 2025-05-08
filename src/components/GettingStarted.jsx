import React, { useState } from 'react';
import './GettingStarted.css'; // Assuming the CSS is in this file

const GettingStarted = () => {
  const [link, setLink] = useState('');
  const [dragging, setDragging] = useState(false);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedLink = e.dataTransfer.getData('text/plain');
    if (droppedLink) {
      setLink(droppedLink);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleGetSummary = async () => {
    if (link) {
      setLoading(true);
      setSummary('');
      setError('');

      try {
        const res = await fetch("http://localhost:3001/api/summary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: link }),
        });

        const data = await res.json();
        if (res.ok) {
          setSummary(data.summary);
        } else {
          setError(data.error || "An unexpected error occurred.");
        }
      } catch (err) {
        setError("Failed to connect to the server.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setSummary('Please provide a valid link.');
    }
  };

  return (
    <div className="getting-started">
      <h1>Know More, Watch Less</h1>
      <p>Paste a link or drag and drop a link here:</p>

      <input
        type="url"
        placeholder="Paste your link here"
        value={link}
        onChange={handleLinkChange}
        className="input-link"
      />

      <div
        className={`drag-area ${dragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag and drop a link here</p>
      </div>

      <button
        className="get-summary-btn"
        onClick={handleGetSummary}
        disabled={loading || !link.trim()}
      >
        {loading ? 'Processing...' : 'Get Summary'}
      </button>

      {loading && <p style={{ marginTop: '16px', color: '#666' }}>Processing, please wait...</p>}

      {error && (
        <div
          style={{
            marginTop: '16px',
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '4px',
          }}
        >
          <strong>Error!</strong> <span>{error}</span>
        </div>
      )}

      {summary && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default GettingStarted;
