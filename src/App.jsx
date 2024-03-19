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

function App() {
  return (
    <>
      <nav className="nav block--padding">
        <img className="nav__logo" src={Logo} alt="logo"></img>
        <button className="button__round--light">Try it Free</button>
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
          <div className="feature__top-bg bg"></div>
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
          <div className="feature__bot-bg bg"></div>
        </article>

        <article className="feature2">
          <section className="feature__section feature__section--light block--padding">
            <article className="section__content block--max-width">
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
          <div className="feature__top-bg bg"></div>
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
          <div className="feature__bot-bg bg"></div>
        </article>
      </main>

      <footer className="footer">
        <div className="footer__bg bg"></div>
        <article className="footer__container block--padding">
          <section className="footer__content">
            <div className="social__container">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
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
          <section></section>
        </article>
      </footer>
    </>
  );
}

export default App;
