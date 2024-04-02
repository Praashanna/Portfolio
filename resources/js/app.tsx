import "./bootstrap";
import "../css/app.css";

import ReactDOM from "react-dom/client";
import React from "react";
import Router from '@/Router';

ReactDOM.createRoot(document.getElementById("app")!).render(<Router />);
