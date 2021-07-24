import { data } from "../data";
import { Link } from "react-router-dom";
export function Videos() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "auto" }}>
      {data.map((item) => {
        return (
          <div
            style={{
              border: "1px solid grey",
              margin: "1rem",
              width: "280px",
            }}
          >
            <Link to="/">
              <img src={`${item.thumbnail}`} alt="" />

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
