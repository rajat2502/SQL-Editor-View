import axios from 'axios';

const key = process.env.VUE_APP_RAPID_API_KEY;
const baseURL = process.env.VUE_APP_RAPID_API_URL;

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
    console.log(err.response);
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
    console.log(err.response);
  }
};

const getBody = (code) => {
  return {
    language_id: 82,
    source_code: `CREATE TABLE students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        gender TEXT NOT NULL
      );
      INSERT INTO students VALUES (1, 'Ryan', 'M');
      INSERT INTO students VALUES (2, 'Joanna', 'F');
      INSERT INTO students VALUES (3, 'Rebecca', 'F');
      INSERT INTO students VALUES (4, 'Johm', 'M');
      INSERT INTO students VALUES (5, 'Kamla', 'F');
      INSERT INTO students VALUES (6, 'Rajat', 'M');
      INSERT INTO students VALUES (7, 'Nihal', 'M');
      INSERT INTO students VALUES (8, 'Rohit', 'M');
      ${code}
      `,
  };
};

/**
 * @param {object} body - object that contains all the submission inputs
 * @returns - the object will all submission details
 */
export const runCode = async (code) => {
  const token = await getSubmissionToken(getBody(code));
  const data = await getSubmissionDetails(token);
  return data.stdout;
};
