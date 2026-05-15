'use client'
import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4">

            <div className="text-center max-w-lg">

                {/* Floating Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-200 text-cyan-800 text-sm font-semibold mb-6 shadow-sm">
                    Oops! Something went wrong
                </div>

                {/* Big 404 */}
                <h1 className="text-7xl sm:text-8xl font-extrabold text-gray-800 tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-700">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                    The page you’re looking for doesn’t exist, was removed, or the link is broken.
                </p>

                {/* Decorative line */}
                <div className="my-6 flex justify-center">
                    <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">

                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-600 transition"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 transition"
                    >
                        Go Back
                    </button>

                </div>

                {/* Footer hint */}
                <p className="mt-8 text-xs text-gray-400">
                    Tip: Check the URL and try again
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;