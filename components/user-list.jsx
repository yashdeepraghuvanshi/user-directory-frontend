"use client"

import { Mail, Phone } from "lucide-react"

export function UserList({ users, onUserClick }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="group p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:scale-[1.03] bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg hover:border-blue-400 hover:-translate-y-1"
          onClick={() => onUserClick(user)}
        >
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
                {user.name}
              </h3>
              {user.username && (
                <p className="text-sm text-gray-600 group-hover:text-teal-600 transition-colors duration-300">
                  @{user.username}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                <Mail className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                <span className="truncate">{user.email}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                <Phone className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-teal-600" />
                <span className="truncate">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
