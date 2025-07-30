import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom cyberpunk colors
        "cyber-purple": {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        "cyber-pink": {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        // Light mode pastel colors - improved palette
        "pastel-purple": {
          50: "#faf7ff",
          100: "#f4edff",
          200: "#e8d9ff",
          300: "#d6bbff",
          400: "#c199ff",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        "pastel-pink": {
          50: "#fef7f7",
          100: "#fdedef",
          200: "#fbd9de",
          300: "#f7b8c3",
          400: "#f28ba8",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        // Light mode specific colors
        "light-purple": {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#9333ea",
          600: "#7c3aed",
          700: "#6b21a8",
          800: "#581c87",
          900: "#4c1d95",
        },
        "light-pink": {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#db2777",
          600: "#be185d",
          700: "#9d174d",
          800: "#831843",
          900: "#701a75",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)" },
        },
        "glow-light": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-light": "glow-light 2s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "pastel-gradient": "linear-gradient(135deg, #e8d9ff 0%, #fbd9de 100%)",
        "hero-banner": "url('/images/hero-banner.png')",
      },
      dropShadow: {
        "text-lg": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "text-xl": "0 6px 12px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

