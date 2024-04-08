function simulateBets(initialProbability, maxBets) {
    let currentProbability = initialProbability;
    const results = [];
  
    for (let i = 0; i < maxBets; i++) {
      // Decide to bet if the probability is greater than a 50% chance
      const willBet = currentProbability > 0.5;
      
      // Simulate the outcome of the bet (true for win, false for loss)
      const didWin = Math.random() < currentProbability;
      
      // Record the outcome
      results.push({ bet: i + 1, willBet, didWin, probability: currentProbability });
      
      // Adjust the probability for the next bet based on the outcome
  if (didWin) {
      // Increase probability by up to 5% if the bet was won
      currentProbability += Math.random() * 0.05;
  } else {
      // Decrease probability by up to 5% if the bet was lost
      currentProbability -= Math.random() * 0.05;
  }
  currentProbability = Math.min(Math.max(currentProbability, 0), 1); // Keep within 0 and 1
  
    }
  
    return results;
  }
  
  const initialProbability = 0.55; // Starting with a 55% chance of winning
  const maxBets = 10; // Simulate 10 bets
  const betResults = simulateBets(initialProbability, maxBets);
  
  console.log("Bet outcomes:", betResults);

  
  
  
  
  
  
  
  