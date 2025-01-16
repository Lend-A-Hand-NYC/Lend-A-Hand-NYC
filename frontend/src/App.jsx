
import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import SignUpPage from './pages/SignUpPage'; 
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import CreateEvent from './components/CreateEvent';
import OrganizationSignupForm from './pages/OrganizationSignupFormPage'; // Import Organization form
import VolunteerSignupForm from './pages/VolunteerSignupFormPage'; // Import Volunteer form
import SiteFooter from './components/SiteFooter';
import NewsPage from './pages/NewsPage';
import EventFeed from './pages/EventFeedPage'

export default function App() {
  const { setCurrentUser } = useContext(UserContext);



  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path='/sign-up' element={<SignUpPage />} />  */}
          <Route path='/sign-up/organization' element={<OrganizationSignupForm />} /> {/* Route for Organization sign-up */}
          <Route path='/sign-up/volunteer' element={<VolunteerSignupForm />} /> {/*Route for Volunteer sign-up*/}
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/event-feed' element={<EventFeed />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
