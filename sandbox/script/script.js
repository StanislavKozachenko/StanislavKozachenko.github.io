var word = document.querySelector('.word');
var dotCom = document.querySelector('.dot-com');
var dotComLetters = dotCom.querySelectorAll('.letter');

anime.timeline({ loop: false })
    .add({
        targets: word.getElementsByClassName('letter'),
        rotateY: [-90, 0],
        rotateX: [-10, 0],
        opacity: [0, 1],
        translateY: ['-50px', '0'], // движение вверх
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 100 * i
    })
    .add({
        targets: dotComLetters,
        rotateY: [-90, 0],
        rotateZ: [20, 0],
        opacity: [0, 1],
        translateY: ['-50px', '0'], // движение вверх
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 100 * i,
        offset: '-=200',
        complete: function() {
        }
    });