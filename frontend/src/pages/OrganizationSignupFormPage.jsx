import React, { useState } from 'react';
import { createOrganization } from '../adapters/Org-adapter';
import { useNavigate } from "react-router-dom";


export default function OrganizationSignupForm() {
  const [heardAbout, setHeardAbout] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orgName, setOrgName] = useState('');
  const [aboutOrg, setAboutOrg] = useState('');
  const [adress, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [cause, setCause] = useState('');
  const navigate = useNavigate(); //

  const handleSubmit =  async (e) => {
    e.preventDefault();
    navigate(`/event-feed`);//

    console.log("Form submitted with data:", {
      heardAbout,
      username,
      password,
      orgName,
      aboutOrg,
      adress,
      zip,
      cause,
      canPostOpportunities: true ,
    });
    const [organization, error] = await createOrganization({ username, password, orgName, aboutOrg,adress,zip,cause });
   if (error) return setErrorText(error.message);


  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 align="center">Organization Sign-Up</h2>
      <p align="center">
        Lend A Hand aims to make volunteering more accessible and convenient.
      </p>

      <label><b>How did you find Lend A Hand?</b></label>
      <input
        type="text"
        value={heardAbout}
        onChange={(e) => setHeardAbout(e.target.value)}
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

      <label><b>Organization Name:</b></label>
      <input
        type="text"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        required
      />

      <label> <b>About the Organization:</b></label>
      <textarea
        value={aboutOrg}
        onChange={(e) => setAboutOrg(e.target.value)}
        required
      />

      <label><b>Address:</b></label>
      <input
        type="text"
        value={adress}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <label><b>Zip Code:</b></label>
      <input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        required
      />

      <label><b>Cause Supported:</b></label>
      <select
        value={cause}
        onChange={(e) => setCause(e.target.value)}
        required
      >
        <option value="education">Education</option>
        <option value="homelessness">Homelessness</option>
        <option value="environmental">Environmental Conservation</option>
        <option value="animal">Animal Welfare</option>
      </select>

      <p></p>
      <button type="submit"><b>Sign Up as Organization</b></button>
    </form>
  );
}



// import React, { useState } from 'react';

// export default function OrganizationSignupForm() {
//   const [organizationDetails, setOrganizationDetails] = useState({
//     heardAbout: '',
//     username: '',
//     password: '',
//     orgName: '',
//     aboutOrg: '',
//     address: '',
//     zip: '',
//     cause: '',
//     canPostOpportunities: true, // Lets org post opportunities
    
  
    
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(e.target);
//     setOrganizationDetails({ ...organizationDetails, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // form submission logic 
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 align="center">
//         Organization Sign-Up
//         </h2>
        
//       <p align="center">
//          Lend A Hand aims to make volunteering more accessible and convenient.
//     </p>
//       <label>How did you hear about Lend A Hand?</label>
//       <input type="text" name="heardAbout" onChange={handleChange} required />

//       <label>Username</label>
//       <input type="text" name="username" onChange={handleChange} required />

//       <label>Password</label>
//       <input type="password" name="password" onChange={handleChange} required />

//       <label>Organization Name</label>
//       <input type="text" name="orgName" onChange={handleChange} required />

//       <label>About the Organization</label>
//       <textarea name="aboutOrg" onChange={handleChange} required />

//       <label>Address</label>
//       <input type="text" name="address" onChange={handleChange} required />

//       <label>Zip Code</label>
//       <input type="text" name="zip" onChange={handleChange} required />

//       <label>Cause Supported</label>
//       <select name="cause" onChange={handleChange} required>
//         <option value="education">Education</option>
//         <option value="homelessness">Homelessness</option>
//         <option value="environmental">Environmental Conservation</option>
//         <option value="animal">Animal Welfare</option>
//       </select>
// <p></p>
//       <button type="submit">Sign Up as Organization</button>
//     </form>
//   );
// }
