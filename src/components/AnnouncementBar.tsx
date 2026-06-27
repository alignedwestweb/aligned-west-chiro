import Link from 'next/link';

export default function AnnouncementBar({ message, showLink = true }) {
  return (
    <div className="bg-clinic-yellow text-clinic-dark text-center py-2 px-4 text-xs md:text-sm font-medium w-500px sticky top-0 z-50">
      {message}
      {showLink && (
        <Link href="/clinic" className="underline font-bold ml-2 hover:text-white transition">
          View New Location
        </Link>
      )}
    </div>
  );
}