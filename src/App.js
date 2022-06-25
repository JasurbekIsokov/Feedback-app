import { useState } from "react";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./Data/FeedbackData";

import "./Assets/Styles/index.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
