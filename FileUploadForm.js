import React, { useState } from 'react';

function FileUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [accessKey, setAccessKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [bucketName, setBucketName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAccessKeyChange = (event) => {
    setAccessKey(event.target.value);
  };

  const handleSecretKeyChange = (event) => {
    setSecretKey(event.target.value);
  };

  const handleBucketNameChange = (event) => {
    setBucketName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement the file upload logic here
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="file">Select File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="accessKey">Access Key:</label>
          <input
            type="text"
            id="accessKey"
            value={accessKey}
            onChange={handleAccessKeyChange}
          />
        </div>
        <div>
          <label htmlFor="secretKey">Secret Key:</label>
          <input
            type="text"
            id="secretKey"
            value={secretKey}
            onChange={handleSecretKeyChange}
          />
        </div>
        <div>
          <label htmlFor="bucketName">Bucket Name:</label>
          <input
            type="text"
            id="bucketName"
            value={bucketName}
            onChange={handleBucketNameChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUploadForm;
