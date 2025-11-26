import React from "react";

export default function CallAction() {
  return (
    <section className="w-full py-24 bg-red-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-red-700">
          Become a Blood Donor
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Give blood responsibly and help those in urgent need.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-red-700 transition">
            Join as Donor
          </button>
          <button className="px-6 py-3 bg-white text-red-600 border border-red-500 rounded-xl text-lg font-semibold shadow hover:bg-red-50 transition">
            Blood Donation Guidelines
          </button>
        </div>
      </div>
    </section>
  );
}
