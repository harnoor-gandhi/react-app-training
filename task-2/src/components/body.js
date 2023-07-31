import React from 'react';
import './body.css';
// import img1 from './my-app/src/components/image1.png';
export function Body() {

    return (
        <div class="content" style={{ "background-color": "midnightblue" }}>
            <div class="content-left" style={{ "margin-left": '100px', "margin-top": '100px' }}>
                <p style={{ "color": "white", "margin-left": '10px',"font-size":'17px' }}><h1><b>Move Work</b></h1>
                    <h1 style={{ "color": "white", "font-size":'48px' ,"margin-top": '-20px'}}><b>Forward</b></h1>
                    Atlassian helps teams work smarter and faster together
                </p>
                <button type="button" style={{
                    "margin-left": '10px',"font-size":'21px',"margin-bottom":"100px",
                    "height": '65px',
                    "width": '170px',
                    "background-color": "palegoldenrod",
                    "color":"black"
                }}>Learn More</button>
            </div>
            <div class="content-right" style={{ "margin-left": '310px' }}>
                <img src='https://atlassianblog.wpengine.com/wp-content/uploads/2020/04/screen-shot-2020-04-03-at-12.34.04-pm-1560x760.png' alt="atlassian " height="530px" width="800px"></img>
            </div>
        </div>
    )}