import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  Homework01,
  Homework02,
  Homework03,
  Homework04,
  Homework05,
  Homework06,
  Homework07,
} from '@views';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-woolf-hw">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="hw-01" element={<Homework01 />} />
        <Route path="hw-02" element={<Homework02 />} />
        <Route path="hw-03" element={<Homework03 />} />
        <Route path="hw-04" element={<Homework04 />} />
        <Route path="hw-05" element={<Homework05 />} />
        <Route path="hw-06" element={<Homework06 />} />
        <Route path="hw-07" element={<Homework07 />} />
      </Routes>
    </BrowserRouter>
  );
};
