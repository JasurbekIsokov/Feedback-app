import React, { useState, useContext, useEffect } from "react";

import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false); // Buttonni bosishga ruhsat
      setText(feedbackEdit.item.text); // Edit qilinayotgan feedback texti
      setRating(feedbackEdit.item.rating); // feedbackning rating raqami
    }
  }, [feedbackEdit]);

  // input bosilganda ishlaydigan f-ya
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

  // Card bosilganda ishlaydigan f-ya
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setBtnDisabled(true); // bo'sh feedbackni saqlamaslik uchun
    setText(""); // saqalagandan so'ng cardni bo'shatish uchun
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
