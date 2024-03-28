'use client'

const Theme = {
  border: {
    small_radius: '0.5rem',
    regular_radius: '1.875rem'
  },
  shadow: {
    box_shadow: '2px 2px 6px rgba(68, 68, 68, 0.2)'
  },
  font: {
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      small: '0.87rem',
      medium: '2rem',
      large: '3rem',
      xlarge: '4rem',
      xxlarge: '5.5rem',
      huge: '6rem'
    }
  },
  colors: {
    white: '#FFF',
    black: '#000',
    red: '#E40F0F',
    light_pink: 'rgba(223, 134, 134, 0.04)',
    pink: '#DF8686',
    light_gray: '#EEE',
    gray: '#747474',
    medium_gray: '#D5D5D5',
    dark_gray: '#1D1D1D'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '5rem',
    xxlarge: '6rem',
    huge: '8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.2s'
  }
}

export default Theme
