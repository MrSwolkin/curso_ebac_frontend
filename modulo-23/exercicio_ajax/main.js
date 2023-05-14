document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#nome');
    const userName = document.querySelector('#usuario');
    const repos = document.querySelector('#repositorios');
    const followers = document.querySelector('#seguidores');
    const following = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/MrSwolkin')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            userName.innerText = json.login;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
})