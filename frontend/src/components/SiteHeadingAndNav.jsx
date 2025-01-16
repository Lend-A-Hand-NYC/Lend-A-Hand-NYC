import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../Assets/Lend_A_Hand.png"

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <img src={logo} alt="Logo" style={{ height: '80px', width: "150px", marginRight: '20px' }} />

    <nav>
      <ul>


        <li><NavLink to='/'>Home</NavLink></li>

        {
          currentUser
            ? <>

              <li><NavLink to='/event-feed' end={true}>Event Feed</NavLink></li>
              <li><NavLink to='/news' end={true}> News</NavLink></li>
              <li><NavLink to='/users' end={true}>Users</NavLink></li>
              <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
              <li><NavLink to='/create-event' end={true}>Create Event</NavLink></li>


            </>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up/volunteer'>Volunteer Sign Up</NavLink></li>
              <li><NavLink to='/sign-up/Organization'>Organization Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;

}
