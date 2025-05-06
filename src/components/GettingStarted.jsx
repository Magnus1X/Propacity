import React, { useState } from 'react'
import './GettingStarted.css'

const GettingStarted = () => {
  const [link, setLink] = useState('')
  const [dragging, setDragging] = useState(false)
  const [summary, setSummary] = useState('') 

  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const droppedLink = e.dataTransfer.getData('text/plain')
    if (droppedLink) {
      setLink(droppedLink)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleGetSummary = () => {
    if (link) {
      // Here, you would normally send the link to an API to get the summary.
      // For demonstration, we'll just return a static summary.
      setSummary(`Summary for the link: ${link}`)
    } else {
      setSummary('Please provide a valid link.')
    }
  }

  return (
    <div className="getting-started">
      <h1>Know More , Watch Less</h1>
      <p>Paste a link or drag and drop a link here:</p>

      {/* Input field to paste a link */}
      <input
        type="url"
        placeholder="Paste your link here"
        value={link}
        onChange={handleLinkChange}
        className="input-link"
      />

      {/* Drag-and-drop area */}
      <div
        className={`drag-area ${dragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag and drop a link here</p>
      </div>

      {/* Get Summary Button */}
      <button className="get-summary-btn" onClick={handleGetSummary}>
        Get Summary
      </button>

      {/* Displaying the current link or summary */}
      {summary && <p className="summary">{summary}</p>}
    </div>
  )
}

export default GettingStarted
