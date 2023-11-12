let AWS = require("aws-sdk");
let env = require("dotenv");
env.config();
var s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
module.exports = {
    addimage: (req, res) => {
        try {
      var params = {
        Body: req.file.buffer,
        Bucket: process.env.BUCKET_NAME,
        Key: req.file.originalname,
      };

      s3.upload(params, async function (err, data) {
        if (err) {
          console.error(err, err.stack);
          res.json(err);
        } else {
          console.log("Data uploaded successfully to s3");
          res.status(200).json(data);
        }
      });
    } catch (err) {
      console.error(err,"Writing data to s3 failed.");
      res.status(500).json(err);
    }
  },

  listImages: async (req, res) => {
    try {
      s3.listObjectsV2({ Bucket:process.env.BUCKET_NAME})
        .promise()
        .then((file) => {
          let data=file.Contents.map((data)=>data.Key)
          console.log(file);
          res.status(200).json({message:'file fetched from s3',images:data})
        })
        .catch((err) => {
          res.status(500).json({message:'error founded',err:err})
        });
    } catch (error) {
      console.log(error, "error");
      res.status(500).json(error);
    }
  },

  deleteImages:(req,res)=>{
    try {
        s3.deleteObject({Bucket:process.env.BUCKET_NAME,Key:req.query.key}).promise().then(()=>{
          res.status(200).json({message:'file deleted from s3'});
        }).catch(()=>{
          res.status(500).json({message:'error founded',err:err});
        });
    } catch (error) {
      console.log(error,'error')
      res.status(500).json({message:'internal server error',error:error})
    }
  }
};
