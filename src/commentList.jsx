import React from "react";
import Comment from "./comment";

const comments = [
    {
        name: "ㅇㅇ",
        comment : "ㅎㅇ",
    },
    {
        name: "ㅇㅇ",
        comment : "ㅎㅇ",
    },
    {
        name: "ㅇㅇ",
        comment : "ㅎㅇ",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
} 

export default CommentList;