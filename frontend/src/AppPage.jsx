import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import PublishPage from './pages/PublishPage';
import RegisterPage from './pages/RegisterPage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import NotFound from './pages/NotFound';
import Header from './components/header';
import OpportunityPage from './pages/OpportunityPage';
import TeacherAnalyticsPage from './pages/TeacherAnalyticsPage'
import Favorites from './pages/FavoritesPage';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/feed" element={<FeedPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/publish" element={<PublishPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/student-register/:id" element={<StudentRegisterPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/opportunity/:id" element={<OpportunityPage/>}/>
				<Route path="/teacher/data" element={<TeacherAnalyticsPage/>}/>
				<Route path="/favorites" element={<Favorites/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;