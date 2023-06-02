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

const fetchDataFromBackend = (id, cb) => {
  console.log('loading Data...');
  const response = fetch('http://localhost:5000/marker/getbyid/'+id);
  response
    .then((res) => res.json())
    .then(cb);
};

const fetchVideoData = (videoid, cb) => {
  console.log('loading video...');
  const response = fetch('http://localhost:5000/video/getbyid/'+videoid);
  response
    .then((res) => res.json())
    .then(cb);
};

// on window load
window.onload = () => {
  const arId = getParameterByName('ar');
  console.log(arId);
  const cam = document.querySelector('a-marker-camera');
  const video = document.querySelector('a-video');
  fetchDataFromBackend(arId, (data) => {
    console.log(data);
    fetchVideoData(data.video, (videoData) => {
      console.log(videoData);
      const patternUrl = `${url}/${data.pattern}`;
      const videoUrl = `${url}/${videoData.video}`;
      cam.setAttribute('url', patternUrl);
      video.setAttribute('src', videoUrl);

      const scene = document.querySelector('#myscene');
    })
  });


};