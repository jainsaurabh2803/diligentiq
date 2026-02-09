import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TransactionRegulatory from './pages/TransactionRegulatory';
import InvestmentReadiness from './pages/InvestmentReadiness';
import StrategicMIS from './pages/StrategicMIS';
import MISReporting from './pages/strategic-mis/MISReporting';
import KPIFramework from './pages/strategic-mis/KPIFramework';
import FinancialModelling from './pages/strategic-mis/FinancialModelling';
import AOP from './pages/strategic-mis/AOP';
import FemaRbiAdvisory from './pages/transaction-regulatory/FemaRbiAdvisory';
import FundraisingStructuring from './pages/transaction-regulatory/FundraisingStructuring';
import EntityLifecycle from './pages/transaction-regulatory/EntityLifecycle';
import CapitalRestructuring from './pages/transaction-regulatory/CapitalRestructuring';
import MergerSlumpSale from './pages/transaction-regulatory/MergerSlumpSale';
import StrategicAlliances from './pages/transaction-regulatory/StrategicAlliances';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<div className="container section"><h2>Services Overview</h2><p>Please select a specific service from the menu.</p></div>} />

          {/* Specific Service Routes */}
          <Route path="services/transaction-regulatory-support" element={<TransactionRegulatory />} />
          <Route path="services/investment-readiness" element={<InvestmentReadiness />} />

          {/* Strategic MIS & Financial Planning Hub and Sub-pages */}
          <Route path="services/strategic-mis" element={<StrategicMIS />} />
          <Route path="services/strategic-mis/reporting" element={<MISReporting />} />
          <Route path="services/strategic-mis/kpi" element={<KPIFramework />} />
          <Route path="services/strategic-mis/financial-modelling" element={<FinancialModelling />} />
          <Route path="services/strategic-mis/aop" element={<AOP />} />

          {/* Transaction & Regulatory Support Sub-pages */}
          <Route path="services/transaction-regulatory/fema-rbi-advisory" element={<FemaRbiAdvisory />} />
          <Route path="services/transaction-regulatory/fundraising" element={<FundraisingStructuring />} />
          <Route path="services/transaction-regulatory/strategic-alliances" element={<StrategicAlliances />} />
          <Route path="services/transaction-regulatory/ma-execution" element={<MergerSlumpSale />} />
          <Route path="services/transaction-regulatory/capital-restructuring" element={<CapitalRestructuring />} />
          <Route path="services/transaction-regulatory/entity-lifecycle" element={<EntityLifecycle />} />
          <Route path="services/transaction-regulatory/regulatory-replies" element={<div className="container section"><h2>Notices, Scrutiny & Regulatory Replies</h2><p>Coming Soon...</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
