import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <div>
          
        </div>
        <div className="container">

          <Link to="/">
            <h1>Rahul's Fitness Club</h1>
          </Link>
          
          
        </div>

        <div>
        <hr
        style={{
          background:"red",
          color:"red",
          border:"red",
          height: '2px',
        }}
      />
        </div>
      </header>
    </div>
  );
}
