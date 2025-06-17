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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "Java & Kotlin", level: 95, icon: <Code className="w-4 h-4" />, color: "from-orange-500 to-red-500" },
    { name: "Flutter & Dart", level: 90, icon: <Smartphone className="w-4 h-4" />, color: "from-blue-500 to-cyan-500" },
    {
      name: "iOS Development",
      level: 75,
      icon: <Smartphone className="w-4 h-4" />,
      color: "from-gray-600 to-gray-800",
    },
    { name: "Android TV", level: 80, icon: <Smartphone className="w-4 h-4" />, color: "from-green-500 to-emerald-500" },
    {
      name: "Firebase & Databases",
      level: 90,
      icon: <Database className="w-4 h-4" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "REST APIs & Integration",
      level: 95,
      icon: <Globe className="w-4 h-4" />,
      color: "from-purple-500 to-pink-500",
    },
    { name: "CI/CD & Jenkins", level: 75, icon: <Code className="w-4 h-4" />, color: "from-indigo-500 to-blue-500" },
  ]

  const projects = [
    {
      title: "Nal Jal Sewa App",
      description:
        "Pan-India level hybrid water service management application with real-time service tracking, billing, and citizen engagement features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Hybrid Development", "REST APIs", "Firebase"],
      downloads: "100K+",
      rating: 4.9,
      gradient: "from-blue-600 to-cyan-600",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "mGramSeva",
      description:
        "Government application based on DIGIT platform for rural water service management, currently on pilot run across multiple states.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["DIGIT Platform", "Android", "Government APIs", "Multi-State"],
      downloads: "75K+",
      rating: 4.8,
      gradient: "from-green-600 to-emerald-600",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Youth4Work EdTech App",
      description:
        "Educational platform with MVVM architecture, live data implementation, and multi-flavor support for enhanced learning experience.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "Kotlin", "MVVM", "Live Data", "Multi-Flavor"],
      downloads: "50K+",
      rating: 4.7,
      gradient: "from-purple-600 to-pink-600",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Android TV Application",
      description:
        "Large screen optimized application with enhanced remote navigation, lean-back launcher support, and TV-specific UI/UX design.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android TV", "Lean Back Launcher", "Remote Navigation", "Large Screen UI"],
      downloads: "25K+",
      rating: 4.6,
      gradient: "from-orange-600 to-red-600",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
    {
      title: "Fintech Mobile App",
      description:
        "Secure financial application with payment gateway integration, transaction management, and robust security features for Tramo Tech.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "Payment Gateway", "Security", "Financial APIs"],
      downloads: "40K+",
      rating: 4.5,
      gradient: "from-indigo-600 to-purple-600",
      links: {
        github: "https://github.com/shubhamdevgupta",
        playstore: "#",
        appstore: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shubham Gupta
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600 font-semibold">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-blue-600 font-semibold">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600 font-semibold">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600 font-semibold">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
        <div className="relative flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Shubham Gupta"
                width={180}
                height={180}
                className="rounded-full border-4 border-white shadow-2xl object-cover"
                style={{
                  objectPosition: "50% 30%",
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-10 h-10 border-4 border-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mobile App
                </span>
                <br />
                <span className="text-gray-900">Developer</span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-600">
                <Zap className="w-5 h-5" />
                <span>Android • iOS • Flutter • Jetpack Compose</span>
                <Zap className="w-5 h-5" />
              </div>
            </div>

            <p className="mx-auto max-w-[700px] text-gray-600 text-xl md:text-2xl leading-relaxed">
              Crafting exceptional mobile experiences with cutting-edge technologies.
              <span className="font-semibold text-blue-600"> 5+ years</span> of experience building apps that
              <span className="font-semibold text-purple-600"> users love</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="/resume/Shubham_Gupta_Resume.pdf"
                download="Shubham_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              asChild
            >
              <a href="mailto:hutesjk@gmail.com">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-colors"
              asChild
            >
              <a href="https://github.com/shubhamdevgupta" target="_blank" rel="noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-colors"
              asChild
            >
              <a href="https://www.linkedin.com/in/shubhamg14639/" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-colors"
              asChild
            >
              <a href="mailto:hutesjk@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a passionate <span className="font-semibold text-blue-600">Mobile Application Developer</span> with
                extensive experience in Android and iOS development. Currently working at{" "}
                <span className="font-semibold text-purple-600">ADG Online Solution</span>, I'm spearheading the
                development of hybrid applications for pan-India level projects.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I specialize in <span className="font-semibold text-green-600">Java, Kotlin, Flutter</span>, and iOS
                development, with expertise in modern architectures like{" "}
                <span className="font-semibold text-orange-600">MVVM</span> and various database technologies.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                My journey includes working with diverse teams, conducting market research, and implementing effective
                product strategies. I've contributed to successful launches of innovative applications across multiple
                platforms.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm committed to writing <span className="font-semibold text-pink-600">clean, maintainable code</span>{" "}
                and creating exceptional user experiences that make a difference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-600 font-medium">Apps Built</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                500K+
              </div>
              <div className="text-sm text-gray-600 font-medium">Downloads</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                4.8
              </div>
              <div className="text-sm text-gray-600 font-medium">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Technologies and tools I use to build amazing mobile applications
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-lg text-gray-800">{skill.name}</span>
                      <div className="text-sm text-gray-500 mt-1">Proficiency: {skill.level}%</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-sm`}
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

      {/* Projects Section */}
      <section id="projects" className="container py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>
        <div className="relative space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              A showcase of mobile applications I've built, from concept to deployment
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">{project.title.split(" ")[0]}</div>
                  </div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-bold text-gray-800">{project.title}</CardTitle>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-semibold text-yellow-700">{project.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                          <Users className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">{project.downloads}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-2 hover:bg-gray-900 hover:text-white transition-colors"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-2 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-xl">Have a mobile app idea? Let's discuss how we can bring it to life.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-fit mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-xl text-gray-800">Email</div>
                <div className="text-gray-600 font-medium">
                  <a href="mailto:hutesjk@gmail.com" className="hover:text-blue-600 transition-colors">
                    hutesjk@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl w-fit mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-xl text-gray-800">Phone</div>
                <div className="text-gray-600 font-medium">
                  <a href="tel:+918650922082" className="hover:text-green-600 transition-colors">
                    +91 8650922082
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl w-fit mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-xl text-gray-800">Location</div>
                <div className="text-gray-600 font-medium">Rohini, Delhi</div>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="gap-3 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            asChild
          >
            <a href="mailto:hutesjk@gmail.com">
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Shubham Gupta</span>
            </div>
            <p className="text-gray-300">© 2024 Shubham Gupta. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="https://github.com/shubhamdevgupta" target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="https://www.linkedin.com/in/shubhamg14639/" target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" asChild>
                <a href="mailto:hutesjk@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
