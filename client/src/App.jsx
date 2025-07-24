// client/src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">

      <Header />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
