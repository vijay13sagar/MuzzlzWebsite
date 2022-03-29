import React from 'react';
import { ContactCont, InfoImage, Infotext } from '../Components/styles';
import About_Kishore from '../Assets/About_Kishore.jpg';


const Contact = () => {
    return (
        <ContactCont id='contact'>
            <Infotext>
                Hey, I’m Lisa -<br /><br /> I'm 32 and reside in Dubai with my husband Romane and cat, Hendricks. I’ve been a personal trainer for 5 years and have been in fitness for 12 years.

                <br /><br />I started my journey into exercise and fitness 12 years ago and one of the reasons I did this was to gain more confidence in myself.  It was tough at first but it did work. Through being consistent and dedicating my time to eating the correct nutrition and exercising for my future self, I started to see improvements both physically and mentally! Our bodies are incredible and most people don’t know how changing their lifestyle to a healthier and more active one can benefit them. I’m here to show you that you can improve your fitness at any age AND see results with me. I want to share my tips and knowledge and help you to see the best version of you, for you!

                <br /><br />My fitness training and nutrition is for anyone, whichever level of fitness you are, the possibilities really are endless, come and join my great community.  Let’s motivate, encourage and lift each other to get the results you want!

                <br /><br />Lisa Xx
            </Infotext>
            <InfoImage src={About_Kishore} />
        </ContactCont>
    );
}

export default Contact;