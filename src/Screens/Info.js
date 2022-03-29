import React from 'react';
import { InfoCont, InfoImage, Infotext, AchieveTag,Achievedate, Sign } from '../Components/styles';
import About_Kishore from '../Assets/About_Kishore.jpg';
import { Achievdata } from '../Assets/Achievdata';


const Info = () => {
    return (
        <InfoCont id='info'>
            <Infotext>
                Hey, I’m Sai Kishore -<br /><br /> I am a certified personal trainer, fitness consultant, Bodybuilding trainer, powerlifting trainer, strength and endurance trainer, whereas I am professionally doing my master's in embedded systems.

                <br /><br />My passion for fitness started in my early teen years. I began my journey in bodybuilding when I was 18 years old to train for my first district-level championship under the best physique category. I built my expertise in bodybuilding powerlifting, strength, and endurance training almost from last six years under participating various competitions, at the same time, progressing my achievements to the national level competitions in India.
                During this time, I acquired Profund Knowledge and training skills to guide
                building their goal physique and effective healthy techniques rooted in historical Indian bodybuilding methods.

                <br /><br /><Achievedate>MY ACHIEVEMENTS</Achievedate>
                {Achievdata.map((item, id) => {
                    return (
                        <AchieveTag key={item.id}>
                            <Achievedate>{item.year}</Achievedate>&emsp;&emsp;{item.dat}
                        </AchieveTag>
                    );
                })}
                <br /><Sign>Sai Kishore Chalumuri</Sign>
            </Infotext>
            
            <InfoImage src={About_Kishore} />
        </InfoCont>
    );
}

export default Info;