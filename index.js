function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    result = "This one is on me!"
  }
  else if (feet > 2000 && feet < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result
};

function ternaryCheckCity(city) {
  if (city === "NYC") {
    result = "Ok, sounds good."
  }
  return result
}
