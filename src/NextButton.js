import React from "react";

const NextButton = (props) => {

   

  return (
    <div>
      <a
        className="carousel-control-next"
        href="#carousel_1"
        role="button"
        data-slide="next"
      >
        <span className="carousel_arrow" aria-hidden="true">
          <i class="fas fa-angle-right rightangle carousel-control-next-icon" />
        </span>
        <span className="sr-only">{props.next}</span>
      </a>
    </div>
  );
};

export default NextButton;
