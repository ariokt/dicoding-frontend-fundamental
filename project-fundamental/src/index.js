import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";

import "./styles/style.css"
import main from "./script/main.js";

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

document.addEventListener("DOMContentLoaded", main);

