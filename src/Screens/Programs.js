import React from 'react';
import { ProgCont, CardHead, Hometext, ContentCard, CardCont, ImgCard, HideText,TransformHead } from '../Components/styles';
import { progdata } from '../Data/progdata';

const Programs = () => {
    return (
        <ProgCont id='programs'>
            <TransformHead>Programs</TransformHead>
            <CardCont>
                {progdata.map((item, id) => {
                    return (
                        <ContentCard>
                            <ImgCard src={item.link} />
                            <CardHead>{item.head}</CardHead>
                            <HideText>{item.p1}<br /><br />{item.p2}</HideText>
                        </ContentCard>
                    );
                })}
            </CardCont>
        </ProgCont>
    );
}

export default Programs;