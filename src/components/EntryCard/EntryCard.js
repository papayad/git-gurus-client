import "./EntryCard.scss";
import deleteIcon from "../../assets/icons/delete.png";

function EntryCard({ key, entryInfo, handleDeleteClick }) {
  const fun = (limit) => {
    let s = "";
    if (limit < 1) {
      s = "☹️";
    } else {
      for (let i = 0; i < (limit > 5 ? 5 : limit); i++) {
        s += "⭐";
      }
    }
    return s;
  };

  return (
    <>
      <article className="card">
        <div className="card__info-container">
          <div className="card__entry-rating">
            <h3 className="card__title">{entryInfo.title}</h3>
            <p className="card__rating">{fun(entryInfo.rating)} </p>
          </div>
          <p className="card__date">{entryInfo.date}</p>
          <p className="card__entry-text">{entryInfo.entry}</p>
        </div>
        <div className="card__icon">
          <img
            onClick={() => handleDeleteClick(entryInfo.id)}
            src={deleteIcon}
            alt="delete icon"
            className="card__delete-icon"
          />
        </div>
      </article>
    </>
  );
}

export default EntryCard;
