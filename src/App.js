import React from "react";

import Clock from './exampleCode/clock';
import CommentList from "./exampleCode/commentList";
import NotificationList from './exampleCode/notificationList';
import Accommodate from './exampleCode/accommodate';
import ConfirmButton from "./exampleCode/confirmButton";
import LandingPage from './exampleCode/LandingPage';
import AttendanceBook from "./exampleCode/AttendanceBook";

function App() {
  return (
    <React.StrictMode>
      <Clock />
      <LandingPage />
      <Accommodate />
      <CommentList />
      <NotificationList />
      <ConfirmButton />
      <AttendanceBook />
    </React.StrictMode>
  );
}

export default App;