import { ChangeEvent, SyntheticEvent, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import "../styles/createEventPage.css";
import { useHistory } from "react-router";
import {useAppDispatch} from '../redux/reduxHooks'
import { addEventInit, addEventSuccess } from "../redux/events/actions";

const initialState = {
  name: "",
  date: "",
  price: "",
  time: "",
  location: "physical",
  address: "",
  city: "",
  country: "",
  onlineUrl: "",
}
const CreateEventPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [state, setState] = useState(initialState);
  const [isPhysical, setIsPhysical] = useState(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "location") {
      setIsPhysical(!isPhysical);
      // if (value === "physical") {
      //   setState({...state, onlineUrl: ""})
      //   return;
      // } else if (value === "online") {
      //   setState({...state, address: "", city: "", country: ""})
      //   return;
      // }
    }
    setState({ ...state, [name]: value });
  };



  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addEventInit());
    console.log(state);
    dispatch(addEventSuccess(state));
    setState(initialState);
    // history.push('/events');
  }

  return (
    <div> 
      <h1 className="heading-one">Create New Event</h1>
      <hr className="mb-8" />
      <form onSubmit={handleSubmit} action="" className="w-full sm:max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 pl-1 inline-block">
            Event Name <sup className="text-red-500">*</sup>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Name of your event"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="mb-1 pl-1 inline-block">
            Event Date <sup className="text-red-500">*</sup>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="form-control"
            value={state.date}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mr-4 flex-auto">
            <label htmlFor="price" className="mb-1 pl-1 inline-block">
              Event Price <sup className="text-red-500">*</sup>
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="form-control"
              placeholder="Please specify amount in dollars"
              value={state.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 md:ml-4 flex-auto">
            <label htmlFor="time" className="mb-1 pl-1 inline-block">
              Event Time <sup className="text-red-500">*</sup>
            </label>
            <input
              id="time"
              name="time"
              type="datetime"
              className="form-control"
              placeholder="e.g 09:30 am"
              value={state.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 pl-1 block">Event Location</label>
          <input
            id="physical"
            name="location"
            type="radio"
            className="ml-1 mr-1.5 w-4 h-4 bg-black"
            value="physical"
            checked={state.location === "physical"}
            onChange={handleChange}
          />
          <label htmlFor="physical" className="mr-6">
            Physical
          </label>
          <input
            id="online"
            name="location"
            type="radio"
            className="mr-1.5 w-4 h-4"
            value="online"
            checked={state.location === "online"}
            onChange={handleChange}
          />
          <label htmlFor="online">Online</label>
        </div>
        {isPhysical ? (
          <>
            <div className="mb-4">
              <label htmlFor="address" className="mb-1 pl-1 inline-block">
                Address of Event <sup className="text-red-500">*</sup>
              </label>
              <input
                id="address"
                name="address"
                type="datetime"
                className="form-control"
                placeholder="Enter Street Address"
                value={state.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-4 mr-4 flex-auto">
                <label htmlFor="city" className="mb-1 pl-1 inline-block">
                  City <sup className="text-red-500">*</sup>
                </label>
                <input
                  id="city"
                  name="city"
                  type="datetime"
                  className="form-control"
                  value={state.city}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 ml-4 flex-auto">
                <label
                  htmlFor="country"
                  className="mb-1 pl-1 inline-block"
                >
                  Country <sup className="text-red-500">*</sup>
                </label>
                <input
                  id="country"
                  name="country"
                  type="datetime"
                  className="form-control"
                  value={state.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mb-4">
            <label htmlFor="onlineUrl" className="mb-1 pl-1 inline-block">
              Online Url <sup className="text-red-500">*</sup>
            </label>
            <input
              id="onlineUrl"
              name="onlineUrl"
              type="datetime"
              className="form-control"
              placeholder="e.g https://example.com"
              value={state.onlineUrl}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="flex mb-4">
          <button
            className=" flex-1 mr-2 bg-purple-800 hover:bg-purple-600 px-4 py-2 inline-block"
            type="submit"
          >
            Add Event
          </button>
          <button
            className="flex-1 ml-2 bg-gray-800 w-1/3 hover:bg-gray-600 px-4 py-2 inline-block"
            type="button"
            onClick={() => history.push("/events")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
