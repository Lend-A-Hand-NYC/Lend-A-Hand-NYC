import React, { useEffect, useState } from 'react';
import logo from "../Assets/Lend_A_Hand.png";
import { updatePost,deletePost } from '../adapters/Post-adaptors';
import { useNavigate } from 'react-router-dom';


const api = {
    get: async (url) => {
        const response = await fetch(url); // Get request to URL
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
    }
    // put: async (url, data) => {
    //     const response = await fetch(url, {
    //         method: 'PUT', //  Put method updates resources
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data),
    //     });
    //     if (!response.ok) throw new Error('Failed to update data');
    //     return response.json();
    // },
    // delete: async (url) => {
    //     const response = await fetch(url, { method: 'DELETE' }); //  Delete request to URL

    //     if (!response.ok) throw new Error('Failed to delete data');
    // },
};


export default function EventPage() {
    const [events, setEvents] = useState([]); // State to the list of events fetched from the server
    const [editingEvent, setEditingEvent] = useState(null); // State to track which event is being edited
    const [updatedEvent, setUpdatedEvent] = useState({}); // store the updated event details while editing
    const navigate = useNavigate();


    // Fetch posts from the backend
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await api.get('/api/posts');
                setEvents(data); // Update events state with the fetched data
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();

    }, []);


    const handleDeletePost = async (id) => {

        try {
            // await api.delete(`/api/posts/${id}`);
            const [deletedPost,error] = await deletePost(id)
            // setEvents(events.filter((event) => event.id !== id)); // Remove deleted event from state 
            // navigate(`/event-feed`);
            window.location.reload();
        } catch (err) {
            console.error('Error deleting post:', err);
        }
    };
    

    const editPost = (event) => {
        setEditingEvent(event.id);
        setUpdatedEvent(event);
    };

    const savePost = async () => {
        try {
            // const updated = await api.put(`/api/posts/${editingEvent}`, updatedEvent); // PUT request to save updated event details
            // const updatePost
            const { id, event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed} = updatedEvent;
            console.log(id,updatedEvent );
            const [updatedPost, error] = await updatePost({id, event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed});
            console.log("UPDATED",updatedPost);
            if (error) return setErrorText(error.message);
            // setEvents(events.map((event) => (event.id === editingEvent ? updated : event))); // Replace the updated event in the state
            // setEditingEvent(null);
                         navigate(`/event-feed`);

        } catch (err) {
            console.error('Error updating post:', err);
        }
    };


    return (
        <div className="page-container">
            <h1 className="heading">GET INVOLVED!</h1>
            <div className="events-container">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={index} className="event-card">
                            {editingEvent === event.id ? (
                                <div className="event-content">
                                    <input
                                        type="text"
                                        value={updatedEvent.event_title}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, event_title: e.target.value })}
                                    />
                                    <textarea
                                        value={updatedEvent.event_info}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, event_info: e.target.value })}
                                    />
                                    <textarea
                                        value={updatedEvent.commitment_type}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, commitment_type: e.target.value })}
                                    />
                                    <textarea
                                        value={updatedEvent.skills}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, skills: e.target.value })}
                                    />
                                    <textarea
                                        value={updatedEvent.address}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, address: e.target.value })}
                                    />
                                    <textarea
                                        value={updatedEvent.event_date}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, event_date: e.target.value })}
                                    />

                                    <textarea
                                        value={updatedEvent.event_time}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, event_time: e.target.value })}
                                    />

                                    <textarea
                                        value={updatedEvent.volunteers_needed}
                                        onChange={(e) => setUpdatedEvent({ ...updatedEvent, volunteers_needed: e.target.value })}
                                    />

                                    <button onClick={savePost}>Save</button>
                                    <button onClick={() => setEditingEvent(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div className="event-content">
                                    <h2 className="event-title">{event.event_title}</h2>

                                    <label><b>Event Info:</b></label>
                                    <p className="event-description">{event.event_info}</p>

                                    <label><b>Commitment Type:</b></label>
                                    <p className="commitment-type">{event.commitment_type}</p>

                                    <label><b>Skills Needed:</b></label>
                                    <p className="skills">{event.skills}</p>

                                    <label><b>Address:</b></label>
                                    <p className="address">{event.address}</p>

                                    <label><b>Event Date:</b></label>
                                    <p className="event-date">{event.event_date}</p>

                                    <label><b>Event Time:</b></label>
                                    <p className="event-time">{event.event_time}</p>

                                    <label><b>Volunteers Needed:</b></label>
                                    <p className="volunteers-needed">{event.volunteers_needed}</p>

                                    <button onClick={() => editPost(event)}>Edit</button>
                                    <button onClick={() => handleDeletePost(event.id)}>Delete</button>

                                    <a rel="noopener noreferrer" className="event-link">
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <button className="event-button">RSVP</button>
                                        </div>
                                    </a>
                                </div>
                            )}
                            <img src={logo} alt="Logo" style={{ height: 'auto', width: "400px" }} />
                        </div>
                    ))
                ) : (
                    <p><b>No events available</b></p>
                )}
            </div>
        </div>
    );
}




// import React from 'react';



// export default function EventPage() {
//     const events = [
//         {
//             title: 'Food Drive',

//             description: 'Help us collect food for the homeless',
//             imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2019/04/homelessnewss-nyc-better-way.jpg?quality=75&strip=all',

//         },


//         {
//             title: 'Charity Run',
//             description: 'Come Volunteer and help raise money for local schools',
//             imageUrl: "https://www.citykidsmagazine.co.uk/wp-content/uploads/2021/09/Hero-Image_10-1.jpg"
//         },
//     ];

//     return (
//         <div className="page-container">
//             <h1 className="heading">GET INVOLVED !</h1>
//             <div className="events-container">
//                 {events.map((event, index) => (
//                     <div key={index} className="event-card">
//                         <div className="event-content">
//                             <h2 className="event-title">{event.title}</h2>
//                             <p className="event-description">{event.description}</p>
//                             <a

//                                 rel="noopener noreferrer"
//                                 className="event-link"

//                             >
//                                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                                     <button className="event-button">
//                                         RSVP
//                                     </button>
//                                 </div>

//                             </a>
//                         </div>
//                         <img src={event.imageUrl} alt={event.title} className="event-image" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
