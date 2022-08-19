import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, NavBar } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element={<LoginPage/>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
};
