import React from "react";
import "./Rightbar.scss";
import Market from "../../assets/3.png";
import Events from "../../assets/6.png";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Market} alt="" />
              <span>Ram</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Market} alt="" />
              <span>Johnson</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Events} alt="" />
              <p>
                <span>Johnson</span>
                <span> </span>
                changed their profile picture
              </p>
            </div>
            <span style={{ width: "100px" }}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Events} alt="" />
              <p>
                <span>Johnson</span>
                <span> </span>
                changed their profile picture
              </p>
            </div>
            <span style={{ width: "100px" }}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Events} alt="" />
              <p>
                <span>Johnson</span>
                <span> </span>
                changed their profile picture
              </p>
            </div>
            <span style={{ width: "100px" }}>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Market} alt="" />
              <div className="online" />
              <span>Ram</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Market} alt="" />
              <div className="online" />
              <span>Ram</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Market} alt="" />
              <div className="online" />
              <span>Ram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
