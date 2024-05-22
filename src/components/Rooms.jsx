/* eslint-disable react/prop-types */
import Room from "./Room";
export default function Rooms({ rooms }) {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      {rooms.map((room) => (
        <Room key={room._id} room={room} />
      ))}
    </div>
  );
}
