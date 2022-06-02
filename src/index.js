import React from 'react'
import { createRoot } from 'react-dom';
import Application from "./components/Application";
import "./index.scss";

const root = createRoot(document.getElementById('root'));
root.render(<Application />);