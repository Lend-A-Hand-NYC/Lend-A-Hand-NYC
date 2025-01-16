
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createPost } from '../adapters/Post-adaptors'
import { useNavigate } from 'react-router-dom';

const CreateEvent = ({ }) => {
  const [event_title, setEventTitle] = useState('');
  const [event_info, setEventInfo] = useState('');
  const [commitment_type, setCommitmentType] = useState('');
  const [skills, setSkills] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [event_date, setEventDate] = useState(null);
  const [event_time, setEventTime] = useState(null);
  const [volunteers_needed, setVolunteersNeeded] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!eventTitle || !eventDate || !volunteersNeeded) {
    //   alert("Please fill out all required fields.");
    //   return;
    // }

    console.log("Form submitted with data:", {
      event_title,
      event_info,
      commitment_type,
      skills,
      address,
      city,
      state,
      zip,
      event_date,
      event_time,
      volunteers_needed,
    });

    const [post, error] = await createPost({ event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed });
               navigate(`/event-feed`);

    if (error) return setErrorText(error.message);


  };



  return (
    <form onSubmit={handleSubmit}>
      <h3 align="center">Create A Volunteer Event</h3>

      <p align="center">
        It all begins with an idea. Organizations can post volunteer opportunities, detailing their specific needs, the skills required, and the number of volunteers needed.
      </p>

      <label htmlFor="event-title"><b>Event Title:</b></label>
      <input
        type="text"
        id="event-title"
        placeholder="Enter event title here!"
        value={event_title}
        onChange={e => setEventTitle(e.target.value)}
        required
      />

      <label htmlFor="event-info"><b>Event Info:</b></label>
      <textarea
        id="event-info"
        placeholder="Provide event info!"
        value={event_info}
        onChange={e => setEventInfo(e.target.value)}
      />
      <p></p>
      <label htmlFor="commitment-type"><b>Commitment Type</b>:</label>
      <select
        id="commitment-type"
        value={commitment_type}
        onChange={e => setCommitmentType(e.target.value)}

      >
        <option value="Long Term">Long Term</option>
        <option value="Short Term">Short Term</option>
        <option value="Virtual">Virtual</option>
      </select>

      <p></p>

      <label htmlFor="skills"><b>Skills Needed:</b></label>
      <input
        type="text"
        id="skills"
        placeholder="Does this require specific skills?"
        value={skills}
        onChange={e => setSkills(e.target.value)}
      />


      <label htmlFor="address"><b>Address:</b></label>
      <input
        type="text"
        id="address"
        placeholder="Enter address here"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <label htmlFor="city"><b>City:</b></label>
      <input
        type="text"
        id="city"
        placeholder="City"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <label htmlFor="state"><b>State:</b></label>
      <input
        type="text"
        id="state"
        placeholder="State"
        value={state}
        onChange={e => setState(e.target.value)}
      />

      <label htmlFor="zip"><b>Zip Code:</b></label>
      <input
        type="number"
        id="zip"
        placeholder="Zip Code"
        value={zip}
        onChange={e => setZip(e.target.value)}
      />

      <label htmlFor="event-date"><b>Event Date:</b></label>
      <DatePicker
        id="event-date"
        value={event_date}
        selected={event_date}
        onChange={date => setEventDate(date)}
        dateFormat="MMMM ,d, yyyy"
        placeholderText="Select event date"
        required
      />

      <label htmlFor="event-time"><b>Event Time:</b></label>
      <DatePicker
        id="event-time"
        value={event_time}
        selected={event_time}
        onChange={time => setEventTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm"
        placeholderText="Select event time"
      />

      <label htmlFor="volunteers-needed"><b>Number of Volunteers Needed:</b></label>
      <input
        type="number"
        id="volunteers-needed"
        placeholder="How many volunteers needed?"
        value={volunteers_needed}
        onChange={e => setVolunteersNeeded(e.target.value)}
        required
      />

      <button type="submit"><b>Submit</b></button>
    </form>
  );
};

export default CreateEvent;
