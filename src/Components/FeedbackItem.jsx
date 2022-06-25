import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";

function FeedbackItem({ item, deleteHandle }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteHandle(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
