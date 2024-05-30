import AddRoomForm from "@/components/Form/AddRoomForm";
import { uploadImage } from "@/components/api/utils";
import useAuth from "@/hooks/useAuth";
import useSecureApi from "@/hooks/useSecureApi";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
  const secureApi = useSecureApi();
  const { authUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const { mutateAsync: addNewRoom } = useMutation({
    mutationFn: async (data) => await secureApi.post("/rooms/create-new", data),
  });
  //   handle room date range availity;
  const handleDates = (item) => {
    setDates(item.selection);
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const location = form.location.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const to = dates?.endDate;
    const from = dates?.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const imageFile = form.image.files[0];
    try {
      const imageUrl = await uploadImage(imageFile);
      const roomData = {
        host: {
          name: authUser?.displayName,
          email: authUser?.email,
          photo: authUser?.photoURL,
        },
        location,
        title,
        description,
        category,
        to,
        from,
        price,
        guests,
        bedrooms,
        bathrooms,
        image: imageUrl,
      };
      await addNewRoom(roomData);
      navigate("/dashboard/my-listings");
      toast.success("Add Room Successfully!!");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleAddRoom={handleAddRoom}
        loading={loading}
      />
    </div>
  );
}
