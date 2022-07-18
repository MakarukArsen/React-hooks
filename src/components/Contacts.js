import React, { useState } from 'react';

import { contacts } from "../constants/constants";
import Contact from './Contact';
import { v4 } from "uuid";

import MaleIcon from './icons/MaleIcon';
import FemaleIcon from './icons/FemaleIcon';


const Contacts = () => {
    const [list, setList] = useState(contacts);
    const [maleChecked, setMaleChecked] = useState(false);
    const [femaleChecked, setFemaleChecked] = useState(false);
    const [value, setValue] = useState("");

    const handleMaleChangeCheck = () => {
        setMaleChecked(!maleChecked);
        filteredContacts();
    }

    const handleFemaleChangeCheck = () => {
        setFemaleChecked(!femaleChecked);
        filteredContacts();
    }

    const filteredContacts = list.filter(contact => {
        contact = Object.values(contact).join();
        return contact.toLowerCase().includes(value.toLowerCase());
    }).filter(contact => {
        if(maleChecked && femaleChecked){
            return contact.gender;
        } else if(maleChecked){
            return contact.gender === "male";
        } else if(femaleChecked){
            return contact.gender === "female";
        } else {
            return contact;
        }
    })

    return (
        <div className='Contacts'>
            <form className='form'>
                <input className='search' type="text"
                onChange={(e) => setValue(e.target.value)}/>
                    <label className='checkbox male-checkbox'>
                        <MaleIcon width={35} heigth={35} status={maleChecked ? "active" : null}/>
                        <input type="checkbox" className={'checkbox-input'} checked={maleChecked} onChange={handleMaleChangeCheck} />
                    </label>
                <label className='checkbox female-checkbox'>
                    <FemaleIcon width={35} heigth={35} status={femaleChecked ? "active" : null}/>
                    <input type="checkbox" className='checkbox-input' checked={femaleChecked} onChange={handleFemaleChangeCheck}/>
                </label>
            </form>
            {filteredContacts.map(contact => 
                <Contact contact={contact} key={v4()}/>
            )}
        </div>
    );
};

export default Contacts;