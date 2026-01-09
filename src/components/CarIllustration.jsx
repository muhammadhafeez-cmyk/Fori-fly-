// Modern Car SVG Illustration Component
export function CarIllustration({ className = "", color = "blue" }) {
  const colors = {
    blue: {
      primary: "#3B82F6",
      secondary: "#1E40AF",
      accent: "#60A5FA",
      light: "#DBEAFE",
    },
    purple: {
      primary: "#8B5CF6",
      secondary: "#7C3AED",
      accent: "#A78BFA",
      light: "#EDE9FE",
    },
    green: {
      primary: "#10B981",
      secondary: "#059669",
      accent: "#34D399",
      light: "#D1FAE5",
    },
  }

  const currentColor = colors[color] || colors.blue

  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Car Body */}
      <path
        d="M50 120 L80 80 L320 80 L350 120 L350 140 L320 140 L320 160 L280 160 L280 140 L120 140 L120 160 L80 160 L80 140 L50 140 Z"
        fill={currentColor.primary}
        className="drop-shadow-lg"
      />

      {/* Car Windows */}
      <path d="M90 80 L90 100 L310 100 L310 80 L280 60 L120 60 Z" fill={currentColor.light} opacity="0.8" />

      {/* Front Wheel */}
      <circle cx="120" cy="150" r="20" fill={currentColor.secondary} />
      <circle cx="120" cy="150" r="12" fill={currentColor.accent} />

      {/* Rear Wheel */}
      <circle cx="280" cy="150" r="20" fill={currentColor.secondary} />
      <circle cx="280" cy="150" r="12" fill={currentColor.accent} />

      {/* Headlight */}
      <circle cx="340" cy="110" r="8" fill="#FEF3C7" />

      {/* Door Handle */}
      <rect x="200" y="110" width="8" height="4" rx="2" fill={currentColor.secondary} />

      {/* Side Mirror */}
      <ellipse cx="85" cy="95" rx="6" ry="4" fill={currentColor.secondary} />
    </svg>
  )
}

// Electric Car Charging Illustration
export function ElectricCarIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Charging Station */}
      <rect x="20" y="40" width="15" height="80" rx="7" fill="#10B981" />
      <rect x="15" y="35" width="25" height="15" rx="7" fill="#059669" />

      {/* Charging Cable */}
      <path d="M35 80 Q60 70 80 85" stroke="#10B981" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Car Body */}
      <path
        d="M80 100 L110 70 L240 70 L270 100 L270 120 L240 120 L240 140 L200 140 L200 120 L120 120 L120 140 L80 140 L80 120 L50 120 Z"
        fill="#3B82F6"
        className="drop-shadow-lg"
      />

      {/* Car Windows */}
      <path d="M120 70 L120 90 L230 90 L230 70 L200 50 L150 50 Z" fill="#DBEAFE" opacity="0.8" />

      {/* Wheels */}
      <circle cx="120" cy="130" r="15" fill="#1E40AF" />
      <circle cx="200" cy="130" r="15" fill="#1E40AF" />

      {/* Electric Symbol */}
      <path d="M160 85 L155 95 L165 95 L160 105 L165 95 L155 95 Z" fill="#10B981" />

      {/* Charging Port */}
      <rect x="75" y="82" width="8" height="6" rx="3" fill="#059669" />
    </svg>
  )
}

// Fleet Dashboard Illustration
export function FleetDashboardIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard Background */}
      <rect width="400" height="300" rx="20" fill="url(#dashboardGradient)" />

      {/* Car Icons */}
      <g transform="translate(50, 50)">
        <rect width="40" height="20" rx="10" fill="#10B981" />
        <circle cx="10" cy="25" r="5" fill="#059669" />
        <circle cx="30" cy="25" r="5" fill="#059669" />
      </g>

      <g transform="translate(150, 80)">
        <rect width="40" height="20" rx="10" fill="#3B82F6" />
        <circle cx="10" cy="25" r="5" fill="#1E40AF" />
        <circle cx="30" cy="25" r="5" fill="#1E40AF" />
      </g>

      <g transform="translate(280, 60)">
        <rect width="40" height="20" rx="10" fill="#8B5CF6" />
        <circle cx="10" cy="25" r="5" fill="#7C3AED" />
        <circle cx="30" cy="25" r="5" fill="#7C3AED" />
      </g>

      {/* Stats Cards */}
      <rect x="50" y="150" width="80" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="90" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        Active
      </text>
      <text x="90" y="190" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
        24
      </text>

      <rect x="160" y="150" width="80" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="200" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        Efficiency
      </text>
      <text x="200" y="190" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
        +15%
      </text>

      <rect x="270" y="150" width="80" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="310" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        CO₂ Cut
      </text>
      <text x="310" y="190" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
        -32%
      </text>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Modern Car Hero Illustration
export function HeroCarIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Elements */}
      <circle cx="400" cy="80" r="60" fill="url(#heroGradient1)" opacity="0.3" />
      <circle cx="100" cy="200" r="40" fill="url(#heroGradient2)" opacity="0.3" />

      {/* Main Car */}
      <g transform="translate(100, 100)">
        {/* Car Shadow */}
        <ellipse cx="150" cy="120" rx="120" ry="20" fill="rgba(0,0,0,0.1)" />

        {/* Car Body */}
        <path
          d="M50 80 L80 40 L220 40 L250 80 L250 100 L220 100 L220 120 L180 120 L180 100 L120 100 L120 120 L80 120 L80 100 L50 100 Z"
          fill="url(#carGradient)"
          className="drop-shadow-2xl"
        />

        {/* Car Windows */}
        <path d="M90 40 L90 70 L210 70 L210 40 L180 20 L120 20 Z" fill="rgba(255,255,255,0.9)" opacity="0.8" />

        {/* Front Wheel */}
        <circle cx="120" cy="110" r="25" fill="#1E40AF" />
        <circle cx="120" cy="110" r="15" fill="#60A5FA" />
        <circle cx="120" cy="110" r="8" fill="#DBEAFE" />

        {/* Rear Wheel */}
        <circle cx="180" cy="110" r="25" fill="#1E40AF" />
        <circle cx="180" cy="110" r="15" fill="#60A5FA" />
        <circle cx="180" cy="110" r="8" fill="#DBEAFE" />

        {/* Headlights */}
        <circle cx="240" cy="70" r="12" fill="#FEF3C7" />
        <circle cx="240" cy="90" r="8" fill="#F59E0B" />

        {/* Side Details */}
        <rect x="140" y="75" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.5)" />
        <rect x="140" y="85" width="30" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* Floating Elements */}
      <g opacity="0.6">
        <circle cx="80" cy="60" r="3" fill="#3B82F6" />
        <circle cx="420" cy="180" r="4" fill="#8B5CF6" />
        <circle cx="350" cy="50" r="2" fill="#10B981" />
      </g>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <radialGradient id="heroGradient1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
        <radialGradient id="heroGradient2">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
      </defs>
    </svg>
  )
}
