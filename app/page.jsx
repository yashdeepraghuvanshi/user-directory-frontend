"use client"

import { useState, useEffect, useMemo } from "react"
import { UserList } from "@/components/user-list"
import { SearchBar } from "@/components/search-bar"
import { AddUserForm } from "@/components/add-user-form"
import { UserDetailsModal } from "@/components/user-details-modal"
import { ErrorMessage } from "@/components/error-message"
import { LoadingSpinner } from "@/components/loading-spinner"
import { UserPlus, Users } from "lucide-react"

export default function UserDirectoryPage() {
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [sortAscending, setSortAscending] = useState(true)

  // Load users from API and localStorage on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const apiUsers = await response.json()

        // Load additional users from localStorage
        const localUsers = JSON.parse(localStorage.getItem("customUsers") || "[]")

        setUsers([...apiUsers, ...localUsers])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred while fetching users")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Filter and sort users
  const filteredUsers = useMemo(() => {
    const filtered = users.filter((user) => {
      const query = searchQuery.toLowerCase()
      return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    })

    // Sort alphabetically by name
    filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name)
      return sortAscending ? comparison : -comparison
    })

    return filtered
  }, [users, searchQuery, sortAscending])

  const handleAddUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now(), // Generate unique ID
    }

    const updatedUsers = [...users, userWithId]
    setUsers(updatedUsers)

    // Save custom users to localStorage
    const customUsers = updatedUsers.filter((u) => u.id > 100) // API users have IDs 1-10
    localStorage.setItem("customUsers", JSON.stringify(customUsers))

    setShowAddForm(false)
  }

  const toggleSort = () => {
    setSortAscending((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg shadow-blue-600/25 transition-transform duration-300 hover:scale-110 hover:rotate-3 shrink-0">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent truncate">
                  User Directory
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Manage and explore user profiles</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group shrink-0"
            >
              <UserPlus className="h-4 w-4 sm:mr-2 transition-transform group-hover:rotate-12" />
              <span className="hidden sm:inline">Add User</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {showAddForm && (
          <div className="mb-8">
            <AddUserForm onSubmit={handleAddUser} onCancel={() => setShowAddForm(false)} />
          </div>
        )}

        <div className="space-y-6">
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search by name or email..." />
            <button
              onClick={toggleSort}
              className="shrink-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-lg border border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow"
            >
              <span className="mr-2">Sort</span>
              <span className={`inline-block transition-transform duration-300 ${sortAscending ? "" : "rotate-180"}`}>
                ↓
              </span>
              <span className="ml-1">{sortAscending ? "A-Z" : "Z-A"}</span>
            </button>
          </div>

          {/* Loading State */}
          {isLoading && <LoadingSpinner />}

          {/* Error State */}
          {error && <ErrorMessage message={error} />}

          {/* User List */}
          {!isLoading && !error && (
            <>
              {filteredUsers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No users found matching your search.</p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    Showing {filteredUsers.length} {filteredUsers.length === 1 ? "user" : "users"}
                  </p>
                  <UserList users={filteredUsers} onUserClick={setSelectedUser} />
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* User Details Modal */}
      {selectedUser && <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />}

      {/* Footer with copyright information */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-md mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">Made by Yashdeep © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
