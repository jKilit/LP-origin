import React from "react";
import "./activityItem.scss";

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item">
      <div className="activity-icon">
        <img src={activity.iconUrl} alt={activity.title} className="icon-image" />
      </div>
      <div className="activity-details">
        <h4 className="activity-title">{activity.title}</h4>
        <p className="activity-description">{activity.description}</p>
        <div className="activity-meta">
          <span className="activity-date">{activity.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
