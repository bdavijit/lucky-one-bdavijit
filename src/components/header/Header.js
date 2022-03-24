import "./heder.css";

{
  /*  must add at index.html

<script
src="https://kit.fontawesome.com/39de285129.js"
crossorigin="anonymous"
></script> */
}


const Header = (props) => {
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
          <i className="fas fa-mask"></i>Ecom
        </a>

        <nav className="navbar">
          <a href="#header">home</a>
          <a href="#services">services</a>
          <a href="#about">about us</a>
          <a href="#contact">contact</a>
          <a href="#cart" style={{ background: "#2b2d42" }}>
            <button
              type="button"
              class="btn btn-danger position-relative"
              onclick="loadLocalStorageData()"
            >
              cart
              <span
                id="cart_Item_num"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
              >
                {props.count}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </a>
        </nav>

        <div id="menu-btn" class="fa-solid fa-bars fa-2x"></div>
      </header>
    </>
  );
};

export default Header;

