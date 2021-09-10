const completeWork = document.querySelectorAll('.complete-works__item');

for (let item of completeWork) {
    item.addEventListener('click', function (evt) {
        evt.preventDefault();
        const workExample = document.querySelector('#card').content.querySelector('.work-demonstration');
        const article = workExample.cloneNode(true);
        const closeButton = article.querySelector('.work-demonstration__close');
        document.body.append(article);

        closeButton.onclick = () => {
            article.remove();
        };
    });
}
