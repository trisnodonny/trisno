import { Link } from "react-router-dom";

export default function Show() {
  return (
    <section className="show" data-section="show">
      <div className="show-wrapper">
        <div className="box-wrapper">
          <div className="box">
            <div className="title">Lorem, ipsum.</div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              libero accusamus, reprehenderit voluptas deserunt repellat
              dignissimos veritatis quia unde error?
            </div>
            <div className="cta-button">
              <Link>See my work</Link>
            </div>
          </div>
          <div className="box">
            <div className="title">Lorem, ipsum.</div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              libero accusamus, reprehenderit voluptas deserunt repellat
              dignissimos veritatis quia unde error?
            </div>
            <div className="cta-button">
              <Link>My Résumé</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
