import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const EventThumbnail = ({ event }: any) => {
  let startTime, timeClass;
  const convertTime12to24 = (time12h: string) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier.toLowerCase() === "pm") {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    return hours;
  };
  let timeHours = convertTime12to24(event.time);
  switch (true) {
    case Number(timeHours) <= 9:
      startTime = "Early Start";
      timeClass = "text-green-400";
      break;
    case Number(timeHours) <= 11:
      startTime = "Normal Start";
      timeClass = "text-yellow-400";
      break;
    case Number(timeHours) > 24:
      startTime = "Time format is invalid";
      break;
    default:
      startTime = "Late Start";
      timeClass = "text-red-400";
      break;
  }

  const notify = () => {
    toast(`${event.name} 🚀`);
  };
  {
    /* <ToastContainer hideProgressBar newestOnTop autoClose={3000} toastStyle={{backgroundColor: 'rgba(110, 231, 183', color: 'rgba(255, 255, 250)'}}/> */
  }

  return (
    <Link to={`/events/${event.id}`} className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden">
      <article>
        <img src={event.imageUrl} className="h-44 w-full object-cover" alt="" />
        <div className="px-5 py-3 text-gray-400">
          <h2 className="text-2xl font-semibold text-white">{event.name}</h2>
          <p>Date: {event.date.toString()}</p>
          <p>
            Time: {event.time} <span className={timeClass}>({startTime})</span>
          </p>
          <p>Price: &#8358;{event.price}</p>
          {event.location && (
            <p>
              Location: {event.location.address}, {event.location.city},{" "}
              {event.location.country}
            </p>
          )}
          {event.onlineUrl && <p>Online Url: {event.onlineUrl}</p>}
        </div>
      </article>
    </Link>
  );
};

export default EventThumbnail;
