const { timeStamp } = require("console");
const path = require("path");

const handleFilePath = (fileObject) => {
  // Generate a timestamp
  const timestamp = Date.now();
  // Extract the file extension
  const extension = path.extname(fileObject.name);
  // Extract the file name without the extension
  const fileNameWithoutExt = path.basename(fileObject.name, extension);
  // Build the new file name with timestamp
  const newFileName = `${fileNameWithoutExt}-${timestamp}${extension}`;
  // Create the full file path
  const filePath = path.join(__dirname, "/../public/img/upload/", newFileName);

  return filePath;
};
const uploadSingleFile = async (fileObject) => {
  let uploadPath = handleFilePath(fileObject);
  try {
    await fileObject.mv(uploadPath);
    console.log("******Success upload single file");
    return { status: "success", path: "link-image", error: null };
  } catch (error) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultiFile = async (fileObject) => {
  try {
    for (let i = 0; i < fileObject.length; i++) {
      let uploadPath = await handleFilePath(fileObject[i]);
      await fileObject[i].mv(uploadPath);
    }
  } catch (error) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

module.exports = { uploadSingleFile, uploadMultiFile };
