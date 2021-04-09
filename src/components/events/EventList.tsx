import { useEffect } from 'react'
import EventThumbnail from "./EventThumbnail";
import { eventData } from '../../mockData'
import { fetchEventsInit, fetchEventsSuccess } from '../../redux/events/actions';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
const EventList = () => {
  const dispatch = useAppDispatch();
  const {isLoading, data, error} = useAppSelector(state => state.events);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchEventsInit());
      setTimeout(() => {
        dispatch(fetchEventsSuccess(eventData));
      }, 500);
    }
  }, [dispatch, data]);
  if (isLoading) {
    return <h2 className="text-white">Loading...</h2>
  }
  if (error) {
    return <h2>There was an Error fetching the events</h2>
  }
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {data.map((event:any) => (
        <EventThumbnail event={event} />
      ))}
    </div>
  );
};

export default EventList;
