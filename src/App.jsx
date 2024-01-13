import star from "./assets/star.svg";
import search from "./assets/search.svg";

function App() {
  return (
    <div className="card">
      <header>
        <h2>What others think about the product</h2>
        <div className="summary">
          <div>
            <img src={star} alt="star icon" />
            <span>4.8</span>
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
        <div className="reviews-container">106</div>
      </div>
      <button type="button" className="btn">
        Write a review
      </button>
    </div>
  );
}

export default App;
