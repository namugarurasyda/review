
import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="app-container">
      <header>
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
          {/* Always use Link instead of <a href> to prevent full page reloads */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      
      <main style={{ padding: '2rem' }}>
        {/* Child components render precisely here */}
        <Outlet />
      </main>
    </div>
  );
}