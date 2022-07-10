import React from 'react'
import Header from "../components/header";
import LeftSection from "../components/leftSection";
import PersonalInformation from './personalInformation';
import '../index.css'

const RightRegisterForm = () => {
    return (
        <section className='rightRegForm'>
            <div className="rightSide">
                <Header />
                <LeftSection />
            </div>
            <PersonalInformation />
        </section>
    );
}

export default RightRegisterForm
