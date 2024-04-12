import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Card = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{question.author}</div>
                <p className="text-xs italic">{new Date(question.timestamp).toDateString()}</p>
                <p className="underline underline-offset-4">Show</p>
            </div>
        </div>
        </Link>
    );
}

export default connect()(Card);


/*
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
 */
