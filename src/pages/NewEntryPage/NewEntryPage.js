import "./NewEntryPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewEntryPage() {
  const nav = useNavigate();

  const handleNoteSubmit = async (event) => {
    event.preventDefault(); //target the elements' values in JSX (below)
    const title = event.target.title.value;
    const rating = event.target.rating.value;
    const date = event.target.date.value;
    const entry = event.target.entry.value; //POST request to our server + endpoint
    try {
      await axios.post(`http://localhost:8080/addEntry`, {
        title: title,
        rating: rating,
        date: date,
        entry: entry,
      });
      event.target.reset();
    } catch (err) {
      console.log(err);
    }
    nav("/");
  };
  return (
    <>
      <section className="new-entry">
        <h2 className="new-entry__heading">Add New Entry</h2>
        <form onSubmit={handleNoteSubmit} className="new-entry__form">
          <div className="new-entry__rating-container">
            <label className="new-entry__rate-label" htmlFor="title">
              Title
            </label>
            <input
              className="new-entry__rate-input"
              type="text"
              name="title"
              id="ratingInput"
              placeholder="Highlight of your day"
              required
            />
          </div>
          <div className="new-entry__rating-container">
            <label className="new-entry__rate-label" htmlFor="rating">
              Rate your day out of 5
            </label>
            <input
              className="new-entry__rate-input"
              type="text"
              name="rating"
              id="ratingInput"
              placeholder="5/5"
              required
            />
          </div>
          <div className="new-entry__rating-container">
            <label className="new-entry__rate-label" htmlFor="date">
              Date
            </label>
            <input
              className="new-entry__rate-input"
              type="date"
              name="date"
              id="ratingInput"
              placeholder="YYYY/MM/DD"
              required
            />
          </div>
          <div className="new-entry__entry-container">
            <label className="new-entry__entry-label" htmlFor="entry">
              Create New Entry
            </label>
            <textarea
              className="new-entry__entry-input"
              type="textarea"
              name="entry"
              id="entryInput"
              placeholder="How was your day today?"
              required
            />
          </div>
          <button type="submit" className="new-entry__post-btn">
            POST
          </button>
        </form>
      </section>
    </>
  );
}

export default NewEntryPage;
