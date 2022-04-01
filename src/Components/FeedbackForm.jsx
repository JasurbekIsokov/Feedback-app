import React, { useState, useContext } from "react";

import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === " ") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== " " && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    addFeedback(newFeedback);
    setBtnDisabled(true);
    setText(" ");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would are rate your dervice with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
