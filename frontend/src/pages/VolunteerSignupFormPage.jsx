import React, { useState, useContext } from 'react';
import { createVolunteer } from '../adapters/Volunteer-adapter';
import { useNavigate } from "react-router-dom";

export default function VolunteerSignupForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zip, setZip] = useState(''); 
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [heard_about, setHeardAbout] = useState('');
  const [interest, setInterest] = useState('');
  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,

    
  });
   const navigate = useNavigate(); //

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/event-feed`);//


    // if (!firstName || !lastName || !username || !password || !zip || !skills || !heardAbout || !interest) {
    //   alert("Please fill out all required fields.");
    //   return;
    // }

    console.log("Form submitted with data:", {
      first_name,
      last_name,
      username,
      password,
      bio,
      zip,
      skills,
      heard_about,
      interest,
      availability,
      canPostOpportunities: false,

    });

    const [volunteer, error] = await createVolunteer({ first_name, last_name, username, password, zip, bio, skills, heard_about, interest, availability });
    if (error) return setErrorText(error.message);
    // const [user, userError] = await logUserIn(username, password);
    // console.log('USER TEST: ', user)
    // setCurrentUser(user);
    // navigate(`/users/${user.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 align="center">Volunteer Sign-Up</h2>
      <p align="center">
        Lend A Hand aims to make volunteering more accessible and convenient.
      </p>
      <label><b>First Name:</b></label>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label><b>Last Name:</b></label>
      <input
        type="text"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label><b>Username:</b></label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label><b>Password:</b></label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label><b>Zip Code:</b></label>
      <input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        required
      />
      <label><b>Bio:</b></label>
      <textarea
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />

      <label><b>Skills:</b></label>
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
      />

      <label><b>How did you find Lend A Hand?</b></label>
      <input
        type="text"
        value={heard_about}
        onChange={(e) => setHeardAbout(e.target.value)}
        required
      />

      <label><b>Interest:</b></label>
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        required
      >
        <option value="education">Education</option>
        <option value="homelessness">Homelessness</option>
        <option value="environmental">Environmental Conservation</option>
        <option value="animal">Animal Welfare</option>
      </select>
      <p></p>

      <label><b>Availability</b>:</label>
      <p></p>

      <label>Monday</label>
      <input
        type="checkbox"
        name="monday"
        checked={availability.monday}
        onChange={handleAvailabilityChange}
      />


      <label>Tuesday </label>
      <input
        type="checkbox"
        name="tuesday"
        checked={availability.tuesday}
        onChange={handleAvailabilityChange}
      />

      <label>Wednesday </label>
      <input
        type="checkbox"
        name="wednesday"
        checked={availability.wednesday}
        onChange={handleAvailabilityChange}
      />

      <label>Thursday</label>
      <input
        type="checkbox"
        name="thursday"
        checked={availability.thursday}
        onChange={handleAvailabilityChange}
      />

      <label>Friday</label>
      <input
        type="checkbox"
        name="friday"
        checked={availability.friday}
        onChange={handleAvailabilityChange}
      />


      <label> Saturday </label>
      <input
        type="checkbox"
        name="saturday"
        checked={availability.saturday}
        onChange={handleAvailabilityChange}
      />


      <label>Sunday</label>
      <input
        type="checkbox"
        name="sunday"
        checked={availability.sunday}
        onChange={handleAvailabilityChange}
      />

      <p></p>
      <button type="submit">Sign Up as Volunteer</button>
      
    </form>

  );
}





// import React, { useState } from 'react';

// export default function VolunteerSignupForm() {
//   const [volunteerDetails, setVolunteerDetails] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: '',
//     zip: '',
//     skills: '',
//     heardAbout: '',
//     availability: {
//       monday: false,
//       tuesday: false,
//       wednesday: false,
//       thursday: false,
//       friday: false,
//       saturday: false,
//       sunday: false,
//     },
//     interest: '',
//     canPostOpportunities: false, // Volunteers cannot post opportunities
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setVolunteerDetails((prev) => ({
//         ...prev,

//         availability: { ...prev.availability, [name]: checked },
//       }));

//     } else {
//       setVolunteerDetails({ ...volunteerDetails, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic 
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 align="center">
//         Volunteer Sign-Up
//       </h2>
//       <p align="center">
//         Lend A Hand aims to make volunteering more accessible and convenient.
//       </p>
//       <label>First Name:</label>
//       <input type="text" name="firstName" onChange={handleChange} required />

//       <label>Last Name:</label>
//       <input type="text" name="lastName" onChange={handleChange} required />

//       <label>Username:</label>
//       <input type="text" name="username" onChange={handleChange} required />

//       <label>Password:</label>
//       <input type="password" name="password" onChange={handleChange} required />

//       <label>Zip Code:</label>
//       <input type="text" name="zip" onChange={handleChange} required />

//       <label>Skills:</label>
//       <input type="text" name="skills" onChange={handleChange} required />

//       <label>How did you hear about Lend A Hand?</label>
//       <input type="text" name="heardAbout" onChange={handleChange} required />


//       <label>Interest:</label>
//       <select name="interest" onChange={handleChange} required>
//         <option value="education">Education</option>
//         <option value="homelessness">Homelessness</option>
//         <option value="environmental">Environmental Conservation</option>
//         <option value="animal">Animal Welfare</option>
//       </select>

//       <p></p>

//       <label>Availability:</label>
//       <p>Monday</p>

//       <div>
//         {['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ''].map((day) => (
//           <label key={day}>
//             <input
//               type="checkbox"
//               name={day}
//               checked={volunteerDetails.availability[day]}
//               onChange={handleChange}
//             />
//             {day.charAt(0).toUpperCase() + day.slice(1)}
//           </label>
//         ))}
//       </div>

//       <button type="submit">Sign Up as Volunteer</button>
//     </form>
//   );
// }

