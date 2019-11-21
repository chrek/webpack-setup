import _ from "lodash";

function component() {
  const el = document.createElement('div');

  // Use __.join from ladash to converts all elements in 
  // array into a string separated by separator.
  // _.join(array, [separator=','])
  el.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return el;
}
document.body.appendChild(component());