import styles from ".././../../styles/TestimonialItem.module.css";

const TestimonialItem = ({ name, position, image, content }) => {
  return (
    <>
      <div
        className={`col-md-4 col-sm-6 col-xs-12 ${styles["testimonial-item"]}`}
      >
        <div className={styles["testimonial-content"]}>
          <img
            className={`img-responsive img-circle ${styles["img-responsive"]} ${styles["img-circle"]}`}
            src={image}
            alt={name}
          />
          <h5
            className={`font-700 mb-0 ${styles["font-700"]} ${styles["mb-0"]}`}
          >
            {name}
          </h5>
          <span
            className={`grey-color font-14px ${styles["grey-color"]} ${styles["font-14px"]}`}
          >
            {position}
          </span>
          <p
            className={`mt-20 line-height-26 font-16px ${styles["mt-20"]} ${styles["line-height-26"]} ${styles["font-16px"]}`}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
