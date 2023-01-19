import Header from "./component/Header";
import Layout from "./component/Layout";
import Speaker from "./component/speaker/Speaker";

const App = () => {

  return (
    <Layout startingTheme="light">
      <div>
        <Header/>
        <Speaker/>
      </div>
    </Layout>
  );

};

export default App;