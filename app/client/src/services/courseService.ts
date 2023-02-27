import { TCourse } from '../types/courseTypes';

export const createCourseService = async (data: TCourse): Promise<Response> => {
	const courseData = await fetch(`http://localhost:3303/courses/create`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...data,
		}),
	});
	return courseData;
};

export const getCourseByIdService = async (id: string): Promise<Response> => {
	const course = await fetch(`http://localhost:3303/course/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return course;
};


export const getAllCoursesService = async (): Promise<Response> => {
	const courseData = await fetch(`http://localhost:3303/courses/all`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return courseData;
};

// app.put("/courses/update/:id", updateCourse);
export const updateCourseByIdService = async (data: TCourse): Promise<Response> => {
	const courseData = await fetch(`http://localhost:3303/courses/update/${data.id}`, {
		method: 'PUT',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...data,
		}),
	});
	return courseData;
};

// app.delete("/courses/delete/:id", deleteCourse);
export const deleteCourseByIdService = async (id: any): Promise<Response> => {
	const courseData = await fetch(`http://localhost:3303/courses/delete/${id}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return courseData;
};

