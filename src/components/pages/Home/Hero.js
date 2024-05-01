import { Link } from "react-router-dom";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Seattle</h2>
          <p>
            Nestled in the heart of the city, our family-owned Mediterranean
            restaurant seamlessly blends time-honored recipes with contemporary
            flair, promising a culinary journey that tantalizes the senses.
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
