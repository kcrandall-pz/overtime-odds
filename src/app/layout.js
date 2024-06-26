// src/app/layout.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';


export const metadata = {
  title: 'Overtime Odds',
  description: 'Your Fantasy Betting App',
  icons: {
    icon: '/icon.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
          <main>
            {children}
          </main>
        <BottomNav />
      </body>
    </html>
  );
}
