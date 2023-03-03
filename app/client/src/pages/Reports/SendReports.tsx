import React from 'react';
import Button from '../../components/Button/Button';

import './reports.scss';

const reportData: any = [
  {
    id: 1,
    name: 'Nairi',
    surname: 'Nairyan',
    email: 'derred1245@gmail.com',
    courseId: 1,
  },
  [
    {
      id: 2,
      name: 'Ann',
      surname: 'Vardazaryan',
      subjects: [
        {
          id: 1,
          name: 'js_',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 1,
              attendance: 100,
              graduate: 18,
              comment: 'aaaaa',
              edited_comment: null,
              studentId: 1,
              subjectId: 1,
              createdAt: '2023-02-28T05:59:03.000Z',
              updatedAt: '2023-02-28T05:59:03.000Z',
              staffId: 2,
            },
          ],
        },
        {
          id: 2,
          name: 'html_css',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 2,
              attendance: 100,
              graduate: 15,
              comment: 'aaaaa',
              edited_comment: null,
              studentId: 1,
              subjectId: 2,
              createdAt: '2023-02-28T05:59:12.000Z',
              updatedAt: '2023-02-28T05:59:12.000Z',
              staffId: 2,
            },
          ],
        },
        {
          id: 5,
          name: 'js_part_one',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 5,
              attendance: 100,
              graduate: 15,
              comment: 'aaaaa',
              edited_comment: null,
              studentId: 1,
              subjectId: 5,
              createdAt: '2023-02-28T05:59:53.000Z',
              updatedAt: '2023-02-28T05:59:53.000Z',
              staffId: 2,
            },
          ],
        },
      ],
    },
    {
      id: 93,
      name: 'Anna',
      surname: 'Surenyan',
      subjects: [
        {
          id: 10,
          name: 'continius',
          courseId: 1,
          staffId: 93,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 20,
              attendance: 100,
              graduate: 15,
              comment: 'Super women',
              edited_comment: null,
              studentId: 1,
              subjectId: 10,
              createdAt: '2023-03-02T17:39:50.000Z',
              updatedAt: '2023-03-02T17:39:50.000Z',
              staffId: 93,
            },
          ],
        },
        {
          id: 10,
          name: 'DevOps',
          courseId: 1,
          staffId: 93,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 20,
              attendance: 100,
              graduate: 15,
              comment: 'Super women',
              edited_comment: null,
              studentId: 1,
              subjectId: 10,
              createdAt: '2023-03-02T17:39:50.000Z',
              updatedAt: '2023-03-02T17:39:50.000Z',
              staffId: 93,
            },
          ],
        },
      ],
    },
    {
      id: 93,
      name: 'Tom',
      surname: 'Sargsyan',
      subjects: [
        {
          id: 10,
          name: 'html',
          courseId: 1,
          staffId: 93,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 20,
              attendance: 100,
              graduate: 15,
              comment: 'Super women',
              edited_comment: null,
              studentId: 1,
              subjectId: 10,
              createdAt: '2023-03-02T17:39:50.000Z',
              updatedAt: '2023-03-02T17:39:50.000Z',
              staffId: 93,
            },
          ],
        },
        {
          id: 10,
          name: 'css',
          courseId: 1,
          staffId: 93,
          max_score: 20,
          weightage: null,
          trainer_reports: [
            {
              id: 20,
              attendance: 100,
              graduate: 15,
              comment: 'Super women',
              edited_comment: null,
              studentId: 1,
              subjectId: 10,
              createdAt: '2023-03-02T17:39:50.000Z',
              updatedAt: '2023-03-02T17:39:50.000Z',
              staffId: 93,
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: 2,
      name: 'Ann',
      surname: 'Vardazaryan',
      subjects: [
        {
          id: 3,
          name: 'asses_aaaa',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: 80,
          trainer_reports: [
            {
              id: 3,
              attendance: 100,
              graduate: 11,
              comment: 'aaaaa',
              edited_comment: null,
              studentId: 1,
              subjectId: 3,
              createdAt: '2023-02-28T05:59:23.000Z',
              updatedAt: '2023-02-28T05:59:23.000Z',
              staffId: 2,
            },
          ],
        },
        {
          id: 4,
          name: 'assessment',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: 15,
          trainer_reports: [
            {
              id: 4,
              attendance: 100,
              graduate: 15,
              comment: 'It is Ok',
              edited_comment: null,
              studentId: 1,
              subjectId: 4,
              createdAt: '2023-02-28T05:59:47.000Z',
              updatedAt: '2023-02-28T05:59:47.000Z',
              staffId: 2,
            },
          ],
        },
        {
          id: 6,
          name: 'assessssment',
          courseId: 1,
          staffId: 2,
          max_score: 20,
          weightage: 5,
          trainer_reports: [
            {
              id: 6,
              attendance: 100,
              graduate: 15,
              comment: 'Good Work',
              edited_comment: null,
              studentId: 1,
              subjectId: 6,
              createdAt: '2023-02-28T14:47:06.000Z',
              updatedAt: '2023-02-28T14:47:06.000Z',
              staffId: 2,
            },
          ],
        },
      ],
    },
    {
      id: 93,
      name: 'Anna',
      surname: 'Surenyan',
      subjects: [],
    },
  ],
];

