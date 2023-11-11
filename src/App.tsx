import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Spinner from './components/spinner';

const Shop = lazy(() => import('./pages/Shop'));
const Politics = lazy(() => import('./pages/Politics'));
const Agreement = lazy(() => import('./pages/Agreement'));
const ReturnProduct = lazy(() => import('./pages/ReturnProduct'));
const Receipt = lazy(() => import('./pages/Receipt'));
const Thanks = lazy(() => import('./pages/Thanks'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="politics" element={<Politics />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/return-product" element={<ReturnProduct />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
