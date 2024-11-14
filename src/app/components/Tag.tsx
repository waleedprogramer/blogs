import React from 'react';

const TagCard: React.FC = () => {
  return (
    <div className=" rounded-lg mt-8 overflow-hidden shadow-lg bg-card p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-dark mb-4">Popular Tags</h2>

      

      {/* Tags Grid */}
      <div className="flex flex-wrap gap-3">
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Technology
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Travel
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Interior
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Minimal
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Plant
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Healthy
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
         Bussiness
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Animal
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Space
        </span>
        <span className="border text-white rounded-xl px-4 py-2 text-sm font-semibold text-center hover:border-dark hover:text-dark cursor-pointer transition-all">
          Nature
        </span>
      </div>
    </div>
  );
};

export default TagCard;
