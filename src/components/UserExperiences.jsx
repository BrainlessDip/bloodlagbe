import React from "react";

export default function UserExperiences() {
  return (
    <section className="w-full py-24 bg-red-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-red-700 text-center">
          User Experiences
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          When life is at risk, a quick connection can make all the difference.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “Found a donor within 10 minutes. This platform truly saves
              lives.”
            </p>
            <h4 className="mt-4 font-semibold text-red-600">— Saeed</h4>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “I never imagined donating blood could be this easy. Thank you!”
            </p>
            <h4 className="mt-4 font-semibold text-red-600">— Ayesha</h4>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “Clean design, fast search, very effective.”
            </p>
            <h4 className="mt-4 font-semibold text-red-600">— Naeem</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
