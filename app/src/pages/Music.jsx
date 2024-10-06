import { useState } from "react";
export default function Music() {
  const options = [
    "Select",
    "Rock",
    "Pop",
    "Jazz",
    "R&B",
    "Country",
    "Easy Listening",
  ];
  const country = [
    "Keith Urban",
    "Dolly Parton",
    "Johnny Cash",
    "Willie Nelson",
    "Carrie Underwood",
    "Miranda Lambert",
    "Tim McGraw",
  ];
  const rock = [
    "Rolling Stones",
    "Led Zepplin",
    "AC/DC",
    "Red Hot Chili Peppers",
    "Nirvana",
    "Queen",
  ];
  const pop = [
    "Michael Jackson",
    "Taylor Swift",
    "Beyonce",
    "Billie Eilish",
    "Stevie Wonder",
    "Ed Sheeran",
    "David Bowie",
  ];
  const jazz = [
    "Miles Davis",
    "Louis Armstrong",
    "  John Coltrane",
    "  Charles Mingus",
    "  Thelonious Monk",
    "  Ella Fitzgerald",
    "Charlie Parker",
    " Duke Ellington",
    " Chet Baker",
    "Ornette Coleman",
  ];
  const rnb = [
    "Whitney Houston",
    "Marvin Gaye",
    "Prince",
    "Aretha Franklin",

    " The Temptations",
    "   Ray Charles",

    "  Al Green",
    "The Isley Brothers",
    "Otis Redding",

    "Boyz II Men",
  ];
  const easyListening = ["LOFi", "The Marias", ""];
  const [myValue, setMyValue] = useState(options[0]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <form>
        <h1>Choose your music</h1>
        <div class="mb-3">
          <label for="chose a genre" class="form-label">
            Choose a Genre
          </label>
          <select
            onChange={(e) => setMyValue(e.target.value)}
            defaultValue={myValue}
            class="form-select"
            aria-label="Default select example"
            // style={{ width: "50%" }}
          >
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          <h2>
            {" "}
            You selected{" "}
            <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
          </h2>
        </div>
        <div class="mb-3" style={{ display: "none" }}>
          <label for="Choose an Artist" class="form-label">
            Choose an Artist
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
}
