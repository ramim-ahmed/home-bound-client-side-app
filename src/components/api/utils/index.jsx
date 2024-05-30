import axios from "axios";

export const uploadImage = async (imageFile) => {
  const imageData = new FormData();
  imageData.append("file", imageFile);
  imageData.append("upload_preset", "htrt75ob");
  imageData.append("cloud_name", "dc68241xz");
  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dc68241xz/image/upload",
    imageData
  );
  return res.data.url;
};
