import { lazy, useContext, useEffect } from 'react';

// third party
import { Routes, Route, useNavigate } from 'react-router-dom';

// project imports
import Loadable from 'ui-component/Loadable';

// pages
// auth
const AuthPage = Loadable(lazy(() => import('views/auth')));
// teacher
const TeacherPage = Loadable(lazy(() => import('views/pages/teacher')));
// student
const StudentPage = Loadable(lazy(() => import('views/pages/student')));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<TeacherPage />} />
      <Route path="/login" element={<StudentPage />} />
      {/* <Route path="/" element={<AdminLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work-visit" element={<WorkVisitPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/user-management-add-form" element={<UserManagementAddForm />} />
      </Route> */}
    </Routes>
  );
}
