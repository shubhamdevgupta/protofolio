"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Smartphone,
  Code,
  Database,
  Globe,
  Star,
  Sparkles,
  Zap,
  Users,
  Menu,
  X,
  TrendingUp,
  Award,
  Target,
  Crown,
  Rocket,
  Shield,
  Building,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    { name: "Java & Kotlin", level: 95, icon: <Code className="w-4 h-4" />, color: "from-orange-500 to-red-500" },
    { name: "Flutter & Dart", level: 90, icon: <Smartphone className="w-4 h-4" />, color: "from-blue-500 to-cyan-500" },
    {
      name: "Jetpack Compose",
      level: 85,
      icon: <Sparkles className="w-4 h-4" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "SwiftUI & iOS",
      level: 80,
      icon: <Smartphone className="w-4 h-4" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "MVVM & Architecture",
      level: 92,
      icon: <Code className="w-4 h-4" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Firebase & SQL",
      level: 88,
      icon: <Database className="w-4 h-4" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "REST APIs & Integration",
      level: 95,
      icon: <Globe className="w-4 h-4" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Team Leadership",
      level: 88,
      icon: <Users className="w-4 h-4" />,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const projects = [
    {
      title: "Nal Jal Sewa",
      description:
        "Led a team of 8 developers in creating a national-level hybrid mobile application for state-wise water supply billing and dashboarding across Karnataka, Madhya Pradesh, and Assam. Features include village-level consumer registration, bill generation, and revenue tracking with real-time data visualization.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Team Leadership", "Jenkins CI/CD", "eGov Foundation", "Real-time Dashboard"],
      downloads: "100K+",
      rating: 4.9,
      gradient: "from-blue-600 to-cyan-600",
      period: "2023 - Present",
      teamSize: "8 developers",
      role: "Technical Lead",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "JJM-WQMIS",
      description:
        "Architected and led development of state-level water quality monitoring app for village inspections and sample submissions. Managed a cross-functional team of 6 members, implementing clean architecture using MVVM with GPS-based logging and Google Analytics integration.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "MVVM Architecture", "Google Analytics", "GPS Integration", "Team Management"],
      downloads: "75K+",
      rating: 4.8,
      gradient: "from-green-600 to-emerald-600",
      period: "2023 - Present",
      teamSize: "6 members",
      role: "Technical Architect",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Astro Help Me",
      description:
        "Spearheaded end-to-end development of comprehensive astrology service app with dual user and astrologer interfaces. Led a team of 4 developers in implementing real-time chat functionality, birth chart analysis, and secure messaging with optimized UI/UX.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "MVVM", "Real-time Chat", "Secure Messaging", "UI Optimization"],
      downloads: "50K+",
      rating: 4.7,
      gradient: "from-purple-600 to-pink-600",
      period: "2023",
      teamSize: "4 developers",
      role: "Project Lead",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Youth4Work EdTech Platform",
      description:
        "Led technical development of educational platform with MVVM architecture and Android TV optimization. Managed team coordination for multi-flavor implementation and enhanced remote navigation experience for large screens.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "Kotlin", "MVVM", "Live Data", "Android TV", "Multi-Flavor"],
      downloads: "80K+",
      rating: 4.6,
      gradient: "from-orange-600 to-red-600",
      period: "2021 - 2022",
      teamSize: "5 developers",
      role: "Senior Developer",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Fintech Mobile Solutions",
      description:
        "Collaborated with senior developers in maintaining secure financial applications with advanced encryption and payment gateway integration. Contributed to robust security implementations and latest technology stack updates.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "Encryption", "Payment Gateway", "Security", "Financial APIs"],
      downloads: "60K+",
      rating: 4.5,
      gradient: "from-indigo-600 to-purple-600",
      period: "2020 - 2021",
      teamSize: "3 developers",
      role: "Junior Developer",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
  ]

  const achievements = [
    {
      title: "Enhanced User Engagement",
      description:
        "Led UI/UX improvements that increased app user engagement by 40% through strategic enhancements and seamless API integrations across multiple government applications",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      metric: "+40%",
    },
    {
      title: "Team Leadership Excellence",
      description:
        "Successfully managed and mentored teams of 10-12 developers across multiple projects, improving delivery efficiency and code quality standards",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      metric: "12 devs",
    },
    {
      title: "State-wide App Launches",
      description:
        "Led successful deployment of 15+ Android applications across multiple states with consistently high user satisfaction and government approval ratings",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      metric: "15+",
    },
    {
      title: "Backend Performance Boost",
      description:
        "Architected and implemented advanced CI/CD pipelines and optimized system design patterns, resulting in 50% improved backend performance",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      metric: "+50%",
    },
  ]

  const careerGoals = [
    {
      title: "Technical Leadership",
      description: "Aspiring to lead larger development teams and drive technical innovation in mobile app development",
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      timeline: "Next 2 years",
    },
    {
      title: "CTO Vision",
      description: "Building towards Chief Technology Officer role to shape technology strategy and industry standards",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      timeline: "5-7 years",
    },
    {
      title: "Industry Impact",
      description: "Aiming to revolutionize mobile development practices and mentor the next generation of developers",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      timeline: "Long-term",
    },
  ]

  const specializations = [
    {
      title: "Government & Public Sector",
      description:
        "Specialized in developing large-scale government applications with complex compliance requirements and multi-state deployments",
      icon: <Building className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      projects: "8+ projects",
    },
    {
      title: "Service-Based Solutions",
      description:
        "Expert in creating scalable service-oriented applications with robust API integrations and real-time data processing",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      projects: "12+ solutions",
    },
    {
      title: "Enterprise Applications",
      description:
        "Experienced in building secure enterprise-grade mobile applications with advanced security protocols and encryption",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      projects: "6+ enterprises",
    },
  ]

  const certifications = [
    {
      title: "eGov Foundation Certification",
      issuer: "eGov Foundation",
      date: "2023",
      description: "Certified in government application development and DIGIT platform implementation",
      icon: <Award className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Advanced Android Development",
      issuer: "Google",
      date: "2022",
      description:
        "Advanced certification in Android development with Jetpack Compose and modern architecture patterns",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "iOS Development with SwiftUI",
      issuer: "Apple",
      date: "2023",
      description: "Mastering SwiftUI for modern iOS application development and cross-platform solutions",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-gray-600 to-gray-800",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager",
      company: "ADG Online Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shubham's leadership in our government projects has been exceptional. His ability to manage large teams while maintaining technical excellence makes him perfect for senior leadership roles. A future CTO in the making!",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Technical Director",
      company: "eGov Foundation",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shubham's expertise in government applications and team leadership is remarkable. His vision for scalable solutions and mentoring abilities position him as an ideal candidate for executive technology roles.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Amit Patel",
      role: "Senior Architect",
      company: "Youth4Work",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working under Shubham's technical leadership was inspiring. His mastery of modern technologies like Jetpack Compose and SwiftUI, combined with his strategic thinking, makes him ready for CTO responsibilities.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Sarah Johnson",
      role: "VP Engineering",
      company: "iBoss Technology",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shubham's ability to lead cross-functional teams and deliver complex projects on time is outstanding. His technical vision and leadership skills are exactly what the industry needs in senior positions.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Dr. Vikram Singh",
      role: "Government Technology Advisor",
      company: "Digital India Initiative",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shubham's contribution to government digitization through his technical leadership and innovative solutions has been transformational. He has the vision and skills to lead technology organizations.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Lisa Chen",
      role: "CTO",
      company: "Tramo Tech",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shubham's technical expertise in fintech applications and his natural leadership abilities make him an ideal candidate for executive roles. His strategic approach to technology is impressive.",
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  const liveApps = [
    {
      title: "Handy Box",
      description:
        "Comprehensive service management platform for connecting service providers with customers. Features include real-time booking, service tracking, and secure payments.",
      icon: "📦",
      platform: "iOS",
      rating: 4.8,
      downloads: "50K+",
      gradient: "from-blue-600 to-purple-600",
      links: {
        appstore: "https://apps.apple.com/us/app/handy-box/id6755395002",
        playstore: "#",
      },
    },
    {
      title: "Vidhatasharanam - Visit Tracker",
      description:
        "Specialized visit tracking and management application for field officers. Enables real-time location tracking, visit logging, and comprehensive reporting with analytics.",
      icon: "📍",
      platform: "iOS",
      rating: 4.7,
      downloads: "25K+",
      gradient: "from-green-600 to-emerald-600",
      links: {
        appstore: "https://apps.apple.com/us/app/vidhatasharanam-visit-tracker/id6754886297",
        playstore: "#",
      },
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shubham Gupta
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => scrollToSection("about")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="transition-colors hover:text-blue-600 font-semibold"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-blue-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Vision
                </button>
                <button
                  onClick={() => scrollToSection("achievements")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Achievements
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Shubham Gupta"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-4 border-white shadow-2xl object-cover"
                style={{
                  objectPosition: "50% 30%",
                }}
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 sm:border-4 border-white flex items-center justify-center shadow-lg">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mobile Tech
                </span>
                <br />
                <span className="text-gray-900">Leader</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg font-semibold text-blue-600">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-center">Team Lead • Future CTO • Industry Innovator</span>
                <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            <p className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Dedicated Mobile Application Developer and{" "}
              <span className="font-semibold text-blue-600">Team Leader</span> with extensive experience in managing
              <span className="font-semibold text-purple-600"> 10-12 member teams</span>. Aspiring to become a
              <span className="font-semibold text-orange-600"> CTO</span> and revolutionize the mobile development
              industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="/resume/Shubham_Gupta_Resume.pdf"
              download="Shubham_Gupta_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
            <a
              href="mailto:hutesjk@gmail.com"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Let's Connect
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/shubhamdevgupta"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors group"
            >
              <Github className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamg14639/"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors group"
            >
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hutesjk@gmail.com"
              className="p-3 sm:p-4 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors group"
            >
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                I am a dedicated{" "}
                <span className="font-semibold text-blue-600">Mobile Application Developer and Team Leader</span> with
                extensive experience in creating high-performance applications for Android and iOS. Currently working at{" "}
                <span className="font-semibold text-purple-600">ADG Online Solution</span>, I'm spearheading the
                development of hybrid applications for pan-India level projects including Nal Jal Sewa.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                My expertise spans across{" "}
                <span className="font-semibold text-green-600">
                  Java, Kotlin, Dart, Flutter, Jetpack Compose, and SwiftUI
                </span>
                , with strong collaboration skills that enable me to contribute effectively to team-driven projects.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                I have successfully worked on{" "}
                <span className="font-semibold text-orange-600">
                  government applications, fintech solutions, and educational platforms
                </span>
                , always focusing on delivering exceptional user experiences and maintaining high code quality
                standards.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                I am constantly aiming to enhance my technical capabilities and stay updated with the latest
                <span className="font-semibold text-pink-600"> mobile development trends and technologies</span>, with
                aspirations to become a technology leader in the industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                12
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Team Members Led</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Apps Launched</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                MCA
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Computer Engineering</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Professional Certifications</h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6 text-center space-y-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white w-fit mx-auto`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-800">{cert.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Education</h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6 space-y-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white w-fit">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-800">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">Computer Engineering</p>
                    <p className="text-xs text-gray-500">Indira Gandhi National Open University</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6 space-y-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-fit">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-800">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">Computer Science & Engineering</p>
                    <p className="text-xs text-gray-500">MJPR University of Science and Technology</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Career Goals Section */}
      <section id="vision" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl"></div>
        <div className="relative max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Vision & Career Goals
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              My roadmap to becoming a technology leader and industry innovator
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {careerGoals.map((goal, index) => (
              <Card
                key={index}
                className="group border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${goal.color} text-white w-fit mx-auto`}>
                    {goal.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800">{goal.title}</h3>
                    <div className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mx-auto">
                      {goal.timeline}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="pt-8 sm:pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Areas of Specialization</h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              {specializations.map((spec, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 sm:p-8 text-center space-y-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${spec.color} text-white w-fit mx-auto`}>
                      {spec.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-base sm:text-lg text-gray-800">{spec.title}</h4>
                      <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit mx-auto">
                        {spec.projects}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section id="achievements" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-3xl"></div>
        <div className="relative max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Measurable impact and leadership results from my mobile development projects
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`}></div>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                      {achievement.icon}
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                    >
                      {achievement.metric}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-gray-800">{achievement.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Cutting-edge technologies and leadership skills for the future of mobile development
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800">{skill.name}</span>
                      <div className="text-xs sm:text-sm text-gray-500 mt-1">Proficiency: {skill.level}%</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div
                        className={`h-2 sm:h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Apps Section */}
      <section id="live-apps" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Live Apps on App Stores</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Production applications currently available on iOS and Android app stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {liveApps.map((app, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className={`h-24 sm:h-32 bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                  <span className="text-5xl sm:text-6xl">{app.icon}</span>
                </div>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{app.title}</CardTitle>
                      <Badge className="bg-blue-600 text-white whitespace-nowrap text-xs sm:text-sm">
                        {app.platform}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs sm:text-sm font-semibold text-yellow-700">{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        <span className="text-xs sm:text-sm font-semibold text-green-700">{app.downloads}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-gray-600 mt-3">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 sm:gap-3">
                    {app.links.appstore !== "#" && (
                      <Button
                        size="sm"
                        className="gap-1 sm:gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white flex-1 text-xs sm:text-sm"
                        asChild
                      >
                        <a href={app.links.appstore} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          App Store
                        </a>
                      </Button>
                    )}
                    {app.links.playstore !== "#" && (
                      <Button
                        size="sm"
                        className="gap-1 sm:gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex-1 text-xs sm:text-sm"
                        asChild
                      >
                        <a href={app.links.playstore} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Play Store
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Developer Profile Links Card */}
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">More Apps Available</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Check out my complete portfolio of published applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  className="gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex-1"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/developer?id=ShubhamAndroidDev&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View All Apps on Google Play
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>
        <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Projects
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Projects where I led teams and drove technical innovation from concept to deployment
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold opacity-20">
                      {project.title.split(" ")[0]}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-semibold text-gray-700">{project.period}</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-semibold text-white">{project.role}</span>
                  </div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-xs sm:text-sm font-semibold text-yellow-700">{project.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          <span className="text-xs sm:text-sm font-semibold text-green-700">{project.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                          <span className="text-xs sm:text-sm font-semibold text-blue-700">{project.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 sm:gap-2 border-2 hover:bg-gray-900 hover:text-white transition-colors text-xs sm:text-sm flex-1 sm:flex-none bg-transparent"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 sm:gap-2 border-2 hover:bg-blue-600 hover:text-white transition-colors text-xs sm:text-sm flex-1 sm:flex-none bg-transparent"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl"></div>
        <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Leadership Testimonials
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              What industry leaders say about my technical leadership and vision
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-gray-100">
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-30`}
                      ></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm sm:text-base text-gray-900 truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.role}</div>
                      <div className="text-xs text-gray-500 truncate">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12">
            <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Team Satisfaction</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                25+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Projects Led</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">On-Time Delivery</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Leadership Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Let's Build the Future
              </span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
              Ready to lead your next mobile development project or discuss technology leadership opportunities?
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-fit mx-auto">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-lg sm:text-xl text-gray-800">Email</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  <a href="mailto:hutesjk@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                    hutesjk@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl w-fit mx-auto">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-lg sm:text-xl text-gray-800">Phone</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  <a href="tel:+918650922082" className="hover:text-green-600 transition-colors">
                    +91 8650922082
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl w-fit mx-auto">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="font-bold text-lg sm:text-xl text-gray-800">Location</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Rohini, Delhi</div>
              </CardContent>
            </Card>
          </div>

          <a
            href="mailto:hutesjk@gmail.com"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            Let's Discuss Leadership Opportunities
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Smartphone className="h-5 h-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl">Shubham Gupta</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 text-center">© 2024 Shubham Gupta. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/shubhamdevgupta"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-3 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamg14639/"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-3 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:hutesjk@gmail.com"
                className="p-2 sm:p-3 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
