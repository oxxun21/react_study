import React, { useState, useEffect } from "react";
import Notification from "./Notification"

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        message: "안녕하세요, 오늘 점심을 알려드립니다.",
    },
    {
        message: "안녕하세요, 오늘 저녁을 알려드립니다.",
    },
];

let timer;

function NotificationListConvert(props) {
    const [ notification, setNotification ] = useState([]);

    useEffect(() => {
        const index = notification.length;
        if (notification && notification.length < reservedNotifications.length) {
            }
    }, [])

    return (
       <>
       
       </>
    )
}

export default NotificationListConvert;