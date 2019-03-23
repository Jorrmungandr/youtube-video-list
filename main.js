const quantityOfVideos = 8;
const videos = document.querySelectorAll('#video-title');
let info = '';

const download = (filename, text) => {
  let file = document.createElement('a');
  file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  file.setAttribute('download', filename);

  file.style.display = 'none';
  document.body.appendChild(file);
  file.click();
  document.body.removeChild(file);
}

for (let i = 0; i < quantityOfVideos; i++) {
  let link = videos[i].href;
  let name = videos[i].innerText;

  info += `
    [
      {
        name: ${name}
        link: ${link}
      }
    ]  
  `;
}

download("info.txt", info);