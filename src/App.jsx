import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './index.css';

const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const MenuPage = lazy(() => import('./components/pages/MenuPage'));
const ContactsPage = lazy(() => import('./components/pages/ContactsPage'));
const BreakfastPage = lazy(() => import('./components/pages/BreakfastPage'));
const BurgersPage = lazy(() => import('./components/pages/BurgersPage'));
const BarPage = lazy(() => import('./components/pages/BarPage'));
const BowlsPage = lazy(() => import('./components/pages/BowlsPage'));
const DessertsPage = lazy(() => import('./components/pages/DessertsPage'));
const DishesPage = lazy(() => import('./components/pages/DishesPage'));
const PizzaPage = lazy(() => import('./components/pages/PizzaPage'));
const SoupsPage = lazy(() => import('./components/pages/SoupsPage'));
  
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="breakfast" element={<BreakfastPage />} />
        <Route path="burgers" element={<BurgersPage />} />
        <Route path="bar" element={<BarPage />} />
        <Route path="bowls" element={<BowlsPage />} />
        <Route path="desserts" element={<DessertsPage />} />
        <Route path="dishes" element={<DishesPage />} />
        <Route path="pizza" element={<PizzaPage />} />
        <Route path="soups" element={<SoupsPage />} />
      </Route>
    </Routes>
  )
}

export default App
