/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LittlePrincessStory from './pages/LittlePrincessStory';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories/little-princess" element={<LittlePrincessStory />} />
      </Routes>
    </Router>
  );
}
