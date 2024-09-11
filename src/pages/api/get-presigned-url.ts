import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fieldName } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const fileName = `${fieldName}-${Date.now()}.jpg`;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName,
      Expires: 60, // URL expires in 60 seconds
      ContentType: 'image/jpeg',
    };

    const presignedUrl = await s3.getSignedUrlPromise('putObject', params);

    res.status(200).json(presignedUrl);
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).json({ message: 'Error generating presigned URL' });
  }
}