$(document).ready(function () {
    $('.menu a').click(function (event) { 
        event.preventDefault();
        $('.menu').toggleClass('barSwitch');
    });
    $('.content a').click(function (event) {
        event.preventDefault();
    })
    $('.add-like').click(function (event) {
        if (this.innerHTML == '<i class="fas fa-heart"></i>') {
            this.innerHTML = '<i class="far fa-heart"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-heart"></i>'
        }
    })
    $('.terms-btn').click(function (event) {
        alert("Mauris non tempor quam, et lacinia sapien.Mauris accumsan eros eget libero posuere vulputate.Etiam elit elit,elementum sed varius at, adipiscing vitae est.Sed nec felis pellentesque, lacinia dui sed, ultricies sapien...")
    })
});