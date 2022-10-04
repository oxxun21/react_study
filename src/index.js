import React from 'react';
import ReactDOM from 'react-dom/client';

import Clock from '../src/clock';
import CommentList from "../src/commentList";
import NotificationList from '../src/notificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
      <CommentList />
      <NotificationList />
    </React.StrictMode>
  );
})
