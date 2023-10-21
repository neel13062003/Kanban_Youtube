import React from "react"
import "./Card.css"
import { CheckSquare, Clock, MoreHorizontal } from "react-feather"
import Chip from "../Chip/Chip"

function Card() {
    return (
        <div className="card">
            <div className="card_top" style={{ display: "flex" }}> 
                <div className="card_top_labels">
                    <Chip text="Frontend" color="green" />
                </div>
                <MoreHorizontal />
            </div>

            <div className="card_title" style={{ fontWeight: "bold" }}>
                Card-I
            </div>
            <div className="card_footer">
                <p><Clock />20 October</p>
                <p><CheckSquare />1/4</p>
            </div>

        </div>
    );
}

export default Card