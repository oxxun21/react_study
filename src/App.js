import React from "react";

import Clock from './exampleCode/clock';
import CommentList from "./exampleCode/commentList";
import NotificationList from './exampleCode/notificationList';
import Accommodate from './exampleCode/accommodate';
import ConfirmButton from "./exampleCode/confirmButton";
import LandingPage from './exampleCode/LandingPage';

function App() {
  return (
    <React.StrictMode>
      <LandingPage />
      <Accommodate />
      <CommentList />
      <NotificationList />
      <ConfirmButton />
    </React.StrictMode>
  );
}

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// })

export default App;