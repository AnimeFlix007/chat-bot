import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AI_answer = ({ doStuff, setInput, result, selectOption, loading }) => {
  return (
    <div className="chat-text">
      <div>
        <button onClick={() => selectOption({})}>
          <IoArrowBack />
          Back
        </button>
      </div>
      <textarea
        className="text-area"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Search 
        <BiSearchAlt2 style={{ fontSize: "23px", marginLeft: ".65rem" }} />
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default AI_answer;
