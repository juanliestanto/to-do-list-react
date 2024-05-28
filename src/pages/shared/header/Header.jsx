import avatar from "../../../assets/waskita.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand text-white fs-3" href="#">
          <img
            src={avatar}
            alt="icon"
            width={200}
            height={100}
            className="cursor-pointer bg-white"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto column-gap-4 fs-5">
            <li className="nav-item">
              <a
                className="nav-link text-primary"
                aria-current="page"
                href="home"
              >
                List
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-primary"
                aria-current="page"
                href="home"
              >
                Form Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
