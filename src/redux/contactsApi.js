import axios from 'axios';

/* axios.defaults.baseURL = 'http://localhost:3000'; */

export async function fetchContacts() {
    const { data } = await axios.get('http://localhost:3001/contacts');
    console.log(data)
    return data;
};

