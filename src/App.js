import Header from "./component/Header";
import Layout from "./component/Layout";
import Speaker from "./component/speaker/Speaker";
import {AuthProvider} from "./context/AuthContext";

const App = () => {

  return (
    <AuthProvider>
      <Layout startingTheme="light">
        <div>
          <Header/>
          <Speaker/>
        </div>
      </Layout>
    </AuthProvider>
  );

};

export default App;