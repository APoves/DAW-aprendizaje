import axios from 'axios';
export const findAll = () => {

    axios.get('http://localhost:8080/users');
}