import Link from 'next/link';
import { HomeModernIcon } from '@heroicons/react/24/outline';

export default async function Loading() {
  return (
    <>
      <Link href="/">
        <HomeModernIcon
          className="absolute top-4 left-4 h-6 w-6 
      text-dhbwRed"
        />
      </Link>
      <h1 className="text-4xl text-dhbwRed">Lade Kursdaten…</h1>
    </>
  );
}
