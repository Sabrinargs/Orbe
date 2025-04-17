import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import App from './App';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
           
        </Routes>
    );
}

export default Router;