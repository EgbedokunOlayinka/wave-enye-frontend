import React from "react";
import { Card } from "react-bootstrap";

const Profile = ({ profile }) => {
  return (
    <Card className="profile-card">
      <Card.Body>
        <Card.Title className="text-primary">{`${profile.FirstName} ${profile.LastName} `}</Card.Title>
        <p className="gender">{`(${profile.Gender})`}</p>
        <div className="fields">
          <div className="field">
            <span className="custom-bold text-primary">Email: </span>
            <span className="custom-normal">{profile.Email}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Phone number: </span>
            <span className="custom-normal">{profile.PhoneNumber}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Username: </span>
            <span className="custom-normal">{profile.UserName}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">URL: </span>
            <span className="custom-normal">
              <a target="_blank" href={profile.URL}>
                {profile.URL}
              </a>
            </span>
          </div>
          <div className="field location">
            <div>
              <span className="custom-bold text-primary">LAT: </span>
              <span className="custom-normal">{profile.Latitude}</span>
            </div>
            <div>
              <span className="custom-bold text-primary">LONG: </span>
              <span className="custom-normal">{profile.Longitude}</span>
            </div>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Credit Card Type: </span>
            <span className="custom-normal">{profile.CreditCardType}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">
              Credit Card Number:{" "}
            </span>
            <span className="custom-normal">{profile.CreditCardNumber}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Payment Method: </span>
            <span className="custom-normal">{profile.PaymentMethod}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Mac address: </span>
            <span className="custom-normal">{profile.MacAddress}</span>
          </div>
          <div className="field">
            <span className="custom-bold text-primary">Last login: </span>
            <span className="custom-normal">{profile.LastLogin}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Profile;
