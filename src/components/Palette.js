import React from "react"
import HeartImg from "../assets/color-hunt-palettes-icon-heart.png"

function Palette({palette}) {
    return (
        <div className="shadow border-0 palette-item">
            <div className="palette">
                <div className="place c5" style={{backgroundColor: palette[0]}}>
                </div>    
                <div className="place c4" style={{backgroundColor: palette[1]}}></div>
                <div className="place c3" style={{backgroundColor: palette[2]}}></div>
                <div className="place c2" style={{backgroundColor: palette[3]}}></div>
                <div className="place c1" style={{backgroundColor: palette[4]}}></div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="like button">
                    <img alt="Color Hunt Palettes Heart Icon" className="icon" src={HeartImg} />
                    <span className="pl-1"> {palette.heart}</span>
                </div>
                <span className="date">2 Day</span>
            </div>
        </div>
    )
}

export default Palette