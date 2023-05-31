const url = 'http://localhost:5000';

const fetchDataFromBackend = () => {
  const response = fetch('http://localhost:5000/marker/getbyid/6476e7ea204f93edcb382785');
  response
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
