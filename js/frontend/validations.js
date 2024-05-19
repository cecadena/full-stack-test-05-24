/**
 * Function to validate that at least 2 checkboxes are selected.
 * An alert is triggered if the condition is not fullfilled.
 *
 * @param {*} form
 * @return {*} true if at least 2 checkboxes are checked, otherwise false
 */
function isFormValid (form) {
  const elements = Array.from(form.elements).filter(e => e.type === 'checkbox' && e.checked);
  if (elements.length < 2) {
    alert("Please select at least 2 options.");
    return false;
  }
  return true;
}

export default {
  isFormValid
};