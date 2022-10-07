import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import RoutePage from './route'

// ReactDOM.render(
//     <RoutePage />,
//     document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RoutePage />);