
import EventThumbnail from "./EventThumbnail";


const EventList = ({events}:any) => {
 
 
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {events.map((event:any) => (
        <EventThumbnail event={event} />
      ))}
    </div>
  );
};

export default EventList;
