import { configureStore } from '@reduxjs/toolkit';
import courseAllocationReducer from '../features/CourseAllocation/courseAllocationSlice';

export default configureStore({
  reducer: {
    courseAllocation: courseAllocationReducer,
  },
});
