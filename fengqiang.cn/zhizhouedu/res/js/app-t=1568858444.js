$(function () {
    $("#fix-add .gotop").click(function () {
        $('html,body').stop(true, false).animate({scrollTop: '0px'}, 800);
    });
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    function randomNum(min, max) {
        min = min || 0;
        max = max || 100;
        var range = max - min;
        var rand = Math.random();
        var num = min + Math.round(rand * range); //四舍五入
        return num;
    }
    var number = 0,
            date = new Date().getDate(),
            numbers = [
                [date * randomNum(20, 30), date * randomNum(20, 30), date * randomNum(20, 30)],
                [randomNum(20, 30), randomNum(20, 30), randomNum(20, 30)]
            ],
            number1 = new CountUp("number1", 0, numbers[number][0], 0, 1, options),
            number2 = new CountUp("number2", 0, numbers[number][1], 0, 1, options),
            number3 = new CountUp("number3", 0, numbers[number][2], 0, 1, options);
    number1 && number1.start();
    number2 && number2.start();
    number3 && number3.start();
    number++;
    setInterval(function () {
        number1 && number1.reset();
        number2 && number2.reset();
        number3 && number3.reset();
        number1 = new CountUp("number1", 0, numbers[number][0], 0, 1, options);
        number2 = new CountUp("number2", 0, numbers[number][1], 0, 1, options);
        number3 = new CountUp("number3", 0, numbers[number][2], 0, 1, options);
        $("#bannerDataTitle").text(['本月已下店数据', '昨日已下店数据'][number]);
        number++;
        number = (number > 1) ? 0 : number;
        number1 && number1.start();
        number2 && number2.start();
        number3 && number3.start();
    }, 5000);
});
function showSubmitForm() {
    $("#shade,#formBox").show();
}

function hideSubmitForm() {
    $("#shade,#formBox").hide();
}