const getFinalAssessmentScore = (data: any) => {
  let finalAssessmentPass = 0;
  data[2].forEach((el: any) => {
    finalAssessmentPass += el.subjects.reduce((acc: number, el: any) => {
      return acc + (el.weightage * ((el.trainer_reports[0].graduate * 100) / el.max_score)) / 100;
    }, 0);
  });
  return finalAssessmentPass;
};

const getFinalAttendance = (data: any) => {
  let count = 0;
  let sum = 0;
  data[1]
    .map((el: any) => {
      let sum = el.subjects.reduce((acc: number, el: any) => {
        return acc + el.trainer_reports[0].attendance;
      }, 0);
      return [sum, el.subjects.length];
    })
    .forEach((el: any) => {
      count += el[1];
      sum += el[0];
    });
  return sum / count + '%';
};

const SendReports: React.FC = () => {
  return (
    <div className="report__container">
      <div className="report__content">
        <h1 className="main-title report-title">Davit Hayrapetyan</h1>
        <table className="report-table" border={1} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th colSpan={2} className="th-result">
                ASSESSMENT RESULT
              </th>
            </tr>
            <tr>
              <td colSpan={1} className="td-assessment">
                Assessment
              </td>
              <td colSpan={1}>
                100/
                {getFinalAssessmentScore(reportData)}
              </td>
            </tr>
            <tr>
              <td colSpan={1}>Attendance</td>
              <td colSpan={1}>
                100%/
                {getFinalAttendance(reportData)}
              </td>
            </tr>
          </thead>
        </table>
        <table className="report-table" border={1} cellPadding={5} cellSpacing={5}>
          <tbody>
            <tr>
              <th colSpan={3} className="th-result">
                HOMEWORK RESULT
              </th>
            </tr>
            <tr>
              <th colSpan={1} className="th-result">
                Trainer
              </th>
              <th colSpan={1} className="th-result">
                Topic
              </th>
              <th colSpan={1} className="th-result">
                Result
              </th>
            </tr>
            {reportData[1].map((i: any) => {
              let trainerName = i.name + ' ' + i.surname;
              let rowSpan = 0;
              return i.subjects.map((item: any, itemIndex: number) => {
                ++rowSpan;
                return (
                  <tr>
                    {itemIndex === 0 ? <td rowSpan={i.subjects.length}>{trainerName}</td> : null}
                    <td>{item.name}</td>
                    <td>
                      {item.max_score}/{item.trainer_reports[0].graduate}
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
        <div className="feedback__content">
          <h3 className='feedback-title'>ASSESSMENT FEEDBACK</h3>
          <div className="feedback-body">
            {reportData[2].map((i: any, iIndex: number) => {
              return i.subjects.map((item: any, itemIndex: number) => {
                return (
                  <textarea name="" id="" cols={30} rows={5}>
                    {item.trainer_reports[0].comment}
                  </textarea>
                );
              });
            })}
          </div>
        </div>
        <div className="send-btn">
          <Button value="Send Report" className="btn-modal" />
        </div>
      </div>
    </div>
  );
};

export default SendReports;
