import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header class="header">
        <h1 class="header-title">日記を書こう</h1>
        <nav class="header-nav">
          <ul class="header-list">
            <li class="header-item">
              <Link to="/" class="link">
                投稿する
              </Link>
            </li>
            <li class="header-item">
              <Link to="/articles" class="link">
                投稿一覧
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <header class="site-header">
        <div class="wrapper site-header__wrapper">
          <a href="#" class="brand">
            日記を書こう
          </a>
          <nav class="nav">
            <button class="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul class="nav__wrapper">
              <li class="nav__item">
                <Link to="/" class="active">
                  投稿する
                </Link>
              </li>
              <li class="nav__item">
                <Link to="/articles" class="active">
                  投稿一覧
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
    </>
  );
}
export default Header;
