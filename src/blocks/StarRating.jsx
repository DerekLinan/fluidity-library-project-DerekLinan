import '../styles/blocks/_star-rating.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

function display(star, rating) {
  const classes = rating ? 'rating__star' : 'rating__star--empty';

  if (star - 0.5 === rating - 0) {
    return <FontAwesomeIcon icon={faStarHalfAlt} className={classes} />;
  }
  if (star <= rating)
    return <FontAwesomeIcon icon={faStar} className={classes} />;
  return <FontAwesomeIcon icon={faStarOutline} className={classes} />;
}

const StarRating = (props) => {
  const { rating, onChange } = props;
  const [currentRating, setRating] = useState(rating);
  const [displayRating, setDisplay] = useState(currentRating);

  useEffect(() => {}, [currentRating]);

  useEffect(() => {
    setRating(rating);
  }, [rating]);

  const ratingChanged = (e) => {
    if (onChange) {
      setRating(e.target.value);
      onChange(e);
    }
  };

  const changeDisplay = (val) => {
    if (onChange) {
      setDisplay(val);
    }
  };

  return (
    <div className="add-rating-field">
      <div className="rating" form="rating">
        <div className="rating__display-1">
          {display(1, displayRating || currentRating)}
          <label className="rating__label rating__left" htmlFor="rating-1">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-1"
              value="0.5"
              checked={currentRating === '0.5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(0.5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
          <label className="rating__label rating__right" htmlFor="rating-2">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-2"
              value="1"
              checked={currentRating === '1'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(1)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        </div>

        <div className="rating__display-2">
          {display(2, displayRating || currentRating)}
          <label className="rating__label rating__left" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-3"
              value="1.5"
              checked={currentRating === '1.5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(1.5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
          <label className="rating__label rating__right" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-4"
              value="2"
              checked={currentRating === '2'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(2)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        </div>

        <div className="rating__display-3">
          {display(3, displayRating || currentRating)}
          <label className="rating__label rating__left" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-5"
              value="2.5"
              checked={currentRating === '2.5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(2.5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
          <label className="rating__label rating__right" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-6"
              value="3"
              checked={currentRating === '3'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(3)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        </div>

        <div className="rating__display-4">
          {display(4, displayRating || currentRating)}
          <label className="rating__label rating__left" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-7"
              value="3.5"
              checked={currentRating === '3.5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(3.5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
          <label className="rating__label rating__right" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-8"
              value="4"
              checked={currentRating === '4'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(4)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        </div>

        <div className="rating__display-5">
          {display(5, displayRating || currentRating)}
          <label className="rating__label rating__left" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-9"
              value="4.5"
              checked={currentRating === '4.5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(4.5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
          <label className="rating__label rating__right" htmlFor="rating">
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id="rating-10"
              value="5"
              checked={currentRating === '5'}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(5)}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StarRating;

StarRating.defaultProps = {
  rating: 0,
  onChange: null,
};

StarRating.propTypes = {
  rating: PropTypes.number,
  onChange: PropTypes.func,
};
