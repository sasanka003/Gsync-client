import React from "react";

export function MenuSkeletonLoader() {
  // Create an array of 5-6 skeleton items to mimic menu structure
  const skeletonItems = Array(6).fill(null);

  return (
    <nav className="mt-8 h-full w-full animate-pulse">
      <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
        {skeletonItems.map((_, index) => (
          <li key={index} className="w-full">
            <div className="h-10 bg-gray-200 rounded-md w-full mb-2"></div>
          </li>
        ))}
        {/* Bottom logout skeleton */}
        <li className="w-full grow flex items-end mt-5">
          <div className="h-10 bg-gray-200 rounded-md w-full"></div>
        </li>
      </ul>
    </nav>
  );
}
