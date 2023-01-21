import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const withAuth = (Component) => {

  return (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(AuthContext);

    return (
      <Component {...props}
                 loggedInUser={loggedInUser}
                 setLoggedInUser={setLoggedInUser}
      ></Component>
    );

  };
}

export default withAuth;
