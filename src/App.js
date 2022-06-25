import { useState } from "react";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./Data/FeedbackData";

import "./Assets/Styles/index.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} deleteHandle={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
