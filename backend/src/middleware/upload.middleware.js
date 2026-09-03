import multer from "multer"

const MAX_FILE_SIZE = 15 * 1024 * 1024  //15mb

export const upload = multer({
    storage: multer.memoryStorage(),
    limits : { fileSize: MAX_FILE_SIZE },
    fileFilter: (req, file, cb) => {
        const isImage = file.mimetype.startsWith("image/");
        const isVideo = file.mimetype.startsWith("video/");

        if (!isImage && !isVideo) {
            cb(new Error("Only image and video uploads are allowed"));
            return;
        }

        cb(null, true);
    },
})
