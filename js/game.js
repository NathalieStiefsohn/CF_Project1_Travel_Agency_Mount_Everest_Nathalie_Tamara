var cities = [
    ["Österreich", "Wien", "pictures/wien.jpg"],
    ["Peru", "Lima", "pictures/lima.jpg"],
    ["Schweiz", "Bern", "pictures/bern.jpg"],
    ["Spanien", "Madrid", "pictures/madrid.jpg"],
    ["Norwegen", "Oslo", "pictures/oslo.jpg"],
    ["Island", "Reykjavik", "pictures/Reykjavík.jpg"],
    ["China", "Peking", "pictures/peking.jpg"],
    ["Nepal", "Kathmandu", "pictures/kathmandu.jpg"],
    ["Mongolei", "Ulaanbaatar", "pictures/ulaanbaatar.jpg"],
    ["Andalusien", "Sevilla", "pictures/sevilla.jpg"],
    ["Teneriffa", "Santa Cruz de Tenerife", "pictures/santa_cruz.jpg"],
    ["Italien", "Rom", "pictures/rom.jpg"],
    ["Ungarn", "Budapest", "pictures/budapest.jpg"],
    ["Portugal", "Lissabon", "pictures/lissabon.jpg"],
    ["Bolivien", "Sucra", "pictures/sucra.jpg"],
    ["Brasilien", "Brasilia", "pictures/brasilia.jpg"],
    ["Argentinien", "Buenos Aires", "pictures/buenosaires.jpg"],
    ["Kolumbien", "Bogota", "pictures/bogota.jpg"],
    ["USA", "Washington D.C:", "pictures/washington.jpg"],
    ["Australien", "Canberra", "pictures/canberra.jpg"],
    ["Neuseeland", "Wellington", "pictures/wellington.jpg"],
    ["Schweden", "Stockholm", "pictures/stockholm.jpg"],
    ["Ägypten", "Kairo", "pictures/kairo.jpg"],
    ["Sudan", "Khartum", "pictures/khartum.jpg"],
    ["Südafrika", "Kapstadt", "pictures/kapstadt.jpg"],
    ["Tschechien", "Prag", "pictures/prag.jpg"],
    ["Belgien", "Brüssel", "pictures/bruessel.jpg"],
    ["Frankreich", "Paris", "pictures/paris.jpg"],
    ["Deutschland", "Berlin", "pictures/berlin.jpg"],
    ["Dänemark", "Kopenhagen", "pictures/kopenhagen.jpg"]

]


random_questions();

function random_questions() {
    number1 =
        number2 =
        number3 =
        number4 =
        number5 = Math.floor(Math.random() * (29))

    // run this loop until number1 is different than number5
    do {
        number1 = Math.floor(Math.random() * (29));
    } while (number1 === number5);
    // run this loop until number2 is different than number5 and number1
    do {
        number2 = Math.floor(Math.random() * (29));
    } while (number2 === number5 || number2 === number1);
    // run this loop until number3 is different than number5 and number1 and number2
    do {
        number3 = Math.floor(Math.random() * (29));
    } while (number3 === number5 || number3 === number1 || number3 === number2);
    // run this loop until number4 is different than number5 and number1 and number2 and number3
    do {
        number4 = Math.floor(Math.random() * (29));
    } while (number4 === number5 || number4 === number1 || number4 === number2 || number4 === number3);

    question1 = cities[number1];
    question2 = cities[number2];
    question3 = cities[number3];
    question4 = cities[number4];
    question5 = cities[number5];
    allquestions = [];

    allquestions.push(question1);
    allquestions.push(question2);
    allquestions.push(question3);
    allquestions.push(question4);
    allquestions.push(question5);

    for (i = 0; i < allquestions.length; i++) {
        var country = $(".question")[i];
        country.innerHTML = allquestions[i][0];
        var question_image = $(".question_image")[i];
        $(question_image).attr('src', allquestions[i][2]);
    }

}


// get game result

$("#game_result").on("click", game_result)

