import React, { useState, useEffect } from "react";
import classes from "./addUser.module.css";
import useInput from "../../../hooks/use-input";
import { api } from "../../../core/api";

const AddUser = (props) => {
  const [gender, setGender] = useState("M");
  const [ID, setID] = useState();

  useEffect(() => {
    api
      .get("/users/getID")
      .then((res) => {
        setID(res.data);
        console.log(res.data);
        window.postMessage("User has been added successfully 😊");
      })
      .catch((err) => console.log(`Get req err - ${err}`));
  }, []);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => /^[a-zA-Z]+$/.test(value) && value.length >= 2 && value.length <= 30);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => /^[a-zA-Z]+$/.test(value) && value.length >= 2 && value.length <= 30);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@") && value.length >= 5);

  const {
    value: countryOfOriginValue,
    isValid: countryOfOriginIsValid,
    hasError: countryOfOriginHasError,
    changeHandler: countryOfOriginChangeHandler,
    blurHandler: countryOfOriginBlurHandler,
    reset: countryOfOriginReset,
  } = useInput((value) => /^[a-zA-Z\s]*$/.test(value) && value.length >= 2 && value.length <= 30);

  const {
    value: createdAtValue,
    isValid: createdAtIsValid,
    hasError: createdAtHasError,
    changeHandler: createdAtChangeHandler,
    blurHandler: createdAtBlurHandler,
    reset: createdAtReset,
  } = useInput((value) => value != null);

  const {
    value: dateOfBirthValue,
    isValid: dateOfBirthIsValid,
    hasError: dateOfBirthHasError,
    changeHandler: dateOfBirthChangeHandler,
    blurHandler: dateOfBirthBlurHandler,
    reset: dateOfBirthReset,
  } = useInput((value) => value != null);

  const {
    value: numberOfFriendsValue,
    isValid: numberOfFriendsIsValid,
    hasError: numberOfFriendsHasError,
    changeHandler: numberOfFriendsChangeHandler,
    blurHandler: numberOfFriendsBlurHandler,
    reset: numberOfFriendsReset,
  } = useInput((value) => /^[0-9]+$/.test(value) && value >= 1 && value <= 2000);

  const addUser = () => {
    const firstName = firstNameValue[0]?.toUpperCase() + firstNameValue?.slice(1).toLowerCase();
    const lastName = lastNameValue[0]?.toUpperCase() + lastNameValue?.slice(1).toLowerCase();
    const username = firstName + lastName + Math.trunc(Math.random() * 1000);

    const id = +ID.map((el) => el.id) + 1;

    const postReqPayload = {
      id,
      first_name: firstName,
      last_name: lastName,
      username,
      email: emailValue,
      gender: gender,
      country_of_origin: countryOfOriginValue,
      created_at: createdAtValue,
      date_of_birth: dateOfBirthValue,
      number_of_friends: +numberOfFriendsValue,
    };

    api
      .post("/users", postReqPayload)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Post req error - ${err}`));

    firstNameReset();
    lastNameReset();
    emailReset();
    countryOfOriginReset();
    createdAtReset();
    dateOfBirthReset();
    numberOfFriendsReset();
  };

  const invalidForm =
    !firstNameIsValid ||
    !lastNameIsValid ||
    !emailIsValid ||
    !countryOfOriginIsValid ||
    !createdAtIsValid ||
    !dateOfBirthIsValid ||
    !numberOfFriendsIsValid;

  return (
    <div className={classes.PopUp}>
      <div className={classes.PopUpContent}>
        <div className={classes.Cancel} onClick={() => props.setAddUser()}>
          &#10008;
        </div>
        <div className={classes.InputContainer}>
          <div className={classes.InputHolder}>
            <label htmlFor="firstName">First Name (2-30 characters):</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              style={
                firstNameHasError ? { border: "1px solid red" } : { border: "1px solid green" }
              }
            />
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="lastName">Last Name (2-30 characters):</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              style={lastNameHasError ? { border: "1px solid red" } : { border: "1px solid green" }}
            />
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              style={emailHasError ? { border: "1px solid red" } : { border: "1px solid green" }}
            />
          </div>
          <div className={classes.InputHolder}>
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                name="gender"
                id="M"
                value="M"
                defaultChecked
                onClick={() => setGender("M")}
              />
              <label htmlFor="M">M</label>
            </div>
            <div>
              <input type="radio" name="gender" id="F" value="F" onClick={() => setGender("F")} />
              <label htmlFor="F">F</label>
            </div>
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="countryOfOrigin">Country of origin:</label>
            <input
              type="text"
              name="countryOfOrigin"
              id="countryOfOrigin"
              value={countryOfOriginValue}
              onChange={countryOfOriginChangeHandler}
              onBlur={countryOfOriginBlurHandler}
              style={
                countryOfOriginHasError
                  ? { border: "1px solid red" }
                  : { border: "1px solid green" }
              }
            />
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="createdAt">Created at:</label>
            <input
              type="date"
              min="2010-01-01"
              max="2023-01-20"
              name="createdAt"
              id="createdAt"
              value={createdAtValue}
              onChange={createdAtChangeHandler}
              onBlur={createdAtBlurHandler}
              style={
                createdAtHasError ? { border: "1px solid red" } : { border: "1px solid green" }
              }
            />
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="dateOfBirth">Date of birth:</label>
            <input
              type="date"
              min="1940-01-01"
              max="2010-01-20"
              name="dateOfBirth"
              id="dateOfBirth"
              value={dateOfBirthValue}
              onChange={dateOfBirthChangeHandler}
              onBlur={dateOfBirthBlurHandler}
              style={
                dateOfBirthHasError ? { border: "1px solid red" } : { border: "1px solid green" }
              }
            />
          </div>
          <div className={classes.InputHolder}>
            <label htmlFor="numberOfFriends">Number of friends (1-2000):</label>
            <input
              type="number"
              min="1"
              max="2000"
              name="numberOfFriends"
              id="numberOfFriends"
              value={numberOfFriendsValue}
              onChange={numberOfFriendsChangeHandler}
              onBlur={numberOfFriendsBlurHandler}
              style={
                numberOfFriendsHasError
                  ? { border: "1px solid red" }
                  : { border: "1px solid green" }
              }
            />
          </div>
          <button onClick={() => addUser()} className={invalidForm ? classes.Invalid : ""}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
