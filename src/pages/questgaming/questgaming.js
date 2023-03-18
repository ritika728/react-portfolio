import React from "react";
import "./style.css";
import "../home/style.css"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  quest_about,
  meta,
  worktimeline,
  skills,
  services,
  eventtimeline
} from "../../content_option";

export const QuestGaming = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Quest Gaming</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
            <div className="quest_info">
              <p>{quest_about.aboutme}</p>
            </div>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Events Conducted</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {eventtimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      {/* <td>{data.where}</td> */}
                      <td>  <a href={data.where} target='_blank'>Click Here for more </a></td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
        <a href="https://discord.gg/ArE4gnjvgq" target="_blank" className="text_2 quest_discord">
                    <div id="button_h" className="ac_btn btn ">
                      JOIN OUR DISCORD COMMUNITY
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
