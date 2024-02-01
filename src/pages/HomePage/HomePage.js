import EntryCard from "../../components/EntryCard/EntryCard";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [notesData, setNotesData] = useState([]);
  //localhost:8080/notes is the url + endpoint we are trying to get data from!
  const getNotes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getEntry`);
      console.log(response.data);
      setNotesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  console.log(notesData);
  notesData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleDeleteClick = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`http://localhost:8080/${id}`);
      console.log(response.data);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="main">
        <Link className="main__new-entry-link" to="/addEntry">
          <button className="main__new-entry-btn">+</button>
        </Link>
        <h2 className="main__heading">Past Entries</h2>
        {!notesData.length ? (
          <p>No Entries</p>
        ) : (
          notesData.map((note, index) => {
            return (
              <EntryCard
                // key={index}
                entryInfo={note}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        )}
      </main>
      <footer>
        <p>© Git Gurus</p>
      </footer>
    </>
  );
}

export default HomePage;
