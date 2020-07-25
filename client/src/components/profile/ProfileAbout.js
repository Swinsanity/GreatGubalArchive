import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({ profile: { bio, jobs, inGameName } }) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>
          {inGameName.trim().split(" ")[0]}'s Bio
        </h2>
        <p>{bio}</p>
        <div className='line'></div>
      </Fragment>
    )}

    <h2 className='text-primary'>Available Jobs</h2>
    <div className='jobs'>
      {jobs.map((job, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {job}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
