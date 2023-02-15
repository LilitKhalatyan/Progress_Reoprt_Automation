export const getAllStudents = async (): Promise<Response> => {
    const studentData =  await fetch("https://jsonplaceholder.typicode.com/users");
    return studentData.json();
}