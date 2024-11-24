import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PollItem = ({poll, showVote}) => {
    const {id, name, vote, messages} = poll;
    const navigate = useNavigate();
    const onClick = async () => {
        navigate("/like/" + id + (showVote?"?0=1":""));
    }
    return (
        <p>
            <button onClick={onClick}>+1</button>
            &nbsp;&nbsp;
            {name}
            {showVote&&<>&nbsp;&nbsp;-&nbsp;&nbsp;
            <span>({vote} 좋아요)</span></>}
        </p>
    )
}

export default PollItem;