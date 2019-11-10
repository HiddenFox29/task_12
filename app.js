document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('btn');
    let movie = {
        'the matrix': '1994',
        'john wick': '2017',
        'harry potter': '2002'
    };

    for (let key in movie) {
        document.getElementById('cont').innerText += key + '\n';
    }

    btn.onclick = function () {

        let movieName = prompt('Введите название фильма латинскими буквами').toLowerCase();
        
        if (movieName) {
            alert('Год выпуска фильма ' + movie[movieName])

        } else {
            alert('Что-то пошло не так...');
        }
    };
});