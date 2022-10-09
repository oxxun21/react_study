import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentList from "./commentList";
import NotificationList from './notificationList';
import Accommodate from './accommodate';
import ConfirmButton from "./confirmButton";
import LandingPage from './LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <LandingPage />
      <Accommodate />
      <CommentList />
      <NotificationList />
      <ConfirmButton />
    </React.StrictMode>
);