function game_result() {

    var answers = {
        answer1: document.getElementById("answer1").value,
        answer2: document.getElementById("answer2").value,
        answer3: document.getElementById("answer3").value,
        answer4: document.getElementById("answer4").value,
        answer5: document.getElementById("answer5").value
    }
    var check1
    var check2
    var check3
    var check4
    var check5


    // check if correct

    if (answers.answer1 == question1[1]) {
        check1 = 1;
        console.log(answers.answer1 + question1[1])
        console.log("answer1 is correct " + answers.answer1 + " = " + question1[1])
    } else {
        check1 = 0
        console.log("answer1 is NOT correct" + answers.answer1 + " =/= " + question1[1])
    }
    if (answers.answer2 == question2[1]) {
        check2 = 1;

        console.log("answer2 is correct " + answers.answer2 + " = " + question2[1])
    } else {
        check2 = 0
        console.log("answer2 is NOT correct" + answers.answer2 + " =/= " + question2[1])
    }
    if (answers.answer3 == question3[1]) {
        check3 = 1;
        console.log("answer3 is correct " + answers.answer3 + " = " + question3[1])
    } else {
        check3 = 0
        console.log("answer3 is NOT correct" + answers.answer3 + " =/= " + question3[1])
    }
    if (answers.answer4 == question4[1]) {
        check4 = 1;

        console.log("answer4 is correct " + answers.answer4 + " = " + question4[1])
    } else {
        check4 = 0
        console.log("answer4 is NOT correct" + answers.answer4 + " =/= " + question4[1])
    }
    if (answers.answer5 == question5[1]) {
        check5 = 1;
        console.log("answer5 is correct " + answers.answer5 + " = " + question5[1])
    } else {
        check5 = 0
        console.log("answer5 is NOT correct" + answers.answer5 + " =/= " + question5[1])
    }

    console.log(answers)
    console.log("checks: " + check1 + check2 + check3 + check4 + check5)
    var check_sum = check1 + check2 + check3 + check4 + check5
    console.log("check_sum: " + check_sum)



    // promo-code 5 digit number
    // 
    //  
    digit1 = Math.floor(Math.random() * (9))
    digit2 = Math.floor(Math.random() * (9))
    digit3 = Math.floor(Math.random() * (9))
    digit4 = Math.floor(Math.random() * (9))
    digit5 = Math.floor(Math.random() * (9))
    var five_digit_number1 = String(digit1) + String(digit5) + String(digit2) + String(digit3) + String(digit4)
    var five_digit_number2 = String(digit5) + String(digit3) + String(digit4) + String(digit1) + String(digit2)

    var promo_code1 = [five_digit_number1, 0.05]
    var promo_code2 = [five_digit_number2, 0.1]
    console.log(promo_code1)
    console.log(promo_code2)



    var myJSON2, text2, obj2;






    if (check_sum == 4) {
        $("#discount_code").html("Congratulations! You have " + check_sum + " correct answers. Use this promo-code for your next booking to get a 5% discount. This is your dicsount code: <strong>" + promo_code1[0] + "</strong>").addClass("alert").addClass("alert-success").removeClass("alert-danger")

        //Storing data:

        myJSON2 = JSON.stringify(promo_code1);
        localStorage.setItem("testJSON2", myJSON2);
    }

    if (check_sum == 5) {
        $("#discount_code").html("Congratulations! You have " + check_sum + " correct answers. Use this promo-code for your next booking to get a 10% discount. This is your dicsount code: <strong>" + promo_code2[0] + "</strong>").addClass("alert").addClass("alert-success").removeClass("alert-danger")
        myJSON2 = JSON.stringify(promo_code2);
        localStorage.setItem("testJSON2", myJSON2);
    }

    // getting data
    // 
    text2 = localStorage.getItem("testJSON2");
    promo_code = JSON.parse(text2);
    console.log(promo_code)

    if (check_sum < 4) {
        $("#discount_code").html("We are really sorry. You only have " + check_sum + " correct answers. You do not get a discount code.").addClass("alert").addClass("alert-danger").removeClass("alert-success")
            //Storing data:

        text2 = localStorage.getItem("testJSON2");
        promo_code = JSON.parse(text2);
        promo_code = "";
        myJSON2 = JSON.stringify(promo_code);
        localStorage.setItem("testJSON2", myJSON2);
    }



}
