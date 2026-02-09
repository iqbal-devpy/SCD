'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#dcfce7] p-4">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-black mb-4">
          Counter Program
        </h1>

        {/* Counter Display */}
        <div className="text-6xl font-semibold text-black mb-8">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => setCount(count < 10 ? count + 1 : count)}
            className="px-6 py-2 bg-[lightgreen] text-white rounded-md hover:bg-blue-600 transition-colors font-medium shadow-sm"
          >
            Add
          </button>

          <button
            onClick={() => setCount(count > 0 ? count - 1 : count)}
            className="px-6 py-2 bg-[red] text-white rounded-md hover:bg-blue-600 transition-colors font-medium shadow-sm"
          >
            Subtract
          </button>
        </div>

        {/* Navigation Button */}
        <Link href="/task2">
          <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors font-semibold shadow-md">
            Go to Events (Task 2) →
          </button>
        </Link>
      </div>
    </main>
  );
}