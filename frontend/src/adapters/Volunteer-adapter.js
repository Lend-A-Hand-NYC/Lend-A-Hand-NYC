// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/volunteers';

export const createVolunteer = async ({ first_name, last_name, username, password, zip, bio, skills, heard_about, interest, availability }) => {
  return fetchHandler(baseUrl, getPostOptions({ first_name, last_name, username, password, zip, bio, skills, heard_about, interest, availability }))
};
