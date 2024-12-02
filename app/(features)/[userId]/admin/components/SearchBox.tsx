"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (newValue: string) => void;
  width?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange,  width = "100%" }) => {
  return (
    <div className="relative" style={{width}}>
      <input
        type="text"
        placeholder="Search by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
      <span className="absolute right-3 top-2.5 text-gray-400"><Search className="h-5 w-5"/></span>
    </div>
  );
};
