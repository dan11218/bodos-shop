import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 flex w-screen flex-col items-center bg-slate-50 px-[20px] dark:bg-slate-950">
      <div className="relative flex w-full max-w-7xl flex-row items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <h1>BODOS</h1>
        </Link>
        <div className="flex max-w-[500px] w-full flex-row justify-between self-stretch">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center"
            href="/"
          >
            {`Home`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center"
            href="#"
            target="_blank"
          >
            {`Men's`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center"
            href="#"
          >
            {`Gifts`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center"
            href="#"
          >
            {`Sale`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center"
            href="#"
          >
            {`Cart`}
          </Link>
        </div>
      </div>
    </nav>
  );
};
