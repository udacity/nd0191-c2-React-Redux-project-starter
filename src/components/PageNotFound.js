import { connect } from "react-redux";

const PageNotFound = () => {
    return (
        <div>
            <h1 className="text-center">Error 404</h1>
            <h2 className="text-center">Page not found</h2>
        </div>
    );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PageNotFound);
