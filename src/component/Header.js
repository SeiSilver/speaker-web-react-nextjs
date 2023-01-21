import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import withAuth from "../hoc/withAuth";

const Header = ({loggedInUser, setLoggedInUser}) => {

  const {theme} = useContext(ThemeContext);

  const LoggedIn = ({loggedInUser, setLoggedInUser}) => {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>&nbsp;&nbsp;
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoggedInUser("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  const NotLoggedIn = ({loggedInUser, setLoggedInUser}) => {
    return (
      <button
        className="btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          const username = window.prompt("Enter Login Name:", "");
          const password = window.prompt("Enter Password:", "");
          if (password === "admin123") {
            setLoggedInUser(username);
          } else {
            window.alert("Password is incorrect!");
          }
        }}
      >
        Login
      </button>
    );
  }

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png"/>
          </div>
          <div className={
            theme === "light" ? "" : "text-info"
          }>
            <h4 className="header-title">Web rác của SilverNeko</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <LoggedIn
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            ) : (
              <NotLoggedIn
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
