import '../styles/blocks/_star-rating.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const display = (star, rating) => {
  const classes = rating ? 'rating__star' : 'rating__star--empty';

  if (star - 0.5 === rating - 0) {
    return <FontAwesomeIcon icon={faStarHalfAlt} className={classes} />;
  }
  if (star <= rating) {
    return <FontAwesomeIcon icon={faStar} className={classes} />;
  }
  return <FontAwesomeIcon icon={faStarOutline} className={classes} />;
};

const StarRating = ({ rating, onChange }) => {
  const [currentRating, setRating] = useState(rating);
  const [displayRating, setDisplay] = useState(currentRating);

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

  const starDisplay = (star) => {
    const pos = ['left', 'right'];
    return (
      <div className={`rating__display-${star}`}>
        {display(star, displayRating || currentRating)}
        {pos.map((text, index) => (
          <label
            className={`rating__label rating__${text}`}
            htmlFor={`rating-${star}`}
          >
            <input
              className="rating__input"
              type="radio"
              name="rating"
              id={`rating-${star * 2 - (1 - index)}`}
              value={star - 0.5 * (1 - index)}
              checked={currentRating === star - 0.5 * (1 - index)}
              onChange={ratingChanged}
              onMouseEnter={() => changeDisplay(star - 0.5 * (1 - index))}
              onMouseLeave={() => changeDisplay(0)}
            />
          </label>
        ))}
      </div>
    );
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="add-rating-field">
      <div className="rating" form="rating">
        {stars.map((star) => starDisplay(star))}
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
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};
