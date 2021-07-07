import React from "react";

const Picker = ({ value, onChange, options }) => (
    <div className="picker">
        <select className="select" onChange={e => onChange(e.target.value)} value={value}>
            {options.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
            <h1>{value}</h1>
    </div>
);


export default Picker;
