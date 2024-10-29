// export default function HomePage() {
//   return <>
//     <h1>Home</h1>
//     <p>Put something interesting here!</p>
//   </>
// }
import React, { useState } from 'react';

const CreatePostButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    eventInfo: '',
    eventType: 'Short term',
    skills: '',
    volunteersNeeded: 1,
    dateTime: ''
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to post formData
    console.log('Submitted Data:', formData);
    toggleModal();
  };

  return (
    <div>
      <button onClick={toggleModal}>Create Event Post</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Event Post</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Event Info:
                <textarea
                  name="eventInfo"
                  value={formData.eventInfo}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Event Type:
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option value="Short term">Short term</option>
                  <option value="Long term">Long term</option>
                  <option value="Virtual">Virtual</option>
                </select>
              </label>
              <label>
                Skills Needed:
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Number of Volunteers:
                <input
                  type="number"
                  name="volunteersNeeded"
                  value={formData.volunteersNeeded}
                  min="1"
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Date/Time:
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={toggleModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostButton;
