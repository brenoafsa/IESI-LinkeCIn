import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import PublishPage from './pages/PublishPage';
import RegisterPage from './pages/RegisterPage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import NotFound from './pages/NotFound';
import Header from './components/header';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/feed" element={<FeedPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/publish" element={<PublishPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/student-register/:id" element={<StudentRegisterPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;