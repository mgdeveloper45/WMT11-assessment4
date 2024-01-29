
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense.",
            "A fresh start will put you on your way.",
            "A friend asks only for your time not your money.",
            "A friend is a present you give yourself.",
        ];
        let randIdx = Math.floor(Math.random() * fortune.length);
        let randFortune = fortune[randIdx];

        res.status(200).send(randFortune)
    },
    getLottoNumbers: (req, res) => {
        let luckyNumbers = [];
        let i = 0; 
        while(i < 5) {
            let randNum = Math.floor((Math.random() * 61) + 1)
            if(!luckyNumbers.includes(randNum)){
                luckyNumbers.push(randNum)
            }
            i++;
        }
        let powerNumber = Math.floor((Math.random() * 21) + 1)

        res.status(200).send(`Your lotto numbers are ${ luckyNumbers } and the power numbers is ${ powerNumber }`)
    }
}