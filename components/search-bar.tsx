"use client"

import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
    searchTerm: string
    onSearchChange: (term: string) => void
    placeholder?: string
}

export function SearchBar({ searchTerm, onSearchChange, placeholder = "Search games..." }: SearchBarProps) {
    return (
    <div className="relative max-w-md mx-auto">
        <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400 dark:text-purple-400 text-purple-600" />
        <Input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10 bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 text-purple-100 dark:text-purple-100 text-purple-800 placeholder:text-purple-400 dark:placeholder:text-purple-400 placeholder:text-purple-500 focus:border-purple-400 focus:ring-purple-400"
        />
        {searchTerm && (
            <Button
            variant="ghost"
            size="icon"
            onClick={() => onSearchChange("")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-purple-400 dark:text-purple-400 text-purple-600 hover:text-purple-300 dark:hover:text-purple-300 hover:text-purple-700"
            >
            <X className="h-4 w-4" />
            </Button>
        )}
        </div>
    </div>
    )
}
