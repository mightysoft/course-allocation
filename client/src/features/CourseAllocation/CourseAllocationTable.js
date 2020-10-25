import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { courseAllocationDataSample, teachers } from './data';

const CourseAllocationTable = () => {
  let rowsData = [];

  // storing users data in rows data
  courseAllocationDataSample.forEach(cdata =>
    rowsData.push({
      TERM: cdata.term,
      SECTION: cdata.section,
      CRE: cdata.course.map(el => <p>{el.cre}</p>),
      CODE: cdata.course.map(el => <p>{el.code}</p>),
      COURSE_NAME: cdata.course.map(el => <p>{el.name}</p>),
      TEACHER: cdata.course.map(el => <p title={teachers.find(teacher => teacher.teacherInitial === el.teacherInitial).creditTaken}>{el.teacherInitial}</p>),
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
  return <MDBDataTable bordered small data={data} />;
};

export default CourseAllocationTable;
