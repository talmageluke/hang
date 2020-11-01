import React, { Component } from "react";
import "./CreateHang.css";
import axios from "axios"

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((value) => {
    value.length > 0 && (valid = false);
  });

  // validate the form being filled out
  Object.values(rest).forEach((value) => {
    value === null && (valid = false);
  });

  return valid;
};

export default class CreateHang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxParticipants: null,
      events: null,
      skill: null,
      location: null,
      time: null,
      details: null,
      formErrors: {
        maxParticipants: "",
        events: "",
        skill: "",
        location: "",
        time: "",
        details: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (formValid(this.state)) {
      console.log(`
                --Submitting--
                Max Participants: ${this.state.maxParticipants}
                Event: ${this.state.events}
                Skill Level: ${this.state.skill}
                Location: ${this.state.location}
                Time: ${this.state.time}
                Details: ${this.state.details}
            `);
    } else {
      console.error("FORM INVAILID - DISPLAY ERROR");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name);
    console.log("Value: ", value);

    switch (name) {
      case "maxParticipants":
        formErrors.maxParticipants =
          value.length < 1 ? "Must type a number of participants." : "";
        break;
      case "events":
        formErrors.events = value.length < 2 ? "Must input an event." : "";
        break;
      case "skill":
        formErrors.skill = value.length < 1 ? "Must input skill level." : "";
        break;
      case "location":
        formErrors.location =
          value.length < 3 ? "Must input at least 3 characters." : "";
        break;
      case "time":
        formErrors.time =
          value.length < 6 ? "Must input at least 6 characters." : "";
        break;
      case "details":
        formErrors.details =
          value.length < 1 ? "Must input at least 1 characters." : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Hang</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {/* Max Participants */}
            <div className="maxParticipants">
              <label htmlFor="maxParticipants">
                Max Amount of Participants
              </label>
              <input
                className={
                  formErrors.maxParticipants.length > 0 ? "error" : null
                }
                options="Max Participants"
                type="input"
                name="maxParticipants"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.maxParticipants.length > 0 && (
                <span className="errorMessage">
                  {formErrors.maxParticipants}
                </span>
              )}
            </div>
            {/* Event */}
            <div className="events">
              <label htmlFor="events">Event</label>
              <input
                className={formErrors.events.length > 0 ? "error" : null}
                placeholder="Enter Event"
                type="text"
                name="events"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.events.length > 0 && (
                <span className="errorMessage">{formErrors.events}</span>
              )}
            </div>
            {/* Skill */}
            <div className="skill">
              <label htmlFor="skill">Skill</label>
              <input
                className={formErrors.skill.length > 0 ? "error" : null}
                placeholder="Skill Level"
                type="text"
                name="skill"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.skill.length > 0 && (
                <span className="errorMessage">{formErrors.skill}</span>
              )}
            </div>
            {/* Time */}
            <div className="time">
              <label htmlFor="time">Time</label>
              <input
                className={formErrors.time.length > 0 ? "error" : null}
                placeholder="Enter Time"
                type="time"
                name="time"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.time.length > 0 && (
                <span className="errorMessage">{formErrors.time}</span>
              )}
            </div>
            {/* Location */}
            <div className="location">
              <label htmlFor="location">Location</label>
              <input
                className={formErrors.location.length > 0 ? "error" : null}
                placeholder="Enter Location"
                type="text"
                name="location"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.location.length > 0 && (
                <span className="errorMessage">{formErrors.location}</span>
              )}
            </div>
            {/* Details */}
            <div className="details">
              <label htmlFor="details">Details</label>
              <input
                className={formErrors.details.length > 0 ? "error" : null}
                placeholder="Enter Details"
                type="textarea"
                name="details"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.details.length > 0 && (
                <span className="errorMessage">{formErrors.details}</span>
              )}
            </div>
            <div className="createHang">
              <button type="submit">Create Hang</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
