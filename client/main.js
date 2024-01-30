const songContainer = document.querySelector('#song-container');
const songs = document.querySelector('#songs');
const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const lottoBtn = document.querySelector('#lottoButton');

const createSongCard = (song) => {
    axios.get("http://localhost:4000/api/songs/")
    .then(res => {
        // console.log(res.data)
        res.data.filter((s,idx,arr) => {
            const id = s.id;
            const title = s.title;
            const rating = s.rating;
            const imgURL = s.imageURL;
            const songCard = document.createElement('div');
            songCard.classList.add('song-card');
            songCard.innerHTML = `
            <img alt="song-cover" src=${imgURL}>
            <p class="song-title">${title}</p>
            <p class="rating">${rating}</p>
            `
            songContainer.appendChild(songCard)
        })
        // const { id, title, rating, imgURL } = res.data;
    })
}
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            // const data = res.data;
            // const comp = document.querySelector('.compAns')
            // const compAns = document.createElement('p')
            // compAns.innerHTML = data
            // comp.appendChild(compAns)
            alert(res.data);
        });
    };
    const getFortune = () => {
        axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            // const data = res.data;
            // const fortune = document.querySelector('.fortuneAns')
            // const fortuneAns = document.createElement('p')
            // fortuneAns.innerHTML = data
            // fortune.appendChild(fortuneAns)
            alert(res.data)
        })
    };
    const getLottoNumbers = () => {
        axios.get("http://localhost:4000/api/lotto")
        .then(res => {
            // const data = res.data;
            // const lotto = document.querySelector('.lottoAns')
            // const lottoAns = document.createElement('p')
            // lottoAns.innerHTML = data
            // lotto.appendChild(lottoAns)
            alert(res.data)
        })
};
songs.addEventListener('click', createSongCard)

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
lottoBtn.addEventListener('click', getLottoNumbers)
