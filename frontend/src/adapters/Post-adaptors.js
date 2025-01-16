// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions,deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/posts';

export const createPost = async ({ event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed }) => {
  return fetchHandler(baseUrl, getPostOptions({ event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed, }))
};

export const updatePost = async ({id, event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed}) => {
  console.log("ADAPTER", id);
  return fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed }))
};

export const deletePost = async (id) => {
  console.log("ADAPTER", id);
  return fetchHandler(`${baseUrl}/${id}`, deleteOptions)
};