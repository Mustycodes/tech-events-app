import EventList from "../components/events/EventList"

const EventsPage = () => {
  return (
    <div>
      <h1 className="heading-one">Upcoming Tech Events</h1>
      <hr className="mb-8" />
      <EventList />
    </div>
  )
}

export default EventsPage
