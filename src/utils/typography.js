import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: "1.45",
  scaleRatio: 3,

  headerFontFamily: ["proxima-nova", "script"],
  headerColor: "#444",
  headerWeight: "800",

  bodyFontFamily: ["proxima-nova", "script"],
  bodyColor: "#333",
  bodyWeight: "100",

})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
