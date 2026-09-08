import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import MeshLogo from './MeshLogo';

export const OnboardingPage1 = ({ onNext, onDataChange }) => {
  const { isDark, bgClass, textClass, accentColor } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    country: '',
    language: '',
  });

  const [errors, setErrors] = useState({});

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'India',
    'Germany',
    'France',
    'Japan',
    'South Africa',
    'Brazil',
    'Mexico',
    'Singapore',
    'New Zealand',
    'South Korea',
    'Other',
  ];

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Portuguese',
    'Japanese',
    'Mandarin',
    'Hindi',
    'Arabic',
    'Russian',
    'Italian',
    'Dutch',
    'Korean',
    'Afrikaans',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.surname.trim()) newErrors.surname = 'Surname is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.language) newErrors.language = 'Language is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onDataChange(formData);
      onNext();
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${bgClass}`}
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      }}
    >
      {/* Logo */}
      <div className="mb-12">
        <MeshLogo size="md" />
      </div>

      {/* Form Container */}
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-2xl ${
          isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'
        }`}
      >
        <h1
          className={`text-3xl font-bold text-center mb-2 ${textClass}`}
        >
          Welcome to Mesh
        </h1>
        <p
          className={`text-center mb-8 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Complete your profile to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${textClass}`}
              htmlFor="name"
            >
              First Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500'
                  : 'bg-white border-gray-300 text-black placeholder-gray-400 focus:border-yellow-500'
              } focus:outline-none`}
              style={{
                borderColor: errors.name ? '#ef4444' : undefined,
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Surname Field */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${textClass}`}
              htmlFor="surname"
            >
              Surname
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500'
                  : 'bg-white border-gray-300 text-black placeholder-gray-400 focus:border-yellow-500'
              } focus:outline-none`}
              style={{
                borderColor: errors.surname ? '#ef4444' : undefined,
              }}
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
            )}
          </div>

          {/* Country Dropdown */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${textClass}`}
              htmlFor="country"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-yellow-500'
                  : 'bg-white border-gray-300 text-black focus:border-yellow-500'
              } focus:outline-none`}
              style={{
                borderColor: errors.country ? '#ef4444' : undefined,
              }}
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>

          {/* Language Dropdown */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${textClass}`}
              htmlFor="language"
            >
              Preferred Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-yellow-500'
                  : 'bg-white border-gray-300 text-black focus:border-yellow-500'
              } focus:outline-none`}
              style={{
                borderColor: errors.language ? '#ef4444' : undefined,
              }}
            >
              <option value="">Select your language</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            {errors.language && (
              <p className="text-red-500 text-sm mt-1">{errors.language}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-black transition-all hover:shadow-lg active:scale-95 mt-8"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`,
            }}
          >
            Continue to Next Step
          </button>
        </form>
      </div>

      {/* Step Indicator */}
      <div className={`mt-8 flex gap-2 ${textClass}`}>
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default OnboardingPage1;
