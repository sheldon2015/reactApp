import React from "react";

require("./../less/spinner.less");

const Loading = () => {
    return (
        <div>
            <div className="spinner-container container1">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>
            <div className="spinner-container container2">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>
            <div className="spinner-container container3">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>
        </div>
    );
};

export default Loading;
