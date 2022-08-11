import React from "react";

const Contact = ({ contact }) => {
    const { firstName, lastName, phone, gender, photo } = contact;
    let genderImage = gender;
    if (gender === "male") {
        genderImage = "male.png";
    } else if (gender === "female") {
        genderImage = "female.png";
    } else genderImage = "undef.png";

    return (
        <div className="Contact">
            <img className="person-image" src={require(`../images/${photo}`)} />
            <div className="initials">
                <div className="first-name">{firstName}</div>
                <div className="last-name">{lastName}</div>
            </div>
            <div className="phone">{phone}</div>
            <img className="gender-icon" src={require(`../images/${genderImage}`)} alt="gender" />
        </div>
    );
};

export default Contact;
