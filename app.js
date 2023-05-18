// ! This is the one way to solve the problem
/* 
    const btns = document.querySelectorAll('.question-btn')

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const question = e.currentTarget.parentElement.parentElement;
            question.classList.toggle('show-text')
        })
    })
*/

// ! This is the another way to solve the problem

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})