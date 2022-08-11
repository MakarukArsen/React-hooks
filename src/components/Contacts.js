import React, { useState } from "react";
import { v4 } from "uuid";

import { contacts } from "../constants/constants";
import Contact from "./Contact";

import MaleIcon from "./icons/MaleIcon";
import FemaleIcon from "./icons/FemaleIcon";
import UndefIcon from "./icons/UndefIcon";

const Contacts = () => {
    const [list, setList] = useState(contacts);
    const [maleChecked, setMaleChecked] = useState(false);
    const [femaleChecked, setFemaleChecked] = useState(false);
    const [undefChecked, setUndefCheked] = useState(false);
    const [value, setValue] = useState("");

    const handleMaleChangeCheck = () => {
        setMaleChecked(!maleChecked);
        filteredContacts();
    };

    const handleFemaleChangeCheck = () => {
        setFemaleChecked(!femaleChecked);
        filteredContacts();
    };

    const handleUnefChangeCheck = () => {
        setUndefCheked(!undefChecked);
        filteredContacts();
    };
    const filteredContacts = list
        .filter((contact) => {
            contact = Object.values(contact).join();
            return contact.toLowerCase().includes(value.toLowerCase());
        })
        .filter((contact) => {
            const result = [];
            if (maleChecked) {
                if (contact.gender === "male") {
                    result.push(contact);
                }
            }
            if (femaleChecked) {
                if (contact.gender === "female") {
                    result.push(contact);
                }
            }
            if (undefChecked) {
                if (!contact.gender) {
                    result.push(contact);
                }
            }
            if (!maleChecked && !femaleChecked && !undefChecked) {
                return contact;
            }
            console.log(result);
            return result[0];
        });

    return (
        <div className="Contacts">
            <form className="form">
                <input className="search" type="text" onChange={(e) => setValue(e.target.value)} />
                <label className="checkbox male-checkbox">
                    <MaleIcon width={35} heigth={35} status={maleChecked ? "active" : null} />
                    <input type="checkbox" className={"checkbox-input"} checked={maleChecked} onChange={handleMaleChangeCheck} />
                </label>
                <label className="checkbox female-checkbox">
                    <FemaleIcon width={35} heigth={35} status={femaleChecked ? "active" : null} />
                    <input type="checkbox" className="checkbox-input" checked={femaleChecked} onChange={handleFemaleChangeCheck} />
                </label>
                <label className="checkbox undefined-checkbox">
                    <UndefIcon width={35} heigth={40} status={undefChecked ? "active" : null} />
                    <input type="checkbox" className="checkbox-input" checked={undefChecked} onChange={handleUnefChangeCheck} />
                </label>
            </form>
            <div className="contacts__list">
                {filteredContacts.length ? (
                    filteredContacts.map((contact) => <Contact contact={contact} key={v4()} />)
                ) : (
                    <div className="noContacts">Котактів не знайдено :( </div>
                )}
            </div>
        </div>
    );
};

export default Contacts;
