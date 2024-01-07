import { sen } from "@/app/fonts";
import Link from "next/link";

export const runtime = 'edge';

export default function Menu() {
  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col">
      <div className="flex h-14 w-full items-center justify-center border-b-4 border-solid border-accent-500 bg-bg-400">
        <span className="text-4xl font-bold tracking-wider text-primary-300">
          ANUNCIOS
        </span>
      </div>
      <div className="flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4">
        <Link href="/" className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </Link>
      </div>
      <div className="flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4">
        <Link href="/" className={`${sen.className} text-xl text-gray-200`}>
          Proyecto Viviana
        </Link>
      </div>
      <div className="flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4">
        <Link
          href="/calendar"
          className={`${sen.className} text-xl text-gray-200`}
        >
          Calendar
        </Link>
      </div>
      <div className="flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4">
        <Link
          href="/mobile"
          className={`${sen.className} text-xl text-gray-200`}
        >
          Mobile
        </Link>
      </div>
      <div className="flex h-14 w-full items-center justify-center border-b-4 border-solid border-accent-500 bg-bg-400">
        <span className="text-4xl font-bold tracking-wider text-primary-300">
          TUTORIALES
        </span>
      </div>
    </div>
  );
}
