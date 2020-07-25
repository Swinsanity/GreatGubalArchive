import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    freeCompany: "",
    website: "",
    location: "",
    status: "",
    jobs: "",
    inGameName: "",
    bio: "",
  });

  const {
    freeCompany,
    website,
    location,
    status,
    jobs,
    inGameName,
    bio,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={onChange}>
            <option value='0'>* Select Your Status</option>
            <option value='Master'>Master</option>
            <option value='Co-Master'>Co-Master</option>
            <option value='Officer'>Officer</option>
            <option value='Lieutenant'>Lieutenant</option>
            <option value='Member'>Member</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>What rank are you?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Free Company'
            name='freeCompany'
            value={freeCompany}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Do you belong to a Free Company?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Put the link to your Lodestone website here!
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Philadelphia, PA)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Jobs'
            name='jobs'
            value={jobs}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. WHM,BLM,BRD,PLD)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='In Game Name'
            name='inGameName'
            value={inGameName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Put your in game name here</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
