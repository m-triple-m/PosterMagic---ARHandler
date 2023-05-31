const url = 'http://localhost:5000';

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const fetchDataFromBackend = () => {
  const response = fetch('http://localhost:5000/marker/getbyid/6476e7ea204f93edcb382785');
  response
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
