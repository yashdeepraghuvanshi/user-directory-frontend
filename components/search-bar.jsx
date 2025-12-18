"use client"

import { Search } from "lucide-react"

export function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative flex-1 max-w-md group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-focus-within:text-blue-600 group-focus-within:scale-110" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-4 py-2 text-sm bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:shadow-lg focus:shadow-blue-600/10 focus:outline-none transition-all duration-300"
      />
    </div>
  )
}
