import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import "../styles/createEventPage.css";
import { useHistory } from "react-router";

const CreateEventPage = () => {
  const history = useHistory();
  const [state, setState] = useState({
    eventName: "",
    eventDate: "",
    eventPrice: "",
    eventTime: "",
    eventLocation: "physical",
    eventAddress: "",
    eventCity: "",
    eventCountry: "",
    eventUrl: "",
  });
  const [isPhysical, setIsPhysical] = useState(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "eventLocation") {
      setIsPhysical(!isPhysical);
      // if (value === "physical") {
      //   setState({...state, eventUrl: ""})
      //   return;
      // } else if (value === "online") {
      //   setState({...state, eventAddress: "", eventCity: "", eventCountry: ""})
      //   return;
      // }
    }
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div>
      <h1 className="heading-one">Create New Event</h1>
      <hr className="mb-8" />
      <form onSubmit={handleSubmit} action="" className="w-full sm:max-w-lg">
        <div className="mb-4">
          <label htmlFor="eventName" className="mb-1 pl-1 inline-block">
            Event Name <sup className="text-red-500">*</sup>
          </label>
          <input
            id="eventName"
            name="eventName"
            type="text"
            className="form-control"
            placeholder="Name of your event"
            value={state.eventName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDate" className="mb-1 pl-1 inline-block">
            Event Date <sup className="text-red-500">*</sup>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className="form-control"
            placeholder="Name of your event"
            value={state.eventDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mr-4 flex-auto">
            <label htmlFor="eventPrice" className="mb-1 pl-1 inline-block">
              Event Price <sup className="text-red-500">*</sup>
            </label>
            <input
              id="eventPrice"
              name="eventPrice"
              type="number"
              className="form-control"
              placeholder="Please specify amount in dollars"
              value={state.eventPrice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 md:ml-4 flex-auto">
            <label htmlFor="eventTime" className="mb-1 pl-1 inline-block">
              Event Time <sup className="text-red-500">*</sup>
            </label>
            <input
              id="eventTime"
              name="eventTime"
              type="datetime"
              className="form-control"
              placeholder="e.g 09:30 am"
              value={state.eventTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 pl-1 block">Event Location</label>
          <input
            id="physical"
            name="eventLocation"
            type="radio"
            className="ml-1 mr-1.5 w-4 h-4 bg-black"
            value="physical"
            checked={state.eventLocation === "physical"}
            onChange={handleChange}
          />
          <label htmlFor="physical" className="mr-6">
            Physical
          </label>
          <input
            id="online"
            name="eventLocation"
            type="radio"
            className="mr-1.5 w-4 h-4"
            value="online"
            checked={state.eventLocation === "online"}
            onChange={handleChange}
          />
          <label htmlFor="online">Online</label>
        </div>
        {isPhysical ? (
          <>
            <div className="mb-4">
              <label htmlFor="eventAddress" className="mb-1 pl-1 inline-block">
                Address of Event <sup className="text-red-500">*</sup>
              </label>
              <input
                id="eventAddress"
                name="eventAddress"
                type="datetime"
                className="form-control"
                placeholder="Enter Street Address"
                value={state.eventAddress}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-4 mr-4 flex-auto">
                <label htmlFor="eventCity" className="mb-1 pl-1 inline-block">
                  City <sup className="text-red-500">*</sup>
                </label>
                <input
                  id="eventCity"
                  name="eventCity"
                  type="datetime"
                  className="form-control"
                  value={state.eventCity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 ml-4 flex-auto">
                <label
                  htmlFor="eventCountry"
                  className="mb-1 pl-1 inline-block"
                >
                  Country <sup className="text-red-500">*</sup>
                </label>
                <input
                  id="eventCountry"
                  name="eventCountry"
                  type="datetime"
                  className="form-control"
                  value={state.eventCountry}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mb-4">
            <label htmlFor="eventUrl" className="mb-1 pl-1 inline-block">
              Online Url <sup className="text-red-500">*</sup>
            </label>
            <input
              id="eventUrl"
              name="eventUrl"
              type="datetime"
              className="form-control"
              placeholder="e.g https://example.com"
              value={state.eventUrl}
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
