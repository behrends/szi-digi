import './globals.css';

export const metadata = {
  title: 'SZI DigiWeb',
  description:
    'Digitalisierter Studienbetrieb am Studienzentrum IT-Management & Informatik (SZI) der DHBW Lörrach',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <main className="flex flex-col justify-start items-center min-h-screen px-3 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
