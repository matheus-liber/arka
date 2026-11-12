import './globals.css';

export const metadata = {
  title: 'Arka — Em Construção',
  description: 'Ehvar e os Eldares estão narrando. Em breve, Arka se formará.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
