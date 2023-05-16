import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend API URL

const api = axios.create({
  baseURL: API_URL,
});

export const uploadFile = (file, accessKey, secretKey, bucketName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('accessKey', accessKey);
  formData.append('secretKey', secretKey);
  formData.append('bucketName', bucketName);

  return api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
