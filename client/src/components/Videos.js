import videos from "../data";
import { Link } from "react-router-dom";
export function Videos() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "auto" }}>
      {videos.map((item) => {
        return (
          <div
            style={{
              border: "1px solid grey",
              margin: "1rem",
              width: "280px",
            }}
          >
            <Link to={`/videos/${item.id}`}>
              <p>the id of this is {item.id}</p>
              <img src={item.thumbnail} alt="" />
              <div>
                <h4> {item.name}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
