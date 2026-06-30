import type { Config } from "tailwindcss";

/**
 * Single source of truth for the theme lives in two coordinated places:
 *   1. CSS variables in app/globals.css  (raw values: RGB channels, radii, motion)
 *   2. This config, which maps those variables to Tailwind utilities.
 *
 * Colors are declared as `rgb(var(--x) / <alpha-value>)` so every token still
 * supports Tailwind opacity modifiers (e.g. `bg-surface/60`). To re-skin the
 * brand later, change the variables in globals.css — nothing here needs editing.
 */

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Brief breakpoints: 375 / 768 / 1024 / 1440. Mobile-first base is < 375.
    screens: {
      xs: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // 20px gutters on mobile
        md: "2rem", // 32px on tablet
        lg: "3rem", // 48px on desktop
      },
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        canvas: withAlpha("--c-canvas"),
        surface: withAlpha("--c-surface"),
        "surface-2": withAlpha("--c-surface-2"),
        line: withAlpha("--c-line"),
        "line-strong": withAlpha("--c-line-strong"),
        ink: withAlpha("--c-ink"),
        secondary: withAlpha("--c-secondary"),
        muted: withAlpha("--c-muted"),
        accent: withAlpha("--c-accent"),
        "accent-soft": withAlpha("--c-accent-soft"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        label: "0.14em",
        wider2: "0.18em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
