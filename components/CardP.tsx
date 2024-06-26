"use client";

import Image from "next/image";

import styles from "./style.module.scss";

const Card = ({ title, description, src, url, color, i }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2>{title}</h2>

        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>

            <span>
              <a href={url} target="_blank">
                See more
              </a>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image fill src={`/images/${src}`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
