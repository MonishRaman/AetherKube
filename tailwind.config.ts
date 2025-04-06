
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// AetherKube custom colors
				aether: {
					blue: {
						light: '#D3E4FD',
						DEFAULT: '#33C3F0',
						dark: '#0EA5E9',
					},
					green: {
						light: '#F2FCE2',
						DEFAULT: '#22c55e',
						dark: '#16a34a',
					},
					purple: {
						light: '#D6BCFA',
						DEFAULT: '#9b87f5',
						dark: '#7E69AB',
					},
					dark: '#1A1F2C',
					gray: '#8E9196',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)'
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					},
				},
				'data-flow': {
					'0%': { 
						strokeDashoffset: '1000'
					},
					'100%': { 
						strokeDashoffset: '0'
					},
				},
				'rotate-slow': {
					'0%': { 
						transform: 'rotate(0deg)'
					},
					'100%': { 
						transform: 'rotate(360deg)'
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'data-flow': 'data-flow 15s linear infinite',
				'rotate-slow': 'rotate-slow 30s linear infinite',
			},
			backgroundImage: {
				'cyberpunk-grid': 'linear-gradient(to right, rgba(26, 31, 44, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 31, 44, 0.1) 1px, transparent 1px)',
				'glow-green': 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(10, 10, 20, 0) 70%)',
				'glow-blue': 'radial-gradient(circle, rgba(51, 195, 240, 0.2) 0%, rgba(10, 10, 20, 0) 70%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
