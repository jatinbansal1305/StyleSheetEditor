import React, { useState } from 'react';
import './styles.css';

const StyleSheetEditor = () => {
  const [styleSheet, setStyleSheet] = useState('');

  const handleStyleSheetChange = (event) => {
    setStyleSheet(event.target.value);
  };

  const handlePreview = () => {
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = `
      <div class="preview-box"> 
        <div class="container">
          <h1 class="heading">Welcome to My Website</h1>
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="preview-div">This is a preview div</div>
          <span class="preview-span">This is a preview span</span>
          <button class="preview-button">Preview Button</button>
        </div>
      </div>
    `;
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([styleSheet], { type: 'text/css' });
    element.href = URL.createObjectURL(file);
    element.download = 'stylesheet.css';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>Write your css class here</h2>
        <textarea
          rows="30"
          cols="50"
          value={styleSheet}
          onChange={handleStyleSheetChange}
        />
        <div className="button-container">
          <button onClick={handlePreview}>Preview</button>
          <button onClick={handleDownload}>Download CSS</button>
        </div>
      </div>
      <div className="right-section">
        <h3>Preview:</h3>
        <div id="preview-container" className="preview-box"></div> 
      </div>
    </div>
  );
};

export default StyleSheetEditor;
