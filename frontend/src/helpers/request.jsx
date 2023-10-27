import axios from 'axios' ;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc3NpbmUyMDA2QGdtYWlsLmNvbSIsImlhdCI6MTY5ODQxMjEyMn0.dMzCmigsC1h_n0XtOO-wg2puOUe9FLIsqM4rVLqyW5M' ;
const AuthAxios = axios.create({
    baseURL : 'http://localhost:4000' ,
    headers : {
        authorization : `Bearer ${token}` ,
    }
}) ;

export default AuthAxios ;
