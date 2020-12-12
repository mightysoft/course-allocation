import axios from 'axios';
import { setDataLoading, getCourseAllocationData } from './courseAllocationSlice';

// get / read
export const fetchCourseAllocationData = () => dispatch => {
    dispatch(setDataLoading())
  axios
    .get('http://localhost:8000/api/course-allocation/')
    .then(res => {
      dispatch(getCourseAllocationData(res.data.data));
    console.log('cadata ', res);
    })
    .catch(err => console.log('err ', err.response));
};

// // add / create
// export const newUser = body => dispatch => {
//   dispatch(addUser(body));
// };

// // remove / delete
// export const removeUser = id => dispatch => {
//   dispatch(deleteUser(id));
// };

// // update
// export const modifyUser = body => dispatch => {
//   dispatch(updateUser(body));
// };
