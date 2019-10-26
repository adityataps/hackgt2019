const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const fs = require('fs');

const {Storage} = require('@google-cloud/storage');
const gcs = new Storage({
    projectId: "snaccgt2019",
    keyFilename: "snaccgt2019-firebase-adminsdk-bzva0-5c39db7a6f.json"
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== "POST") {
            return res.status(500).json({
                message: "Not allowed"
            });
        }
        const busboy = new Busboy({ headers: req.headers });
        let uploadData = null;

        busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = { file: filepath, type: mimetype };
            file.pipe(fs.createWriteStream(filepath));
        });

        busboy.on("finish", () => {
            const bucket = gcs.bucket("fb-cloud-functions-demo.appspot.com");
            bucket
                .upload(uploadData.file, {
                    uploadType: "media",
                    metadata: {
                        metadata: {
                            contentType: uploadData.type
                        }
                    }
                }).then(() => {
                    return res.status(200).json({
                        message: "It worked!"
                    });
                }).catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });

        });
        busboy.end(req.rawBody);
    });
});