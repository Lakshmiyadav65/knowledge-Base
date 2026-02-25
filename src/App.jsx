import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support'
import HelpCentre from './pages/HelpCentre'
import SupplierQuestionnaire from './pages/SupplierQuestionnaire'
import ArticleWhatIsEnviGuide from './pages/ArticleWhatIsEnviGuide'
import ArticlePlatformWalkthrough from './pages/ArticlePlatformWalkthrough'
import ManualsPCF from './pages/ManualsPCF'
import ArticleGetAccess from './pages/ArticleGetAccess'
import ArticleAddProduct from './pages/ArticleAddProduct'
import ArticleCreatePCFRequest from './pages/ArticleCreatePCFRequest'
import ArticlePCFWorkflow from './pages/ArticlePCFWorkflow'
import ArticleOwnEmissions from './pages/ArticleOwnEmissions'

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
        <Route path="/manuals-pcf" element={<ManualsPCF />} />
        <Route path="/article-get-access" element={<ArticleGetAccess />} />
        <Route path="/article-add-product" element={<ArticleAddProduct />} />
        <Route path="/article-create-pcf-request" element={<ArticleCreatePCFRequest />} />
        <Route path="/article-pcf-workflow" element={<ArticlePCFWorkflow />} />
        <Route path="/article-own-emissions" element={<ArticleOwnEmissions />} />
      </Routes>
    </BrowserRouter>
  )
}

