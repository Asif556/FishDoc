import axios from 'axios';

const API_URL = 'https://server.aimliedc.tech/md-asif/fish-doc';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Detection {
  type: 'human' | 'fish';
  disease?: string;
  confidence: number;
  bounding_box: [number, number, number, number];
}

export interface DetectionResponse {
  image: string;
  detections: Detection[];
}

export const detectDisease = async (file: File): Promise<DetectionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post<DetectionResponse>('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error detecting disease:', error);
    throw new Error('Failed to process the image. Please try again.');
  }
};

export default api;