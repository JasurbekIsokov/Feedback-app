import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem.jsx";

import "./Assets/Styles/index.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
