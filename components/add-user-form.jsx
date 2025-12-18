"use client"

import { useState } from "react"

export function AddUserForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    companyName: "",
    catchPhrase: "",
    bs: "",
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const newUser = {
      name: formData.name.trim(),
      username: formData.username.trim() || formData.name.toLowerCase().replace(/\s+/g, ""),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      website: formData.website.trim(),
      address: {
        street: formData.street.trim(),
        suite: formData.suite.trim(),
        city: formData.city.trim(),
        zipcode: formData.zipcode.trim(),
        geo: {
          lat: "",
          lng: "",
        },
      },
      company: {
        name: formData.companyName.trim(),
        catchPhrase: formData.catchPhrase.trim(),
        bs: formData.bs.trim(),
      },
    }

    onSubmit(newUser)

    // Reset form
    setFormData({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      companyName: "",
      catchPhrase: "",
      bs: "",
    })
    setErrors({})
  }

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Add New User
        </h2>
        <p className="text-sm text-gray-600">Fill in the details to add a new user to the directory</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Basic Information</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                className={`w-full px-3 py-2 text-sm border rounded-lg transition-all duration-300 focus:shadow-md focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500 focus:shadow-blue-600/10"}`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange("username")}
                placeholder="Auto-generated if empty"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Contact Information</h3>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              className={`w-full px-3 py-2 text-sm border rounded-lg transition-all duration-300 focus:shadow-md focus:outline-none ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500 focus:shadow-blue-600/10"}`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
              className={`w-full px-3 py-2 text-sm border rounded-lg transition-all duration-300 focus:shadow-md focus:outline-none ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500 focus:shadow-blue-600/10"}`}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              id="website"
              type="text"
              value={formData.website}
              onChange={handleChange("website")}
              placeholder="example.com"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Address</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                Street
              </label>
              <input
                id="street"
                type="text"
                value={formData.street}
                onChange={handleChange("street")}
                placeholder="Dayna Park"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="suite" className="block text-sm font-medium text-gray-700">
                Suite
              </label>
              <input
                id="suite"
                type="text"
                value={formData.suite}
                onChange={handleChange("suite")}
                placeholder="Suite 449"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                type="text"
                value={formData.city}
                onChange={handleChange("city")}
                placeholder="Bartholomebury"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                Zipcode
              </label>
              <input
                id="zipcode"
                type="text"
                value={formData.zipcode}
                onChange={handleChange("zipcode")}
                placeholder="76495-3109"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Company</h3>

          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange("companyName")}
              placeholder="Yost and Sons"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="catchPhrase" className="block text-sm font-medium text-gray-700">
              Catch Phrase
            </label>
            <input
              id="catchPhrase"
              type="text"
              value={formData.catchPhrase}
              onChange={handleChange("catchPhrase")}
              placeholder="Switchable contextually-based project"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bs" className="block text-sm font-medium text-gray-700">
              Business Strategy
            </label>
            <input
              id="bs"
              type="text"
              value={formData.bs}
              onChange={handleChange("bs")}
              placeholder="aggregate real-time technologies"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg transition-all duration-300 focus:shadow-md focus:border-blue-500 focus:shadow-blue-600/10 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Add User
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-lg border border-gray-300 transition-all duration-300 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
