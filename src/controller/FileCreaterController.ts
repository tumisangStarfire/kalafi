
const uuid = require('uuid');
var path = require('path');
const fs = require('fs');

export async function createFile(filename: string, base64String: string, fileExtension: string, callback) {
    try {
        var systemUploadPath = path.normalize(process.cwd() + '/src/public/img/');

        // Remove header
        let base64Image = base64String.split(';base64,').pop();

        /**convert the string from base 64 */
        var bitmap = new Buffer(base64Image, 'base64');


        /* write path on the system */
        var writePath = systemUploadPath + filename + fileExtension;

        var writeFile = await fs.writeFileSync(writePath, bitmap, function (err) {
            if (err) {
                console.log(err);
            }

        });
        return callback(writePath);
    } catch (error) {
        console.log(error);
    }
}
export function deleteFileAfterUpload(filePath) {
    const deleteFile = fs.unlink(filePath, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('File deleted!');
    });
}