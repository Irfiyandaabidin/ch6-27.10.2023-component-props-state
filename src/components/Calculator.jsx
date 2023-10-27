import React, { useState } from "react";

const Calculator = ({onChangeProps, userInput}) => {
  
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investasi</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChangeProps("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Investasi Tahunan</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChangeProps("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Perkiraan balik modal</label>
          <input
            value={userInput.expectedReturn}
            type="number"
            onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Durasi</label>
          <input
            value={userInput.duration}
            type="number"
            onChange={(e) => onChangeProps("duration", e.target.value)}
          />
        </p>
      </div>
    </form>
  );
};

export default Calculator;
