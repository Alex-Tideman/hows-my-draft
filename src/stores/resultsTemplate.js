import { members, draft } from './draftResults';

// [
// 	{ name: "Boom or Bimbust", id: 1 },
// 	{ name: "Steve's Jeans", id: 2 },
// 	{ name: "Real Steve", id: 3 },
// 	{ name: "David's Team", id: 4 },
// 	{ name: "The Dirty Wash Boyz", id: 5 },
// 	{ name: "Papa Bearskin Rug", id: 6 },
// 	{ name: "Shawzy", id: 7 },
// 	{ name: "CeeDee's TDs", id: 8 },
// 	{ name: "TheItalianStallions", id: 9 },
// 	{ name: "flat TURF rnd GURTH", id: 10 }
// ]

const template = {
  week: 1,
  owner_id: 1,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const bimby = {
  week: 1,
  owner_id: 1, 
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const carb = {
  week: 1,
  owner_id: 2,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const steve = {
  week: 1,
  owner_id: 3,
  starters: [
  { name: "",  position: "QB", points: 0 },
  { name: "",  position: "RB", points: 0 },
  { name: "",  position: "RB", points: 0 },
  { name: "",  position: "WR", points: 0 },
  { name: "",  position: "WR", points: 0 },
  { name: "",  position: "TE", points: 0 },
  { name: "",  position: "RB/WR", points: 0 },
  { name: "",  position: "K", points: 0 },
  { name: "",  position: "DEF", points: 0 },
]
}

const holl = {
  week: 1,
  owner_id: 4,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const gitar = {
  week: 1,
  owner_id: 5,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const al = {
  week: 1,
  owner_id: 6,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const shaw = {
  week: 1,
  owner_id: 7,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const hed = {
  week: 1,
  owner_id: 8,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const ike = {
  week: 1,
  owner_id: 9,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

const weinzy = {
  week: 1,
  owner_id: 10,
  starters: [
    { name: "",  position: "QB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "RB", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "WR", points: 0 },
    { name: "",  position: "TE", points: 0 },
    { name: "",  position: "RB/WR", points: 0 },
    { name: "",  position: "K", points: 0 },
    { name: "",  position: "DEF", points: 0 },
  ]
}

export const week1 = [bimby, carb, steve, holl, gitar, al, shaw, hed, ike, weinzy]