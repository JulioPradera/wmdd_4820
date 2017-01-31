function intRate (rate = 0.7) {
  return rate / 100
}

function withInterst (principal, months, interest = intRate()) {
  if (months <= 0) {
    return principal.toFixed(2)
  } else {
    return withInterst(principal + (principal * interest), months - 1, interest)
  }
}

console.log(withInterst(800, 12))
