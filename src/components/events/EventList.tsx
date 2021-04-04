import {useState, useEffect} from 'react'
import EventThumbnail from "./EventThumbnail";
import { eventData } from '../../mockData'
const EventList = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventData);
    }, 2000);
  })
  if (!events.length) {
    return <h2 className="text-white">Loading...</h2>
  }
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {events.map((event:any) => (
        <EventThumbnail event={event} />
      ))}
    </div>
  );
};

export default EventList;
