import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "@/assets/logo.jpg";
import { useState } from "react";
import ConsultancyPopup from "./ConsultancyPopup";

// Enhanced Modal Example
function EnhancedModal({ open, onClose, formData, onInputChange, onSubmit, errors, submitted }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.35)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        padding: 32,
        maxWidth: 500,
        width: '100%',
        margin: 'auto',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 24,
            top: 24,
            fontSize: 24,
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            fontWeight: 700,
          }}
          aria-label="Close"
        >×</button>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 24,
          color: '#1a255e',
          letterSpacing: 0.5,
        }}>
          Book a Consultancy Meeting
        </h2>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 48, color: '#16a34a', marginBottom: 12 }}>✔</div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>Meeting request submitted!</div>
            <button onClick={onClose} style={{ marginTop: 24, padding: '10px 32px', borderRadius: 8, background: '#1a255e', color: 'white', border: 'none', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Close</button>
          </div>
        ) : (
        <form onSubmit={onSubmit} noValidate>
          <div style={{ marginBottom: 22 }}>
            <label htmlFor="summary" style={{ fontWeight: 600, display: 'block', marginBottom: 8, color: '#1a255e' }}>Summary *</label>
            <input
              id="summary"
              name="summary"
              type="text"
              value={formData.summary}
              onChange={onInputChange}
              placeholder="Enter meeting summary"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: errors.summary ? '1.5px solid #dc2626' : '1px solid #e5e7eb',
                background: '#fafbfc',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                marginBottom: errors.summary ? 4 : 0,
              }}
              aria-invalid={!!errors.summary}
              aria-describedby="summary-error"
              required
            />
            {errors.summary && <div id="summary-error" style={{ color: '#dc2626', fontSize: 13, marginTop: 2 }}>{errors.summary}</div>}
          </div>
          <div style={{ marginBottom: 22 }}>
            <label htmlFor="description" style={{ fontWeight: 600, display: 'block', marginBottom: 8, color: '#1a255e' }}>Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={onInputChange}
              placeholder="Describe the meeting purpose"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
                background: '#fafbfc',
                fontSize: '1rem',
                outline: 'none',
                minHeight: 90,
                resize: 'vertical',
              }}
            />
          </div>
          <div style={{ marginBottom: 22 }}>
            <label htmlFor="startTime" style={{ fontWeight: 600, display: 'block', marginBottom: 8, color: '#1a255e' }}>Start Time *</label>
            <input
              id="startTime"
              name="startTime"
              type="datetime-local"
              value={formData.startTime}
              onChange={onInputChange}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: errors.startTime ? '1.5px solid #dc2626' : '1px solid #e5e7eb',
                background: '#fafbfc',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: errors.startTime ? 4 : 0,
              }}
              aria-invalid={!!errors.startTime}
              aria-describedby="startTime-error"
              required
            />
            {errors.startTime && <div id="startTime-error" style={{ color: '#dc2626', fontSize: 13, marginTop: 2 }}>{errors.startTime}</div>}
          </div>
          <div style={{ marginBottom: 22 }}>
            <label htmlFor="endTime" style={{ fontWeight: 600, display: 'block', marginBottom: 8, color: '#1a255e' }}>End Time *</label>
            <input
              id="endTime"
              name="endTime"
              type="datetime-local"
              value={formData.endTime}
              onChange={onInputChange}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: errors.endTime ? '1.5px solid #dc2626' : '1px solid #e5e7eb',
                background: '#fafbfc',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: errors.endTime ? 4 : 0,
              }}
              aria-invalid={!!errors.endTime}
              aria-describedby="endTime-error"
              required
            />
            {errors.endTime && <div id="endTime-error" style={{ color: '#dc2626', fontSize: 13, marginTop: 2 }}>{errors.endTime}</div>}
          </div>
          <div style={{ marginBottom: 28 }}>
            <label htmlFor="email" style={{ fontWeight: 600, display: 'block', marginBottom: 8, color: '#1a255e' }}>Organizer Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="you@domain.com"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: errors.email ? '1.5px solid #dc2626' : '1px solid #e5e7eb',
                background: '#fafbfc',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: errors.email ? 4 : 0,
              }}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              required
            />
            {errors.email && <div id="email-error" style={{ color: '#dc2626', fontSize: 13, marginTop: 2 }}>{errors.email}</div>}
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '16px 0',
            background: '#1a255e',
            color: 'white',
            fontWeight: 600,
            fontSize: '1.1rem',
            borderRadius: 8,
            border: 'none',
            marginTop: 8,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}>Create Meeting</button>
        </form>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    summary: '',
    description: '',
    startTime: '',
    endTime: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required.';
    if (!formData.startTime) newErrors.startTime = 'Start time is required.';
    if (!formData.endTime) newErrors.endTime = 'End time is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ summary: '', description: '', startTime: '', endTime: '', email: '' });
      setErrors({});
    }, 1500);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ summary: '', description: '', startTime: '', endTime: '', email: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      {/* <EnhancedModal
        open={showModal}
        onClose={handleClose}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        errors={errors}
        submitted={submitted}
      /> */}
       <ConsultancyPopup isOpen={showModal} onClose={() => handleClose()} />
      <footer className="bg-gray-900 text-white py-12 px-4" id="footer">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Link href="/" className="flex items-center">
                  <div className="text-3xl font-bold flex items-center">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={150}
                      height={100}
                      className="rounded"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Building AI-driven digital products that empower millions across
                the globe.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.youtube.com/@HyperVSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    className="text-[#FF0000] hover:opacity-80 cursor-pointer"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hyperv-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="text-[#0077B5] hover:opacity-80 cursor-pointer"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://twitter.com/hypervsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    className="text-[#1DA1F2] hover:opacity-80 cursor-pointer"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/hypervsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="text-[#4267B2] hover:opacity-80 cursor-pointer"
                    size={20}
                  />
                </Link>
              </div>
              <div className="flex space-x-4 mt-4">
                <img
                  src="https://abhishekdevpro-nova-home-care-fe.vercel.app/assets/logo2-06lVAt2c.png"
                  alt="DBE Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 mb-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300 text-sm font-medium"
                >
                  Book Free Consultation
                </button>

                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://novajobs.us/community"
                    className="text-gray-400 hover:text-white"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">We Are Here</h3>
              <div className="flex items-start mb-4">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  PO Box 1084,
                  <br />
                  Columbia, SC 29202 &<br />
                  1225 Laurel St., Columbia, SC 29201.
                </p>
              </div>
              <div className="flex items-start">
                <div className="ml-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  <a
                    href="mailto:info@hypervsolutions.net"
                    className="text-gray-400 hover:text-white"
                  >
                    info@hypervsolutions.net
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex items-center">
              <div className="flex-1 text-center text-gray-400 text-sm">
                © 2025 HyperV Solutions. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
