import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import PublicLayout from './layout/PublicLayout';
import LoginForm from './components/LoginForm/LoginForm';
import Trainers from './pages/Trainers/Trainers';
import Groups from './pages/Courses/Courses';
import Reports from './pages/Reports/Reports';
import Students from './pages/Students/Students';
import Subjects from './pages/Subjects/Subjects';
import Settings from './pages/Settings/Settings';
import AuthLayout from './layout/AuthLayout';
import TrainerLayout from './layout/TrainerLayout';
import TrainersHompage from './pages/trainersHomepage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<MainLayout />}>
					<Route element={<PublicLayout />}>
						<Route path="/login" element={<LoginForm />} />
					</Route>
					<Route element={<AuthLayout />}>
						<Route element={<AdminLayout />}>
							<Route path="/" element={<Groups />} />
							<Route path="/trainers" element={<Trainers />} />
							<Route path="/courses" element={<Groups />} />
							<Route path="/students" element={<Students />} />
							<Route path="/subjects" element={<Subjects />} />
							<Route path="/reports" element={<Reports />} />
							<Route path="/settings" element={<Settings />} />
						</Route>
						<Route element={<TrainerLayout />}>
							<Route path="/trainershomepage" element={<TrainersHompage />} />
						</Route>
					</Route>
					<Route path="*" element={<div>asdfasdfasdf</div>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
