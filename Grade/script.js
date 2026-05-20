const rk1 = document.getElementById("rk1")
const rk2 = document.getElementById("rk2")
const gradeSelected = document.getElementById("grade")

const options = [
    { grade: "A", gradeNumber: 95 },
    { grade: "A-", gradeNumber: 90 },
    { grade: "B+", gradeNumber: 85 },
    { grade: "B", gradeNumber: 80 },
    { grade: "B-", gradeNumber: 75 },
    { grade: "C+", gradeNumber: 70 },
    { grade: "C", gradeNumber: 65 },
    { grade: "C-", gradeNumber: 60 },
    { grade: "D+", gradeNumber: 55 },
    { grade: "D", gradeNumber: 50 },
    { grade: "FX", gradeNumber: 49 },
]

const ValidationAndExecuting = () => {
    if (!rk1.value || !rk2.value || parseFloat(rk1.value) > 100 || parseFloat(rk2.value) > 100 || parseFloat(rk1.value) < 0 || parseFloat(rk2.value) < 0) {
        document.querySelector(".statement-text").innerHTML = "Son, you CAN'T even fill the inputs correctly.";
        document.querySelector(".images").innerHTML = `
                <img src="./Assets/memes/bruh1.jpeg" alt="">
                <img src="./Assets/memes/bruh2.jpeg" alt="">
        `;
        document.querySelector("footer").innerHTML = "This whole thing is just meant to be helpful for students in my university to improve their academic performance, some words spoken in this platform might be offensive to some people but I never meant to hurt anyone's feelings, I'm just trying to be funny, I hope I'm."
        return
    }

    const selected = gradeSelected.value
    const sum = Number(rk1.value) + Number(rk2.value)
    const rk = sum * 0.3;
    const option = options.find(element => element.grade === selected);

    document.querySelector(".data").innerHTML = `
            <div class="card">
                <p class="title">RK1</p>
                <p class="value">${rk1.value}</p>
            </div>
            <div class="card">
                <p class="title">RK2</p>
                <p class="value">${rk2.value}</p>
            </div>
            <div class="card">
                <p class="title">Prefered Grade</p>
                <p class="value">${selected}</p>
            </div>
    `

    if (option.gradeNumber - rk > 40) {
        document.querySelector(".statement-text").innerHTML = `${option.grade} is impossible with those RKs lil bro`
        document.querySelector(".images").innerHTML = `
                <img src="./Assets/memes/son1.jpeg" alt="">
                <img src="./Assets/memes/son2.jpeg" alt="">
        `
        document.querySelector("footer").innerHTML = "This whole thing is just meant to be helpful for students in my university to improve their academic performance, some words spoken in this platform might be offensive to some people but I never meant to hurt anyone's feelings, I'm just trying to be funny, I hope I'm."
    } else {
        document.querySelector(".statement-text").innerHTML = `You need to get at least ${(option.gradeNumber - rk) / 0.4} in Final Exam in order to get a grade of ${selected}, otherwise you're cooked lil bro `
        document.querySelector(".images").innerHTML = `
        <img src="./Assets/memes/hmm1.jpeg" alt="">
        <img src="./Assets/memes/hmm2.jpeg" alt="">
        `
        document.querySelector("footer").innerHTML = "This whole thing is just meant to be helpful for students in my university to improve their academic performance, some words spoken in this platform might be offensive to some people but I never meant to hurt anyone's feelings, I'm just trying to be funny, I hope I'm."
    }
}