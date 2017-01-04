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
export function fetchThemesById(id){
  return fetch(`/api/4/theme/${id}`);
}
export function fetchBeforeThemesById(theme_id,id){
  return fetch(`/api/4/theme/${theme_id}/before/${id}`);
}
export function fetchBeforeById(id) {
  return fetch(`/api/4/news/before/${id}`)
}
export function fetchExtraById(id) {
  return fetch(`/api/4/story-extra/${id}`);
}
export function fetchLongCommentsById(id) {
  return fetch(`/api/4/story/${id}/long-comments`);
}
export function fetchShortCommentsById(id) {
  return fetch(`/api/4/story/${id}/short-comments`);
}
