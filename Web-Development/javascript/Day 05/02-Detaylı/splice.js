const balls = ["⚽️","🏀","🏈","⚾️","🥎","🏐"];

balls.splice(0,2);

console.log(balls);
// (4) ['🏈', '⚾️', '🥎', '🏐']

const occupation = ["👩🏻‍🔧","🧑🏻‍💻","👨🏻‍🔬","👩🏻‍🚀","🧑🏻‍🚒","👩🏻‍🏭"];

occupation.splice(1,2,"👨🏻‍🏫");

console.log(occupation);
// (5) ['👩🏻‍🔧', '👨🏻‍🏫', '👩🏻‍🚀', '🧑🏻‍🚒', '👩🏻‍🏭']

const sports = ["🧗🏻‍♀️","🏇🏻","🏂🏻","🏌🏻‍♀️","🏄🏻","🏊🏻"];

sports.splice(0,1,"🏋🏻‍♀️");

console.log(sports);
// (6) ['🏋🏻‍♀️', '🏇🏻', '🏂🏻', '🏌🏻‍♀️', '🏄🏻', '🏊🏻']
