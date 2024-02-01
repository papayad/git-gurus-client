import "./EntryCard.scss";
import deleteIcon from "../../assets/icons/delete.png";

function EntryCard() {
  return (
    <>
      <article className="card">
        <div className="card__info-container">
          <div className="card__entry-rating">
            <h3 className="card__title">Entry 1</h3>
            <p className="card__rating">Rating: 5/5</p>
          </div>
          <p className="card__date">MM/DD/YYYY</p>
          <p className="card__entry-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet tempora
            laboriosam ad nihil doloribus, impedit ipsum minima, odio omnis ratione!
          </p>
        </div>
        <div className="card__icon">
          <img src={deleteIcon} alt="delete icon" className="card__delete-icon" />
        </div>
      </article>
    </>
  );
}

export default EntryCard;
