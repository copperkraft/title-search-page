const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const searchResult = document.querySelector('.search-result');
const searchError = document.querySelector('.search-error');
const spinner = document.querySelector('.spinner-border');

const urlRegex = '^(?:http(s)?:\\/\\/)[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';

titleInput.setAttribute('pattern', urlRegex);

const fetchTitle = async (websiteUrl) => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql'
    },
    body: `{
        title(url: "${websiteUrl}")
    }`
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data.title;
};

const setResult = (url, title) => {
  const searchResultUrl = document.querySelector('.search-result__url');
  const searchResultTitle = document.querySelector('.search-result__title');

  searchResultUrl.innerText = url;
  searchResultTitle.innerText = title;
  searchResult.classList.remove('d-none');
};

const setError = (url) => {
  const searchErrorUrl = document.querySelector('.search-error__url');
  searchErrorUrl.innerText = url;
  searchError.classList.remove('d-none');
};

const submitHandler = async (event) => {
  event.preventDefault();
  searchResult.classList.add('d-none');
  searchError.classList.add('d-none');
  spinner.classList.remove('d-none');
  const url = titleInput.value;

  try {
    const title = await fetchTitle(titleInput.value);

    setResult(url, title);
  } catch (e) {
    setError(url);
  } finally {
    spinner.classList.add('d-none');
  }
};

form.addEventListener('submit', submitHandler);
