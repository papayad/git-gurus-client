import "./EntryCard.scss";
import deleteIcon from "../../assets/icons/delete.png";

function EntryCard({ entryInfo }) {
  return (
    <>
      <article className="card">
        <div className="card__info-container">
          <div className="card__entry-rating">
            <h3 className="card__title">Entry Title</h3>
            <p className="card__rating">Rating: 5/5</p>
          </div>
          <p className="card__date">{entryInfo.date}</p>
          <p className="card__entry-text">{entryInfo.entry}</p>
        </div>
        <div className="card__icon">
          <img src={deleteIcon} alt="delete icon" className="card__delete-icon" />
        </div>
      </article>
    </>
  );
}

export default EntryCard;
