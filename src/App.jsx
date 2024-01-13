import star from "./assets/star.svg";
import search from "./assets/search.svg";
import reviews from "./data/reviews.json";

const total = reviews.length;
const stars = [5, 4, 3, 2, 1];

const numbersOfMatchingReviews = (rating) =>
  reviews.reduce((acc, review) => {
    if (review.rating === rating) {
      return acc + 1;
    }
    return acc;
  }, 0);

const totalStars = reviews.reduce((acc, review) => acc + review.rating, 0);

function App() {
  return (
    <div className="card">
      <header>
        <h2>What others think about the product</h2>
        <div className="summary">
          <div>
            <img src={star} alt="star icon" />
            <span>{(totalStars / total).toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })}</span>
          </div>
          <p>Average customer rating</p>
        </div>
      </header>

      <form className="search">
        <input
          type="search"
          name="review-search"
          id="review-search"
          placeholder="Search topics and reviews"
        />
        <button type="submit" aria-label="Run search">
          <img src={search} alt="search icon" />
        </button>
      </form>
      <div className="reviews">
        <p>
          <strong>Reviews</strong>
        </p>
        <div className="reviews-container">
          {stars.map((s) => (
            <div key={s.id} className="review">
              <div className="rating">
                <strong>{s}</strong>
                <img src={star} alt="star" width={25} height={25} />
              </div>
              <progress max={total} value={numbersOfMatchingReviews(s)}>
                {`${(numbersOfMatchingReviews(s) / total) * 100}%`}
              </progress>
              <p>{numbersOfMatchingReviews(s)}</p>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="btn">
        Write a review
      </button>
    </div>
  );
}

export default App;
