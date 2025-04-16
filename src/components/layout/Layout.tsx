
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}