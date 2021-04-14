import { useEffect } from 'react'
import EventList from "../components/events/EventList"
import { eventData } from '../mockData'
import { toast } from "react-toastify";

import { fetchEventsInit, fetchEventsSuccess } from '../redux/events/actions';
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks';

const EventsPage = () => {
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
    <div>
      <h1 className="heading-one">Upcoming Tech Events</h1>
      <hr className="mb-8" />
      <EventList events={data} />
    </div>
  )
}

export default EventsPage
