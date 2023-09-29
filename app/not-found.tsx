"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#333333] text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-20 h-20 mb-6 text-red-500">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fff"
          strokeWidth="10"
          fill="none"
        />
        <line x1="30" y1="70" x2="70" y2="30" stroke="#fff" strokeWidth="10" />
        <line x1="30" y1="30" x2="70" y2="70" stroke="#fff" strokeWidth="10" />
      </svg>
      <h1 className="text-4xl font-extrabold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Go back to the home page
      </Link>
    </div>
  );
}
