import { TStudent } from '../types/students';

// app.get("/studentby/:id", getSudentById);
export const getStudentByIdService = async (id: string): Promise<Response> => {
  const student = await fetch(`http://localhost:3303/studentby/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return student.json();
};

// app.get("/student/all/:id", getAllStudentsByCourse);
export const getAllStudentsByCourseService = async (id: string): Promise<Response> => {
  const studentData = await fetch(`http://localhost:3303/student/all/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return studentData.json();
};

// app.put("/student/update/:id", updateSudent);
export const updateStudentByIdService = async (id: string): Promise<Response> => {
  const studentData = await fetch(
    `http://localhost:3303/student/update/${id}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return studentData.json();
};

// app.delete("/student/delete/:id", deleteStudent);
export const deleteStudentByIdService = async (id: string): Promise<Response> => {
  const studentData = await fetch(
    `http://localhost:3303/student/delete/${id}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return studentData.json();
};

// app.post("/student/create", createStudent);
export const createStudentService = async (data: TStudent): Promise<Response> => {
  const studentData = await fetch(`http://localhost:3303/student/create`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        ...data,
    }),
  });
  return studentData.json();
};
