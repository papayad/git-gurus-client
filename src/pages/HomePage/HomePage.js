import EntryCard from "../../components/EntryCard/EntryCard";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main className="main">
        <button className="main__new-entry-btn">
          <Link className="main__new-entry-link" to="/new-entry">
            + Add Entry
          </Link>
        </button>
        <h2 className="main__heading">Past Entries</h2>
        <EntryCard />
      </main>
    </>
  );
}

export default HomePage;
