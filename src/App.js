import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </DataProvider>
  );
}

export default App;
