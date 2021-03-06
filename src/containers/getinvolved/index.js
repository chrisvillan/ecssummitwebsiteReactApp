import React from 'react';
import Flyer from '../../media/volunteer flyer.jpg';
import HeadImage from '../../media/getinvolvedimage.JPG';
import {Header} from "../../components/header";
import {Title} from "../../components/title";
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Footer} from "../../components/footer";
import VolunteerForm from "../../components/volunteerForm";

export default () => (
    <div>
        <OffCanvasHeader name="getinvolved" />
        <Title title="Get Involved" image={HeadImage} subtext="Want to help out?" />
        <Header name="getinvolved" />
        <div className="uk-section uk-section-muted uk-padding-large">
            <div className="uk-container">
                <VolunteerForm/>
                <img src={Flyer} title="volunteer flyer" alt="volunteer flyer" />
            </div>
        </div>

        <div className="uk-section uk-section-default uk-padding-large">
            <div className="uk-container">
                <p className="uk-text-center">If you would like to donate, please refer to:
                </p>

            </div>
        </div>
        <Footer/>
    </div>
)
