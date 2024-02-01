import "./NewEntryPage.scss";

function NewEntryPage() {
  return (
    <>
      <section className="new-entry">
        <h2 className="new-entry__heading">Add New Entry</h2>
        <form className="new-entry__form">
          <div className="new-entry__rating-container">
            <label className="new-entry__rate-label" htmlFor="rating">
              Rate your day out of 5
            </label>
            <input
              className="new-entry__rate-input"
              type="text"
              name="rating"
              id="ratingInput"
              placeholder="5"
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
          <button className="new-entry__post-btn">POST</button>
        </form>
      </section>
    </>
  );
}

export default NewEntryPage;
