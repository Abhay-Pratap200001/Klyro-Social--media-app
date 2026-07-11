import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="relative max-w-lg text-center">
        {/* 404 */}
        <h1 className="select-none text-8xl font-extrabold tracking-[0.2em] text-gray-300 dark:text-gray-700 sm:text-9xl">
          404
        </h1>

        {/* Badge */}
        <span className="absolute left-1/2 top-8 -translate-x-1/2 translate-x-20 -rotate-12 rounded-md bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-md">
          Page Not Found
        </span>

        {/* Content */}
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Oops! Youre lost.
          </h2>

          <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">
            The page youre looking for doesnt exist, may have been moved,
            or the URL might be incorrect.
          </p>
        </div>

        {/* Action */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}