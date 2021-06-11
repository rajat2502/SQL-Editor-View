import axios from 'axios';

const key = process.env.VUE_APP_RAPID_API_KEY;
const baseURL = process.env.VUE_APP_RAPID_API_URL;

/**
 *
 * @param {object} body - a submission object that contains the code that is to be compiled
 * @returns - submission token
 */

const getSubmissionToken = async (body) => {
  try {
    const options = {
      method: 'POST',
      url: `${baseURL}`,
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
      },
      data: body,
    };
    console.log();
    const data = await axios.request(options);
    return data.data.token;
  } catch (err) {
    return err.response;
  }
};

/**
 *
 * @param {string} token - a unique string used to get the subimission details of a particular submission
 * @returns - an object with all the details of the submission
 */
const getSubmissionDetails = async (token) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseURL}/${token}`,
      params: { fields: '*' },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    return err.response;
  }
};

// Get submission body
const getBody = (code) => {
  return {
    language_id: 82,
    source_code: `CREATE TABLE students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        gender TEXT NOT NULL,
        age INTEGER NOT NULL
      );
      INSERT INTO students VALUES (1, 'Pranav', 'Male', 20);
      INSERT INTO students VALUES (2, 'Prachi', 'Female', 21);
      INSERT INTO students VALUES (3, 'Parul', 'Female', 19);
      INSERT INTO students VALUES (4, 'Rohit', 'Male', 22);
      INSERT INTO students VALUES (5, 'Kamla', 'Female', 20);
      INSERT INTO students VALUES (6, 'Rajat', 'Male', 21);
      INSERT INTO students VALUES (7, 'Nihal', 'Male', 22);
      INSERT INTO students VALUES (8, 'Anshu', 'Male', 22);
      ${code}
      `,
  };
};

/**
 * @param {object} body - object that contains all the submission inputs
 * @returns - the object will all submission details
 */
export const runCode = async (code) => {
  try {
    const token = await getSubmissionToken(getBody(code));
    const data = await getSubmissionDetails(token);
    console.log(data);
    return data;
  } catch (err) {
    return { error: err };
  }
};
