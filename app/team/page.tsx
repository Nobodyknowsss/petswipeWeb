"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Team() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Full-Stack Developer & Co-Founder",
      bio: "Leading the development of PetSwipe, our innovative pet adoption app, Alex specializes in creating scalable TikTok-style video feeds and seamless adoption form integrations. With expertise in React Native and cloud architecture, he ensures PetSwipe delivers smooth user experiences while connecting pets with their perfect families.",
      skills: ["React Native", "Node.js", "AWS", "MongoDB", "Video Streaming"],
      image: "/api/placeholder/300/300",
      github: "https://github.com/alexrodriguez",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      email: "alex@threeplets.com",
    },
    {
      name: "Sarah Chen",
      role: "Mobile App Developer & Co-Founder",
      bio: "Sarah focuses on crafting intuitive mobile experiences for PetSwipe, our revolutionary pet adoption platform. She develops the engaging video interfaces and user-friendly adoption workflows that make pet discovery delightful in PetSwipe. Her expertise in Flutter and iOS/Android development ensures PetSwipe works flawlessly across all devices.",
      skills: ["Flutter", "React Native", "iOS", "Android", "UX Design"],
      image: "/api/placeholder/300/300",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah@threeplets.com",
    },
    {
      name: "Michael Thompson",
      role: "Backend Developer & Co-Founder",
      bio: "Michael builds the robust backend infrastructure that powers PetSwipe. He develops secure APIs for user verification, content management systems for shelters, and scalable database solutions for PetSwipe. His work ensures verified users can easily upload pet content while maintaining PetSwipe's security and performance.",
      skills: ["Python", "Django", "PostgreSQL", "Docker", "API Development"],
      image: "/api/placeholder/300/300",
      github: "https://github.com/michaelthompson",
      linkedin: "https://linkedin.com/in/michaelthompson",
      email: "michael@threeplets.com",
    },
  ];

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
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/team"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
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
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/team"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Back to Home
            </Link>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                The Creators of PetSwipe
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Three passionate developers revolutionizing pet adoption through
              innovative technology. We&apos;re building{" "}
              <span className="font-semibold text-blue-400">PetSwipe</span>, a
              TikTok-style platform that connects pets with their perfect
              families.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 sm:p-8 text-center"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4 text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-300 mb-6 text-left text-sm sm:text-base leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Work Together?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            Our team is ready to bring your{" "}
            <span className="font-semibold text-blue-400">PetSwipe</span>-level
            innovation to your mobile app ideas. Let&apos;s create something
            amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
            <Link href="/#contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/" className="btn-secondary">
              Learn More
            </Link>
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
