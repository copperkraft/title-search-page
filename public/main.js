const form = document.querySelector('.form');
const titleInput = document.querySelector('.form__title-input');
const searchResultUrl = document.querySelector('.search-result__url');
const searchResultTitle = document.querySelector('.search-result__title');

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

  const result = await response.json();

  return result.data.title;
};

const setResult = (url, title) => {
  console.log(url, title);
  searchResultUrl.innerText = url;
  searchResultTitle.innerText = title;
};

const submitHandler = async (event) => {
  event.preventDefault();
  const url = titleInput.value;
  const title = await fetchTitle(titleInput.value);

  setResult(url, title);
};

form.addEventListener('submit', submitHandler);
