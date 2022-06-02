import React from "react";
import logo from '../../public/images/logo.png';
import lhlIcon from '../../public/images/lhl.png';
import "./Application.scss";

export default function Application(props) {
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src={logo}
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src={lhlIcon}
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      </section>
    </main>
  );
}