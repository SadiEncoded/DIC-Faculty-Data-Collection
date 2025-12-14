/**
 * Theme Configuration
 * Design system, colors, typography, and spacing scales
 * Theme: Only Light Mode Capable Because It's a intstitutional Website
 */

export const themeConfig = {
  // Color Palette
  colors: {
    // Primary Colors (Deep Navy)
    primary: {
      50: "#E0E6ED",
      100: "#B3C2D1",
      200: "#809BB0",
      300: "#4D7390",
      400: "#265476",
      500: "#021c3e", // Primary Brand Color (Deep Navy)
      600: "#021938",
      700: "#01132B",
      800: "#010D1E",
      900: "#00060F",
    },

    // Secondary Colors (Bright Cyan)
    secondary: {
      50: "#E3F4FB",
      100: "#B8E3F5",
      200: "#8ACFF0",
      300: "#5DBBEA",
      400: "#39ACE5",
      500: "#169bc8", // Secondary Brand Color (Bright Cyan)
      600: "#148BB4",
      700: "#0F6C8C",
      800: "#0A4E65",
      900: "#052F3D",
    },

    // Accent Color (Warm Yellow)
    accent: {
      50: "#FFFBE6",
      100: "#FFF4B3",
      200: "#FFEC80",
      300: "#FFE44D",
      400: "#FFDE26",
      500: "#ffd166", // Accent Brand Color (Warm Yellow)
      600: "#E6BC5C",
      700: "#CC9933",
      800: "#997326",
      900: "#664D1A",
    },

    // Status Colors
    success: {
      50: "#E8F5E9",
      500: "#4CAF50",
      700: "#388E3C",
    },
    warning: {
      50: "#FFF3E0",
      500: "#FF9800",
      700: "#F57C00",
    },
    error: {
      50: "#FFEBEE",
      500: "#F44336",
      700: "#D32F2F",
    },
    info: {
      50: "#E3F2FD",
      500: "#2196F3",
      700: "#1976D2",
    },

    // Neutral/Gray Scale
    gray: {
      0: "#FFFFFF",
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
      950: "#030712",
    },

    // Extended Colors for Cards/Sections
    card: {
      light: "#FFFFFF",
      dark: "#1F2937",
      border: "#E5E7EB",
      gradient: "linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 100%)",
    },
    // Gradients
    gradients: {
      primary: "linear-gradient(135deg, #021c3e 0%, #042e68 100%)",
      background: "linear-gradient(180deg, #FFFFFF 0%, #f4f7fb 100%)",
    },
  },

  // Typography System
  typography: {
    // Font Families
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      serif: ["var(--font-poppins)", "serif"],
      mono: ["var(--font-jetbrains-mono)", "monospace"],
    },

    // Font Sizes
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
    },

    // Font Weights
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    // Line Heights
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    // Letter Spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  // Spacing Scale (8px base)
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    7: "1.75rem", // 28px
    8: "2rem", // 32px
    9: "2.25rem", // 36px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    14: "3.5rem", // 56px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    28: "7rem", // 112px
    32: "8rem", // 128px
    36: "9rem", // 144px
    40: "10rem", // 160px
    44: "11rem", // 176px
    48: "12rem", // 192px
    52: "13rem", // 208px
    56: "14rem", // 224px
    60: "15rem", // 240px
    64: "16rem", // 256px
    72: "18rem", // 288px
    80: "20rem", // 320px
    96: "24rem", // 384px
  },

  // Border Radius
  borderRadius: {
    none: "0px",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Shadows
  boxShadow: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
    elevated: "0 8px 24px rgba(13, 158, 255, 0.15)",
    // Custom Shadows from design
    card: "0 40px 80px rgba(2, 28, 62, 0.18)",
    button: "0 14px 30px rgba(2, 28, 62, 0.32)",
    input_focus: "0 0 0 4px rgba(22, 155, 200, 0.2)",
  },

  // Transitions & Animations
  transition: {
    duration: {
      fast: "150ms",
      base: "200ms",
      slow: "300ms",
      slower: "500ms",
    },
    easing: {
      ease: "ease",
      in: "ease-in",
      out: "ease-out",
      inOut: "ease-in-out",
      linear: "linear",
      custom: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    },
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    dropdown: "1000",
    sticky: "1020",
    modal: "1050",
    popover: "1060",
    tooltip: "1070",
  },

  // Breakpoints (Mobile First)
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Opacity Scale
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },

  // Component Variants
  components: {
    button: {
      sizes: {
        sm: {
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          borderRadius: "0.375rem",
        },
        base: {
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
        },
        lg: {
          padding: "1rem 2rem",
          fontSize: "1.125rem",
          borderRadius: "0.5rem",
        },
      },
    },
    card: {
      padding: "1.5rem",
      borderRadius: "0.75rem",
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      borderRadius: "0.375rem",
      borderWidth: "1px",
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;

// Helper function to get color by path
export const getColor = (
  path: string,
  fallback: string = "#021c3e"
): string => {
  const keys = path.split(".");
  let value: any = themeConfig.colors;

  for (const key of keys) {
    value = value?.[key];
    if (!value) return fallback;
  }

  return value;
};
