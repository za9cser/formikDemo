import { Route, Routes, Switch } from "react-router";
import Layout from "./Layout";
import Order from "./modules/order";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Order />} />
      </Routes>
    </Layout>
  );
}

export default App;
