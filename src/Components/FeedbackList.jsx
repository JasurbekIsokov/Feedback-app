import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteHandle }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              deleteHandle={deleteHandle}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} deleteHandle={deleteHandle} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
