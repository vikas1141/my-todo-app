import React, { useState } from "react";

const TimeLogger = () => {
const [logs, setLogs] = useState([]);

const logTime = () => {
setLogs([...logs, new Date().toLocaleTimeString()]);
};

return (
<div>
<h2>Time Logger</h2>
<button onClick={logTime}>Log Time</button>
<ul>
{logs.map((log, index) => (
<li key={index}>{log}</li>
))}
</ul>
</div>
);
};

export default TimeLogger;