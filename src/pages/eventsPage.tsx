import EventList from "../components/events/EventList"

const EventsPage = () => {
  return (
    <div>
      <h1 className="text-white text-4xl mb-6">Upcoming Tech Events</h1>
      <hr className="mb-8" />
      <EventList />
    </div>
  )
}

export default EventsPage
