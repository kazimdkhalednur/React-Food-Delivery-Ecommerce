import Layout from "./components/Layout/Layout";
import CheckAuthenticated from "./utils/CheckAuthenticated";  

function App() {
  CheckAuthenticated();
  return <Layout />;
}

export default App;
