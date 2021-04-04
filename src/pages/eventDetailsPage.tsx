import { useParams, Link } from "react-router-dom";
import { eventData } from "../mockData";
import { GrPrevious } from "react-icons/gr";
const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const singleEvent = eventData.find((event) => event.id === Number(id));
  if (singleEvent === undefined) {
    throw new TypeError("The value was promised to be there");
  }

  return (
    <div>
      <Link to="/events" className="text-2xl mb-4 inline-block hover:text-gray-400">
        <svg
          className="w-8 h-8 inline text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>{" "}
        Go Back
      </Link>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <img
            className="h-80 w-full object-cover"
            src={singleEvent.imageUrl}
            alt=""
          />
        </div>
        <div>
          <header>
            <div className="flex justify-between items-center text-xl text-gray-400">
              <h1 className="text-3xl mb-2 text-purple-400">
                {singleEvent.name}
              </h1>
              <h5>{singleEvent.time}</h5>
            </div>
            {singleEvent.location ? (
              <h4 className="mb-4 text-purple-200 text-xl">
                {singleEvent.location.address}, {singleEvent.location.city},{" "}
                {singleEvent.location.country}
              </h4>
            ) : (
              <h4 className="mb-4 text-purple-200 text-xl">
                Online:{" "}
                <a
                  className="underline hover:text-purple-400"
                  href={singleEvent.onlineUrl}
                >
                  {singleEvent.onlineUrl}
                </a>
              </h4>
            )}
          </header>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            facilis quibusdam magnam impedit. Nihil mollitia in ducimus
            recusandae hic, illo cum quam veritatis officiis laudantium ipsum
            consectetur numquam, neque voluptatibus.
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            facilis quibusdam magnam impedit. Nihil mollitia in ducimus
            recusandae hic, illo cum quam veritatis officiis laudantium ipsum
            consectetur numquam, neque voluptatibus.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-4xl font-semibold text-purple-300">
              &#36;{singleEvent.price}
            </p>
            <p className="text-2xl text-gray-400">{singleEvent.date.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
