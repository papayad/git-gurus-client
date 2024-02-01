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
  return (
    <>
      <main className="main">
        <button className="main__new-entry-btn">
          <Link className="main__new-entry-link" to="/addEntry">
            + Add Entry
          </Link>
        </button>
        <h2 className="main__heading">Past Entries</h2>
        {notesData.map((note) => {
          return <EntryCard entryInfo={note} />;
        })}
      </main>
    </>
  );
}

export default HomePage;
