import { useState } from "react";
import { Link } from "react-router-dom";
export default function Music() {
  const options = ["Rock", "Pop", "Jazz", "R&B", "Country", "Easy Listening"];
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
  const reccomendedPlaylist = [
    "Relaxation",
    "Workout",
    "Acoustic",
    "Classical",
    "Reggaton",
    "Chill Pop",
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
  //controls the message displayed for reccommended playlist
  const [recPlaylist, setrecPlaylist] = useState(false);

  //handle the first dropdown change
  const handleFirstDropDown = (e) => {
    const genre = e.target.value;
    setMyValue(genre);
    //enable second drop down
    if (genre != "Open this select menu") {
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
    if (artist && myValue !== "Open this select menu") {
      setPlaylistCreated(true);
    }
  };
  const handleThirdSelection = (e) => {
    const playlist = e.target.value;
    // setrecPlaylist(playlist);
    if (playlist !== "Open this select menu") {
      setrecPlaylist(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   height: "5vh",
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
              <option selected>Open this select menu</option>
              {options.map((opt, idx) => (
                <option key={idx}>{opt}</option>
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
            <>
              <h3 style={{ color: "green" }}>Playlist has been created!</h3>
              <p>Average Max BPM for this workout 150</p>
            </>
          )}
          or
          <div class="mb-3">
            <label for="recPlaylsit" class="form-label">
              Recommended Playlist
            </label>
            <select
              id="recommendedPlaylist"
              class="form-select"
              aria-label="Default select example"
              onChange={handleThirdSelection}
              // style={{ width: "50%" }}
            >
              <option selected>Open this select menu</option>
              {reccomendedPlaylist.map((playlist, idx) => (
                <option key={idx}>{playlist}</option>
              ))}
            </select>
          </div>
          {recPlaylist && (
            <>
              <h3 style={{ color: "green" }}>Playlist has been created!</h3>
              <p>Average Max BPM for this workout 150</p>
            </>
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
