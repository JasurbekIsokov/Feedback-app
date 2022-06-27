import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./Data/FeedbackData";
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
<<<<<<< HEAD
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
=======
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats />
          <FeedbackList deleteHandle={deleteFeedback} />
>>>>>>> ed66bd4817670114fdb8e0766c443844c4fa4c6f
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
