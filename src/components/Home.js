import * as React from "react";
import ForestPic from "../images/Wilderness.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Home() {
  return (
    <header className="container">
      <img src={ForestPic} alt="Forest pic"></img>
      <main class="text-block">
        <h3>52 Hike</h3>
        <h4>Challenge</h4>
        <p>A challenge between you and nature.</p>
      </main>
      <footer class="footer">
        <div>
          <ul className="icons">
            <li className="icon-pad"><InstagramIcon style={{ color: "#e9a82c" }} /></li>
            <li className="icon-pad"><TwitterIcon style={{ color: "#e9a82c" }} /></li>
            <li className="icon-pad"><FacebookIcon style={{ color: "#e9a82c" }} /></li>
            <li className="icon-pad"><PinterestIcon style={{ color: "#e9a82c" }} /></li>
          </ul>
        </div>
      </footer>
    </header>
  );
}
