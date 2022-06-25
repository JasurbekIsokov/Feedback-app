import React from "react";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteHandle }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteHandle={deleteHandle} />
      ))}
    </div>
  );
}

export default FeedbackList;
