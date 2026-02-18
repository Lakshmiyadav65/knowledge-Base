import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support'
import HelpCentre from './pages/HelpCentre'
import SupplierQuestionnaire from './pages/SupplierQuestionnaire'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help-centre" element={<HelpCentre />} />
        <Route path="/supplier-questionnaire" element={<SupplierQuestionnaire />} />
      </Routes>
    </BrowserRouter>
  )
}
