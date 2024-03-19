import { useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import ScreenMockups from "./assets/images/screen-mockups.svg";
import IconCommunities from "./assets/images/icon-communities.svg";
import IconMessages from "./assets/images/icon-messages.svg";
import ImgGrowTogether from "./assets/images/illustration-grow-together.svg";
import ImgFlowingConversations from "./assets/images/illustration-flowing-conversation.svg";
import ImgYourUsers from "./assets/images/illustration-your-users.svg";
import IconPhone from "./assets/images/icon-phone.svg";
import IconEmail from "./assets/images/icon-email.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  /* helper functions */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  /* handlers */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <nav className="nav block--padding">
        <img className="nav__logo" src={Logo} alt="logo"></img>
        <button className="button__round--light nav__button">
          Try it Free
        </button>
      </nav>

      <header className="header block--padding">
        <article className="header__content block--max-width">
          <h1 className="text--headings">
            Build The Community Your Fans Will Love
          </h1>
          <p className="header__p">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="button__round--dark">Get Started For Free</button>
        </article>

        <article className="header__hero-img-wrapper block--max-width">
          <img
            className="header__hero-img"
            src={ScreenMockups}
            alt="hero img"
          ></img>
        </article>

        <article className="header__summary block--max-width">
          <section className="summary__item">
            <img
              className="summary__img"
              src={IconCommunities}
              alt="icon communities"
            ></img>
            <div className="summary__num text--extra-bold">1.4k+</div>
            <p className="summary__title text--thin">Communities Formed</p>
          </section>

          <section className="summary__item">
            <img
              className="summary__img"
              src={IconMessages}
              alt="icon messages"
            ></img>
            <div className="summary__num text--extra-bold">2.7m+</div>
            <p className="summary__title text--thin">Messages Sent</p>
          </section>
        </article>
      </header>

      <main className="main">
        <article className="feature1">
          <div className="feature__top-bg-1 bg"></div>
          <section className="feature__section block--padding">
            <article className="section__content block--max-width">
              <hgroup className="section__hgroup">
                <h2 className="text--headings">Grow Together</h2>
                <div className="">
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </div>
              </hgroup>
              <div className="section__img-wrapper">
                <img
                  className="section__img"
                  src={ImgGrowTogether}
                  alt="img grow together"
                ></img>
              </div>
            </article>
          </section>
          <div className="feature__bot-bg-1 bg"></div>
        </article>

        <article className="feature2">
          <section className="feature__section feature__section--light block--padding">
            <article className="section__content section__content--flip block--max-width">
              <div className="section__img-wrapper">
                <img
                  className="section__img"
                  src={ImgFlowingConversations}
                  alt="img flowing conversations"
                ></img>
              </div>
              <hgroup className="section__hgroup">
                <h2 className="text--headings">Flowing Conversations</h2>
                <div className="">
                  You wouldn't paginate a conversation in real life, so why do
                  it online? Our threads have just-in-time loading for a more
                  natural flow.
                </div>
              </hgroup>
            </article>
          </section>
        </article>

        <article className="feature3">
          <div className="feature__top-bg-2 bg"></div>
          <section className="feature__section block--padding">
            <article className="section__content block--max-width">
              <hgroup className="section__hgroup">
                <h2 className="text--headings">Your Users</h2>
                <div className="">
                  It takes no time at all to integrate Huddle with your app's
                  authentication solution. This means, once signed in to your
                  app, your users can start chatting immediately.
                </div>
              </hgroup>
              <div className="section__img-wrapper">
                <img
                  className="section__img"
                  src={ImgYourUsers}
                  alt="img your userse"
                ></img>
              </div>
            </article>
          </section>
          <div className="feature__bot-bg-2 bg"></div>
        </article>

        <article className="cta block--padding">
          <h2 className="text--headings">Ready To Build Your Community?</h2>
          <button className="button__round--dark">Get Started For Free</button>
        </article>
      </main>

      <footer className="footer">
        <div className="footer__bg bg"></div>
        <article className="footer__container block--padding">
          <section className="footer__content">
            <img className="footer__logo" src={Logo} alt="footer logo"></img>

            <div className="footer__contact">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
              </p>
              <div className="contact__item">
                <img
                  className="contact__img"
                  src={IconPhone}
                  alt="phone icon"
                ></img>
                <p>Phone: +1-543-123-4567</p>
              </div>
              <div className="contact__item">
                <img
                  className="contact__img"
                  src={IconEmail}
                  alt="email icon"
                ></img>
                <p>example@huddle.com</p>
              </div>
            </div>

            <div className="social__container">
              <i className="fa-brands fa-square-facebook fa-2xl social__icon"></i>
              <i className="fa-brands fa-instagram fa-2xl social__icon"></i>
              <i className="fa-brands fa-square-twitter fa-2xl social__icon"></i>
            </div>

            <p className="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a href="https://github.com/exchyphen" target="_blank">
                exc
              </a>
              .
            </p>
          </section>

          <section className="newsletter__container">
            <hgroup className="newsletter__hgroup">
              <h3 className="newsletter__h3 ">newsletter</h3>
              <div>
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We’ll never send you spam or pass on your
                email address
              </div>
            </hgroup>
            <form className="email__container">
              <div className="input__container">
                <input
                  className={"email" + (error ? " email--error" : "")}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
                {error ? (
                  <p className="error-msg">Check your email please</p>
                ) : null}
              </div>
              <button
                className="email__button"
                type="submit"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </form>
          </section>
        </article>
      </footer>
    </>
  );
}

export default App;
