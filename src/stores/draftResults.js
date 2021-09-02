
const keepers = [
	{ name: "Jonathan Taylor", team: "Indianapolis Colts", position: "RB", cost: 26, owner_id: 1, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/7x3feJGBPDfGXr5VRs3sSg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08252021/32711.1.png" },
	{ name: "Darrell Henderson Jr.", team: "LA Rams", position: "RB", cost: 6, owner_id: 2, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/3MAX8W8e472Zu5RlPPqclw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/31902.png" },
	{ name: "Nick Chubb", team: "Cleveland Browns", position: "RB", cost: 16, owner_id: 3, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/1awOUD54SRsBSmOHyeGbBw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/10012020/31005.png" },
	{ name: "", team: "", position: "", owner_id: 4, cost: 0, keeper: true },
	{ name: "DK Metcalf", team: "Seattle Seahawks", position: "WR", owner_id: 5, cost: 13, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/MJQgtq2ICFasINQi78WgKw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08262021/31896.png" },
	{ name: "Justin Herbert", team: "LA Chargers", position: "QB", owner_id: 6, cost: 5, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/Qf9KrucaQ1KK3fFnmkZNEQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/32676.png" },
	{ name: "Darren Waller", team: "Las Vegas Raiders", position: "TE", owner_id: 7, cost: 6, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/_LvPIU4zAl8jQAETjFLmSg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08212021/28592.png"},
	{ name: "CeeDee Lamb", team: "Dallas Cowboys", position: "WR", owner_id: 8, cost: 9, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/c0uxOY5c7c9iDP0UfTT7qg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/32687.png" },
	{ name: "Lamar Jackson", team: "Baltimore Ravens", position: "QB", owner_id: 9, cost: 11, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/0uIIvqc3ia_ysnVhCaamYQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08192021/31002.png" },
	{ name: "T.J. Hockenson", team: "Detroit Lions", position: "TE", owner_id: 10, cost: 6, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/MVsrba40zauEI5wcRMJIFQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08202021/31840.png" },
];

const round1 = [
{ name: "Christian McCaffrey", team: "Car", position: "RB", cost: 60, owner_id:	3 },
{ name: "Patrick Mahomes", team: "KC", position: "QB", cost: 26, owner_id:	10 },
{ name: "Stefon Diggs", team: "Buf", position: "WR", cost: 43, owner_id:	1 },
{ name: "Chase Claypool", team: "Pit", position: "WR", cost: 15, owner_id:	7 },
{ name: "Josh Allen", team: "Buf", position: "QB", cost: 33, owner_id:	1 },
{ name: "Derrick Henry", team: "Ten", position: "RB", cost: 53, owner_id:	6 },
{ name: "Alvin Kamara", team: "NO", position: "RB", cost: 56, owner_id:	4 },
{ name: "Ezekiel Elliott", team: "Dal", position: "RB", cost: 51, owner_id:	9 },
{ name: "Dalvin Cook", team: "Min", position: "RB", cost: 64, owner_id:	5 },
{ name: "Aaron Jones", team: "GB", position: "RB", cost: 54, owner_id:	8 },
]

const round2 = [
  { name: "Davante Adams", team: "GB", position: "WR", cost: 53, owner_id:	6 }, 
  { name: "Tyreek Hill", team: "KC", position: "WR", cost:	53,	owner_id: 4 },
  { name: "Austin Ekeler", team: "LAC", position: "RB", cost:	46,	owner_id: 7 },
  { name: "George Kittle", team: "SF", position: "TE", cost:	30,	owner_id: 9 },
  { name: "Saquon Barkley", team: "NYG", position: "RB", cost:	48,	owner_id: 10 },
  { name: "Travis Kelce", team: "KC", position: "TE", cost:	55,	owner_id: 3 },
  { name: "Joe Mixon", team: "Cin", position: "RB", cost:	32,	owner_id: 2 },
  { name: "Justin Jefferson", team: "Min", position: "WR", cost:	46,	owner_id: 6 },
  { name: "Antonio Gibson", team: "Was", position: "RB", cost:	48,	owner_id: 2 },
  { name: "Calvin Ridley", team: "Atl", position: "WR", cost:	39,	owner_id: 8 }
]

const members = [
	{ name: "Boom or Bimbust", id: 1 },
	{ name: "Steve's Jeans", id: 2 },
	{ name: "Real Steve", id: 3 },
	{ name: "David's Team", id: 4 },
	{ name: "The Dirty Wash Boyz", id: 5 },
	{ name: "Papa Bearskin Rug", id: 6 },
	{ name: "Shawzy", id: 7 },
	{ name: "Kittle Corn 🌽", id: 8 },
	{ name: "TheItalianStallions", id: 9 },
	{ name: "flat TURF rnd GURTH", id: 10 }
]


const round3 = [
  { name: "A.J. Brown", team: "Ten", "WR)	$35	Boom or Bimbust
  { name: "Chris Carson", team: "Sea", "RB)	$27	Kittle Corn 🌽
  { name: "Robert Woods", team: "LAR", "WR)	$17	Kittle Corn 🌽
  { name: "Josh Jacobs", team: "LV", "RB)	$10	The Dirty Wash Boyz
  { name: "DeAndre Hopkins", team: "Ari", "WR)	$45	Steve's Jeans
  { name: "Najee Harris", team: "Pit", "RB)	$48	The Dirty Wash Boyz
  { name: "Mike Evans", team: "TB", "WR)	$27	David's Team
  { name: "Matthew Stafford", team: "LAR", "QB)	$4	Real Steve
  { name: "Clyde Edwards-Helaire", team: "KC", "RB)	$33	TheItalianStallions
  { name: "Allen Robinson II", team: "Chi", "WR)	$17	flat TURF rnd GURTH
]

const round4 = [
  { name: "Keenan Allen", team: "LAC", "WR)	$25	TheItalianStallions
  { name: "Gus Edwards", team: "Bal", "RB)	$24	Shawzy
  { name: "Cooper Kupp", team: "LAR", "WR)	$17	Real Steve
  { name: "Adam Thielen", team: "Min", "WR)	$24	Real Steve
  { name: "Terry McLaurin", team: "Was", "WR)	$33	The Dirty Wash Boyz
  { name: "Tyler Lockett", team: "Sea", "WR)	$15	Shawzy
  { name: "David Montgomery", team: "Chi", "RB)	$30	David's Team
  { name: "D'Andre Swift", team: "Det", "RB)	$28	Boom or Bimbust
  { name: "Damien Harris", team: "NE", "RB)	$14	Shawzy
  { name: "James Robinson", team: "Jax", "RB)	$21	Papa Bearskin Rug
]

const round5 = [
  { name: "Marquez Valdes-Scantling", team: "GB", "WR)	$2	TheItalianStallions
  { name: "Chase Edmonds", team: "Ari", "RB)	$16	Real Steve
  { name: "Kyle Pitts", team: "Atl", "TE)	$16	The Dirty Wash Boyz
  { name: "Chris Godwin", team: "TB", "WR)	$22	flat TURF rnd GURTH
  { name: "Amari Cooper", team: "Dal", "WR)	$20	Steve's Jeans
  { name: "Dak Prescott", team: "Dal", "QB)	$4	Kittle Corn 🌽
  { name: "DJ Moore", team: "Car", "WR)	$12	Papa Bearskin Rug
  { name: "Younghoe Koo", team: "Atl", "K)	$2	flat TURF rnd GURTH
  { name: "Odell Beckham Jr.", team: "Cle", "WR)	$11	Boom or Bimbust
  { name: "Miles Sanders", team: "Phi", "RB)	$17	Kittle Corn 🌽
]

const round6 = [
  { name: "Kyler Murray", team: "Ari", "QB)	$13	Steve's Jeans
{ name: "Mark Andrews", team: "Bal", "TE)	$11	David's Team
{ name: "Ja'Marr Chase", team: "Cin", "WR)	$3	TheItalianStallions
{ name: "Tee Higgins", team: "Cin", "WR)	$4	Shawzy
{ name: "Leonard Fournette", team: "TB", "RB)	$1	David's Team
{ name: "Robby Anderson", team: "Car", "WR)	$2	Steve's Jeans
{ name: "Russell Wilson", team: "Sea", "QB)	$7	Shawzy
{ name: "Harrison Butker", team: "KC", "K)	$2	Kittle Corn 🌽
{ name: "Julio Jones", team: "Ten", "WR)	$12	David's Team
{ name: "Kareem Hunt", team: "Cle", "RB)	$12	flat TURF rnd GURTH
]

const round7 = [
  { name: "Brandon Aiyuk", team: "SF", "WR)	$8	Steve's Jeans
{ name: "Logan Thomas", team: "Was", "TE)	$5	Kittle Corn 🌽
{ name: "Corey Davis", team: "NYJ", "WR)	$2	Steve's Jeans
{ name: "Deebo Samuel", team: "SF", "WR)	$6	Kittle Corn 🌽
{ name: "Aaron Rodgers", team: "GB", "QB)	$7	Kittle Corn 🌽
{ name: "Antonio Brown", team: "TB", "WR)	$7	Shawzy
{ name: "Myles Gaskin", team: "Mia", "RB)	$11	Shawzy
{ name: "Tampa Bay", team: "TB", "DEF)	$3	Boom or Bimbust
{ name: "Jerry Jeudy", team: "Den", "WR)	$8	Boom or Bimbust
{ name: "AJ Dillon", team: "GB", "RB)	$5	flat TURF rnd GURTH

]

const round8 = [
  { name: "JuJu Smith-Schuster", team: "Pit", "WR)	$4	The Dirty Wash Boyz
{ name: "Baltimore", team: "Bal", "DEF)	$1	Kittle Corn 🌽
{ name: "Gerald Everett", team: "Sea", "TE)	$2	flat TURF rnd GURTH
{ name: "Tyler Boyd", team: "Cin", "WR)	$2	Kittle Corn 🌽
{ name: "Tom Brady", team: "TB", "QB)	$4	The Dirty Wash Boyz
{ name: "Jalen Hurts", team: "Phi", "QB)	$5	Shawzy
{ name: "Mike Davis", team: "Atl", "RB)	$23	Shawzy
{ name: "Tyler Bass", team: "Buf", "K)	$2	Steve's Jeans
{ name: "Diontae Johnson", team: "Pit", "WR)	$5	TheItalianStallions
{ name: "Kenny Golladay", team: "NYG", "WR)	$3	flat TURF rnd GURTH

]

const round9 = [
  { name: "Ronald Jones II", team: "TB", "RB)	$3	flat TURF rnd GURTH
{ name: "Javonte Williams", team: "Den", "RB)	$8	Kittle Corn 🌽
{ name: "Joe Burrow", team: "Cin", "QB)	$5	TheItalianStallions
{ name: "Michael Thomas", team: "NO", "WR)	$1	Steve's Jeans
{ name: "Melvin Gordon III", team: "Den", "RB)	$2	The Dirty Wash Boyz
{ name: "Courtland Sutton", team: "Den", "WR)	$2	Papa Bearskin Rug
{ name: "Marvin Jones Jr.", team: "Jax", "WR)	$3	TheItalianStallions
{ name: "Greg Zuerlein", team: "Dal", "K)	$1	Boom or Bimbust
{ name: "Justin Tucker", team: "Bal", "K)	$1	Shawzy
{ name: "Los Angeles", team: "LAR", "DEF)	$5	flat TURF rnd GURTH

]

const round10 = [
  { name: "Allen Lazard", team: "GB", "WR)	$1	Real Steve
{ name: "Noah Fant", team: "Den", "TE)	$5	Boom or Bimbust
{ name: "Robert Tonyan", team: "GB", "TE)	$6	flat TURF rnd GURTH
{ name: "Zack Moss", team: "Buf", "RB)	$2	Boom or Bimbust
{ name: "Ryan Tannehill", team: "Ten", "QB)	$1	David's Team
{ name: "Nick Folk", team: "NE", "K)	$1	The Dirty Wash Boyz
{ name: "Raheem Mostert", team: "SF", "RB)	$7	TheItalianStallions
{ name: "Jameis Winston", team: "NO", "QB)	$2	flat TURF rnd GURTH
{ name: "Jakobi Meyers", team: "NE", "WR)	$1	Shawzy
{ name: "Trey Sermon (SF - RB)	$3	flat TURF rnd GURTH
]

const round11 = [
  { name: "Tyler Higbee (LAR - TE)	$3	Steve's Jeans
{ name: "Dallas Goedert (Phi - TE)	$2	Kittle Corn 🌽
{ name: "Trey Lance (SF - QB)	$2	Steve's Jeans
{ name: "Daniel Carlson (LV - K)	$1	Steve's Jeans
{ name: "Washington (Was - DEF)	$1	David's Team
{ name: "Baker Mayfield (Cle - QB)	$1	The Dirty Wash Boyz
{ name: "Michael Gallup (Dal - WR)	$1	TheItalianStallions
{ name: "Jaylen Waddle (Mia - WR)	$1	Boom or Bimbust
{ name: "Buffalo (Buf - DEF)	$1	Shawzy
{ name: "Brandin Cooks (Hou - WR)	$2	TheItalianStallions

]

const round12 = [
  { name: "Ryan Fitzpatrick (Was - QB)	$1	Papa Bearskin Rug
{ name: "Darnell Mooney (Chi - WR)	$1	Steve's Jeans
{ name: "Ryan Succop (TB - K)	$1	David's Team
{ name: "Kansas City (KC - DEF)	$1	The Dirty Wash Boyz
{ name: "Sony Michel (LAR - RB)	$1	TheItalianStallions
{ name: "Trevor Lawrence (Jax - QB)	$1	Boom or Bimbust
{ name: "Justin Fields (Chi - QB)	$1	Real Steve
{ name: "Will Fuller V (Mia - WR)	$2	David's Team
{ name: "James Conner (Ari - RB)	$2	David's Team
{ name: "Mecole Hardman (KC - WR)	$1	The Dirty Wash Boyz

]

const round13 = [
  { name: "A.J. Green (Ari - WR)	$1	TheItalianStallions
{ name: "Mike Gesicki (Mia - TE)	$1	Boom or Bimbust
{ name: "Pittsburgh (Pit - DEF)	$1	Real Steve
{ name: "Jonnu Smith (NE - TE)	$1	Papa Bearskin Rug
{ name: "Matt Ryan (Atl - QB)	$1	David's Team
{ name: "Devin Singletary (Buf - RB)	$2	Boom or Bimbust
{ name: "Mike Williams (LAC - WR)	$1	Real Steve
{ name: "Kenyan Drake (LV - RB)	$1	Papa Bearskin Rug
{ name: "Irv Smith Jr. (Min - TE)	$1	David's Team
{ name: "Henry Ruggs III (LV - WR)	$1	The Dirty Wash Boyz
]

const round14 = [
  { name: "Marquez Callaway (NO - WR)	$1	Real Steve
  { name: "DeVonta Smith (Phi - WR)	$1	Papa Bearskin Rug
  { name: "San Francisco (SF - DEF)	$1	David's Team
  { name: "Rob Gronkowski (TB - TE)	$1	The Dirty Wash Boyz
  { name: "Rashaad Penny (Sea - RB)	$1	Real Steve
  { name: "Phillip Lindsay (Hou - RB)	$1	Papa Bearskin Rug
  { name: "Robbie Gould (SF - K)	$1	Real Steve
  { name: "Hunter Henry (NE - TE)	$1	Papa Bearskin Rug
  { name: "Evan Engram (NYG - TE)	$1	Real Steve
  { name: "Mason Crosby (GB - K)	$1	Papa Bearskin Rug
  { name: "Indianapolis (Ind - DEF)	$1	Papa Bearskin Rug
]



