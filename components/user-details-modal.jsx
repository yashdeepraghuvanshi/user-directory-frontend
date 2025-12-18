"use client"

import { X, Mail, Phone, Globe, MapPin, Briefcase } from "lucide-react"

export function UserDetailsModal({ user, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 rounded-lg bg-white animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                {user.name}
              </h2>
              {user.username && <p className="text-gray-600">@{user.username}</p>}
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Contact Information</h3>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-300 hover:underline decoration-blue-600 decoration-2 underline-offset-4"
                  >
                    {user.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-gray-900 hover:text-teal-600 transition-colors duration-300 hover:underline decoration-teal-600 decoration-2 underline-offset-4"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>

              {user.website && (
                <div className="flex items-start gap-3 group">
                  <Globe className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-12" />
                  <div>
                    <p className="text-sm text-gray-600">Website</p>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors duration-300 hover:underline decoration-blue-600 decoration-2 underline-offset-4"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Address */}
          {user.address && (user.address.street || user.address.city) && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Address</h3>

              <div className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110" />
                <div>
                  <p className="text-gray-900">
                    {user.address.suite && `${user.address.suite}, `}
                    {user.address.street}
                  </p>
                  <p className="text-gray-900">
                    {user.address.city}
                    {user.address.zipcode && `, ${user.address.zipcode}`}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Company */}
          {user.company && user.company.name && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Company</h3>

              <div className="flex items-start gap-3 group">
                <Briefcase className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
                <div>
                  <p className="font-medium text-gray-900">{user.company.name}</p>
                  {user.company.catchPhrase && (
                    <p className="text-sm text-gray-600 italic">"{user.company.catchPhrase}"</p>
                  )}
                  {user.company.bs && <p className="text-sm text-gray-600 mt-1">{user.company.bs}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
