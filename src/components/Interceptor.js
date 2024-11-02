import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const Interceptor = ({children, loggedIn}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authorizedUser}) => ({
    loggedIn: !!authorizedUser,
});

export default connect(mapStateToProps)(Interceptor);