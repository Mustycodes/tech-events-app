import React from 'react'
import { useHistory } from 'react-router'

const CreateEventPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1 className="heading-one">Create New Event</h1>
      <hr className="mb-8" />
      <form action="" className="w-full sm:max-w-lg">

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
            onClick={() => history.push('/events')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateEventPage
