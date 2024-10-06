import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSection}>
        <div className={styles.subscribeSection}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles.subscribeInput}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <p>
            <span className={styles.currencyFlag}>
              <i className="fas fa-flag-usa"></i>
            </span>
            USD
          </p>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className={styles.linksSection}>
        <div>
          <h2>mettā muse</h2>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h2>FOLLOW US</h2>
          <div className={styles.socialIcons}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </div>
          <h2>mettā muse ACCEPTS</h2>
          <div className={styles.paymentIcons}>
            <img src="/images/gpay.png" alt="Google Pay" />
            <img src="/images/master.png" alt="MasterCard" />
            <img src="/images/pay.png" alt="Visa" />
            <img src="/images/amex.png" alt="American Express" />
            <img src="/images/apay.png" alt="Apple Pay" />
            <img src="/images/0pay.png" alt="PayPal" />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
