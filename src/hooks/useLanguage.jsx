"use client"
import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

const translations = {
  no: {
    // Header
    features: "Funksjoner",
    municipalities: "Økosystem",
    howItWorks: "Hvordan det fungerer",
    testimonials: "Anbefalinger",
    contact: "Kontakt",
    signIn: "Logg inn",
    getStartedFree: "Kom i gang gratis",
    // Hero
    trustedBy: "Klarert av norske kommuner",
    leadingClients: "Ledende klienter",
    transformYour: "Transformer din",
    fleetOperations: "Flåteoperasjoner",
    smartFleetManagement: "Smart flåtestyring",
    heroDescription:
      "flåtestyring som reduserer kjøretøybehov, senker driftskostnader og forbedrer medarbeideropplevelsen.",
    heroSubtext:
      "Én plattform for nøkkelfri tilgang, smart booking, sanntidsovervåking og omfattende analyser. Klarert av ledende norske kommuner og selskaper.",
    heroMainTitle: "Smart flåte- og mobilitetsstyring for byer, flyplasser og bedrifter",
    heroMainSubtitle: "Spor, analyser og optimaliser flåter med sanntidsdata og skalerbare mobilitetsløsninger.",
    // CTA buttons
    startFreeTrial: "Start gratis prøveperiode",
    watchDemo: "Se demo",
    scheduleDemo: "Bestill demo",
    heroDemoButton: "Be om en demo",
    heroContactButton: "Snakk med vårt team",
    // Features
    freeTrial: "14-dagers gratis prøveperiode",
    noCreditCard: "Ingen kredittkort",
    quickSetup: "24t oppsett",
    // Partners
    ourPartners: "Våre partnere",
    partnersDescription: "Nåværende og tidligere samarbeidspartnere",
    currentPartners: "Nåværende partnere",
    pastPartners: "Tidligere partnere",
    strategic: "Strategiske",
    collaborators: "Våre samarbeidspartnere",
    ecosystem: "Økosystem",
    partnerships: "partnerskap",
    // Clients section
    ourClients: "Våre klienter",
    trustedByLeading: "Klarert av ledende",
    norwegianOrganizations: "norske organisasjoner",
    currentClients: "Nåværende klienter",
    pastClients: "Tidligere klienter",
    clientsDescription:
      "Fra kommuner til private selskaper, FORI FLY betjener mangfoldige flåtestyringsbehovene over hele Norge og Europa.",
    // Services
    ourServices: "Våre tjenester",
    servicesDescription:
      "FORIs initiativer har blitt anerkjent for sin innovative tilnærming til å bygge smartere, tilkoblede løsninger. Vi er stolte av å ha samarbeidet med fremtidsrettede organisasjoner som støtter vårt oppdrag.",
    // Value props
    digitizeOptimizeMonetize: "Digitaliser, Optimaliser, Monetiser",
    digitizeOptimizeMonetizeDescription:
      "Transformer eksisterende flåter til digitale, optimaliserte og inntektsgenererende ressurser",
    digitize: "Digitaliser",
    digitizeDescription: "Aktiver nøkkelfri tilgang, åpne kjøretøy via mobil, se batteristatus, analyser og mer.",
    optimize: "Optimaliser",
    optimizeDescription: "Øk bruk, vis batteristatus, digital drift, del mellom avdelinger, prioriter avdelinger.",
    monetize: "Monetiser",
    monetizeDescription:
      "Gjør kjøretøy tilgjengelig for privat utleie med sikre samfunn. Deling reduserer antall kjøretøy som trengs.",
    // Digitize features
    keylessAccess: "Nøkkelfri tilgang",
    mobileControl: "Mobil kontroll",
    batteryMonitoring: "Batteriovervåking",
    realTimeAnalytics: "Sanntidsanalyser",
    // Optimize features
    increasedUtilization: "Økt utnyttelse",
    crossDepartmentSharing: "Tverravdeling deling",
    digitalOperations: "Digital drift",
    costSharing: "Kostnadsdeling",
    // Monetize features
    privateRental: "Privat utleie",
    secureCommunities: "Sikre samfunn",
    revenueGeneration: "Inntektsgenerering",
    reducedFleetNeeds: "Redusert flåtebehov",
    // Features section
    advancedFeatures: "Avanserte funksjoner",
    everythingYouNeed: "Alt du trenger",
    andMore: "Og mer",
    comprehensiveFleetManagement: "Omfattende flåtestyring med banebrytende teknologi og norsk-først design.",
    keylessAccessDescription:
      "Lås opp og start kjøretøy eksternt via appen. Ingen fysiske nøkler å administrere, miste eller distribuere.",
    smartFuelMonitoring: "Smart drivstoffovervåking",
    smartFuelMonitoringDescription:
      "Sanntids drivstoffnivåsporing med prediktiv analyse for å optimalisere ruter og redusere forbruk.",
    batteryHealthTracking: "Batterihelsesporing",
    batteryHealthTrackingDescription:
      "Avansert batterimonitorering med prediktivt vedlikehold for å forhindre uventede sammenbrudd.",
    advancedAnalytics: "Avanserte analyser",
    advancedAnalyticsDescription:
      "Omfattende innsikt i bruksmønstre, kostnader, effektivitetsmålinger og optimaliseringsmuligheter.",
    intelligentBooking: "Intelligent booking",
    intelligentBookingDescription:
      "AI-drevet bookingsystem med smart planlegging for både arbeids- og privatbruk med øyeblikkelig bekreftelse.",
    co2Tracking: "CO₂ sporing",
    co2TrackingDescription: "Sanntids miljøpåvirkningssporing med nedlastbare rapporter for bærekraftsmål.",
    // Feature details
    remoteUnlock: "Ekstern opplåsing",
    engineStart: "Motorstart",
    secureAccess: "Sikker tilgang",
    realTimeTracking: "Sanntidssporing",
    routeOptimization: "Ruteoptimalisering",
    costAnalytics: "Kostnadsanalyse",
    healthMonitoring: "Helseovervåking",
    predictiveAlerts: "Prediktive varsler",
    maintenancePlanning: "Vedlikeholdsplanlegging",
    usageAnalytics: "Bruksanalyse",
    costTracking: "Kostnadssporing",
    performanceInsights: "Ytelseinnsikt",
    smartScheduling: "Smart planlegging",
    instantBooking: "Øyeblikkelig booking",
    privateUseOptions: "Privatbruksalternativer",
    emissionsTracking: "Utslippssporing",
    sustainabilityReports: "Bærekraftsrapporter",
    goalMonitoring: "Måloppfølging",
    // Impact section
    environmentalImpact: "Miljøpåvirkning",
    scalable: "Skalerbar",
    impact: "Påvirkning",
    impactDescription: "Se hvordan FORI FLY skalerer miljøbesparelser og effektivitetsgevinster med flåtestørrelse",
    vehicles: "Kjøretøy",
    totalAnnualDistance: "Total årlig avstand (km)",
    fuelSavings: "Drivstoffbesparelse",
    litersPerYear: "liter/år",
    co2Reduction: "CO₂ Reduksjon",
    co2ReductionValue10: "16,300 kg/år",
    co2ReductionValue100: "163k kg/år",
    co2ReductionValue1000: "1630k kg/år",
    co2ReductionValue10000: "16,300k kg/år",
    usageIncrease: "Økt bruk",
    trafficReduction: "Trafikk reduksjon",
    local: "Lokal",
    district: "Bydel",
    city: "By",
    regional: "Regional",
    freeParking: "Gratis parkering",
    milesDrivenPerVehicle: "Kjørte mil per kjøretøy",
    year: "år",
    // Research dashboards
    researchBackedDashboards: "Forskningsbaserte Dashboards",
    researchBackedDashboardsDescription:
      "Våre klima- og bruksdashboards er bygget på dype forskningsdata og gir sanntidsinnsikt i miljøpåvirkning og flåteoptimalisering.",
    climateDashboard: "Klima Dashboard",
    realTimeCO2Tracking: "Sanntids CO₂ sporing",
    fuelConsumptionAnalysis: "Drivstoffforbruksanalyse",
    sustainabilityGoalTracking: "Bærekraftsmål oppfølging",
    environmentalReports: "Miljørapporter",
    usageDashboard: "Bruks Dashboard",
    fleetUtilizationAnalysis: "Flåteutnyttelsesanalyse",
    costOptimization: "Kostnadsoptimalisering",
    predictiveAnalytics: "Prediktive analyser",
    performanceMetrics: "Ytelsesmålinger",
    // Testimonials
    customerSuccess: "Kundesuksess",
    trustedBy: "Klarert av",
    ourLeadingClient: " Vår ledende klient",
    stavangerTransformation: "Se hvordan Stavanger transformerer sine flåteoperasjoner med FORI FLY",
    stavangerMunicipality: "Stavanger Kommune",
    leadingClientTestimonial: "Ledende klientanbefaling",
    stavangerTestimonial:
      '"Får vi nøkkelfri tilgang til bilene våre med en app. Vi ønsker å gjøre det lett for våre ansatte. Aldri lete mer etter nøkler. Løsningen legger også til rette for at vi i Stavanger kommune kan redusere bilflåten vår. Hayk gir oss innsikt om vår bilbruk og gjør det lett for oss å utnytte hver bil bedre. De ansatte får enklere tilgang til bil, selv om vi kan ha færre biler og på den måten kutte både CO2 og kostnader."',
    municipalFleetManager: "Kommunal flåtesjef",
    vehiclesActiveImplementation: "Tusenvis av turer og over 1500 tonn CO₂ spart",
    // CTA
    readyToTransform: "Klar til å transformere",
    yourFleet: "din flåte?",
    joinLeadingOrganizations: "Ta kontakt. Vi vil svare deg umiddelbart.",
    // Contact
    getInTouch: "Ta kontakt",
    contactDescription:
      "Kontakt vårt team for å lære hvordan FORI FLY kan hjelpe din norske kommune eller bedrift med å optimalisere flåteoperasjoner og redusere kostnader.",
    letsTalk: "La oss snakke",
    fleetExpertsReady: "Våre flåtestyringseksperter er klare til å hjelpe deg.",
    contactUs: "Kontak",
    whyChooseFORIFLY: "Hvorfor velge FORI FLY?",
    norwegianFirstDesign: "Norsk-først design og støtte",
    provenResults: "Dokumenterte resultater med ledende klienter",
    "24hourImplementation": "24-timers implementering",
    dedicatedCustomerSuccess: "Dedikert kundesuksessteam",
    // Footer
    norwegianLeader: "Norsk leder",
    trustedByMunicipalities: "Klarert av kommuner",
    footerDescription:
      "Smart flåtestyring for moderne norske selskaper. Reduser kostnader, forbedre effektivitet og øk medarbeidertilfredshet med vår omfattende plattform.",
    product: "Produkt",
    company: "Selskap",
    support: "Støtte",
    signUp: "Registrer deg",
    helpCenter: "Hjelpesenter",
    documentation: "Dokumentasjon",
    privacyPolicy: "Personvernregler",
    terms: "Vilkår",
    // New keys
    drivingGreenerCities: "Kjører grønnere byer",
    fromNorwayToWorld: "Fra Norge til verden",
    kmDrivenSharedRides: "km kjørt i delte turer",
    businessRidesBooked: "Forretningsturer bestilt",
    privateRides: "Private turer",
    avgDailyFleetUsage: "Gjennomsnittlig daglig flåtebruk",
    treesSaved: "Trær spart",
    co2Saved: "CO₂ spart",
    maxDailyAvgUsage: "Maks daglig gjennomsnittlig bruk",
    aiPoweredFleetIntelligence: "AI-drevet flåteintelligens",
    comingSoon: "Kommer snart",
    smarterGreenerMobility: "Smartere, grønnere mobilitet",
    predictiveMaintenance: "Prediktivt vedlikehold",
    predictiveMaintenanceDesc:
      "Forutsi vedlikeholdsbehov før problemer oppstår med AI-drevet analyse av kjøretøydata og bruksmønstre.",
    smartUsageAnalytics: "Smart bruksanalyse",
    smartUsageAnalyticsDesc:
      "Få dype innsikter i flåtebruk, kostnader og effektivitet med avanserte analyser og sanntidsrapporter.",
    automatedDispatching: "Automatisert utsendelse",
    automatedDispatchingDesc:
      "Optimaliser kjøretøytildeling automatisk basert på etterspørsel, plassering og tilgjengelighet.",
    ecoImpactForecasting: "Miljøpåvirkning prognoser",
    ecoImpactForecastingDesc: "Forutsi og spor miljøpåvirkning med detaljerte CO₂-reduksjons- og bærekraftsmålinger.",
    driverBehaviorInsights: "Sjåføratferd innsikt",
    driverBehaviorInsightsDesc:
      "Analyser kjøremønstre for å forbedre sikkerhet, effektivitet og redusere drivstofforbruk.",
    aiDemandForecasting: "AI etterspørsel prognoser",
    aiDemandForecastingDesc:
      "Forutsi flåteetterspørsel med maskinlæring for optimal ressursplanlegging og kostnadsreduksjon.",
    whatIsForiFlyTitle: "Hva er ForiFly?",
    whatIsForiFlyDesc:
      "ForiFly er en smart mobilitets- og flåtestyringsplattform designet for byer, flyplasser, boligområder og bedrifter. Optimaliser kjøretøybruk, reduser kostnader og få operasjonell innsikt med nøkkelfri tilgang og sanntidsanalyse.",
    whoIsItFor: "Hvem er det for?",
    citiesMunicipalities: "Byer og kommuner",
    citiesMunicipalitiesDesc: "Samlet flåteoversikt og kontroll",
    airportsTransportHubs: "Flyplasser og transportknutepunkter",
    airportsTransportHubsDesc: "Optimaliserte kjøretøyoperasjoner på bakken",
    housingCommunities: "Boligområder",
    housingCommunitiesDesc: "Effektiv delt kjøretøysflåtestyring",
    corporatesEnterprises: "Bedrifter og selskaper",
    corporatesEnterprisesDesc: "Sanntidssporing av ansattes kjøretøy",
    challengesWeAddress: "Utfordringer vi løser",
    challengeManualTracking: "Manuell flåtesporing bremser driften",
    challengeNoRealtimeAnalytics: "Mangel på sanntids kjøretøyanalyse",
    challengeHighCosts: "Høye driftskostnader for flåter",
    challengeScalingCarsharing: "Vanskelig å skalere bildeling eller delt mobilitet",
  },
  en: {
    // Header
    features: "Features",
    municipalities: "Ecosystem",
    howItWorks: "How it Works",
    testimonials: "Testimonials",
    contact: "Contact",
    signIn: "Sign In",
    getStartedFree: "Get Started Free",
    // Hero
    trustedBy: "Trusted by Norwegian & European Organizations",
    leadingClients: "Leading Clients",
    transformYour: "Transform Your",
    fleetOperations: "Fleet Operations",
    smartFleetManagement: "Smart Fleet Management",
    heroDescription:
      "Fleet management that reduces vehicle needs, lowers operational costs, and enhances employee experience.",
    heroSubtext:
      "One platform for keyless access, smart booking, real-time monitoring, and comprehensive analytics. Trusted by leading Norwegian and European municipalities and companies.",
    heroMainTitle: "Smart Fleet & Mobility Management for Cities, Airports & Corporates",
    heroMainSubtitle: "Track, analyze, and optimize fleets with real-time data and scalable mobility solutions.",
    // CTA buttons
    startFreeTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    scheduleDemo: "Schedule Demo",
    heroDemoButton: "Request a Demo",
    heroContactButton: "Talk to Our Team",
    // Features
    freeTrial: "14-day free trial",
    noCreditCard: "No credit card",
    quickSetup: "24h setup",
    // Partners
    ourPartners: "Our Partners",
    partnersDescription: "Current and Past Collaborators",
    currentPartners: "Current Partners",
    pastPartners: "Past Partners",
    strategic: "Strategic",
    collaborators: "Our Collaborators",
    ecosystem: "Ecosystem",
    partnerships: "Partnerships",
    // Clients section
    ourClients: "Our Clients",
    trustedByLeading: "Trusted by Leading",
    norwegianOrganizations: "Norwegian & European Organizations",
    currentClients: "Current",
    pastClients: "Past Clients",
    clientsDescription:
      "From municipalities to private companies, FORI FLY serves diverse fleet management needs across Norway and Europe.",
    // Services
    ourServices: "Industry Recognition",
    servicesDescription:
      "FORI's initiatives have been recognized for their innovative approach to building smarter, connected solutions. We're proud to have partnered with forward-thinking organizations who support our mission.",
    // Value props
    digitizeOptimizeMonetize: "Digitize, Optimize, Monetize",
    digitizeOptimizeMonetizeDescription:
      "Transform existing fleets into digital, optimized, and revenue-generating assets",
    digitize: "Digitize",
    digitizeDescription: "Enable keyless access, open vehicles via mobile, see battery status, analytics, and more.",
    optimize: "Optimize",
    optimizeDescription:
      "Increase usage, show battery status, digital operations, share across departments, prioritize departments.",
    monetize: "Monetize",
    monetizeDescription:
      "Make vehicles available for private renting with secure communities. Sharing reduces the number of vehicles needed.",
    // Digitize features
    keylessAccess: "Keyless access",
    mobileControl: "Mobile control",
    batteryMonitoring: "Battery monitoring",
    realTimeAnalytics: "Real-time analytics",
    // Optimize features
    increasedUtilization: "Increased utilization",
    crossDepartmentSharing: "Cross-department sharing",
    digitalOperations: "Digital operations",
    costSharing: "Cost sharing",
    // Monetize features
    privateRental: "Private rental",
    secureCommunities: "Secure communities",
    revenueGeneration: "Revenue generation",
    reducedFleetNeeds: "Reduced fleet needs",
    // Features section
    advancedFeatures: "Advanced Features",
    everythingYouNeed: "Everything You Need",
    andMore: "And More",
    comprehensiveFleetManagement:
      "Comprehensive fleet management with cutting-edge technology and Norwegian-first design.",
    keylessAccessDescription:
      "Unlock and start vehicles remotely through the app. No more physical keys to manage, lose, or distribute.",
    smartFuelMonitoring: "Smart Fuel Monitoring",
    smartFuelMonitoringDescription:
      "Real-time fuel level tracking with predictive analytics to optimize routes and reduce consumption.",
    batteryHealthTracking: "Battery Health Tracking",
    batteryHealthTrackingDescription:
      "Advanced battery monitoring with predictive maintenance to prevent unexpected breakdowns.",
    advancedAnalytics: "Advanced Analytics",
    advancedAnalyticsDescription:
      "Comprehensive insights into usage patterns, costs, efficiency metrics, and optimization opportunities.",
    intelligentBooking: "Intelligent Booking",
    intelligentBookingDescription:
      "AI-powered booking system with smart scheduling for both work and private use with instant confirmation.",
    co2Tracking: "CO₂ Tracking",
    co2TrackingDescription:
      "Real-time environmental impact tracking with downloadable reports for sustainability goals.",
    // Feature details
    remoteUnlock: "Remote unlock",
    engineStart: "Engine start",
    secureAccess: "Secure access",
    realTimeTracking: "Real-time tracking",
    routeOptimization: "Route optimization",
    costAnalytics: "Cost analytics",
    healthMonitoring: "Health monitoring",
    predictiveAlerts: "Predictive alerts",
    maintenancePlanning: "Maintenance planning",
    usageAnalytics: "Usage analytics",
    costTracking: "Cost tracking",
    performanceInsights: "Performance insights",
    smartScheduling: "Smart scheduling",
    instantBooking: "Instant booking",
    privateUseOptions: "Private use options",
    emissionsTracking: "Emissions tracking",
    sustainabilityReports: "Sustainability reports",
    goalMonitoring: "Goal monitoring",
    // Impact section
    environmentalImpact: "Environmental Impact",
    scalable: "Scalable",
    impact: "Impact",
    impactDescription: "See how FORI FLY scales environmental savings and efficiency gains with fleet size",
    vehicles: "Vehicles",
    totalAnnualDistance: "Total Annual Distance (km)",
    fuelSavings: "Fuel Savings",
    litersPerYear: "liters/year",
    co2Reduction: "CO₂ Reduction",
    co2ReductionValue10: "16,300 kg/year",
    co2ReductionValue100: "163k kg/year",
    co2ReductionValue1000: "1630k kg/year",
    co2ReductionValue10000: "16,300k kg/year",
    usageIncrease: "Usage Increase",
    trafficReduction: "Traffic Reduction",
    local: "Local",
    district: "District",
    city: "City",
    regional: "Regional",
    freeParking: "Free Parking",
    milesDrivenPerVehicle: "Miles driven per vehicle",
    year: "year",
    // Research dashboards
    researchBackedDashboards: "Research-Backed Dashboards",
    researchBackedDashboardsDescription:
      "Our climate and usage dashboards are built on deep research data, providing real-time insights into environmental impact and fleet optimization.",
    climateDashboard: "Climate Dashboard",
    realTimeCO2Tracking: "Real-time CO₂ tracking",
    fuelConsumptionAnalysis: "Fuel consumption analysis",
    sustainabilityGoalTracking: "Sustainability goal tracking",
    environmentalReports: "Environmental reports",
    usageDashboard: "Usage Dashboard",
    fleetUtilizationAnalysis: "Fleet utilization analysis",
    costOptimization: "Cost optimization",
    predictiveAnalytics: "Predictive analytics",
    performanceMetrics: "Performance metrics",
    // Testimonials
    customerSuccess: "Customer Success",
    trustedBy: "Trusted by",
    ourLeadingClient: " Our Leading Client",
    stavangerTransformation: "See how Stavanger is transforming their fleet operations with FORI FLY",
    stavangerMunicipality: "Stavanger Municipality",
    leadingClientTestimonial: "Leading Client Testimonial",
    stavangerTestimonial:
      '"We get keyless access to our cars with an app. We want to make it easy for our employees. Never look for keys again. The solution also enables us in Stavanger Municipality to reduce our car fleet. Hayk gives us insight into our car use and makes it easy for us to utilize each car better. Employees get easier access to cars, even though we can have fewer cars and thus cut both CO2 and costs."',
    municipalFleetManager: "Municipal Fleet Manager",
    vehiclesActiveImplementation: "1000s of rides & 1500tons+ CO2 Saved",
    // CTA
    readyToTransform: "Ready to Transform",
    yourFleet: "Your Fleet?",
    joinLeadingOrganizations: "Get in touch. We will get back to you immediately.",
    // Contact
    getInTouch: "Get In Touch",
    contactDescription:
      "Contact our team to learn how FORI FLY can help your Norwegian or European municipality or company optimize fleet operations and reduce costs.",
    letsTalk: "Let's Talk",
    fleetExpertsReady: "Our fleet management experts are ready to help you.",
    contactUs: "Contact Us",
    whyChooseFORIFLY: "Why Choose FORI FLY?",
    norwegianFirstDesign: "Norwegian-European first design and support",
    provenResults: "Proven results with leading clients",
    "24hourImplementation": "24-hour implementation",
    dedicatedCustomerSuccess: "Dedicated customer success team",
    // Footer
    norwegianLeader: "European Leader",
    trustedByMunicipalities: "Trusted by Municipalities",
    footerDescription:
      "Smart fleet management for modern Norwegian companies. Reduce costs, improve efficiency, and enhance employee satisfaction with our comprehensive platform.",
    product: "Product",
    company: "Company",
    support: "Support",
    signUp: "Sign Up",
    helpCenter: "Help Center",
    documentation: "Documentation",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    // New keys
    drivingGreenerCities: "Driving Greener Cities",
    fromNorwayToWorld: "From Norway to the World",
    kmDrivenSharedRides: "km Driven in Shared Rides",
    businessRidesBooked: "Business Rides Booked",
    privateRides: "Private Rides",
    avgDailyFleetUsage: "Average Daily Fleet Usage",
    treesSaved: "Trees Saved",
    co2Saved: "CO₂ Saved",
    maxDailyAvgUsage: "Max Daily Average Usage",
    aiPoweredFleetIntelligence: "AI-Powered Fleet Intelligence",
    comingSoon: "Coming Soon",
    smarterGreenerMobility: "Smarter, Greener Mobility",
    predictiveMaintenance: "Predictive Maintenance",
    predictiveMaintenanceDesc:
      "Predict maintenance needs before issues arise with AI-driven analysis of vehicle data and usage patterns.",
    smartUsageAnalytics: "Smart Usage Analytics",
    smartUsageAnalyticsDesc:
      "Gain deep insights into fleet usage, costs, and efficiency with advanced analytics and real-time reporting.",
    automatedDispatching: "Automated Dispatching",
    automatedDispatchingDesc: "Optimize vehicle allocation automatically based on demand, location, and availability.",
    ecoImpactForecasting: "Eco Impact Forecasting",
    ecoImpactForecastingDesc:
      "Predict and track environmental impact with detailed CO₂ reduction and sustainability metrics.",
    driverBehaviorInsights: "Driver Behavior Insights",
    driverBehaviorInsightsDesc: "Analyze driving patterns to improve safety, efficiency, and reduce fuel consumption.",
    aiDemandForecasting: "AI Demand Forecasting",
    aiDemandForecastingDesc:
      "Predict fleet demand using machine learning for optimal resource planning and cost reduction.",
    whatIsForiFlyTitle: "What is ForiFly?",
    whatIsForiFlyDesc:
      "ForiFly is a smart mobility and fleet management platform designed for cities, airports, housing communities, and corporates. Optimize vehicle usage, reduce costs, and gain operational insights with keyless access and real time analytics.",
    whoIsItFor: "Who is it For?",
    citiesMunicipalities: "Cities & Municipalities",
    citiesMunicipalitiesDesc: "Unified fleet visibility & control",
    airportsTransportHubs: "Airports & Transport Hubs",
    airportsTransportHubsDesc: "Optimized ground mobility vehicle operations",
    housingCommunities: "Housing Communities",
    housingCommunitiesDesc: "Efficient shared vehicle fleet management",
    corporatesEnterprises: "Corporates & Enterprises",
    corporatesEnterprisesDesc: "Real-time employee vehicle tracking",
    challengesWeAddress: "Challenges We Address",
    challengeManualTracking: "Manual fleet tracking slows operations",
    challengeNoRealtimeAnalytics: "Lack of real-time vehicle analytics",
    challengeHighCosts: "High operational costs for fleets",
    challengeScalingCarsharing: "Difficulty scaling carsharing or shared mobility",
  },
  es: {
    // Header
    features: "Características",
    municipalities: "Ecosistema",
    howItWorks: "Cómo Funciona",
    testimonials: "Testimonios",
    contact: "Contacto",
    signIn: "Iniciar Sesión",
    getStartedFree: "Comenzar Gratis",
    // Hero
    trustedBy: "Confiado por Organizaciones Noruegas y Europeas",
    leadingClients: "Clientes Líderes",
    transformYour: "Transforma Tu",
    fleetOperations: "Operaciones de Flota",
    smartFleetManagement: "Gestión Inteligente de Flotas",
    heroDescription:
      "Gestión de flotas que reduce las necesidades de vehículos, reduce los costos operativos y mejora la experiencia del empleado.",
    heroSubtext:
      "Una plataforma para acceso sin llaves, reservas inteligentes, monitoreo en tiempo real y análisis integral. Confiado por municipios y empresas líderes de Noruega y Europa.",
    heroMainTitle: "Gestión Inteligente de Flotas y Movilidad para Ciudades, Aeropuertos y Empresas",
    heroMainSubtitle: "Rastrea, analiza y optimiza flotas con datos en tiempo real y soluciones de movilidad escalables.",
    // CTA buttons
    startFreeTrial: "Iniciar Prueba Gratuita",
    watchDemo: "Ver Demo",
    scheduleDemo: "Programar Demo",
    heroDemoButton: "Solicitar una demo",
    heroContactButton: "Habla con nuestro equipo",
    // Features
    freeTrial: "Prueba gratuita de 14 días",
    noCreditCard: "Sin tarjeta de crédito",
    quickSetup: "Configuración en 24h",
    // Partners
    ourPartners: "Nuestros Socios",
    partnersDescription: "Colaboradores Actuales y Pasados",
    currentPartners: "Socios Actuales",
    pastPartners: "Socios Pasados",
    strategic: "Estratégicos",
    collaborators: "Nuestros Colaboradores",
    ecosystem: "Ecosistema",
    partnerships: "Asociaciones",
    // Clients section
    ourClients: "Nuestros Clientes",
    trustedByLeading: "Confiado por Líderes",
    norwegianOrganizations: "Organizaciones Noruegas y Europeas",
    currentClients: "Clientes Actuales",
    pastClients: "Clientes Pasados",
    clientsDescription:
      "Desde municipios hasta empresas privadas, FORI FLY atiende diversas necesidades de gestión de flotas en Noruega y Europa.",
    // Services
    ourServices: "Reconocimiento de la Industria",
    servicesDescription:
      "Las iniciativas de FORI han sido reconocidas por su enfoque innovador para construir soluciones más inteligentes y conectadas. Estamos orgullosos de haber colaborado con organizaciones visionarias que apoyan nuestra misión.",
    // Value props
    digitizeOptimizeMonetize: "Digitalizar, Optimizar, Monetizar",
    digitizeOptimizeMonetizeDescription:
      "Transformar flotas existentes en activos digitales, optimizados y generadores de ingresos",
    digitize: "Digitalizar",
    digitizeDescription:
      "Habilitar acceso sin llaves, abrir vehículos vía móvil, ver estado de batería, análisis y más.",
    optimize: "Optimizar",
    optimizeDescription:
      "Aumentar el uso, mostrar estado de batería, operaciones digitales, compartir entre departamentos, priorizar departamentos.",
    monetize: "Monetizar",
    monetizeDescription:
      "Hacer vehículos disponibles para alquiler privado con comunidades seguras. Compartir reduce el número de vehículos necesarios.",
    // Digitize features
    keylessAccess: "Acceso sin llaves",
    mobileControl: "Control móvil",
    batteryMonitoring: "Monitoreo de batería",
    realTimeAnalytics: "Análisis en tiempo real",
    // Optimize features
    increasedUtilization: "Mayor utilización",
    crossDepartmentSharing: "Compartir entre departamentos",
    digitalOperations: "Operaciones digitales",
    costSharing: "Compartir costos",
    // Monetize features
    privateRental: "Alquiler privado",
    secureCommunities: "Comunidades seguras",
    revenueGeneration: "Generación de ingresos",
    reducedFleetNeeds: "Necesidades reducidas de flota",
    // Features section
    advancedFeatures: "Características Avanzadas",
    everythingYouNeed: "Todo lo que Necesitas",
    andMore: "Y Más",
    comprehensiveFleetManagement: "Gestión integral de flotas con tecnología de vanguardia y diseño noruego-primero.",
    keylessAccessDescription:
      "Desbloquear e iniciar vehículos remotamente a través de la aplicación. No más llaves físicas que administrar, perder o distribuir.",
    smartFuelMonitoring: "Monitoreo Inteligente de Combustible",
    smartFuelMonitoringDescription:
      "Seguimiento del nivel de combustible en tiempo real con análisis predictivo para optimizar rutas y reducir el consumo.",
    batteryHealthTracking: "Seguimiento de Salud de Batería",
    batteryHealthTrackingDescription:
      "Monitoreo avanzado de batería con mantenimiento predictivo para prevenir averías inesperadas.",
    advancedAnalytics: "Análisis Avanzados",
    advancedAnalyticsDescription:
      "Información integral sobre patrones de uso, costos, métricas de eficiencia y oportunidades de optimización.",
    intelligentBooking: "Reserva Inteligente",
    intelligentBookingDescription:
      "Sistema de reservas impulsado por IA con programación inteligente para uso laboral y privado con confirmación instantánea.",
    co2Tracking: "Seguimiento de CO₂",
    co2TrackingDescription:
      "Seguimiento del impacto ambiental en tiempo real con informes descargables para objetivos de sostenibilidad.",
    // Feature details
    remoteUnlock: "Desbloqueo remoto",
    engineStart: "Arranque del motor",
    secureAccess: "Acceso seguro",
    realTimeTracking: "Seguimiento en tiempo real",
    routeOptimization: "Optimización de rutas",
    costAnalytics: "Análisis de costos",
    healthMonitoring: "Monitoreo de salud",
    predictiveAlerts: "Alertas predictivas",
    maintenancePlanning: "Planificación de mantenimiento",
    usageAnalytics: "Análisis de uso",
    costTracking: "Seguimiento de costos",
    performanceInsights: "Información de rendimiento",
    smartScheduling: "Programación inteligente",
    instantBooking: "Reserva instantánea",
    privateUseOptions: "Opciones de uso privado",
    emissionsTracking: "Seguimiento de emisiones",
    sustainabilityReports: "Informes de sostenibilidad",
    goalMonitoring: "Monitoreo de objetivos",
    // Impact section
    environmentalImpact: "Impacto Ambiental",
    scalable: "Escalable",
    impact: "Impacto",
    impactDescription:
      "Ve cómo FORI FLY escala los ahorros ambientales y las ganancias de eficiencia con el tamaño de la flota",
    vehicles: "Vehículos",
    totalAnnualDistance: "Distancia Anual Total (km)",
    fuelSavings: "Ahorro de Combustible",
    litersPerYear: "litros/año",
    co2Reduction: "Reducción de CO₂",
    co2ReductionValue10: "16,300 kg/año",
    co2ReductionValue100: "163k kg/año",
    co2ReductionValue1000: "1630k kg/año",
    co2ReductionValue10000: "16,300k kg/año",
    usageIncrease: "Aumento de Uso",
    trafficReduction: "Reducción de Tráfico",
    local: "Local",
    district: "Distrito",
    city: "Ciudad",
    regional: "Regional",
    freeParking: "Estacionamiento Gratuito",
    milesDrivenPerVehicle: "Millas conducidas por vehículo",
    year: "año",
    // Research dashboards
    researchBackedDashboards: "Paneles Respaldados por Investigación",
    researchBackedDashboardsDescription:
      "Nuestros paneles de clima y uso están construidos sobre datos de investigación profunda, proporcionando información en tiempo real sobre el impacto ambiental y la optimización de flotas.",
    climateDashboard: "Panel de Clima",
    realTimeCO2Tracking: "Seguimiento de CO₂ en tiempo real",
    fuelConsumptionAnalysis: "Análisis de consumo de combustible",
    sustainabilityGoalTracking: "Seguimiento de objetivos de sostenibilidad",
    environmentalReports: "Informes ambientales",
    usageDashboard: "Panel de Uso",
    fleetUtilizationAnalysis: "Análisis de utilización de flota",
    costOptimization: "Optimización de costos",
    predictiveAnalytics: "Análisis predictivos",
    performanceMetrics: "Métricas de rendimiento",
    // Testimonials
    customerSuccess: "Éxito del Cliente",
    trustedBy: "Confiado por",
    ourLeadingClient: " Nuestro Cliente Líder",
    stavangerTransformation: "Ve cómo Stavanger está transformando sus operaciones de flota con FORI FLY",
    stavangerMunicipality: "Municipio de Stavanger",
    leadingClientTestimonial: "Testimonio de Cliente Líder",
    stavangerTestimonial:
      '"Obtenemos acceso sin llaves a nuestros autos con una aplicación. Queremos hacerlo fácil para nuestros empleados. Nunca más buscar llaves. La solución también nos permite en el Municipio de Stavanger reducir nuestra flota de autos. Hayk nos da información sobre el uso de nuestros autos y nos facilita utilizar mejor cada auto. Los empleados obtienen acceso más fácil a los autos, aunque podamos tener menos autos y así reducir tanto CO2 como costos."',
    municipalFleetManager: "Gerente de Flota Municipal",
    vehiclesActiveImplementation: "Miles de viajes y más de 1500 toneladas de CO₂ ahorradas",
    // CTA
    readyToTransform: "¿Listo para Transformar",
    yourFleet: "tu Flota?",
    joinLeadingOrganizations: "Ponte en contacto. Te responderemos de inmediato.",
    // Contact
    getInTouch: "Ponte en Contacto",
    contactDescription:
      "Contacta a nuestro equipo para aprender cómo FORI FLY puede ayudar a tu municipio o empresa noruega o europea a optimizar las operaciones de flota y reducir costos.",
    letsTalk: "Hablemos",
    fleetExpertsReady: "Nuestros expertos en gestión de flotas están listos para ayudarte.",
    contactUs: "Contáctanos",
    whyChooseFORIFLY: "¿Por qué Elegir FORI FLY?",
    norwegianFirstDesign: "Diseño y soporte noruego-europeo primero",
    provenResults: "Resultados comprobados con clientes líderes",
    "24hourImplementation": "Implementación en 24 horas",
    dedicatedCustomerSuccess: "Equipo dedicado al éxito del cliente",
    // Footer
    norwegianLeader: "Líder Europeo",
    trustedByMunicipalities: "Confiado por Municipios",
    footerDescription:
      "Gestión inteligente de flotas para empresas noruegas modernas. Reduce costos, mejora la eficiencia y aumenta la satisfacción de los empleados con nuestra plataforma integral.",
    product: "Producto",
    company: "Empresa",
    support: "Soporte",
    signUp: "Registrarse",
    helpCenter: "Centro de Ayuda",
    documentation: "Documentación",
    privacyPolicy: "Política de Privacidad",
    terms: "Términos",
    // New keys
    drivingGreenerCities: "Conduciendo Ciudades Más Verdes",
    fromNorwayToWorld: "De Noruega al Mundo",
    kmDrivenSharedRides: "km Conducidos en Viajes Compartidos",
    businessRidesBooked: "Viajes de Negocios Reservados",
    privateRides: "Viajes Privados",
    avgDailyFleetUsage: "Uso Promedio Diario de Flota",
    treesSaved: "Árboles Salvados",
    co2Saved: "CO₂ Ahorrado",
    maxDailyAvgUsage: "Uso Promedio Diario Máximo",
    aiPoweredFleetIntelligence: "Inteligencia de Flota Impulsada por IA",
    comingSoon: "Próximamente",
    smarterGreenerMobility: "Movilidad Más Inteligente y Verde",
    predictiveMaintenance: "Mantenimiento Predictivo",
    predictiveMaintenanceDesc:
      "Predice las necesidades de mantenimiento antes de que surjan problemas con análisis impulsado por IA de datos de vehículos y patrones de uso.",
    smartUsageAnalytics: "Análisis de Uso Inteligente",
    smartUsageAnalyticsDesc:
      "Obtén información profunda sobre el uso de la flota, costos y eficiencia con análisis avanzados e informes en tiempo real.",
    automatedDispatching: "Despacho Automatizado",
    automatedDispatchingDesc:
      "Optimiza automáticamente la asignación de vehículos en función de la demanda, la ubicación y la disponibilidad.",
    ecoImpactForecasting: "Pronóstico de Impacto Ecológico",
    ecoImpactForecastingDesc:
      "Predice y rastrea el impacto ambiental con métricas detalladas de reducción CO₂ y sostenibilidad.",
    driverBehaviorInsights: "Información de Comportamiento del Conductor",
    driverBehaviorInsightsDesc:
      "Analiza patrones de conducción para mejorar la seguridad, eficiencia y reducir el consumo de combustible.",
    aiDemandForecasting: "Pronóstico de Demanda con IA",
    aiDemandForecastingDesc:
      "Predice la demanda de flota usando aprendizaje automático para planificación óptima de recursos y reducción de costos.",
    whatIsForiFlyTitle: "¿Qué es ForiFly?",
    whatIsForiFlyDesc:
      "ForiFly es una plataforma inteligente de movilidad y gestión de flotas diseñada para ciudades, aeropuertos, comunidades residenciales y empresas. Optimiza el uso de vehículos, reduce costos y obtén información operativa con acceso sin llaves y análisis en tiempo real.",
    whoIsItFor: "¿Para quién es?",
    citiesMunicipalities: "Ciudades y Municipios",
    citiesMunicipalitiesDesc: "Visibilidad y control unificados de la flota",
    airportsTransportHubs: "Aeropuertos y Centros de Transporte",
    airportsTransportHubsDesc: "Operaciones optimizadas de vehículos terrestres",
    housingCommunities: "Comunidades Residenciales",
    housingCommunitiesDesc: "Gestión eficiente de flotas de vehículos compartidos",
    corporatesEnterprises: "Empresas y Corporativos",
    corporatesEnterprisesDesc: "Seguimiento en tiempo real de vehículos de empleados",
    challengesWeAddress: "Desafíos que Abordamos",
    challengeManualTracking: "El seguimiento manual de flotas ralentiza las operaciones",
    challengeNoRealtimeAnalytics: "Falta de análisis de vehículos en tiempo real",
    challengeHighCosts: "Altos costos operativos para flotas",
    challengeScalingCarsharing: "Dificultad para escalar carsharing o movilidad compartida",
  },
  it: {
    // Header
    features: "Caratteristiche",
    municipalities: "Ecosistema",
    howItWorks: "Come Funziona",
    testimonials: "Testimonianze",
    contact: "Contatto",
    signIn: "Accedi",
    getStartedFree: "Inizia Gratis",
    // Hero
    trustedBy: "Fidato da Organizzazioni Norvegesi ed Europee",
    leadingClients: "Clienti Leader",
    transformYour: "Trasforma le Tue",
    fleetOperations: "Operazioni di Flotta",
    smartFleetManagement: "Gestione Intelligente della Flotta",
    heroDescription:
      "Gestione della flotta che riduce le esigenze di veicoli, abbassa i costi operativi e migliora l'esperienza dei dipendenti.",
    heroSubtext:
      "Una piattaforma per accesso senza chiavi, prenotazioni intelligenti, monitoraggio in tempo reale e analisi complete. Fidato da comuni e aziende leader norvegesi ed europei.",
    heroMainTitle: "Gestione Intelligente della Flotta e della Mobilità per Città, Aeroporti e Aziende",
    heroMainSubtitle: "Traccia, analizza e ottimizza le flotte con dati in tempo reale e soluzioni di mobilità scalabili.",
    // CTA buttons
    startFreeTrial: "Inizia Prova Gratuita",
    watchDemo: "Guarda Demo",
    scheduleDemo: "Programma Demo",
    heroDemoButton: "Richiedi una demo",
    heroContactButton: "Parla con il nostro team",
    // Features
    freeTrial: "Prova gratuita di 14 giorni",
    noCreditCard: "Nessuna carta di credito",
    quickSetup: "Configurazione in 24h",
    // Partners
    ourPartners: "I Nostri Partner",
    partnersDescription: "Collaboratori Attuali e Passati",
    currentPartners: "Partner Attuali",
    pastPartners: "Partner Passati",
    strategic: "Strategici",
    collaborators: "I Nostri Collaboratori",
    ecosystem: "Ecosistema",
    partnerships: "Partnership",
    // Clients section
    ourClients: "I Nostri Clienti",
    trustedByLeading: "Fidato da Leader",
    norwegianOrganizations: "Organizzazioni Norvegesi ed Europee",
    currentClients: "Clienti Attuali",
    pastClients: "Clienti Passati",
    clientsDescription:
      "Dai comuni alle aziende private, FORI FLY serve diverse esigenze di gestione della flotta in Norvegia e Europa.",
    // Services
    ourServices: "Riconoscimento del Settore",
    servicesDescription:
      "Le iniziative di FORI sono state riconosciute per il loro approccio innovativo nella costruzione di soluzioni più intelligenti e connesse. Siamo orgogliosi di aver collaborato con organizzazioni lungimiranti che supportano la nostra missione.",
    // Value props
    digitizeOptimizeMonetize: "Digitalizzare, Ottimizzare, Monetizzare",
    digitizeOptimizeMonetizeDescription:
      "Trasformare le flotte esistenti in asset digitali, ottimizzati e generatori di ricavi",
    digitize: "Digitalizzare",
    digitizeDescription:
      "Abilitare accesso senza chiavi, aprire veicoli via mobile, vedere stato batteria, analisi e altro.",
    optimize: "Ottimizzare",
    optimizeDescription:
      "Aumentare l'uso, mostrare stato batteria, operazioni digitali, condividere tra dipartimenti, dare priorità ai dipartimenti.",
    monetize: "Monetizzare",
    monetizeDescription:
      "Rendere i veicoli disponibili per noleggio privato con comunità sicure. La condivisione riduce il numero di veicoli necessari.",
    // Digitize features
    keylessAccess: "Accesso senza chiavi",
    mobileControl: "Controllo mobile",
    batteryMonitoring: "Monitoraggio batteria",
    realTimeAnalytics: "Analisi in tempo reale",
    // Optimize features
    increasedUtilization: "Maggiore utilizzo",
    crossDepartmentSharing: "Condivisione tra dipartimenti",
    digitalOperations: "Operazioni digitali",
    costSharing: "Condivisione costi",
    // Monetize features
    privateRental: "Noleggio privato",
    secureCommunities: "Comunità sicure",
    revenueGeneration: "Generazione ricavi",
    reducedFleetNeeds: "Esigenze ridotte di flotta",
    // Features section
    advancedFeatures: "Caratteristiche Avanzate",
    everythingYouNeed: "Tutto Ciò di cui Hai Bisogno",
    andMore: "E Altro",
    comprehensiveFleetManagement:
      "Gestione completa della flotta con tecnologia all'avanguardia e design norvegese-first.",
    keylessAccessDescription:
      "Sbloccare e avviare veicoli da remoto tramite l'app. Niente più chiavi fisiche da gestire, perdere o distribuire.",
    smartFuelMonitoring: "Monitoraggio Intelligente del Carburante",
    smartFuelMonitoringDescription:
      "Tracciamento in tempo reale del livello di carburante con analisi predittive per ottimizzare i percorsi e ridurre il consumo.",
    batteryHealthTracking: "Tracciamento Salute Batteria",
    batteryHealthTrackingDescription:
      "Monitoraggio avanzato della batteria con manutenzione predittiva per prevenire guasti imprevisti.",
    advancedAnalytics: "Analisi Avanzate",
    advancedAnalyticsDescription:
      "Approfondimenti completi sui modelli di utilizzo, costi, metriche di efficienza e opportunità di ottimizzazione.",
    intelligentBooking: "Prenotazione Intelligente",
    intelligentBookingDescription:
      "Sistema di prenotazione alimentato da IA con pianificazione intelligente sia per uso lavorativo che privato con conferma istantanea.",
    co2Tracking: "Tracciamento CO₂",
    co2TrackingDescription:
      "Tracciamento in tempo reale dell'impatto ambientale con report scaricabili per obiettivi di sostenibilità.",
    // Feature details
    remoteUnlock: "Sblocco remoto",
    engineStart: "Avvio motore",
    secureAccess: "Accesso sicuro",
    realTimeTracking: "Tracciamento in tempo reale",
    routeOptimization: "Ottimizzazione percorso",
    costAnalytics: "Analisi costi",
    healthMonitoring: "Monitoraggio salute",
    predictiveAlerts: "Avvisi predittivi",
    maintenancePlanning: "Pianificazione manutenzione",
    usageAnalytics: "Analisi utilizzo",
    costTracking: "Tracciamento costi",
    performanceInsights: "Approfondimenti prestazioni",
    smartScheduling: "Pianificazione intelligente",
    instantBooking: "Prenotazione istantanea",
    privateUseOptions: "Opzioni uso privato",
    emissionsTracking: "Tracciamento emissioni",
    sustainabilityReports: "Report sostenibilità",
    goalMonitoring: "Monitoraggio obiettivi",
    // Impact section
    environmentalImpact: "Impatto Ambientale",
    scalable: "Scalabile",
    impact: "Impatto",
    impactDescription:
      "Vedi come FORI FLY scala i risparmi ambientali e i guadagni di efficienza con le dimensioni della flotta",
    vehicles: "Veicoli",
    totalAnnualDistance: "Distanza Annuale Totale (km)",
    fuelSavings: "Risparmio Carburante",
    litersPerYear: "litri/anno",
    co2Reduction: "Riduzione CO₂",
    co2ReductionValue10: "16.300 kg/anno",
    co2ReductionValue100: "163k kg/anno",
    co2ReductionValue1000: "1630k kg/anno",
    co2ReductionValue10000: "16.300k kg/anno",
    usageIncrease: "Aumento Utilizzo",
    trafficReduction: "Riduzione Traffico",
    local: "Locale",
    district: "Distretto",
    city: "Città",
    regional: "Regionale",
    freeParking: "Parcheggio Gratuito",
    milesDrivenPerVehicle: "Miglia guidate per veicolo",
    year: "anno",
    // Research dashboards
    researchBackedDashboards: "Dashboard Supportate dalla Ricerca",
    researchBackedDashboardsDescription:
      "Le nostre dashboard sul clima e sull'utilizzo sono costruite su dati di ricerca approfonditi, fornendo approfondimenti in tempo reale sull'impatto ambientale e sull'ottimizzazione della flotta.",
    climateDashboard: "Dashboard Clima",
    realTimeCO2Tracking: "Tracciamento CO₂ in tempo reale",
    fuelConsumptionAnalysis: "Analisi consumo carburante",
    sustainabilityGoalTracking: "Tracciamento obiettivi sostenibilità",
    environmentalReports: "Report ambientali",
    usageDashboard: "Dashboard Utilizzo",
    fleetUtilizationAnalysis: "Analisi utilizzo flotta",
    costOptimization: "Ottimizzazione costi",
    predictiveAnalytics: "Analisi predittive",
    performanceMetrics: "Metriche prestazioni",
    // Testimonials
    customerSuccess: "Successo del Cliente",
    trustedBy: "Fidato da",
    ourLeadingClient: " Il Nostro Cliente Leader",
    stavangerTransformation: "Vedi come Stavanger sta trasformando le sue operazioni di flotta con FORI FLY",
    stavangerMunicipality: "Comune di Stavanger",
    leadingClientTestimonial: "Testimonianza Cliente Leader",
    stavangerTestimonial:
      '"Otteniamo accesso senza chiavi alle nostre auto con un\'app. Vogliamo rendere facile per i nostri dipendenti. Mai più cercare chiavi. La soluzione ci consente anche nel Comune di Stavanger di ridurre la nostra flotta di auto. Hayk ci fornisce informazioni sul nostro uso delle auto e ci rende facile utilizzare meglio ogni auto. I dipendenti ottengono un accesso più facile alle auto, anche se possiamo avere meno auto e quindi ridurre sia CO2 che costi."',
    municipalFleetManager: "Responsabile Flotta Comunale",
    vehiclesActiveImplementation: "Migliaia di viaggi e oltre 1500 tonnellate di CO₂ risparmiate",
    // CTA
    readyToTransform: "Pronto a Trasformare",
    yourFleet: "la Tua Flotta?",
    joinLeadingOrganizations: "Mettiti in contatto. Ti risponderemo immediatamente.",
    // Contact
    getInTouch: "Mettiti in Contatto",
    contactDescription:
      "Contatta il nostro team per sapere come FORI FLY può aiutare il tuo comune o azienda norvegese o europea a ottimizzare le operazioni di flotta e ridurre i costi.",
    letsTalk: "Parliamone",
    fleetExpertsReady: "I nostri esperti di gestione flotte sono pronti ad aiutarti.",
    contactUs: "Contattaci",
    whyChooseFORIFLY: "Perché Scegliere FORI FLY?",
    norwegianFirstDesign: "Design e supporto norvegese-europeo first",
    provenResults: "Risultati comprovati con clienti leader",
    "24hourImplementation": "Implementazione in 24 ore",
    dedicatedCustomerSuccess: "Team dedicato al successo del cliente",
    // Footer
    norwegianLeader: "Leader Europeo",
    trustedByMunicipalities: "Fidato dai Comuni",
    footerDescription:
      "Gestione intelligente della flotta per aziende norvegesi moderne. Riduci i costi, migliora l'efficienza e aumenta la soddisfazione dei dipendenti con la nostra piattaforma completa.",
    product: "Prodotto",
    company: "Azienda",
    support: "Supporto",
    signUp: "Registrati",
    helpCenter: "Centro Assistenza",
    documentation: "Documentazione",
    privacyPolicy: "Informativa Privacy",
    terms: "Termini",
    // New keys
    drivingGreenerCities: "Guidando Città Più Verdi",
    fromNorwayToWorld: "Dalla Norvegia al Mondo",
    kmDrivenSharedRides: "km Percorsi in Viaggi Condivisi",
    businessRidesBooked: "Viaggi di Lavoro Prenotati",
    privateRides: "Viaggi Privati",
    avgDailyFleetUsage: "Utilizzo Medio Giornaliero Flotta",
    treesSaved: "Alberi Salvati",
    co2Saved: "CO₂ Risparmiato",
    maxDailyAvgUsage: "Utilizzo Medio Giornaliero Massimo",
    aiPoweredFleetIntelligence: "Intelligenza Flotta Alimentata da IA",
    comingSoon: "Prossimamente",
    smarterGreenerMobility: "Mobilità Più Intelligente e Verde",
    predictiveMaintenance: "Manutenzione Predittiva",
    predictiveMaintenanceDesc:
      "Prevedi le esigenze di manutenzione prima che sorgano problemi con analisi guidata da IA dei dati del veicolo e dei modelli di utilizzo.",
    smartUsageAnalytics: "Analisi Utilizzo Intelligente",
    smartUsageAnalyticsDesc:
      "Ottieni approfondimenti dettagliati sull'utilizzo della flotta, costi ed efficienza con analisi avanzate e reportistica in tempo reale.",
    automatedDispatching: "Dispatching Automatizzato",
    automatedDispatchingDesc:
      "Ottimizza automaticamente l'allocazione dei veicoli in base a domanda, posizione e disponibilità.",
    ecoImpactForecasting: "Previsione Impatto Ecologico",
    ecoImpactForecastingDesc:
      "Prevedi e traccia l'impatto ambientale con metriche dettagliate di riduzione CO₂ e sostenibilità.",
    driverBehaviorInsights: "Approfondimenti Comportamento Conducente",
    driverBehaviorInsightsDesc:
      "Analizza i modelli di guida per migliorare sicurezza, efficienza e ridurre il consumo di carburante.",
    aiDemandForecasting: "Previsione Domanda IA",
    aiDemandForecastingDesc:
      "Prevedi la domanda di flotta utilizzando machine learning per pianificazione ottimale delle risorse e riduzione dei costi.",
    whatIsForiFlyTitle: "Cos'è ForiFly?",
    whatIsForiFlyDesc:
      "ForiFly è una piattaforma intelligente di mobilità e gestione flotte progettata per città, aeroporti, comunità residenziali e aziende. Ottimizza l'uso dei veicoli, riduci i costi e ottieni informazioni operative con accesso senza chiavi e analisi in tempo reale.",
    whoIsItFor: "Per Chi è?",
    citiesMunicipalities: "Città e Comuni",
    citiesMunicipalitiesDesc: "Visibilità e controllo unificati della flotta",
    airportsTransportHubs: "Aeroporti e Hub di Trasporto",
    airportsTransportHubsDesc: "Operazioni ottimizzate dei veicoli terrestri",
    housingCommunities: "Comunità Residenziali",
    housingCommunitiesDesc: "Gestione efficiente della flotta di veicoli condivisi",
    corporatesEnterprises: "Aziende e Imprese",
    corporatesEnterprisesDesc: "Tracciamento in tempo reale dei veicoli dei dipendenti",
    challengesWeAddress: "Sfide che Affrontiamo",
    challengeManualTracking: "Il tracciamento manuale della flotta rallenta le operazioni",
    challengeNoRealtimeAnalytics: "Mancanza di analisi dei veicoli in tempo reale",
    challengeHighCosts: "Alti costi operativi per le flotte",
    challengeScalingCarsharing: "Difficoltà nello scalare carsharing o mobilità condivisa",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
      localStorage.setItem("language", lang)
    }
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}