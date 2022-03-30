import React, { useState } from 'react';
import { imgdata } from '../Data/imgdata';
import { TransCont, TransformHead, TraImg, SliderCont, Hometext, TransImg, TransText, Arrow,Contacthead } from '../Components/styles';
import leftarr from '../Assets/leftarr.svg';


const Transform = () => {
    const [sli, setSlide] = useState(0);
    const len = imgdata.length

    const handleleft = () => {
        if (sli < 1) {
            setSlide(len - 3);
        } else {
            setSlide(prev => prev - 1);
        }
    }
    const handleright = () => {
        if (sli > len - 4) {
            setSlide(0);
        } else {
            setSlide(prev => prev + 1);
        }
    }
    return (
        <TransCont id='transform'>
            <TransformHead>Transformations</TransformHead>
            <Hometext>Join thousands of people as a part of a thriving fitness community with real stories of amazing transformations</Hometext>
            <SliderCont>
                <Arrow src={leftarr} angle={0} onClick={handleleft} />
                {imgdata.map((item, i) => {
                    return (<>
                        {(sli <= item.id && sli + 2 >= item.id) &&
                            <TraImg slider key={item.id} src={item.link} />
                        }</>);
                }
                )}
                <Arrow src={leftarr} angle={180} onClick={handleright} />
            </SliderCont>
            
                <TransImg>
                    <TransText del={0}>WEIGHT LOSS PROGRAM</TransText>
                    <TransText del={1}>POWERLIFTING TRAINING</TransText>
                    <TransText del={2}>WEDDING TRANSFORMATIONS</TransText>
                    <TransText del={3}>LIFESTYLE FITNESS COACHING</TransText>
                </TransImg>

            
        </TransCont>
    );
}

export default Transform;