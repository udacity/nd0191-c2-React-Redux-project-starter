import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
    return (
        <div className="container mt-3">
            <h2>Leader Board</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="row">
                                        <div className="col-6 col-sm-1">
                                            <img src={user?.avatarURL} style={{ height: '50px', width: '50px', marginRight: '10px' }} className="card-img-top" alt="User" />
                                        </div>
                                        <div className="col-6 col-sm-8">
                                            <span style={{ fontWeight: 'bold' }}>{user.name}</span>
                                            <br />{user.id}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>{Object.keys(user.answers).length}</td>
                                <td style={{ verticalAlign: 'middle' }}>{user.questions.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ users }) => ({
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
});

export default connect(mapStateToProps)(Leaderboard);
