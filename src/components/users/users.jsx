import React, { useEffect, useState } from "react";
import classes from "./users.module.css";
import { api } from "../../core/api";
import { userActions } from "../../redux/user-slice";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.userList);
  const [url, setUrl] = useState("/users");

  useEffect(() => {
    console.log(url);
    api
      .get(`${url}`)
      .then((res) => {
        dispatch(userActions.updateUserList(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(`Get req - ${err}`));
  }, [dispatch, url]);

  const deleteReq = (id) => {
    if (window.confirm("Do you really want to delete the user? 🤨")) {
      api
        .delete(`/users/${id}`)
        .then((res) => {
          console.log(res.data);
          postMessage("User has been successfully deleted 😊");
        })
        .catch((err) => console.log(`Delete req error - ${err}`));
    } else return;
  };

  return (
    <div className={classes.Table}>
      <div className={classes.Column1}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users-desc")}>
            &#8595;
          </div>
          <h1>ID</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.id}
            </div>
          );
        })}
      </div>
      <div className={classes.Column2}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/username")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/username-desc")}>
            &#8595;
          </div>
          <h1>Username</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.username}
            </div>
          );
        })}
      </div>
      <div className={classes.Column3}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/firstname")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/firstname-desc")}>
            &#8595;
          </div>
          <h1>First name</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.first_name}
            </div>
          );
        })}
      </div>
      <div className={classes.Column4}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/lastname")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/lastname-desc")}>
            &#8595;
          </div>
          <h1>Last name</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.last_name}
            </div>
          );
        })}
      </div>
      <div className={classes.Column5}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/email")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/email-desc")}>
            &#8595;
          </div>
          <h1>Email</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.email}
            </div>
          );
        })}
      </div>
      <div className={classes.Column6}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/gender")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/gender-desc")}>
            &#8595;
          </div>
          <h1>Gender</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.gender}
            </div>
          );
        })}
      </div>
      <div className={classes.Column7}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/countryoforigin")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/countryoforigin-desc")}>
            &#8595;
          </div>
          <h1>Country of origin</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.country_of_origin}
            </div>
          );
        })}
      </div>
      <div className={classes.Column8}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/createdat")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/createdat-desc")}>
            &#8595;
          </div>
          <h1>Created at</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.created_at.slice(0, 10)}
            </div>
          );
        })}
      </div>
      <div className={classes.Column9}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/dateofbirth")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/dateofbirth-desc")}>
            &#8595;
          </div>
          <h1>Date of birth</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.date_of_birth.slice(0, 10)}
            </div>
          );
        })}
      </div>
      <div className={classes.Column10}>
        <div className={classes.ArrowContainer}>
          <div className={classes.Arrow} onClick={() => setUrl("/users/numberoffriends")}>
            &#8593;
          </div>
          <div className={classes.Arrow} onClick={() => setUrl("/users/numberoffriends-desc")}>
            &#8595;
          </div>
          <h1>Number of friends</h1>
        </div>
        {userList.map((el) => {
          return (
            <div key={Math.random()} className={classes.UserList}>
              {el.number_of_friends}
              <div className={classes.Delete} onClick={() => deleteReq(el.id)}>
                &#10008;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
