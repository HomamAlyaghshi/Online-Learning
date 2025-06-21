import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products"; // تأكد أنك أنشأت هذه الصفحة
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </DataProvider>
  );
}

export default App;
