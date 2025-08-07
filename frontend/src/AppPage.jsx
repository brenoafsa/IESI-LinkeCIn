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
import TeacherAnalyticsPage from './pages/TeacherAnalyticsPage';
import Favorites from './pages/FavoritesPage';
import MoreInfo from './pages/ViewMorePage';
import SelectCandidates from './pages/SelectCandidates';
import ParticipationHistory from './pages/HistoryPage';
import StudentAnalyticsPage from './pages/StudentAnalyticsPage';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/student-register/:id" element={<StudentRegisterPage />} />
				<Route path="/feed" element={<FeedPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/publish" element={<PublishPage />} />
				<Route path="/opportunity/:id" element={<OpportunityPage/>}/>
				<Route path="/teacher/data" element={<TeacherAnalyticsPage/>}/>
				<Route path="/student/data" element={<StudentAnalyticsPage/>}/>
				<Route path="/favorites" element={<Favorites/>}/>
				<Route path="/more-info" element={<MoreInfo/>}/>
				<Route path='/select/:id' element={<SelectCandidates/>}/>
				<Route path='/history' element={<ParticipationHistory/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;