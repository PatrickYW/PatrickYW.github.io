import { useState, useEffect } from "react";
import React from "react";
import ProjectList from "../projectList/projectList";
import "./projects.scss";
import { ArrowBack } from "@material-ui/icons";
import {
  featuredWorks,
  iosWorks,
  websiteWorks,
  desktopWorks,
  gameWorks,
} from "../../worksData";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [selectedWorkData, setWorkData] = useState(featuredWorks);
  const [selectedWorkDetail, setWorkDetail] = useState(iosWorks[0]);
  const [activeDetail, setActiveDetail] = useState(false);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "ios",
      title: "iOS Application",
    },
    {
      id: "web",
      title: "Website",
    },
    {
      id: "desktop",
      title: "Desktop Applications",
    },
    {
      id: "game",
      title: "Game Assets and Games",
    },
  ];

  const getWorkDetail = (d) => {
    if (d !== "") {
      const details = [];
      for (const [key, value] of Object.entries(d.describe)) {
        details.push(
          <React.Fragment key={key}>
            <h4>{key}</h4>
            {presentDetail(key, value)}
          </React.Fragment>
        );
      }
      return details;
    }
  };

  const presentDetail = (key, value) => {
    const lis = [];
    if (
      key === "Project Deliverable" ||
      key === "Purposes/Benefits" ||
      key === "Rules"
    ) {
      for (const [index, element] of value.entries()) {
        lis.push(<li key={index}>{element}</li>);
      }
      return <ul>{lis}</ul>;
    } else {
      return <span>{value}</span>;
    }
  };

  useEffect(() => {
    switch (selected) {
      case "featured":
        setWorkData(featuredWorks);
        break;
      case "ios":
        setWorkData(iosWorks);
        break;
      case "web":
        setWorkData(websiteWorks);
        break;
      case "desktop":
        setWorkData(desktopWorks);
        break;
      case "game":
        setWorkData(gameWorks);
        break;
      default:
        setSelected(featuredWorks);
    }
  }, [selected]);

  // useEffect(() => {
  //   console.log(selectedWorkData);
  // }, [selectedWorkData]);

  return (
    <div className={"projectsInfo " + (activeDetail && "active")} id="projectsInfo">
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <ul>
          {list.map((item) => (
            <ProjectList
              key={item.id}
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="container">
          {selectedWorkData.map((d) => (
            <div
              className="item"
              key={d.id}
              onClick={() => {
                if (d.url !== undefined) {
                  window.open(d.url);
                } else {
                  setWorkDetail(d);
                  setActiveDetail(true);
                }
              }}
            >
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="workDetail" id="workDetail">
        <div className="backBtn">
          <ArrowBack
            onClick={() => {
              setActiveDetail(false);
            }}
          />
        </div>
        <div className="carousel">
          <img src={selectedWorkDetail.img} alt="work cover"></img>
        </div>
        <div className="description">
          {getWorkDetail(selectedWorkDetail)}
        </div>
      </div>
    </div>
  );
}
