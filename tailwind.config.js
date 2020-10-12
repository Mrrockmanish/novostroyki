module.exports = {
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1266px',
    },

    fontSize: {
      xs: '0.75rem',
      '13px': '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem'
    },

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'main': '#1E1F21',
      'second': '#515356',
      'primary': '#1C7CD6',
      'light': '#909497',
      'dark': '#3B454E',
      'red': '#F02E2E',
      'orange': '#FF9F2F',
      'purple': '#981CC4',
      'green': '#18BE6E',
      'border': '#DEE8EE',
      'inputs': '#F2F4F7',
      'icon': '#D0D6DA',
      'D6DCE0': '#D6DCE0',
      'F2F4F7': '#F2F4F7',

      'green-007': '#EFFAF5',
      'orange-007': '#FFF5EA',
      'purple-007': '#F4E8F9'
    },

    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      80: '5rem',
      50: '3.125rem',

      ...breakpoints(theme('screens')),
    }),

    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw'
    })

  },

  corePlugins: {
    float: false
  },

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
  
}
