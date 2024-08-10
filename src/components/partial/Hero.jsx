export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="title">
            Frontend
            <br />
            Developer.
          </h1>
          <span className="desc">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </span>
          <ul className="detail">
            <li>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </li>
            <li>
              Proven experience building successful products for clients across
              several countries.
            </li>
          </ul>
        </div>
        <div className="hero-img">
          <img
            className="img"
            src="https://cdn.dribbble.com/users/1338391/screenshots/17547297/media/87cde54877f594d7e40ff90094adc782.jpg?resize=400x300&vertical=center"
            alt="random"
          />
        </div>
      </div>
    </section>
  );
}
