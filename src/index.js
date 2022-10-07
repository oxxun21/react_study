import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentList from "../src/commentList";
import NotificationList from '../src/notificationList';
import Accommodate from '../src/accommodate';
import ConfirmButton from "../src/confirmButton";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Accommodate />
      <CommentList />
      <NotificationList />
      <ConfirmButton />
    </React.StrictMode>
);
