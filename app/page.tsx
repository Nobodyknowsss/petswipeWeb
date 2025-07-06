"use client";

import Link from "next/link";
import {
  Code,
  Smartphone,
  Globe,
  ArrowRight,
  Menu,
  X,
  Heart,
  Video,
  ShoppingBag,
  MessageCircle,
  Star,
  Shield,
  Users,
  Sparkles,
  Play,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setContactForm({ name: "", email: "", message: "" });

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Threeplets
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
              Introducing PetSwipe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Revolutionizing Pet Adoption with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PetSwipe
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            <span className="font-semibold text-blue-400">PetSwipe</span> is our
            revolutionary mobile app that transforms pet adoption with
            TikTok-style videos, making it more interactive, accessible, and
            trustworthy. Our platform connects pet lovers with their perfect
            companions through engaging, short-form videos of animals looking
            for homes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
            <Link
              href="/team"
              className="btn-primary inline-flex items-center justify-center"
            >
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium rounded-full">
                <Play className="h-4 w-4 mr-2" />
                Live Demo
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                PetSwipe
              </span>{" "}
              in Action
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how PetSwipe makes pet adoption as easy as swiping through
              your favorite social media app
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto max-h-[600px] object-cover"
                  controls
                  poster="/api/placeholder/800/600"
                  preload="metadata"
                >
                  <source
                    src="/13937212-a489-46f9-b12b-1b83814fd5fe.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-xl"></div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm sm:text-base">
                  Experience the intuitive TikTok-style interface that makes
                  finding your perfect pet companion effortless and enjoyable.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Swipe to Connect
              </h4>
              <p className="text-gray-300 text-sm">
                Browse through engaging pet videos with simple swipe gestures
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Rich Video Content
              </h4>
              <p className="text-gray-300 text-sm">
                Each pet has their own personality showcase video
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Instant Adoption
              </h4>
              <p className="text-gray-300 text-sm">
                Complete the adoption process directly within the app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                PetSwipe
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship project that&apos;s changing how pets find their
              forever homes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Making Pet Adoption Interactive
              </h4>
              <p className="text-gray-300 mb-6 text-lg">
                <span className="font-semibold text-blue-400">PetSwipe</span>{" "}
                uses engaging video content to help pets find their forever
                homes. Users can browse through a TikTok-style feed where each
                video showcases a pet available for adoption, complete with
                their personality and story.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">
                    Direct adoption form integration
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">
                    Verified shelter and pet owner uploads
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">
                    Integrated pet shop for supplies
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h5 className="text-2xl font-bold mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2" />
                  Key Features
                </h5>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Video className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">TikTok-Style Feed</h6>
                      <p className="text-sm text-white/80">
                        Swipe through engaging pet videos
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">
                        Instant Adoption Forms
                      </h6>
                      <p className="text-sm text-white/80">
                        Complete adoption process in-app
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">Verified Users</h6>
                      <p className="text-sm text-white/80">
                        Trusted shelters and pet owners
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <ShoppingBag className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">
                        Pet Shop Integration
                      </h6>
                      <p className="text-sm text-white/80">
                        Everything your pet needs in one place
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">Community Features</h6>
                      <p className="text-sm text-white/80">
                        Connect with other pet lovers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Expertise Behind{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PetSwipe
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-700 p-6 sm:p-8 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Mobile App Development
              </h4>
              <p className="text-gray-300">
                Creating engaging mobile experiences with video integration,
                real-time features, and intuitive user interfaces that power{" "}
                <span className="font-semibold text-blue-400">PetSwipe</span>
                &apos;s seamless pet discovery.
              </p>
            </div>
            <div className="bg-gray-700 p-6 sm:p-8 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Web Platforms
              </h4>
              <p className="text-gray-300">
                Building comprehensive web platforms for content management,
                user verification, and administrative tools that support{" "}
                <span className="font-semibold text-blue-400">PetSwipe</span>
                &apos;s ecosystem.
              </p>
            </div>
            <div className="bg-gray-700 p-6 sm:p-8 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Custom Solutions
              </h4>
              <p className="text-gray-300">
                Developing specialized features like video streaming,
                geolocation services, and secure payment systems that make{" "}
                <span className="font-semibold text-blue-400">PetSwipe</span>{" "}
                truly revolutionary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Get In Touch
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Ready to bring your ideas to life? Let&apos;s discuss your project
              and create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-700 rounded-lg p-6 sm:p-8">
            {showConfirmation && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>
                  Thank you for your message! We&apos;ll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or ask any questions..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Threeplets. All rights reserved. Creators of{" "}
            <span className="font-semibold text-blue-400">PetSwipe</span> -
            Revolutionizing pet adoption through technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
