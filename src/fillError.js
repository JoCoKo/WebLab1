export default function fillError(error, fillElements) {
  fillElements({
    picSrc: '',
    error: 'Error! '+error.cod + ' ' + error.message + '\r\n',
    place: '',
    weather: '',
    temperature: '',
    wind: ''
  });
  return {
    picSrc: '',
    error: 'Error! '+error.cod + ' ' + error.message + '\r\n',
    place: '',
    weather: '',
    temperature: '',
    wind: ''
  };
}