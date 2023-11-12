# aws-s3-bucket-fileupload
This repository hosts comprehensive code that facilitates the uploading of files to an AWS S3 bucket, leveraging the capabilities of Multer. Furthermore, I've augmented the functionality to encompass tasks such as listing files from the S3 bucket, providing options for uploads, and implementing file deletion

# Technologies Used
  * S3 bucket: Amazon S3 is an object storage service that stores data as objects within buckets. An object is a file and any metadata that describes the file. A bucket is a container for objects. To store your data in Amazon S3.
  * multer:Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.

# Installation steps
To run the locally hosted Node.js API with role-based authentication, follow these steps:

  1. Ensure Node.js is installed on your machine.
  2. Clone this repository to your local machine using the following command:
  ```
  git clone https://github.com/Irfanali0660/aws-s3-bucket-fileupload.git
  ```
  3. Install the required dependencies using npm:
  ```
  npm install
  ```
  4. Create a `.env` file to securely store API keys.
  ```
  ACCESS_KEY_ID = 'your_access_key_id',
  SECRET_ACCESS_KEY = 'your_secret_access_key',
  BUCKET_NAME = 'your_bucket_name',
  region = 'your_bucket_region',
  ```
  5. Run the app
  ```
  npm start
  ```
  6. The API is set to run on https://localhost:3000.
