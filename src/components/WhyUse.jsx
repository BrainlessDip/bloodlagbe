import React from "react";

export default function WhyUse() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-red-700 text-center">
          Why Use This Platform?
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          These features are designed to make finding blood faster, easier, and
          more reliable.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-red-600">Fast Search</h3>
            <p className="mt-2 text-gray-600 leading-tight">
              Instantly find donors based on your needs.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-red-600">
              Real-Time Updates
            </h3>
            <p className="mt-2 text-gray-600 leading-tight">
              See which donors are currently available.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-red-600">
              Reliable Database
            </h3>
            <p className="mt-2 text-gray-600 leading-tight">
              Verified information ensures accurate donor matching.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-red-600">
              Easy Communication
            </h3>
            <p className="mt-2 text-gray-600 leading-tight">
              Contact donors directly through call or message options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
