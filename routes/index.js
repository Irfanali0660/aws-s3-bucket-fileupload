let express =require('express');
var {addimage,listImages, deleteImages}=require('../controllers/aws-s3')
var router = express.Router();
const upload = require('../services/multer');

/* GET home page. */

router.post('/aws-s3-imageadding',upload.single('image'),addimage);
router.get('/getimages',listImages)
router.delete('/deleteimage',deleteImages)


module.exports = router;
