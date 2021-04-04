import EventList from "../components/events/EventList"

const EventsPage = () => {
  return (
    <div>
      <h1 className="text-white text-4xl pb-4 mb-8 border-b">Upcoming Tech Events</h1>
      <EventList />
    </div>
  )
}

export default EventsPage
