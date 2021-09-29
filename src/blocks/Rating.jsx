import '../styles/blocks/_rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const Rating = () => (
  <>
    <div className="add-rating-field">
      <div className="rating" form="rating">
        <FontAwesomeIcon
          icon={faStarOutline}
          className="rating__display-1 rating__outline"
        />
        <label className="rating__label rating__block-1" htmlFor="rating-1">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-1"
            value="1"
          />
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="rating__right rating__half"
          />
        </label>

        <label className="rating__label rating__block-2" htmlFor="rating-2">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-2"
            value="2"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="rating__left rating__star"
          />
        </label>
        <FontAwesomeIcon
          icon={faStarOutline}
          className="rating__display-2 rating__outline"
        />
        <label className="rating__label rating__block-3" htmlFor="rating-3">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-3"
            value="3"
          />
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="rating__right rating__half"
          />
        </label>
        <label className="rating__label rating__block-4" htmlFor="rating-4">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-4"
            value="4"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="rating__left rating__star"
          />
        </label>
        <FontAwesomeIcon
          icon={faStarOutline}
          className="rating__display-3 rating__outline"
        />
        <label className="rating__label rating__block-5" htmlFor="rating-5">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-5"
            value="5"
          />
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="rating__right rating__half"
          />
        </label>
        <label className="rating__label rating__block-6" htmlFor="rating-6">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-6"
            value="6"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="rating__left rating__star"
          />
        </label>
        <FontAwesomeIcon
          icon={faStarOutline}
          className="rating__display-4 rating__outline"
        />
        <label className="rating__label rating__block-7" htmlFor="rating-7">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-7"
            value="7"
          />
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="rating__right rating__half"
          />
        </label>
        <label className="rating__label rating__block-8" htmlFor="rating-8">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-8"
            value="8"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="rating__left rating__star"
          />
        </label>
        <FontAwesomeIcon
          icon={faStarOutline}
          className="rating__display-5 rating__outline"
        />
        <label className="rating__label rating__block-9" htmlFor="rating-9">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-9"
            value="9"
          />
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="rating__right rating__half"
          />
        </label>
        <label className="rating__label rating__block-10" htmlFor="rating-10">
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id="rating-10"
            value="10"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="rating__left rating__star"
          />
        </label>
      </div>
    </div>
  </>
);

export default Rating;
