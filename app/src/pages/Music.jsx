import { useState } from "react";
import { Link } from "react-router-dom";
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
  const easyListening = [
    "LoFi",
    "Burt Bacharach",
    "The Marias",
    "John Mayer",
    "Bon Iver",
    "Coldplay",
  ];
  const [myValue, setMyValue] = useState(options[0]);
  // State to control the second dropdown options
  const [artists, setArtists] = useState([]);
  // State to enable/disable the second dropdown
  const [isSecondDropdownEnabled, setIsSecondDropdownEnabled] = useState(false);
  //state to select artist
  const [selectedArtist, setSelectedArtist] = useState("");
  //controls the playlist visibility
  const [playlistCreated, setPlaylistCreated] = useState(false);

  //handle the first dropdown change
  const handleFirstDropDown = (e) => {
    const genre = e.target.value;
    setMyValue(genre);
    //enable second drop down
    if (genre != "Select") {
      setIsSecondDropdownEnabled(true);
      //update artists based on genre
      switch (genre) {
        case "Rock":
          setArtists(rock);
          break;
        case "Pop":
          setArtists(pop);
          break;
        case "Jazz":
          setArtists(jazz);
          break;
        case "R&B":
          setArtists(rnb);
          break;
        case "Country":
          setArtists(country);
          break;
        case "Easy Listening":
          setArtists(easyListening);
          break;
        default:
          setArtists([]);
          break;
      }
    } else {
      setIsSecondDropdownEnabled(false); // Disable if "Select" is chosen
    }
  };
  const handleSecondSelection = (e) => {
    const artist = e.target.value;
    //save the selected artist to state

    setSelectedArtist(artist);
    if (artist && myValue !== "Select") {
      setPlaylistCreated(true);
    }
  };

  return (
    <>
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
              id="firstDropDown"
              onChange={handleFirstDropDown}
              value={myValue}
              class="form-select"
              aria-label="Default select example"
              // style={{ width: "50%" }}
            >
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          </div>
          <div class="mb-3">
            <label for="Choose an Artist" class="form-label">
              Choose an Artist
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              disabled={!isSecondDropdownEnabled} //enable or disable dropdown
              //save selected artist
              onChange={handleSecondSelection}
            >
              <option selected>Open this select menu</option>
              {artists.map((artist, idx) => (
                <option key={idx}>{artist}</option>
              ))}
            </select>
          </div>

          {playlistCreated && (
            <h3 style={{ color: "green" }}>
              Playlist has been created! Let's Play!
            </h3>
          )}

          <Link to="/Game">
            <button type="submit" class="btn btn-primary">
              Next
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
