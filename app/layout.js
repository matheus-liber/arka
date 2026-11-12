import './globals.css';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: {
    default: 'Arka',
    template: '%s — Arka',
  },
  description: 'As crônicas de Arka. Enciclopédia do cenário de alta fantasia medieval.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
