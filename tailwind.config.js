export default  {
  darkMode: ["class"],
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        customPurple: "#DD88CF",
        secondary: "#FFD95F",
        btnColor: "#6E8E59",
        btnHover: "#CAE0BC",  
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
        purple: {
          600: "#7C3AED",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float-particle1': 'float-particle1 3s ease-in-out infinite',
        'float-particle2': 'float-particle2 4s ease-in-out infinite',
      },
      keyframes: {
        emerge: {
          '0%': { transform: 'scale(0) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'scale(1) rotate(45deg)', opacity: 1 }
        },
        step1: {
          '0%': { transform: 'translateX(20px) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(45deg)', opacity: 1 }
        },
        step2: {
          '0%': { transform: 'translateX(20px) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(45deg)', opacity: 1 }
        },
        step3: {
          '0%': { transform: 'translateX(20px) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(45deg)', opacity: 1 }
        },
        step4: {
          '0%': { transform: 'translateX(20px) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(45deg)', opacity: 1 }
        },
        'float-particle1': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' }
        },
        'float-particle2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};



