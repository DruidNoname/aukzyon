$(function () {

    //Согласие на обработку персональных данных
    $(".personal-data-show").on("click", function(){
        $("#personal-data-concent").addClass("active")
    });
//Согласие на обработку персональных данных


//Доп.инфо Каляпичева
    $('#speaker1').on("click", function(){
        $("#kalyapicheva_info").addClass("active")
    });
//Доп.инфо Каляпичева


//Доп.инфо Казарина
    $('#speaker2').on("click", function(){
        $("#kazarina_info").addClass("active")
    });
//Доп.инфо Казарина


//Доп.инфо Кузьмин
    $('#speaker3').on("click", function(){
        $("#kuzmin_info").addClass("active")
    });
//Доп.инфо Кузьмин


//Доп.инфо политика конфиденциальности
    $('.privacy-policy-show').on("click", function(){
        $("#privacy-policy").addClass("active")
    });
//Доп.инфо политика конфиденциальности



// открытие всплывающего окна
    $(document).on('click', '[data-modal-popup]', function (e) {
        e.preventDefault();
        var button = $(this),
            buttonId = button.data('modal-popup')
        $(buttonId).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: 'rgba(0,0,0,.8)',
                    opacity: 1
                }
            }
        });
    });
});