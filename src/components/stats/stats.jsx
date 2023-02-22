import React, { useEffect, useState } from "react";
import classes from "./stats.module.css";
import { api } from "../../core/api";

const Stats = () => {
  const [youngestMember, setYoungestMember] = useState([]);
  const [oldestMember, setOldestMember] = useState([]);
  const [malesCount, setMalesCount] = useState([]);
  const [femalesCount, setFemalesCount] = useState([]);
  const [topFiveCountries, setTopFiveCountries] = useState([]);
  const [c1To500, setC1To500] = useState([]);
  const [c501To1000, setC501To1000] = useState([]);
  const [c1001To1500, setC1001To1500] = useState([]);
  const [c1501To2000, setC1501To2000] = useState([]);

  useEffect(() => {
    api
      .get("/stats/youngestmember")
      .then((res) => {
        setYoungestMember(res.data);
      })
      .catch((err) => console.log(`Can't fetch youngest member data - ${err}`));
    api
      .get("/stats/oldestmember")
      .then((res) => {
        setOldestMember(res.data);
      })
      .catch((err) => console.log(`Can't fetch oldest member data ${err}`));
    api
      .get("/stats/malescount")
      .then((res) => {
        setMalesCount(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch males count ${err}`));
    api
      .get("/stats/femalescount")
      .then((res) => {
        setFemalesCount(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch females count ${err}`));
    api
      .get("/stats/top5countries")
      .then((res) => {
        setTopFiveCountries(res.data);
      })
      .catch((err) => console.log(`Can't fetch top 5 countries ${err}`));
    api
      .get("/stats/1to500")
      .then((res) => {
        setC1To500(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch users with 1-500 friends ${err}`));
    api
      .get("/stats/501to1000")
      .then((res) => {
        setC501To1000(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch users with 501-1000 friends ${err}`));
    api
      .get("/stats/1001to1500")
      .then((res) => {
        setC1001To1500(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch users with 1001-1500 friends ${err}`));
    api
      .get("/stats/1501to2000")
      .then((res) => {
        setC1501To2000(Object.values(res.data._count)[0]);
      })
      .catch((err) => console.log(`Can't fetch users with 1501-2000 friends ${err}`));
  }, []);

  return (
    <div className={classes.Container}>
      <h1>Random stats for practice:</h1>
      <div className={classes.StatHolder}>
        <div className={classes.Comparison}>
          <div>Youngest member:</div>
          {youngestMember.map((el) => {
            return (
              <div className={classes.List} key={Math.random()}>
                {el.first_name} {el.last_name} born {el.date_of_birth.slice(0, 10)} from{" "}
                {el.country_of_origin}
              </div>
            );
          })}
        </div>
        <div className={classes.Comparison}>
          <div>Oldest member:</div>
          {oldestMember.map((el) => {
            return (
              <div className={classes.List} key={Math.random()}>
                {el.first_name} {el.last_name} born {el.date_of_birth.slice(0, 10)} from{" "}
                {el.country_of_origin}
              </div>
            );
          })}
        </div>
        <div className={classes.Comparison}>
          <div>Males count:</div>
          <div>{malesCount}</div>
        </div>
        <div className={classes.Comparison}>
          <div>Females count:</div>
          <div>{femalesCount}</div>
        </div>
        <div className={classes.Comparison}>
          <div className={classes.TopFive}>
            <div>Top 5 countries with most users:</div>
            {topFiveCountries.map((el, i) => {
              return (
                <p key={Math.random()}>
                  {i + 1}. place - {el.country_of_origin} with {Object.values(el._count)} users.
                </p>
              );
            })}
          </div>
        </div>
        <div className={classes.Comparison}>
          <div>No. of users with 1-500 friends:</div>
          <div>{c1To500}</div>
        </div>
        <div className={classes.Comparison}>
          <div>No. of users with 501-1000 friends:</div>
          <div>{c501To1000}</div>
        </div>
        <div className={classes.Comparison}>
          <div>No. of users with 1001-1500 friends:</div>
          <div>{c1001To1500}</div>
        </div>
        <div className={classes.Comparison}>
          <div>No. of users with 1501-2000 friends:</div>
          <div>{c1501To2000}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
