import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { HabitsPage } from "./pages/HabitsPage";
import { MorePage } from "./pages/MorePage";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/habitos/calendario" element={<Navigate to="/habitos" replace />} />
        <Route path="/mais" element={<MorePage />} />
        <Route path="*" element={<Navigate to="/habitos" replace />} />
      </Routes>
    </AppShell>
  );
}
