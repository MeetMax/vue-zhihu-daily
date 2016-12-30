import axios from 'axios';

export function fetch(url) {

  return new Promise((resolve, reject)=> {
    axios.get(url)
        .then(response => {
          resolve(response.data);
        })
  })
}
export function fetchNewsById(id) {
  return fetch(`/api/4/news/${id}`);
}
export function fetchThemes(){
  return fetch(`/api/4/themes`);
}
export function fetchThemesById(id) {
  return fetch(`/api/4/themes/${id}`);
}
