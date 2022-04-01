import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./Shared/Card";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
