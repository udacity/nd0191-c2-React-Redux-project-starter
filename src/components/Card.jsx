import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Card=({author,question})=>{
  return(
    <div className="bg-gray-700 p-4 rounded-lg mb-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
          <img src={author?.avatarURL} alt="Author" className="w-12 h-12 rounded-full border border-gray-600" />
          <div>
            <p className="font-semibold">{question.author}</p>
            <p className="text-sm text-gray-400">{new Date(question.timestamp).toDateString()}</p>
          </div>
          <Link to={`/questions/${question.id}`} className="underline underline-offset-4">Details</Link>
      </div>

    </div>
  );

}
export default connect()(Card);