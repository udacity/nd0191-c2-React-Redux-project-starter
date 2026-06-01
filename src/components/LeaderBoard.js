import {connect} from "react-redux";

const Leaderboard=({users})=>{
    return (
        <div>
            <h1 className="text-3xl font-bold mt-9 text-gray-200 text-center">Leaderboard</h1>
            
  
            <div className="overflow-hidden bg-gray-800 rounded-xl border border-gray-700 mt-6">
              <table className="table-auto w-full text-sm">
                  <thead className="table-header-group px-6 py-4 text-slate-400 text-left">
                  <tr className="table-row">
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-5 pb-5 text-slate-400 dark:text-slate-200 text-left">Name</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-5 pb-5 text-slate-400 dark:text-slate-200 text-left">Answered</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-5 pb-5 text-slate-400 dark:text-slate-200 text-left">Polls</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                  {
                    users.map((user, index)=>{
                      let rank= index+1;
                      return (
                      <tr key={user.id}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-slate-800 dark:text-slate-100">{rank}-</span>
                            <img
                              src={user.avatarURL || "https://via.placeholder.com/40"}
                              alt={`${user.name}'s avatar`}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-800 dark:text-slate-100 pt-5 pb-0">{user.name}</span>
                              <span className="text-sm text-slate-500 dark:text-slate-400 pt-0 pb-5">{user.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                          {Object.keys(user.answers).length}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                          {user.questions.length}
                        </td>
                      </tr>

                      );
                    })
                  }
                  </tbody>

                  
              </table>
            </div>

        </div>
    );
};
const mapStateToProps=({users})=>({
  users: Object.values(users).sort((a, b)=>{
    const scoreA = Object.keys(a.answers).length+ a.questions.length;
    const scoreB = Object.keys(b.answers).length+ b.questions.length;

    return scoreB-scoreA;
  }),
});


export default connect(mapStateToProps)(Leaderboard);