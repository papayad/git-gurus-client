import EntryCard from "../../components/EntryCard/EntryCard";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <main className="main">
        <h2 className="main__heading">Past Entries</h2>
        <EntryCard />
      </main>
    </>
  );
}

export default HomePage;
