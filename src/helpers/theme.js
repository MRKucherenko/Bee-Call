export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 20,
    l: 24,
    xl: 32,
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
  },

  colors: {
    mainColor: '#2E2E2E',
    background: '#F7F8FA',
    cardBackground: '#FFFFFF',
    accent: '#4A90E2',
    accentDark: '#357ABD',
    text: '#1A1A1A',
    mutedText: '#6E6E6E',
    border: '#E0E0E0',
    hover: '#F0F0F0',
    danger: '#FF6B6B',
    white: '#FFFFFF',
    primary: '#4A90E2',
    darkRed: '#D13A3A',
    red: '#FF6B6B',  
  },

  radii: {
    none: '0',
    normal: '6px',
    large: '12px',
    round: '50%',
  },

  borders: {
    none: 'none',
    light: '1px solid #E0E0E0',
    bold: '2px solid #4A90E2',
  },

  shadows: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    buttonsShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    danger: '0px 2px 8px rgba(255, 107, 107, 0.4)',
  },
});