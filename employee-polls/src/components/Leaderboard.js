import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const sortedUserIds = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {sortedUserIds.map((uid) => {
            const user = users[uid];

            return (
              <tr key={user.id}>
                <td>
                  <div>
                    <img
                      src={user.avatarURL}
                      alt={`Avatar of ${user.name}`}
                      className="avatar"
                    />
                    <div>{user.name}</div>
                    <div>{user.id}</div>
                  </div>
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);
