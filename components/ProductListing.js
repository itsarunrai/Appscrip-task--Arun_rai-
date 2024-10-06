import React, { useState } from "react";
import styles from "../styles/ProductListing.module.css";
const ProductListing = () => {
  const [recommendedOpen, setRecommendedOpen] = useState(false);

  return (
    <div className={styles.productListingContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.filterHeader}>
          <span className={styles.filterCount}>3425 ITEMS</span>
          <a href="#" className={styles.hideFilter}>
            HIDE FILTER
          </a>
        </div>
        <div className={styles.filterGroup}>
          <input
            type="checkbox"
            id="customizable"
            className={styles.checkbox}
          />
          <label htmlFor="customizable" className={styles.filterLabel}>
            CUSTOMIZABLE
          </label>
        </div>
        <FilterSection
          title="IDEAL FOR"
          items={["All", "Men", "Women", "Baby & Kids"]}
        />
        <FilterSection title="OCCASION" items={["All"]} />
        <FilterSection title="WORK" items={["All"]} />
        <FilterSection title="FABRIC" items={["All"]} />
        <FilterSection title="SEGMENT" items={["All"]} />
        <FilterSection title="SUITABLE FOR" items={["All"]} />
        <FilterSection title="RAW MATERIALS" items={["All"]} />
        <FilterSection title="PATTERN" items={["All"]} />
      </aside>
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.recommendedText}>RECOMMENDED</span>
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={() => setRecommendedOpen(!recommendedOpen)}
            >
              RECOMMENDED
              <img
                src="/images/dropdown.png"
                alt="Dropdown Icon"
                className={styles.dropdownIcon}
              />
            </button>
            {recommendedOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>RECOMMENDED</li>
                <li className={styles.dropdownItem}>NEWEST FIRST</li>
                <li className={styles.dropdownItem}>POPULAR</li>
                <li className={styles.dropdownItem}>PRICE : HIGH TO LOW</li>
                <li className={styles.dropdownItem}>PRICE : LOW TO HIGH</li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.productGrid}>
          {Array(12)
            .fill()
            .map((_, index) => (
              <div key={index} className={styles.productCard}>
                <img
                  src={`/images/${index + 1}.jpeg`} // Use images from public/images/
                  alt={`Product Image ${index + 1}`}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>PRODUCT NAME</h3>
                <p className={styles.productDescription}>
                  Sign in to create an account to save pricing
                </p>
                <div className={styles.buttonContainer}>
                  <button className={styles.favoriteButton}>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

const FilterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown toggle

  return (
    <div className={styles.filterGroup}>
      <div className={styles.dropdown}>
        <button
          className={styles.dropdownButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <img
            src="/images/dropdown.png"
            alt="Dropdown Icon"
            className={styles.dropdownIcon}
          />
        </button>
        {isOpen && (
          <ul className={styles.dropdownMenu}>
            {items.map((item, index) => (
              <li key={index} className={styles.dropdownItem}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
