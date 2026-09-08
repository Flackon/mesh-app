import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import MeshLogo from './MeshLogo';

export const OnboardingPage2 = ({ onNext, onDataChange, previousData }) => {
  const { isDark, bgClass, textClass, accentColor } = useTheme();
  const [formData, setFormData] = useState({
    coreActivationCredits: 24,
    jurisdictionIPBab: '',
    channelIPBab: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [activationStatus, setActivationStatus] = useState('pending'); // pending, processing, completed

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.jurisdictionIPBab.trim()) {
      newErrors.jurisdictionIPBab = 'Jurisdiction IP BAB is required';
    }
    if (!formData.channelIPBab.trim()) {
      newErrors.channelIPBab = 'Channel IP BAB is required';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to terms to continue';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setActivationStatus('processing');
      // Simulate activation process
      setTimeout(() => {
        setActivationStatus('completed');
        onDataChange(formData);
        setTimeout(() => {
          onNext();
        }, 1500);
      }, 2000);
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
        <h1 className={`text-3xl font-bold text-center mb-2 ${textClass}`}>
          Core Activation
        </h1>
        <p
          className={`text-center mb-8 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Activate your Mesh core wallet
        </p>

        {activationStatus === 'completed' ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                style={{ color: accentColor }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className={`text-2xl font-bold mb-2 ${textClass}`}>
              Activation Successful!
            </h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Your core has been activated. You have 24 days to complete your registration.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Core Activation Credits Info */}
            <div
              className={`p-4 rounded-lg border-2 ${
                isDark
                  ? 'bg-gray-800 border-yellow-600'
                  : 'bg-yellow-50 border-yellow-300'
              }`}
            >
              <p className={`text-sm font-semibold ${textClass}`}>
                Activation Cost: <span style={{ color: accentColor }}>24 Credits</span>
              </p>
              <p
                className={`text-xs mt-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                You will have 24 days to complete registration. If no payment is made within this period, your core will be deactivated.
              </p>
            </div>

            {/* Jurisdiction IP BAB */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${textClass}`}
                htmlFor="jurisdictionIPBab"
              >
                Jurisdiction IP BAB
              </label>
              <input
                id="jurisdictionIPBab"
                name="jurisdictionIPBab"
                type="text"
                value={formData.jurisdictionIPBab}
                onChange={handleChange}
                placeholder="Enter jurisdiction IP BAB"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-400 focus:border-yellow-500'
                } focus:outline-none`}
                style={{
                  borderColor: errors.jurisdictionIPBab ? '#ef4444' : undefined,
                }}
              />
              {errors.jurisdictionIPBab && (
                <p className="text-red-500 text-sm mt-1">{errors.jurisdictionIPBab}</p>
              )}
            </div>

            {/* Channel IP BAB */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${textClass}`}
                htmlFor="channelIPBab"
              >
                Channel IP BAB
              </label>
              <input
                id="channelIPBab"
                name="channelIPBab"
                type="text"
                value={formData.channelIPBab}
                onChange={handleChange}
                placeholder="Enter channel IP BAB"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-400 focus:border-yellow-500'
                } focus:outline-none`}
                style={{
                  borderColor: errors.channelIPBab ? '#ef4444' : undefined,
                }}
              />
              {errors.channelIPBab && (
                <p className="text-red-500 text-sm mt-1">{errors.channelIPBab}</p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded cursor-pointer"
                style={{
                  borderColor: errors.agreeTerms ? '#ef4444' : accentColor,
                  accentColor: accentColor,
                }}
              />
              <label
                htmlFor="agreeTerms"
                className={`text-sm ${textClass} cursor-pointer`}
              >
                I agree to activate my core wallet and accept the 24-day payment terms
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={activationStatus === 'processing'}
              className={`w-full py-3 rounded-lg font-bold text-black transition-all hover:shadow-lg active:scale-95 mt-8 ${
                activationStatus === 'processing' ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 20px ${accentColor}40`,
              }}
            >
              {activationStatus === 'processing' ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Activating...
                </span>
              ) : (
                'Activate Core Wallet'
              )}
            </button>
          </form>
        )}
      </div>

      {/* Step Indicator */}
      <div className={`mt-8 flex gap-2 ${textClass}`}>
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default OnboardingPage2;
