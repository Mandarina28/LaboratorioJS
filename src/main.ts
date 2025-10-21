import "./style.css";

interface MusicGroup {
    name: string;
    founded: number;
    active: boolean;
    genre: string;
}

enum Genre {
    PopRock = "Pop Rock",
    Rock = "Rock",
    HardRock = "Hard Rock",
    Clasica = "Clasica"
}

const beatles: MusicGroup = 
{
    name: "Beatles",
    founded: 1960,
    active: true,
    genre: Genre.PopRock
}

const queen: MusicGroup = 
{
    name: "Queen",
    founded: 1970,
    active: false,
    genre: Genre.Rock
}

const acdc: MusicGroup = 
{
    name: "AC DC",
    founded: 1973,
    active: true,
    genre: Genre.HardRock
}

const beethoven: MusicGroup = 
{
    name: "Ludwig van Beethoven",
    founded: 1770,
    active: false,
    genre: Genre.Clasica
}

const rolling: MusicGroup = 
{
    name: "The Rolling Stones",
    founded: 1962,
    active: true,
    genre: Genre.Rock
}
console.clear();
console.log("%c" + beatles.name, "font-weight:bold; font-size:16px; background:green", beatles)
console.log("%c" + queen.name, "font-weight:bold; font-size:16px; background:green", queen)
console.log("%c" + acdc.name, "font-weight:bold; font-size:16px; background:green", acdc)
console.log("%c" + beethoven.name, "font-weight:bold; font-size:16px; background:green", beethoven)
console.log("%c" + rolling.name, "font-weight:bold; font-size:16px; background:green", rolling)