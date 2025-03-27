import React from "react";
import { motion } from "framer-motion";

const researchPapers = [
  {
    id: 1,
    title: "Toward provable one way functions",
    description:
      "My father <3 and I wrote this note about provable one way functions. The existence of a provable one-way function is a long-standing open problem. This short note presents an example towards the existence a provable one-way function, example in which both directions are polynomial. Namely, we prove that given a sorted array it takes O (n) operations to randomly permute the array values uniformly over the permutation space, while (comparison based) sorting of the permuted array (of big enough values) requires in the worst case (and in the average case) Omega (n log n) compare operations. We also present a candidate cryptosystem based on permutations of random polynomial values.",
    link: "https://eprint.iacr.org/2020/1358",
    year: "2023",
    authors: "Shlomi Dolev, Hagar Dolev",
  },
];

const Research = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Research Papers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic publications and research contributions
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {paper.title}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {paper.year}
                  </span>
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
                    >
                      View Paper
                      <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {paper.authors}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {paper.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Research;
