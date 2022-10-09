import React from 'react';
import ReactDOM from 'react-dom/client';

import Clock from './exampleCode/clock';
import CommentList from "./exampleCode/commentList";
import NotificationList from './exampleCode/notificationList';
import Accommodate from './exampleCode/accommodate';
import ConfirmButton from "./exampleCode/confirmButton";
import LandingPage from './exampleCode/LandingPage';

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


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import Clock from './clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// })