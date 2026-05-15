"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    
    useEffect(() => {
        console.error("Error caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4">

            <div className="text-center max-w-lg">

                {/* Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-6 shadow-sm">
                    Unexpected Error
                </div>

                {/* Big icon */}
                <div className="text-7xl mb-4">⚠️</div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Something went wrong
                </h1>

                {/* Description */}
                <p className="mt-3 text-gray-500 text-sm sm:text-base">
                    An unexpected error occurred. Please try again or refresh the page.
                </p>

                {/* Error details (dev only style hint) */}
                {error?.message && (
                    <div className="mt-4 p-3 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 break-words">
                        {error.message}
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

                    <button
                        onClick={reset}
                        className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-600 transition"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 transition"
                    >
                        Refresh Page
                    </button>

                </div>

                {/* Footer */}
                <p className="mt-8 text-xs text-gray-400">
                    If the problem continues, please contact support
                </p>

            </div>
        </div>
    );
}