"use client";
import "./styles.css";
import { useEffect } from "react";

export function Index() {
  useEffect(() => {
    // Get all the section references
    const sectionOne = document.querySelector(".item-1") as HTMLElement;
    const sectionTwo = document.querySelector(".item-2") as HTMLElement;
    const sectionThree = document.querySelector(".item-3") as HTMLElement;
    const sectionForth = document.querySelector(".item-4") as HTMLElement;
    const sectionFifth = document.querySelector(".item-5") as HTMLElement;

    // Calculate their individual height
    const sectionOneHeight = parseFloat(getComputedStyle(sectionOne).height);
    const sectionTwoHeight = parseFloat(getComputedStyle(sectionTwo).height);
    const sectionThreeHeight = parseFloat(
      getComputedStyle(sectionThree).height
    );
    const sectionFourthHeight = parseFloat(
      getComputedStyle(sectionForth).height
    );
    const sectionFifthHeight = parseFloat(
      getComputedStyle(sectionFifth).height
    );

    // Calculate the checkpoints where items need to be modified
    const checkPointOne = sectionOneHeight;
    const checkPointTwo = checkPointOne + sectionTwoHeight;
    const checkPointThree = checkPointTwo + sectionThreeHeight;
    const checkPointForth = checkPointThree + sectionFourthHeight;

    // Scroll logic
    const onScroll = () => {
      // Get the current scrollbar position
      const scrollBarPosition = window.pageYOffset || document.body.scrollTop;

      if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
        removeClass(sectionTwo, sectionThree);
      } else if (
        scrollBarPosition > checkPointOne &&
        scrollBarPosition <= checkPointTwo
      ) {
        addClass(sectionTwo, sectionThree, checkPointTwo);
        removeClass(sectionThree, sectionForth);
      } else if (
        scrollBarPosition > checkPointTwo &&
        scrollBarPosition <= checkPointThree
      ) {
        addClass(sectionThree, sectionForth, checkPointThree);
        removeClass(sectionForth, sectionFifth);
      } else if (
        scrollBarPosition > checkPointThree &&
        scrollBarPosition <= checkPointForth
      ) {
        addClass(sectionForth, sectionFifth, checkPointForth);
      }
    };

    const addClass = (
      elemOne: HTMLElement,
      elemTwo: HTMLElement,
      margin: number
    ) => {
      elemOne.classList.add("fixed");
      elemTwo.style.marginTop = `${margin}px`;
    };

    const removeClass = (elemOne: HTMLElement, elemTwo: HTMLElement) => {
      elemOne.classList.remove("fixed");
      elemTwo.style.marginTop = "0px";
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", onScroll, false);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <>
      <section className="item item-1">
        <i className="fa fa-simplybuilt" aria-hidden="true"></i>
        <div className="col-5">
          <a
            target="_blank"
            href="https://medium.com/@sanjeevy133/card-stack-scroll-effect-486cc3b55312"
          >
            <h1>Card Stack : Scroll Effect</h1>
          </a>
          <p>
            Simple card stacking like scroll effect with the help of vanilla.js
            . Easy to implement and can be extended to any number of component.{" "}
            <strong>
              Read the complete tutorial on medium hover over the heading.
            </strong>
          </p>
        </div>
      </section>

      <section className="item item-2">
        <div className="col-5">
          <a
            target="_blank"
            href="https://codepen.io/alexakasanjeev/pen/wMYBgE"
          >
            <h1>Circular Navbar</h1>
          </a>
          <p>
            Circular navbar, quite intersting inspired from material design is a
            perfect twist to incoprate inour website.{" "}
          </p>
        </div>
        <i className="fa fa-gg-circle" aria-hidden="true"></i>
      </section>

      <section className="item item-3">
        <i className="fa fa-css3" aria-hidden="true"></i>
        <div className="col-5">
          <a
            target="_blank"
            href="https://codepen.io/alexakasanjeev/pen/RPxGXY"
          >
            <h1>Line Break</h1>
          </a>
          <p>
            There is nothing special about a line break, checkout my version,
            which will add perfect touch of suprizing moment when user
            accidently scroll down through it.{" "}
          </p>
        </div>
      </section>

      <section className="item item-4">
        <div className="col-5">
          <a
            target="_blank"
            href="https://codepen.io/alexakasanjeev/pen/apmpEV"
          >
            <h1>Login Form</h1>
          </a>
          <p>
            A 3D login form design inspired from Glass material and Google
            material design.{" "}
          </p>
        </div>
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </section>

      <section className="item item-5">
        <i className="fa fa-bug" aria-hidden="true"></i>
        <div className="col-5">
          <h1>Section Footer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            consequat ipsum. Phasellus blandit, odio at placerat posuere, felis
            lectus posuere risus, nec congue nisl erat at turpis.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
