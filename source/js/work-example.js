const completeWork = document.querySelectorAll('.complete-works__item');
const imageContainer = [];
imageContainer[0] = 'img/done_work1.webp';
imageContainer[1] = 'img/done_work2.webp';
imageContainer[2] = 'img/done-work3.webp';
imageContainer[3] = 'img/done_work4.webp';
imageContainer[4] = 'img/done_work5.webp';
imageContainer[5] = 'img/done_work6.webp';
imageContainer[6] = 'img/done_work7.webp';
const workExample = document.querySelector('#card').content.querySelector('.work-demonstration');

for (let i = 0; i < completeWork.length; i++) {
    completeWork[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        const article = workExample.cloneNode(true);
        const closeButton = article.querySelector('.work-demonstration__close');
        const nextButton = article.querySelector('.work-demonstration__right');
        const prevButton = article.querySelector('.work-demonstration__left');
        const image = article.querySelector('.work-demonstration__img');
        image.src = imageContainer[i];
        document.body.append(article);

        nextButton.addEventListener('click', function () {
            if (i === 6) {
                image.src = imageContainer[0];
                i = 0;
            } else {
                image.src = imageContainer[i++];
            }
        });

        prevButton.addEventListener('click', function () {
            if (i === 0) {
                image.src = imageContainer[6];
                i = 6;
            } else {
                image.src = imageContainer[i--];
            }
        });

        closeButton.onclick = () => {
            article.remove();
        };
    });
}
