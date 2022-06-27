import React, { useState } from "react";

import Card from "./Shared/Card";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would are rate your dervice with us?</h2>
        {/* {@todo - rating select component } */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
