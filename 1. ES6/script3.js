const url = search => `https://api.themoviedb.org/3/search/movie?api_key=4918e82b2ac3ef7c76f1edc217d29c8a&language=en-US&query=${search}&page=1&include_adult=false`;

document.querySelector('input').addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    ajax(url(e.target.value), e.target.value);
    e.target.value = '';
  }
});

function ajax(url, search) {
  fetch(url)
    .then(data => data.json())
    .then(data => data.results.map(item => {
             return {
               id: item.id,
               title: item.title,
               language: item.original_language,
               popularity: item.popularity,
               votes_count: item.vote_count,
               rating: item.vote_average,
               date: item.release_date
             }
           }))
    .then(data => renderTable(data, search))
}

function renderTable(arr, search) {
  const data = arr;

  function sorting(type, state) {
    data.sort((a, b) => state? a[type] > b[type] : a[type] < b[type])
  }

  function tBody() {
    document.getElementById('tBody').innerHTML = data.reduce((str, item) => {
      return `${str}
      <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.language}</td>
        <td>${item.popularity}</td>
        <td>${item.rating}</td>
        <td>${item.votes_count}</td>
        <td>${item.date}</td>
      </tr>`
    }, '')
  }

  document.getElementById('root').innerHTML = `
    <table>
      <caption>Results of search "${search}"</caption>
      <thead id="tHead">
        <tr>
          <th>Movie ID<span data-type="id" class="active">▲</span></th>
          <th>Movie title<span data-type="title" class="down">▲</span></th>
          <th>Movie language<span data-type="language" class="down">▲</span></th>
          <th>Movie popularity<span data-type="popularity" class="down">▲</span></th>
          <th>Movie rating<span data-type="rating" class="down">▲</span></th>
          <th>Movie votes<span data-type="votes_count" class="down">▲</span></th>
          <th>Movie release date<span data-type="date" class="down">▲</span></th>
        </tr>
      </thead>
      <tbody id="tBody">
      </tbody>
    </table>
  `;

  sorting('id', true);
  tBody();

  document.getElementById('tHead').addEventListener('click', e => {
  if (e.target.tagName != 'SPAN') return;
  if (e.target.classList.contains('down')) {
    e.target.classList.remove('down');
    sorting(e.target.getAttribute('data-type'), true);
  } else {
    e.target.classList.add('down');
    sorting(e.target.getAttribute('data-type'), false);
  }
  if (!e.target.classList.contains('active')) {
    Array.from(document.getElementsByTagName('span')).forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
  }
  tBody();
});
}
