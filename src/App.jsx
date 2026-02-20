import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support'
import HelpCentre from './pages/HelpCentre'
import SupplierQuestionnaire from './pages/SupplierQuestionnaire'
import ArticleWhatIsEnviGuide from './pages/ArticleWhatIsEnviGuide'
import ArticlePlatformWalkthrough from './pages/ArticlePlatformWalkthrough'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help-centre" element={<HelpCentre />} />
        <Route path="/supplier-questionnaire" element={<SupplierQuestionnaire />} />
        <Route path="/article-what-is-enviguide" element={<ArticleWhatIsEnviGuide />} />
        <Route path="/article-platform-walkthrough" element={<ArticlePlatformWalkthrough />} />
      </Routes>
    </BrowserRouter>
  )
}

