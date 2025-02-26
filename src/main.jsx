import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Events from './Events.jsx';

import AcademicsPage from './AcademicsPage.jsx';
import PlacementsPage from './PlacementsPage.jsx';
import ClubsPage from './ClubsPage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import Discussions from './Discussions.jsx';
import MembershipSystem from './MembershipPage.jsx';
import Announcements from './Announcements.jsx';
import TimetablePage from './TimetablePage.jsx';
import JoinClubForm from './JoinForm.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<App />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/announcements" element={<Announcements />}/>
        <Route path="/timetable" element={<TimetablePage />}/>
        <Route path="/membership" element={<MembershipSystem/>} />
        <Route path="/clubs/joinrequest" element={<JoinClubForm/>} />

      


      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
