// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/organization';

export const createOrganization = async ({ username, password,org_name,about_org,adress,zip,cause }) => {
  return fetchHandler(baseUrl, getPostOptions({ username, password,org_name,about_org,adress,zip,cause }))
};

// // For this one adapter, if an error occurs, we handle it here by printing
// // the error and return an empty array
// export const getAllUsers = async () => {
//   const [, error] = await fetchHandler(baseUrl);
//   if (error) console.log(error); // print the error for simplicity.
//   return users || [];
// };

// export const getUser = async (id) => {
//   return fetchHandler(`${baseUrl}/${id}`);
// }

// export const updateUsername = async ({ id, username }) => {
//   return fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
//}

