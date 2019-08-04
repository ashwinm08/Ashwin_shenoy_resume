import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>An analytical entry-level software developer with deep expertise in JavaScript and HTML5 technologies possess almost 3 years hands on experience.Presently working as a seniour systems engineer in infosys</p>
                    <p>Proficient in JavaScript, ECMA Script, HTML, CSS.Experience on working with React, Redux and other frameworks in official and personal projects.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <p>Experienced in TDD workflow using Jest, Enzyme.Npm Scripts for automation, Babel as transpiler, ES6 Modules, Webpack as bundler and devServer, ESLint for linting.</p>
                    <p>Experienced in Git, version control tools usage and jenks CICD pipeline. Capable and enthusiastic on picking up new technologies and new tools with minimum learning curve.</p>
                    <p>Well versed with React lifecycle methods, higher order functions, creating reusable components and JSX. Translating designs and Zeplin wireframes into high-quality code.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>presently working for a project to develop UI for 50 states using react,html,css,re technologies and jenkins,git,JIRA tools</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
