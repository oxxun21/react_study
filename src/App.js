import React from "react";

import Clock from './exampleCode/clock';
import CommentList from "./exampleCode/commentList";
import NotificationList from './exampleCode/notificationList';
import Accommodate from './exampleCode/accommodate';
import ConfirmButton from "./exampleCode/confirmButton";
import LandingPage from './exampleCode/LandingPage';
import AttendanceBook from "./exampleCode/AttendanceBook";
import SignUp from "./exampleCode/SignUp";
import Calculator from "./exampleCode/calculator";
import ProfileCard from "./exampleCode/ProfileCard";
import DarkOrLight from "./exampleCode/DarkOrLight";

function App() {
  return (
    <React.StrictMode>
      <AttendanceBook />
      <SignUp />
      <Calculator />
      <ProfileCard />
      <DarkOrLight />
    </React.StrictMode>
  );
}

export default App;