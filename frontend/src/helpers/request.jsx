import axios from 'axios' ;

const token = localStorage.getItem('token') ;
const AuthAxios = axios.create({
    baseURL : 'http://localhost:4000' ,
    headers : {
        Authorization : `Bearer ${token}` ,
    }
}) ;

export default AuthAxios ;
