import axios from 'axios' ;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc3NpbmUyMDA2QGdtYWlsLmNvbSIsImlhdCI6MTY5ODMyNTgwMX0.9dYjYvPawimuY_nQvze8QuxU_cenUZCUztKqvFN7TtA' ;
const AuthAxios = axios.create({
    baseURL : 'http://localhost:4000' ,
    headers : {
        authorization : `Bearer ${token}` ,
    }
}) ;

export default AuthAxios ;
