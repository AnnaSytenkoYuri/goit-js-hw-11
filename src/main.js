
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
 

  clearGallery();
  showLoader();

  getImagesByQuery(query)
  .then(data => {
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    createGallery(data.hits);
  })
  .catch(error => {
    hideLoader();
    console.error(error);
  });

  form.reset();
}
