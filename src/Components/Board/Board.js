import React from "react";
import {MoreHorizontal} from 'react-feather'
import Card from "../Card/Card"
import './Board.css';
import '../../App.css';
import EditTable from "../EditTable/EditTable";

function Board(){
    return (
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">
                    To Do<span> 2</span>
                </p>
                <MoreHorizontal />
            </div>
            <div className="board_cards custom-scroll">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <EditTable 
                    displayClass = "boards_cards_add" 
                    text = ""
                    placeholder = "Enter Card"
                />
            </div>
        </div>
    );
}

export default Board;