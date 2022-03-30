import React from 'react';
import { ContactCont, Contcard,SpaceFlex,ContactImg,Hometext,Contacttext,ContactBtn,TransformHead } from '../Components/styles';
import call from '../Assets/call.png';
import plan from '../Assets/plan.png';
import instag from '../Assets/instag.png';

const Contact = () => {
    return (
        <ContactCont id='contact'>
            <TransformHead>Contact Us</TransformHead>
            <SpaceFlex>
            <Contcard>
                <ContactImg src={call}/>
                <Hometext>By phone</Hometext>
                <Contacttext>
                    (Monday to Friday, 9 AM to 4 PM EST)
                    <br/><br/>
                    Call: 1-548-881-0508
                </Contacttext>
            </Contcard>
            <Contcard>
            <ContactImg src={plan}/>
                <Hometext>Start a new case</Hometext>
                <Contacttext>
                Send us your details and goals to review your case study and get a unique plan based on your Body Mass Index (BMI).
                    <br/><br/>
                    Mail: fitnesskishore@gmail.com
                </Contacttext>
                <ContactBtn href="mailto:fitnesskishore@gmail.com">Email Us</ContactBtn>
            </Contcard>
            <Contcard>
            <ContactImg src={instag}/>
                <Hometext>Follow Us</Hometext>
                <Contacttext>
                    Get updated with my body transforming lessons on Instagram
                    <br/><br/>
                    @fitness_kishore
                </Contacttext>
                <ContactBtn href='https://instagram.com/fitness_kishore?utm_medium=copy_link' target="_blank">Follow Us</ContactBtn>
                
            </Contcard>
            </SpaceFlex>
        </ContactCont>
    );
}

export default Contact;