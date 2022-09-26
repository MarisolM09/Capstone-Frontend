import * as React from "react";
import VolunteerPic from "../images/volunteer-unsplash.jpg";

export default function GetInvolved() {
  return (
    <div className="container">
      <div className="main3">
        <h2 className="involved-h2">Get Involved</h2>
        <p>
          Support our work—and help out the trails you love—by getting involved.
          Whether you'd like to become a member, help repair trails, advocate
          for wild places or simply connect with fellow hikers, we have an
          opportunity for you.
        </p>
        <br></br>
        <img
          src={VolunteerPic}
          alt="volunteering pic"
          className="volunteer-img"
        ></img>
        
        <p>
          Join a work party for a fun and rewarding way to give back to the
          places you love to hike.
        </p>
        
      </div>
      <footer class="footer"></footer>
    </div>
  );
}
