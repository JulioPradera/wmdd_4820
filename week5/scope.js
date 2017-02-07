function wizardsOnly (a, b) {
  let c = a + b
  function inner (c) {
    let d = c + a
    return d
  }
  console.log(c, a, b)
  console.log(d)
}

wizardsOnly(1, 2)
