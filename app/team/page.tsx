"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Team() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Patrick",
      role: "Chief Executive Officer & Co-Founder",
      bio: "As CEO of PetSwipe, Patrick leads the vision and strategy behind revolutionizing pet adoption through technology. With a passion for connecting pets with loving families, he oversees the company's mission to make pet adoption as intuitive and engaging as social media. Patrick drives business development, partnerships with animal shelters, and ensures PetSwipe creates meaningful impact in the pet adoption ecosystem.",
      skills: [
        "Business Strategy",
        "Leadership",
        "Partnerships",
        "Product Vision",
        "Market Analysis",
      ],
      image: "/patrick.jpg",
      github: "https://github.com/patrick",
      linkedin: "https://linkedin.com/in/patrick",
      email: "patrick@petswipe.com",
    },
    {
      name: "Manaf",
      role: "Chief Technology Officer & Co-Founder",
      bio: "Manaf serves as CTO of PetSwipe, architecting the technical infrastructure that powers our revolutionary pet adoption platform. He leads the development of our TikTok-style video feed, real-time matching algorithms, and scalable backend systems. With expertise in mobile app development and cloud architecture, Manaf ensures PetSwipe delivers a seamless, fast, and reliable experience for both pet seekers and shelters.",
      skills: [
        "Mobile Development",
        "System Architecture",
        "Cloud Computing",
        "API Design",
        "Data Engineering",
      ],
      image: "/manaf.jpg",
      github: "https://github.com/manaf",
      linkedin: "https://linkedin.com/in/manaf",
      email: "manaf@petswipe.com",
    },
    {
      name: "Janelle",
      role: "Chief Operations Manager & Co-Founder",
      bio: "Janelle oversees all operations at PetSwipe as our Chief Operations Manager, ensuring smooth day-to-day functioning and exceptional user experience. She manages relationships with animal shelters, coordinates content verification processes, and optimizes our platform's operational efficiency. Janelle's focus on user experience and operational excellence makes PetSwipe a trusted and reliable platform for pet adoption nationwide.",
      skills: [
        "Operations Management",
        "User Experience",
        "Process Optimization",
        "Team Coordination",
        "Quality Assurance",
      ],
      image: "/janelle.jpg",
      github: "https://github.com/janelle",
      linkedin: "https://linkedin.com/in/janelle",
      email: "janelle@petswipe.com",
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
                Leadership Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Three passionate leaders revolutionizing pet adoption through
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
                  {/* Real photo */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
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
            Our leadership team is ready to bring your{" "}
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
