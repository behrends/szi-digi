import './globals.css';

export const metadata = {
  title: 'SZI DigiWeb',
  description: 'Digitalisierter Studienbetrieb am Studienzentrum IT-Management & Informatik (SZI) der DHBW Lörrach',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
