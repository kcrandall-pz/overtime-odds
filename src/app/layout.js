// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import TopNav from './Components/TopNav';
import BottomNav from './Components/BottomNav';

export const metadata = {
  title: 'Overtime Odds',
  description: 'Your Fantasy Betting App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
