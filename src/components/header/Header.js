import "./heder.css";



const Header = ({count}) => {
  window.onload = function () {
    const menu = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".header .navbar");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
  };

  return (
    <>
      <header className="header" id="header">
        <a href="#header" className="logo">
          <i className="fas fa-mask"></i>EarthTech
        </a>

        <nav className="navbar">
          <a href="#ProductBox">home</a>
          <a href="#ProductBox">services</a>
          <a href="#ProductBox">about us</a>
          <a href="#ProductBox">contact</a>
          <a href="#CardBox" style={{ background: "#120E43" }}>
            <button
              type="button"
              className="btn btn-danger position-relative"
              
            >
              cart
              <span
                id="cart_Item_num"
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
              >
                {count}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </a>
        </nav>

        <div id="menu-btn" className="fa-solid fa-bars fa-2x"></div>
      </header>
    </>
  );
};

export default Header;

