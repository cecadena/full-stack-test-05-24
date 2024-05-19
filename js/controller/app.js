import Collections from "../backend/collections.js";
import View from "../frontend/view.js";
import Validations from "../frontend/validations.js";

/**
 * Function to disable the default submit action and replace it by the API call plus display of the data.
 *
 * @param {*} e PointerEvent
 */
async function submitForm (e) { 
  // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  e.preventDefault();
  if (Validations.isFormValid(document.forms['options'])) {
    const checkboxes = Array.from(document.forms['options'].elements).filter(element => element.type === 'checkbox' && element.checked);
    const collections = await Collections.getData(checkboxes);
    resetPage();
    View.displayCollections(collections);
  }
}

/**
 * Function to remove all the content of the divs displaying the lists of data
 *
 */
function resetPage () {
  var div = document.getElementById('content-info');
  for (const child of div.children) {
    child.innerHTML = '';
  } 
}

export default {  
  submitForm,
  resetPage
};