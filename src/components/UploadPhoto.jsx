/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function UploadPhoto({ photo, setPhoto }) {
  const handleUploadPhoto = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "htrt75ob");
    data.append("cloud_name", "dc68241xz");

    try {
      if (photo === null) {
        return toast.error("Please upload your photo");
      }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dc68241xz/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();
      setPhoto(cloudData.url);
      toast.success("Uploaded your photo!!");
    } catch (error) {
      toast.error("Photo upload failed!!");
    }
  };
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="picture">Photo</Label>
      <Input
        defaultValue={photo}
        id="picture"
        type="file"
        onChange={handleUploadPhoto}
      />
    </div>
  );
}
