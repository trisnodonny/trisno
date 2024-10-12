export default function Hero() {
  return (
    <section className="hero" data-section="hero">
      <div className="hero-wrapper">
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
          <div className="img-wrapper">
            <img className="img" src="https://placehold.co/400" alt="random" />
          </div>
        </div>
      </div>
    </section>
  );
}
