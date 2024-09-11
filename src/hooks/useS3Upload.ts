import axios from 'axios';

export const useS3Upload = () => {
  const uploadToS3 = async (file: File, fieldName: string): Promise<string> => {
    try {
      // Get presigned URL from your backend
      const { data: presignedUrl } = await axios.get(`/api/get-presigned-url?fieldName=${fieldName}`);

      // Upload file to S3 using presigned URL
      await axios.put(presignedUrl, file, {
        headers: { 'Content-Type': file.type }
      });

      // Return the public URL of the uploaded file
      return presignedUrl.split('?')[0];
    } catch (error) {
      console.error('Error uploading to S3:', error);
      throw error;
    }
  };

  return { uploadToS3 };
};