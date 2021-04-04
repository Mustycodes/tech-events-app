const EventThumbnail = ({event}:any) => { 
  console.log(event.imageUrl);
  
  return (
    <div className="bg-gray-800 bg-opacity-80 text-white rounded-lg overflow-hidden">
      <img src={event.imageUrl} className="h-44 w-full object-cover" alt=""/>
      <div className="px-5 py-3">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p>Date: {event.date.toString()}</p>
        <p>Price: &#8358;{event.price}</p>
        {event.location && <p>Location: {event.location.address}, {event.location.city}, {event.location.country}</p>}
        {event.onlineUrl && <p>Online Url: {event.onlineUrl}</p>}
      </div>
    </div>
  )
}

export default EventThumbnail
