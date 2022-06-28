import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
// import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from "./Context/FeedbackContext";

import "./Assets/Styles/index.css";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
