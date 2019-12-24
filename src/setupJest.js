require('jest-fetch-mock').enableMocks();
const body = `<form id="formID"></form> <div id="graphWeather"></div>`;

Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
});
document.body.innerHTML = body;

export { body };