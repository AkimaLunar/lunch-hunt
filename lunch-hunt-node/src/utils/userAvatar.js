function getUserColor() {
  const h = Math.floor(200 + Math.random() * 160);
  return `hsl(${h}, 100%, 67%)`;
}

module.exports = {
  getUserColor
}