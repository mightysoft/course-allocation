import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';


import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

// redux staff
import { useSelector, useDispatch } from 'react-redux';
import { selectCourseAllocation } from './courseAllocationSlice';
import { fetchCourseAllocationData } from './courseAllocationActions';

const CourseAllocationTable = () => {
  let rowsData = [];

  const courseAllocationData = useSelector(selectCourseAllocation);
  const dispatch = useDispatch();

  useEffect(() => {
    const featchData = async () => dispatch(await fetchCourseAllocationData());
    featchData();
  }, [dispatch]);
  
  // storing users data in rows data
  if (courseAllocationData.allData)
    courseAllocationData.allData.forEach(cdata =>
      rowsData.push({
        id: cdata._id,
        TERM: `${cdata.session.term.term} ${cdata.session.level.level} ${cdata.session.batch.batchName}`,
        SECTION: cdata.course.map(course =>
          course.section.map(section => (
            <p key={section._id}>{section.sectionName}</p>
          ))
        ),
        CRE: cdata.course.map(course => (
          <p key={course._id}>{course.course.credit}</p>
        )),
        CODE: cdata.course.map(course => (
          <p key={course._id}>{course.course.course_code}</p>
        )),
        COURSE_NAME: cdata.course.map(course => (
          <p key={course._id}>{course.course.course_name}</p>
        )),
        TEACHER: cdata.course.map(course => (
          <p key={course.teacher._id} title={course.teacher.takenCredit}>
            {course.teacher.teacherInitial}
          </p>
        )),
      })
    );
  const data = {
    columns: [
      {
        label: 'TERM',
        field: 'TERM',
        sort: 'asc',
      },
      {
        label: 'SECTION',
        field: 'SECTION',
        sort: 'asc',
      },
      {
        label: 'CRE',
        field: 'CRE',
        sort: 'asc',
      },
      {
        label: 'CODE',
        field: 'CODE',
        sort: 'asc',
      },
      {
        label: 'COURSE NAME',
        field: 'COURSE_NAME',
        sort: 'asc',
      },
      {
        label: 'TEACHER',
        field: 'TEACHER',
        sort: 'asc',
      },
    ],
    rows: rowsData,
  };
  return (
    <div>
      {courseAllocationData.isLoading ? (
        <div className='m-5 p-5 mx-auto center text-center'>
          <span className='sr-only'>Loading...</span>
          <div className='spinner-border' role='status'></div>
        </div>
      ) : (
        <div className="course-allocation-data-table mt-4 pt-4">
          <h4>Course Allocation Table : </h4>
        <MDBDataTable bordered small data={data} />
        </div>
      )}
    </div>
  );
};

export default CourseAllocationTable;
