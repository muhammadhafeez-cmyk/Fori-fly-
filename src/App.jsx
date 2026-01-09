"use client"
import { Button } from "./components/ui/Button"
import { Card, CardContent } from "./components/ui/Card"
import { Badge } from "./components/ui/Badge"
import { ThemeProvider, useTheme } from "./hooks/useTheme"
import { LanguageProvider, useLanguage } from "./hooks/useLanguage"
import {
  Car,
  Key,
  Fuel,
  Battery,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  TrendingUp,
  Wifi,
  Mail,
  Zap,
  BarChart,
  Share2,
  Leaf,
  TreePine,
  Gauge,
  ParkingCircle,
  Train as Traffic,
  Contact,
  CarIcon,
  ChevronLeft,
  ChevronRight,
  Bot,
  Brain,
  Calendar,
  Activity,
} from "lucide-react"
// import { Mail, Contact } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import { GiPathDistance } from "react-icons/gi"
import ReactGA from "react-ga4"
import { Helmet } from "react-helmet"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:bg-white/20 transition-all duration-300 border border-white/20"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}

function LanguageToggle() {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "no", name: "Norsk", flag: "🇳🇴" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2"
      >
        {/* <span className="text-lg">{currentLang?.flag}</span> */}
        <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 min-w-[160px] z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 transition-colors ${
                  language === lang.code
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {/* <span className="text-lg">{lang.flag}</span> */}
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Header() {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation items
  const navItems = [
    { name: t("features"), id: "features" },
    { name: t("municipalities"), id: "ecosystem" },
    { name: t("impact"), id: "impact" },
    { name: t("testimonials"), id: "testimonials" },
    { name: t("contact"), id: "contact" },
  ]

  // Scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <img src="/forifly.png" alt="" className="px-0.5" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-md md:text-xl lg:text-2xl font-black bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                FORI Fly
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <a href="https://fly.fori.co/" target="_blank" rel="noreferrer">
              <Button variant="gradient" className="shadow-2xl shadow-blue-500/25 font-semibold">
                Book a Demo
              </Button>
            </a>
          </div>
          <div className="flex md:hidden items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 dark:border-gray-800/50 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://fly.fori.co/"
                target="_blank"
                className="flex flex-col space-y-3 pt-4"
                rel="noreferrer"
              >
                <Button variant="gradient">Book a Demo</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function HaykLanding() {
  ReactGA.initialize("G-0687SKW2SS")
  // const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location])

  
  useEffect(() => {
    document.title = "Fleet Management Software | FORI Fly - Smart Fleet Tracking & Booking"
  }, [])

  const { theme, toggleTheme } = useTheme()
  const { t, language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0)
  const [partnerTranslateX, setPartnerTranslateX] = useState(0)
  const partnersContainerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const partners = [
    {
      name: "Telenor",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telenor-n1jsRsty0CrCigxeY9GZMx6uIPiFzg.png",
      status: "current",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      status: "current",
    },
    {
      name: "C5 Capital",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capital-E2BIw6W5xNXwGWMSOWbGvPijfwpdRz.png",
      status: "current",
    },
    {
      name: "NIO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nio-p8GtNP22om28oHzRAftxx6rXsk3HQs.png",
      status: "current",
    },
    {
      name: "UNDP",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/undp-ww7LKVbFR9CkOAE349cDvHK5qkRKvG.png",
      status: "current",
    },
    {
      name: "Techstars",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techstars-hbf6VuFNGUvyn0NHN4XB0jvdbsMtfd.png",
      status: "past",
    },
    {
      name: "Zindagi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zindagi-6tp4Gk7CC2gykpiinfwdgJVgVHsR6E.png",
      status: "current",
    },
    {
      name: "Emergence",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emergence-06Cerj3owtdDpxZT476FJE4b6zLhGC.png",
      status: "past",
    },
    {
      name: "US Institute of Peace",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/institute-american-JiWpbtM9n4Wq48At0V8MFLcFQwRXKS.png",
      status: "past",
    },
    {
      name: "Jazz",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jazz-P2snLfI6kQlanjcORCMRkVr5BPo4eQ.png",
      status: "past",
    },
    {
      name: "Stavanger",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stavanger-pfPQC2FOW5ztNzxAWhfvacEL1FEy5p.png",
      status: "current",
    },
  ]

  // Impact data
  const impactData = [
    {
      vehicles: 10,
      color: "blue",
      totalAnuualDistace: "111k",
      fuelSavings: "7,770",
      co2Reduction: t("co2ReductionValue10"),
      usageIncrease: "500%",
      trafficReduction: t("local"),
      parkingSpaces: "5-8",
      milesDrivenPerVehicle: "6,900",
    },
    {
      vehicles: 100,
      color: "green",
      totalAnuualDistace: "1110k",
      fuelSavings: "77,700",
      co2Reduction: t("co2ReductionValue100"),
      usageIncrease: "500%",
      trafficReduction: t("district"),
      parkingSpaces: "60-80",
      milesDrivenPerVehicle: "6,900",
    },
    {
      vehicles: 1000,
      color: "indigo",
      totalAnuualDistace: "111,00k",
      fuelSavings: "777k",
      co2Reduction: t("co2ReductionValue1000"),
      usageIncrease: "500%",
      trafficReduction: t("city"),
      parkingSpaces: "700-900",
      milesDrivenPerVehicle: "6,900",
    },
    {
      vehicles: 10000,
      color: "orange",
      totalAnuualDistace: "111,000k",
      fuelSavings: "7,770k",
      co2Reduction: t("co2ReductionValue10000"),
      usageIncrease: "500%",
      trafficReduction: t("regional"),
      parkingSpaces: "8,000-10,000",
      milesDrivenPerVehicle: "6,900",
    },
  ]

  // Partner navigation functions with sliding effect
  const nextPartner = () => {
    const newIndex = (currentPartnerIndex + 1) % partners.length
    setCurrentPartnerIndex(newIndex)

    // Calculate slide distance (each partner card is ~152px wide including margin)
    const slideDistance = 152
    const newTranslateX = partnerTranslateX - slideDistance
    setPartnerTranslateX(newTranslateX)
  }

  const prevPartner = () => {
    const newIndex = (currentPartnerIndex - 1 + partners.length) % partners.length
    setCurrentPartnerIndex(newIndex)

    // Calculate slide distance
    const slideDistance = 152
    const newTranslateX = partnerTranslateX + slideDistance
    setPartnerTranslateX(newTranslateX)
  }

  // Impact navigation functions
  const nextImpact = () => {
    setCurrentImpactIndex((prev) => (prev + 1) % impactData.length)
  }

  const prevImpact = () => {
    setCurrentImpactIndex((prev) => (prev - 1 + impactData.length) % impactData.length)
  }

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  // Client data based on language
  const getClientData = () => {
    if (language === "no") {
      return {
        current: [
          {
            name: "Stavanger Kommune",
            type: "Kommune",
            fleet: "Vi har økt utnyttelsen av kjøretøyene med 500 % og redusert karbonutslippene med 40 %.",
            status: "Aktiv",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Rælingen Kommune",
            type: "Kommune",
            fleet: "En vellykket pilot er levert",
            status: "Aktiv",
            color: "green",
            icon: "🏛️",
          },
          {
            name: "PropTech",
            type: "Teknologi",
            fleet: "",
            status: "Aktiv",
            color: "indigo",
            icon: "🏢",
          },
          {
            name: "Selvaag",
            type: "Bygg",
            fleet: "",
            status: "Aktiv",
            color: "orange",
            icon: "🏗️",
          },
        ],
        past: [
          {
            name: "Vestfold-Telemark",
            type: "Fylkeskommune",
            fleet: "Regional flåte",
            status: "Fullført",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Posten/Bring",
            type: "Logistikk",
            fleet: "700+ kjøretøy",
            status: "Fullført",
            color: "red",
            icon: "📦",
          },
        ],
      }
    } else if (language === "es") {
      return {
        current: [
          {
            name: "Municipio de Stavanger",
            type: "Municipio",
            fleet:
              "Hemos aumentado la usabilidad de los vehículos en un 500% y reducido las emisiones de carbono en un 40%",
            status: "Activo",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Municipio de Rælingen",
            type: "Municipio",
            fleet: "Un piloto exitoso entregado",
            status: "Activo",
            color: "green",
            icon: "🏛️",
          },
          {
            name: "PropTech",
            type: "Tecnología",
            fleet: "",
            status: "Activo",
            color: "indigo",
            icon: "🏢",
          },
          {
            name: "Selvaag",
            type: "Construcción",
            fleet: "",
            status: "Activo",
            color: "orange",
            icon: "🏗️",
          },
        ],
        past: [
          {
            name: "Vestfold-Telemark",
            type: "Autoridad Regional",
            fleet: "Flota regional",
            status: "Completado",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Posten/Bring",
            type: "Logística",
            fleet: "700+ vehículos",
            status: "Completado",
            color: "red",
            icon: "📦",
          },
        ],
      }
    } else if (language === "it") {
      return {
        current: [
          {
            name: "Comune di Stavanger",
            type: "Comune",
            fleet: "Abbiamo aumentato l'usabilità dei veicoli del 500% e ridotto le emissioni di carbonio del 40%",
            status: "Attivo",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Comune di Rælingen",
            type: "Comune",
            fleet: "Un pilota di successo consegnato",
            status: "Attivo",
            color: "green",
            icon: "🏛️",
          },
          {
            name: "PropTech",
            type: "Tecnologia",
            fleet: "",
            status: "Attivo",
            color: "indigo",
            icon: "🏢",
          },
          {
            name: "Selvaag",
            type: "Costruzione",
            fleet: "",
            status: "Attivo",
            color: "orange",
            icon: "🏗️",
          },
        ],
        past: [
          {
            name: "Vestfold-Telemark",
            type: "Autorità Regionale",
            fleet: "Flotta regionale",
            status: "Completato",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Posten/Bring",
            type: "Logistica",
            fleet: "700+ veicoli",
            status: "Completato",
            color: "red",
            icon: "📦",
          },
        ],
      }
    } else if (language === "de") {
      return {
        current: [
          {
            name: "Gemeinde Stavanger",
            type: "Gemeinde",
            fleet: "Wir haben die Fahrzeugnutzung um 500% erhöht und die CO2-Emissionen um 40% reduziert",
            status: "Aktiv",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Gemeinde Rælingen",
            type: "Gemeinde",
            fleet: "Ein erfolgreiches Pilotprojekt geliefert",
            status: "Aktiv",
            color: "green",
            icon: "🏛️",
          },
          {
            name: "PropTech",
            type: "Technologie",
            fleet: "",
            status: "Aktiv",
            color: "indigo",
            icon: "🏢",
          },
          {
            name: "Selvaag",
            type: "Bau",
            fleet: "",
            status: "Aktiv",
            color: "orange",
            icon: "🏗️",
          },
        ],
        past: [
          {
            name: "Vestfold-Telemark",
            type: "Regionale Behörde",
            fleet: "Regionale Flotte",
            status: "Abgeschlossen",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Posten/Bring",
            type: "Logistik",
            fleet: "700+ Fahrzeuge",
            status: "Abgeschlossen",
            color: "red",
            icon: "📦",
          },
        ],
      }
    } else {
      return {
        current: [
          {
            name: "Stavanger Municipality",
            type: "Municipality",
            fleet: "We have increased the usability of vehicles by 500% and reduced the carbon emission by 40%",
            status: "Active",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Rælingen Municipality",
            type: "Municipality",
            fleet: "A Successful Pilot Delivered",
            status: "Active",
            color: "green",
            icon: "🏛️",
          },
          {
            name: "PropTech",
            type: "Technology",
            fleet: "",
            status: "Active",
            color: "indigo",
            icon: "🏢",
          },
          {
            name: "Selvaag",
            type: "Construction",
            fleet: "",
            status: "Active",
            color: "orange",
            icon: "🏗️",
          },
        ],
        past: [
          {
            name: "Vestfold-Telemark",
            type: "Regional Authority",
            fleet: "Regional fleet",
            status: "Completed",
            color: "blue",
            icon: "🏛️",
          },
          {
            name: "Posten/Bring",
            type: "Logistics",
            fleet: "700+ vehicles",
            status: "Completed",
            color: "red",
            icon: "📦",
          },
        ],
      }
    }
  }

  const clientData = getClientData()

  // Canonical tag logic
  const canonical =
    typeof window !== "undefined" && window.location.hostname.endsWith("forifly.io")
      ? "https://forifly.ai/"
      : "https://forifly.ai/"

  return (
    <div className="min-h-screen bg-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <Helmet>
        <link rel="canonical" href={canonical} />
      </Helmet>
      {/* NEW HERO SECTION (Above the Fold) */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/95 to-blue-700/95"></div>
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              {t("heroMainTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              {t("heroMainSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a href="https://fly.fori.co/" target="_blank" rel="noreferrer">
                <Button size="lg" variant="gradient" className="font-semibold">
                  {t("heroDemoButton")}
                </Button>
              </a>
              <a href="mailto:info@fori.co" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white/10">
                  {t("heroContactButton")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS FORIFLY SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {t("whatIsForiFlyTitle")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
              {t("whatIsForiFlyDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              {t("whoIsItFor")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="group hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <span className="text-3xl">🏙️</span>
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{t("citiesMunicipalities")}</div>
                <div className="text-gray-600 dark:text-gray-300 text-base font-medium">
                  {t("citiesMunicipalitiesDesc")}
                </div>
              </CardContent>
            </Card>
            {/* Card 2 */}
            <Card className="group hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <span className="text-3xl">✈️</span>
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{t("airportsTransportHubs")}</div>
                <div className="text-gray-600 dark:text-gray-300 text-base font-medium">
                  {t("airportsTransportHubsDesc")}
                </div>
              </CardContent>
            </Card>
            {/* Card 3 */}
            <Card className="group hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <span className="text-3xl">🏘️</span>
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{t("housingCommunities")}</div>
                <div className="text-gray-600 dark:text-gray-300 text-base font-medium">
                  {t("housingCommunitiesDesc")}
                </div>
              </CardContent>
            </Card>
            {/* Card 4 */}
            <Card className="group hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                  <span className="text-3xl">🏢</span>
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{t("corporatesEnterprises")}</div>
                <div className="text-gray-600 dark:text-gray-300 text-base font-medium">
                  {t("corporatesEnterprisesDesc")}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              {t("challengesWeAddress")}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-indigo-600 dark:text-indigo-400">
                  <BarChart3 className="w-6 h-6" />
                </span>
                <span>{t("challengeManualTracking")}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-green-600 dark:text-green-400">
                  <Gauge className="w-6 h-6" />
                </span>
                <span>{t("challengeNoRealtimeAnalytics")}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-red-600 dark:text-red-400">
                  <Fuel className="w-6 h-6" />
                </span>
                <span>{t("challengeHighCosts")}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-yellow-600 dark:text-yellow-400">
                  <Share2 className="w-6 h-6" />
                </span>
                <span>{t("challengeScalingCarsharing")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-gray-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-indigo-600/15 via-transparent to-blue-600/15 animate-pulse delay-1000"></div>
          </div>
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Updated main hero headline (slightly smaller) */}
                <h1 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                  {t("heroMainTitle")}
                </h1>

                <div className="space-y-4">
                  {/* Updated hero subheadline (larger paragraph under headline) */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {t("heroMainSubtitle")}
                  </p>

                  {/* Updated hero description (smaller text below) */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("heroDescription")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-3xl">
                  <img
                    src="/image2.png"
                    alt="FORI FLY Vehicle Booking Interface"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <a
                  href="https://fly.fori.co/"
                  target="_blank"
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl shadow-blue-500/25 animate-bounce"
                  rel="noreferrer"
                >
                  <Wifi className="w-4 h-4 inline mr-2" />
                  Live Booking System
                </a>
                <div className="absolute -bottom-8 -left-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/50 dark:border-gray-700/50 transform rotate-3 hover:rotate-0 transition-all duration-300">
                  <a
                    href="https://fly.fori.co/"
                    target="_blank"
                    className="flex items-center space-x-4"
                    rel="noreferrer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{t("instantAccessTitle")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t("instantAccessDesc")}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 dark:from-green-900 dark:to-blue-900 dark:text-green-200 text-lg px-6 py-2">
              📊 {t("provenResults")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("provenResults")}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                {t("drivingGreenerCities")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("fromNorwayToWorld")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🌍", value: "40,000+", label: t("kmDrivenSharedRides") },
              { icon: "🚗", value: "3,152", label: t("businessRidesBooked") },
              { icon: "👨‍👩‍👧‍👦", value: "305", label: t("privateRides") },
              { icon: "⏱", value: "21.8", label: t("avgDailyFleetUsage") },
              { icon: "🌿", value: "293.7", label: t("treesSaved") },
              { icon: "⚡", value: "6,500", label: t("co2Saved") },
              { icon: "📈", value: "5.1", label: t("maxDailyAvgUsage") },
            ].map((stat, index) => (
              <Card
                key={index}
                className="group hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{stat.icon}</div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 dark:from-indigo-900 dark:to-purple-900 dark:text-indigo-200 text-lg px-6 py-2">
              🤖 {t("aiPoweredFleetIntelligence")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("aiPoweredFleetIntelligence")}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                {t("comingSoon")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("smarterGreenerMobility")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: t("predictiveMaintenance"),
                description: t("predictiveMaintenanceDesc"),
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: BarChart3,
                title: t("smartUsageAnalytics"),
                description: t("smartUsageAnalyticsDesc"),
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: Bot,
                title: t("automatedDispatching"),
                description: t("automatedDispatchingDesc"),
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: TreePine,
                title: t("ecoImpactForecasting"),
                description: t("ecoImpactForecastingDesc"),
                gradient: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Brain,
                title: t("driverBehaviorInsights"),
                description: t("driverBehaviorInsightsDesc"),
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: Calendar,
                title: t("aiDemandForecasting"),
                description: t("aiDemandForecastingDesc"),
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden"
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digitize, Optimize, Monetize Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Nordic Mountain Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/30 text-lg px-6 py-2">
              🏔️ {t("digitizeOptimizeMonetize")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-white">
              FORI FLY:
              <span className="block bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                {t("digitizeOptimizeMonetize")}
              </span>
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
              {t("digitizeOptimizeMonetizeDescription")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Digitize */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-500">
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t("digitize")}</h3>
                  <p className="text-blue-100 leading-relaxed text-lg mb-6">{t("digitizeDescription")}</p>
                  <div className="space-y-3">
                    {[t("keylessAccess"), t("mobileControl"), t("batteryMonitoring"), t("realTimeAnalytics")].map(
                      (feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-blue-100">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Optimize */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-500">
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t("optimize")}</h3>
                  <p className="text-blue-100 leading-relaxed text-lg mb-6">{t("optimizeDescription")}</p>
                  <div className="space-y-3">
                    {[
                      t("increasedUtilization"),
                      t("crossDepartmentSharing"),
                      t("digitalOperations"),
                      t("costSharing"),
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Monetize */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-500">
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t("monetize")}</h3>
                  <p className="text-blue-100 leading-relaxed text-lg mb-6">{t("monetizeDescription")}</p>
                  <div className="space-y-3">
                    {[t("privateRental"), t("secureCommunities"), t("revenueGeneration"), t("reducedFleetNeeds")].map(
                      (feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-blue-100">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 dark:from-blue-900 dark:to-green-900 dark:text-blue-200 text-lg px-6 py-2">
              🏆 {t("ourClients")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("trustedByLeading")}
              <span className="bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent block">
                {t("norwegianOrganizations")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("clientsDescription")}
            </p>
          </div>
          {/* Current Clients */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t("currentClients")} & {t("pastClients")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientData.current.map((client, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{client.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{client.name}</h4>
                      <div
                        className={`text-lg font-semibold text-${client.color}-600 dark:text-${client.color}-400 mb-2`}
                      >
                        {client.type}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{client.fleet}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PartnersSection with Controlled Navigation */}
      <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden" id="ecosystem">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 dark:from-indigo-900 dark:to-blue-900 dark:text-indigo-200 text-lg px-6 py-2">
              {t("collaborators")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              FORI
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent block">
                {t("ecosystem")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("partnersDescription")}
            </p>
          </div>

          {/* Desktop: Controlled Sliding with Navigation */}
          <div className="hidden md:block relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevPartner}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextPartner}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10 pointer-events-none" />

            {/* Controlled Sliding Partners */}
            <div className="flex overflow-hidden">
              <div
                ref={partnersContainerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${partnerTranslateX}px)` }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-2 group">
                    <div className="w-32 h-32 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{partner.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Single Partner with Navigation */}
          <div className="md:hidden relative">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevPartner}
                className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="flex-1 max-w-xs">
                <div className="w-32 h-32 mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 flex items-center justify-center transition-all duration-300">
                  <img
                    src={partners[currentPartnerIndex].logo || "/placeholder.svg"}
                    alt={`${partners[currentPartnerIndex].name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {partners[currentPartnerIndex].name}
                  </p>
                </div>
              </div>

              <button
                onClick={nextPartner}
                className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartnerIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPartnerIndex ? "bg-indigo-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 text-lg px-6 py-2">
              {t("advancedFeatures")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("everythingYouNeed")}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent block">
                {t("andMore")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("comprehensiveFleetManagement")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Key,
                title: t("keylessAccess"),
                description: t("keylessAccessDescription"),
                gradient: "from-blue-500 to-blue-600",
                features: [t("remoteUnlock"), t("engineStart"), t("secureAccess")],
              },
              {
                icon: Fuel,
                title: t("smartFuelMonitoring"),
                description: t("smartFuelMonitoringDescription"),
                gradient: "from-green-500 to-green-600",
                features: [t("realTimeTracking"), t("routeOptimization"), t("costAnalytics")],
              },
              {
                icon: Battery,
                title: t("batteryHealthTracking"),
                description: t("batteryHealthTrackingDescription"),
                gradient: "from-yellow-500 to-yellow-600",
                features: [t("healthMonitoring"), t("predictiveAlerts"), t("maintenancePlanning")],
              },
              {
                icon: BarChart3,
                title: t("advancedAnalytics"),
                description: t("advancedAnalyticsDescription"),
                gradient: "from-indigo-500 to-indigo-600",
                features: [t("usageAnalytics"), t("costTracking"), t("performanceInsights")],
              },
              {
                icon: Clock,
                title: t("intelligentBooking"),
                description: t("intelligentBookingDescription"),
                gradient: "from-red-500 to-red-600",
                features: [t("smartScheduling"), t("instantBooking"), t("privateUseOptions")],
              },
              {
                icon: Leaf,
                title: t("co2Tracking"),
                description: t("co2TrackingDescription"),
                gradient: "from-green-500 to-emerald-600",
                features: [t("emissionsTracking"), t("sustainabilityReports"), t("goalMonitoring")],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden"
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`w-18 h-18 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW IMPACT SECTION with Mobile Navigation */}
      <section className="py-24 bg-white dark:bg-gray-900" id="impact">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 dark:from-green-900 dark:to-blue-900 dark:text-green-200 text-lg px-6 py-2">
              🌍 {t("environmentalImpact")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("scalable")}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                {t("impact")}
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
              {t("impactDescription")}
            </p>
          </div>

          {/* Desktop: All Cards */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">
            {impactData.map((scale, index) => (
              <Card
                key={index}
                className={`group hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-${scale.color}-50/50 dark:from-gray-800/90 dark:to-${scale.color}-900/20 backdrop-blur-xl overflow-hidden`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${scale.color}-500 to-${scale.color}-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 mb-4`}
                    >
                      <Car className="w-10 h-10 text-white" />
                    </div>
                    <h3 className={`text-4xl font-black text-${scale.color}-600 dark:text-${scale.color}-400 mb-2`}>
                      {scale.vehicles.toLocaleString()}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">{t("vehicles")}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <GiPathDistance className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {t("totalAnnualDistance")}
                        </div>
                        <div className="text-lg font-bold text-green-600">{scale.totalAnuualDistace}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Fuel className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t("fuelSavings")}</div>
                        <div className="text-lg font-bold text-green-600">
                          {scale.fuelSavings} {t("litersPerYear")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <TreePine className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t("co2Reduction")}</div>
                        <div className="text-lg font-bold text-blue-600">{scale.co2Reduction}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Gauge className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t("usageIncrease")}</div>
                        <div className="text-lg font-bold text-indigo-600">{scale.usageIncrease}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Traffic className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {t("trafficReduction")}
                        </div>
                        <div className="text-lg font-bold text-red-600">{scale.trafficReduction}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <ParkingCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{t("freeParking")}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <CarIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {t("milesDrivenPerVehicle")}
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          {scale.milesDrivenPerVehicle}/{t("year")}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile & Tablet: Single Card with Navigation */}
          <div className="lg:hidden mb-16">
            <div className="relative">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevImpact}
                  className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>

                <div className="flex-1 max-w-sm">
                  {(() => {
                    const scale = impactData[currentImpactIndex]
                    return (
                      <Card
                        className={`group hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-${scale.color}-50/50 dark:from-gray-800/90 dark:to-${scale.color}-900/20 backdrop-blur-xl overflow-hidden`}
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="text-center">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br from-${scale.color}-500 to-${scale.color}-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl mb-3`}
                            >
                              <Car className="w-8 h-8 text-white" />
                            </div>
                            <h3
                              className={`text-3xl font-black text-${scale.color}-600 dark:text-${scale.color}-400 mb-1`}
                            >
                              {scale.vehicles.toLocaleString()}
                            </h3>
                            <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">
                              {t("vehicles")}
                            </p>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                <GiPathDistance className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("totalAnnualDistance")}
                                </div>
                                <div className="text-sm font-bold text-green-600">{scale.totalAnuualDistace}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                <Fuel className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("fuelSavings")}
                                </div>
                                <div className="text-sm font-bold text-green-600">
                                  {scale.fuelSavings} {t("litersPerYear")}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <TreePine className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("co2Reduction")}
                                </div>
                                <div className="text-sm font-bold text-blue-600">{scale.co2Reduction}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Gauge className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("usageIncrease")}
                                </div>
                                <div className="text-sm font-bold text-indigo-600">{scale.usageIncrease}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                <Traffic className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("trafficReduction")}
                                </div>
                                <div className="text-sm font-bold text-red-600">{scale.trafficReduction}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <ParkingCircle className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("freeParking")}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                <CarIcon className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-900 dark:text-white">
                                  {t("milesDrivenPerVehicle")}
                                </div>
                                <div className="text-sm font-bold text-green-600">
                                  {scale.milesDrivenPerVehicle}/{t("year")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })()}
                </div>

                <button
                  onClick={nextImpact}
                  className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {impactData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImpactIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImpactIndex ? "bg-indigo-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Research Dashboard Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 dark:border-gray-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("researchBackedDashboards")}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("researchBackedDashboardsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{t("climateDashboard")}</h4>
                </div>
                <div className="space-y-3">
                  {[
                    t("realTimeCO2Tracking"),
                    t("fuelConsumptionAnalysis"),
                    t("sustainabilityGoalTracking"),
                    t("environmentalReports"),
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{t("usageDashboard")}</h4>
                </div>
                <div className="space-y-3">
                  {[
                    t("fleetUtilizationAnalysis"),
                    t("costOptimization"),
                    t("predictiveAnalytics"),
                    t("performanceMetrics"),
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 text-lg px-6 py-2">
              {t("customerSuccess")}
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white">
              {t("trustedBy")}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Stavanger
              </span>
              {t("ourLeadingClient")}
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              {t("stavangerTransformation")}
            </p>
          </div>
          {/* Stavanger Municipality Testimonial */}
          <div className="mb-16">
            <Card className="group hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-xl overflow-hidden max-w-4xl mx-auto">
              <CardContent className="p-12 space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏛️</div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("stavangerMunicipality")}
                  </h3>
                  <div className="text-xl font-semibold text-indigo-600 dark:text-blue-400 mb-6">
                    {t("leadingClientTestimonial")}
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  {t("stavangerTestimonial")}
                </blockquote>
                <div className="flex items-center justify-center space-x-6 pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-xl">SM</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-xl text-gray-900 dark:text-white">{t("municipFleetManager")}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t("stavangerMunicipality")}</p>
                    <div className="text-sm text-indigo-600 dark:text-blue-400 font-semibold mt-1">
                      {t("vehiclesActiveImplementation")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-700 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/95 to-indigo-600/95"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-10">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black text-white">
                {t("readyToTransform")}
                <span className="block">{t("yourFleet")}</span>
              </h2>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
                {t("joinLeadingOrganizations")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a href="https://fly.fori.co/" target="_blank" rel="noreferrer">
                {/* Pricing CTA updated to "Start Free Trial" */}
                <Button size="lg" className="">
                  {t("startFreeTrial")}
                  <ArrowRight className="ml-3 w-7 h-7" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            {/* Contact badge updated to small CTA "Log In / Contact Us" */}
            <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 text-lg px-6 py-2">
              <a href="https://fly.fori.co/help" target="_blank" rel="noreferrer">
                Log In / Contact Us
              </a>
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
              {t("readyToTransform")}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent block">
                {t("yourFleet")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("contactDescription")}</p>
          </div>
          <div className="grid lg:grid-cols-1 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{t("letsTalk")}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{t("fleetExpertsReady")}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between px-0 md:px-4 items-start md:items-center space-y-6 md:space-y-0 md:space-x-4">
                {/* Email Card */}
                <a
                  href="mailto:info@fori.co"
                  className="space-x-4 bg-gradient-to-br dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center shadow-lg p-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">info@fori.co</div>
                  </div>
                </a>
                {/* Social Media Icons */}
                <div className="bg-gradient-to-br dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center shadow-lg p-3 space-x-4">
                  <a
                    href="https://instagram.com/fori_inc?igshid=NzZhOTFlYzFmZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/foriinc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://web.facebook.com/ForiMazdoori/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
                {/* Contact Link */}
                <a
                  href="https://fly.fori.co/help"
                  className="space-x-4 bg-gradient-to-br dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center shadow-lg p-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Contact className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t("contactUs")}</div>
                  </div>
                </a>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">{t("whyChooseFORIFLY")}</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t("norwegianFirstDesign")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t("provenResults")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t("24hourImplementation")}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t("dedicatedCustomerSuccess")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <img src="/forifly.png" alt="" className="px-0.5" />
                </div>
                <div>
                  <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                    FORI FLY
                  </span>
                  <div className="text-xs text-gray-400">Fleet Management</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">{t("footerDescription")}</p>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-600 text-white text-xs">{t("trustedByMunicipalities")}</Badge>
              </div>
            </div>
            {[
              {
                title: t("product"),
                links: [
                  { name: t("features"), onClick: () => scrollToSection("features") },
                  { name: t("municipalities"), onClick: () => scrollToSection("services") },
                  { name: t("howItWorks"), onClick: () => scrollToSection("how-it-works") },
                  { name: t("testimonials"), onClick: () => scrollToSection("testimonials") },
                  { name: t("contact"), onClick: () => scrollToSection("contact") },
                ],
              },
              {
                title: t("company"),
                links: [
                  { name: t("signUp"), href: "https://fly.fori.co/" },
                  { name: t("contactUs"), href: "https://fly.fori.co/help" },
                ],
              },
              // {
              //   title: t("support"),
              //   links: [
              //     { name: t("helpCenter"), href: "https://fly.fori.co/help" },
              //     { name: t("documentation"), href: "#" },
              //     { name: "Status", href: "#" },
              //     { name: t("privacyPolicy"), href: "#" },
              //     { name: t("terms"), href: "#" },
              //   ],
              // },
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                <div className="space-y-4">
                  {section.links.map((link, idx) =>
                    link.onClick ? (
                      <button
                        key={idx}
                        onClick={link.onClick}
                        className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transition-transform duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        key={idx}
                        href={link.href}
                        target={link.href?.startsWith("http") ? "_blank" : undefined}
                        rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-gray-400 hover:text-white transition-colors text-lg hover:translate-x-1 transition-transform duration-200"
                      >
                        {link.name}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">© {new Date().getFullYear()} FORI FLY. All rights reserved.</p>
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <span className="text-gray-400 flex items-center space-x-3 text-lg">
                <span>Proudly Made by FORI Inc</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* HEADER: Always on top, as shown in your screenshot */}
        <Header />
        <HaykLanding />
      </LanguageProvider>
    </ThemeProvider>
  )
}
