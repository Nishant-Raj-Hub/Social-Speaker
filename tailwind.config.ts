import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			futura: [
  				'Futura LT Regular',
  				'sans-serif'
  			],
  			futuraBook: [
  				'Futura LT Book',
  				'sans-serif'
  			],
  			futuraOblique: [
  				'Futura LT Oblique',
  				'sans-serif'
  			],
  			futuraBookOblique: [
  				'Futura LT BookOblique',
  				'sans-serif'
  			],
  			futuraLight: [
  				'Futura LT Light',
  				'sans-serif'
  			],
  			futuraCondensedLight: [
  				'Futura LT CondensedLight',
  				'sans-serif'
  			],
  			futuraLightOblique: [
  				'Futura LT LightOblique',
  				'sans-serif'
  			],
  			futuraCondensedLightOblique: [
  				'Futura LT CondensedLightObl',
  				'sans-serif'
  			],
  			futuraCondensed: [
  				'Futura LT Condensed',
  				'sans-serif'
  			],
  			futuraCondensedOblique: [
  				'Futura LT CondensedOblique',
  				'sans-serif'
  			],
  			futuraExtraBold: [
  				'Futura LT ExtraBold',
  				'sans-serif'
  			],
  			futuraBold: [
  				'Futura LT Bold',
  				'sans-serif'
  			],
  			futuraCondensedBold: [
  				'Futura LT CondensedBold',
  				'sans-serif'
  			],
  			futuraCondensedExtraBold: [
  				'Futura LT CondensedExtraBold',
  				'sans-serif'
  			],
  			futuraExtraBoldOblique: [
  				'Futura LT ExtraBoldOblique',
  				'sans-serif'
  			],
  			futuraBoldOblique: [
  				'Futura LT BoldOblique',
  				'sans-serif'
  			],
  			futuraCondensedExtraBoldOblique: [
  				'Futura LT CondExtraBoldObl',
  				'sans-serif'
  			],
  			futuraCondensedBoldOblique: [
  				'Futura LT CondensedBoldOblique',
  				'sans-serif'
  			],
  			futuraHeavy: [
  				'Futura LT Heavy',
  				'sans-serif'
  			],
  			futuraHeavyOblique: [
  				'Futura LT HeavyOblique',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
