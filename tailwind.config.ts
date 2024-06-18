import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    fontSize: {
      h1: ["var(--fs-h1)", {lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-h1)"}],
      h2: ["var(--fs-h2)", {lineHeight: "var(--lh-h2)", fontWeight: "var(--fw-h2)"}],
      h3: ["var(--fs-h3)", {lineHeight: "var(--lh-h3)", fontWeight: "var(--fw-h3)"}],
      h4: ["var(--fs-h4)", {lineHeight: "var(--lh-h4)", fontWeight: "var(--fw-h4)"}],
      large: ["var(--fs-large)", {lineHeight: "var(--lh-large)", fontWeight: "var(--fw-large)"}],
      lead: ["var(--fs-lead)", {lineHeight: "var(--lh-lead)", fontWeight: "var(--fw-lead)"}],
      p: ["var(--fs-p)", {lineHeight: "var(--lh-p)", fontWeight: "var(--fw-p)"}],
      "p-ui": ["var(--fs-p-ui)", {lineHeight: "var(--lh-p-ui)", fontWeight: "var(--fw-p-ui)"}],
      "p-ui-medium": ["var(--fs-p-ui-medium)", {lineHeight: "var(--lh-p-ui-medium)", fontWeight: "var(--fw-p-ui-medium)"}],
      list: ["var(--fs-list)", {lineHeight: "var(--lh-list)", fontWeight: "var(--fw-list)"}],
      body: ["var(--fs-body)", {lineHeight: "var(--lh-body)", fontWeight: "var(--fw-body)"}],
      "body-medium": ["var(--fs-body-medium)", {lineHeight: "var(--lh-body-medium)", fontWeight: "var(--fw-body-medium)"}],
      subtle: ["var(--fs-subtle)", {lineHeight: "var(--lh-subtle)", fontWeight: "var(--fw-subtle)"}],
      "subtle-medium": ["var(--fs-subtle-medium)", {lineHeight: "var(--lh-subtle-medium)", fontWeight: "var(--fw-subtle-medium)"}],
      "suble-semibold": ["var(--fs-suble-semibold)", {lineHeight: "var(--lh-suble-semibold)", fontWeight: "var(--fw-suble-semibold)"}],
      small: ["var(--fs-small)", {lineHeight: "var(--lh-small)", fontWeight: "var(--fw-small)"}],
      detail: ["var(--fs-detail)", {lineHeight: "var(--lh-detail)", fontWeight: "var(--fw-detail)"}],
      blockquote: ["var(--fs-blockquote)", {lineHeight: "var(--lh-blockquote)", fontWeight: "var(--fw-blockquote)"}],
      "table-head": ["var(--fs-table-head)", {lineHeight: "var(--lh-table-head)", fontWeight: "var(--fw-table-head)"}],
      "table-item": ["var(--fs-table-item)", {lineHeight: "var(--lh-table-item)", fontWeight: "var(--fw-table-item)"}],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config