/**
 * JS main file to add the functions to execute during click event for submit and reset buttons.
 */
import App from "./controller/app.js";

document.getElementById('submit').addEventListener('click', App.submitForm);
document.getElementById('reset').addEventListener('click', App.resetPage);