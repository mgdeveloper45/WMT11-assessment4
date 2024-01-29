const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const lottoBtn = document.querySelector('#lottoButton');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            alert(res.data)
        })
};
const getLottoNumbers = () => {
    axios.get("http://localhost:4000/api/lotto")
        .then(res => {
            alert(res.data)
        })
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
lottoBtn.addEventListener('click', getLottoNumbers)
