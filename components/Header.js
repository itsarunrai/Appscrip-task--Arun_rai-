import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          <i className={`fa fa-th-large ${styles.icon}`}></i>
          <span className={styles.logoText}>Lorem ipsum dolor</span>
        </div>
        <div className={styles.logoContainer}>
          <i className={`fa fa-th-large ${styles.icon}`}></i>
          <span className={styles.logoText}>Lorem ipsum dolor</span>
        </div>
        <div className={styles.logoContainer}>
          <i className={`fa fa-th-large ${styles.icon}`}></i>
          <span className={styles.logoText}>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <img src="/images/logo.png" alt="Logo" className={styles.logoImage} />
        <div className={styles.logoTitle}>LOGO</div>
        <div className={styles.iconContainer}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          <i className="fa fa-user" aria-hidden="true"></i>
          <div className={styles.languageSelector}>
            <span>ENG</span>
            <div className={styles.dropdown}>
              <span>HINDI</span>
              <span>TELUGU</span>
              <span>BIHARI</span>
              <span>MAITHILI</span>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <a href="#" className={styles.navLink}>
          SHOP
        </a>
        <a href="#" className={styles.navLink}>
          SKILLS
        </a>
        <a href="#" className={styles.navLink}>
          STORIES
        </a>
        <a href="#" className={styles.navLink}>
          ABOUT
        </a>
        <a href="#" className={styles.navLink}>
          CONTACT US
        </a>
      </nav>
    </header>
  );
};

export default Header;
