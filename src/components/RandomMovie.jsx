const nameList = [
  "hate",
  "avenger",
  "Love",
  "Life",
  "World",
  "Story",
  "Man",
  "Woman",
  "Time",
  "War",
  "Adventure",
  "Mystery",
  "Journey",
  "Hero",
  "Legend",
  "Death",
  "Dream",
  "Game",
  "Secret",
  "Island",
  "King",
  "Queen",
  "Star",
  "Night",
  "Office"
];

const RandomMovie = () => {
  // Randomly shuffle the items
  const shuffledItems = nameList.sort(() => 0.5 - Math.random());

  // Select a subset of 30 items
    const selectedItems = shuffledItems[Math.floor(Math.random()*nameList.length+1  )];
    
    return (selectedItems);
}

export default RandomMovie;
