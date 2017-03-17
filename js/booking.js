// array for destinations
var offers = [
        ["Nepal", "pictures/nepal2.jpg", "Menschen wie Götter wurden obdachlos, als Nepals unruhige Erde im April 2015 erbebte. Doch Stein für Stein bauen die Nepalesen ihre Häuser wieder auf. Mit einem Besuch im kleinen Himalayastaat zeigen wir den Menschen unsere Solidarität. Grandiose landschaftliche Höhepunkte hat das Land wie eh und je im Überfluss zu bieten. Kunstvolle Terrassenfelder, verschwiegene Bergseen und kleine Dörfer erkunden Sie auf dieser WanderStudienreise zu Fuß.", 156],
        ["Tibet", "pictures/tibet.jpg", "Tibet ist ein ausgedehntes Hochland in Zentralasien, das oft als Dach der Welt bezeichnet wird. Abgeschieden durch das Himalaya-Gebirge am Südrand hat Tibet eine eigenständige Kultur und schon vor dem 7. Jahrhundert haben sich auch eigenständige Staaten herausgebildet, die sich über Teile des Hochlands erstreckten. Mitte des 13. Jahrhunderts geriet Tibet durch die mongolische Herrschaft in den Einzugsbereich des chinesischen Vielvölkerstaates.", 145],
        ["Mount Everest", "pictures/mounteverest.jpg", "Der Mount Everest befindet sich im Mahalangur Himal in der Region Khumbu in Nepal an der Grenze zu China (Autonomes Gebiet Tibet); der westliche und südöstliche seiner drei Gipfelgrate bilden die Grenze. Auf nepalesischer Seite ist er Teil des Sagarmatha-Nationalparks, der zum UNESCO-Welterbe gehört. Wie im Grunde alle markanten Gipfel der Khumbu-Region ist auch der Mount Everest für die Sherpas ein heiliger Berg. Lust auf ein Risiko?", 380],
        ["Shandong", "pictures/china_shandong.jpg", "Shandong heißt übersetzt Östlich der Berge. Die Bezeichnung bezieht sich auf das Gebirge Taihang, in dessen Osten die Küstenprovinz liegt. Auch ein anderer Berg ist prägend für die Region: Der Taishan, der Taiberg, der als wichtigster der fünf daoistischen Berge Chinas gilt. Entdecken Sie auf diesen Seiten die Faszination der Provinz Shandong, dem Geburtsort des Konfuzius und natürlichen Highlights mit mehr als 3.000 Küstenkilometern!", 125],
        ["Mongolei", "pictures/mongolei_horse.jpg", "Die Mongolei, ein dünn besiedelt im Osten Asiens, grenzt im Norden an Russland und im Süden an China. Wer einen etwas älteren Atlas zu Hause hat, findet für den Nomadenstaat die Bezeichnung „Äußere Mongolei“ – im Unterschied zur „Inneren Mongolei“, die als autonome Region Teil Chinas ist. Bis zur Verfassungsänderung im Juli 1992 bezeichnete sich die Mongolei als Volksrepublik. Heute ist sie stolz darauf eine parlamentarische Republik zu sein.", 165],
        ["Peru", "pictures/peru_lama.jpg", "Peru ist ein Staat im westlichen Südamerika und grenzt im Norden an Ecuador und Kolumbien, im Süden an Chile und im Westen an den Pazifik. Hinter der schmalen Küstenregion beginnt die Sierra. Sie besteht aus mehreren Bergzügen der Anden, die von Längstälern unterbrochen werden. Typisch für die gesamte Andenregion sind dazu tief eingeschnittene Täler und Durchbrüche der Gebirgsketten durch große Flüsse, an der West- und Ostseite der Kordillere.", 138],

        ["Kirkjufell", "pictures/kirkjufell.jpg", "Der Berg Kirkjufell liegt im Westen von Island. Er befindet sich nahe der Stadt Grundarfjörður Der Berg gehört zum Vulkansystem Lýsuskarð. Zahlreiche geologische Schichten lassen sich an ihm feststellen, die im Allgemeinen denen anderer Berge im Norden von Snæfellsnes entsprechen; so findet man an seinem Fuße Larven des Holozän, darüber abwechselnd Sedimentschichten wie auch Larven aus den Zwischeneiszeiten. Der Gipfel besteht aus Hyaloklastiten.", 125],
        ["Fjorde, Norwegen", "pictures/fjord.jpg", "Seit jeher gehören die Fjorde zu den spektakulärsten geologischen Formationen der Welt. Typisch für die norwegischen Fjorde sind die langen und zugleich sehr schmalen Buchten, die sich tief in die Berge der Küste einschneiden. Ihre Ausläufer reichen weit in das Landesinnere und sind teilweise so tief wie die angrenzenden Klippen hoch sind. Erst an der Küste werden sie seichter und gewinnen eine gewisse Zurückhaltung. Einen Fjord nennt man auch Fjärde", 160],
        ["Teneriffa", "pictures/teneriffa.jpg", "Teneriffa ist eine Vulkaninsel. Sie gehört – wie alle Kanarischen Inseln – topografisch zu Afrika, liegt 288 Kilometer vor der Küste Marokkos und der Westsahara und ist 1.274 Kilometer von der Südküste des spanischen Mutterlandes entfernt. Sie ist mit etwa 1.000.000 Einwohnern, die bevölkerungsreichste Insel Spaniens. Die Hauptstadt ist Santa Cruz de Tenerife.Teneriffa besitzt wie alle anderen Inseln des Kanarenarchipels ganzjährig milde Temperaturen", 98],
        ["Mallorca", "pictures/mallorca.jpg", "Mallorca ist die größte Insel der Balearen Gruppe, bestehend aus den Gymnesianen und den Pityusen, die eine autonome Gemeinschaft innerhalb des spanischen Staates bildet. Auf Mallorca befindet sich die Hauptstadt der Balearischen Inseln, Palma. Das besondere Licht Mallorcas, die mit Windrädern und Oliven Hainen geschmückte Landschaft, das grandiose Hinterland mit verträumten Dörfern und die schönsten Sandstrände verzaubern jeden Besucher.", 130],

        ["Jakobsweg", "pictures/jakobsweg.jpg", "Als Jakobsweg (spanisch Camino de Santiago) wird eine Anzahl von Pilgerwegen durch ganz Europa bezeichnet, die alle das angebliche Grab des Apostels Jakobus in Santiago de Compostela in Galicien (Spanien) zum Ziel haben. In erster Linie wird darunter der Camino Francés verstanden, jene hochmittel alterliche Haupt Verkehrsachse Nordspaniens, die von den Pyrenäen zum Jakobsgrab führt und die Königsstädte Jaca, Pamplona und León miteinander verbindet.", 25],
        ["Andalusien", "pictures/andalusien.png", "Die bedeutendsten Naturräume Andalusiens sind die südliche Abdachung der Sierra Morena, das Becken des Guadalquivir und die Betische Kordillere, zu der die Sierra Nevada gehört. Der Campo de Gibraltar, mit dem Felsen von Gibraltar bildet den südlichsten Teil des europäischen Festlandes. Bei Tarifa, der südlichsten Stadt, liegen Europa und Afrika nur 14 Kilometer voneinander entfernt. Bekannt ist die Region auch durch ihre Musik, den Flamenco.", 145]
    ]
    // fill dropdown for destinations
fill_destination();

function fill_destination() {
    for (i = 0; i < offers.length; i++) {
        $("#cityname").append("<option id='destination" + i + "' value='" + offers[i][0] + "'>" + offers[i][0] + "</option>")
    } //end for loop
    // console.log(destination);
} //end function destination


function get_price() {
    price_init = "";

    for (i = 0; i < offers.length; i++) {
        if (user_input.destination === offers[i][0]) {
            price_init = offers[i][3];
        } // end if
    } //end for
    // name discount calculation:
    end_price = price_init * user_input.nights * user_input.people
    var name_discount = (0 / 100);
    if (names.firstname.charAt(0) === "L" || "l") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "C" || "c") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "H" || "h") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "I" || "i") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "G" || "g") {
        name_discount = (20 / 100);
    } //end if
    console.log(name_discount)
        // console.log(names.firstname.charAt(0))
        // 
    var test2
    var promo_code
    text2 = localStorage.getItem("testJSON2");
    promo_code = JSON.parse(text2);
    console.log(promo_code[1])

    game_discount = promo_code[1];
    console.log(game_discount)


    if (game_discount >= 0) {
        console.log("there is a game discount of " + game_discount)

        discounts = 1 - (name_discount + game_discount)
        console.log(discounts)
        discounted_price = Math.round(end_price * discounts)
        console.log("price function " + user_input.destination + ": " + discounted_price);

    } else {
        console.log("there is no game_discount")
        discounts = 1 - (name_discount)
        console.log(discounts)
        discounted_price = Math.round(end_price * discounts)
        console.log("price function " + user_input.destination + ": " + discounted_price);
    }





} //end function price

// fill result site

function result() {
    if (names.firstname != "") {
        $("#congratulation").html("<h4>Congratulations, " + names.firstname + "! <br><br> Booking on this page means that you are a very active person, who is interested in advanture and nature. <br><br> You will experience an extraordinary travelling experience, which you will definitely not regret!</h4>").addClass("text-success").addClass("text-justify");
        $("#error_congratulation").html("").removeClass('alert').removeClass("alert-danger")
        console.log("input was given")
    }

    if ((names.firstname === "") && (names.familyname === "")) {
        $("#error_congratulation").html("Please enter your name.").addClass("alert-danger").addClass('alert')
        $("#congratulation").html("")
        console.log("no input - local storage cleared")
    }



    if (user_input.departure === "") {
        $("#result_departure").html("Please enter a departure date to check the availabilty of free rooms.").addClass("alert-danger").addClass("alert")
        var check_departure = "empty"
        $("#result_success").html("")
    } else {
        $("#result_departure").html("").removeClass("alert-danger").removeClass("alert")
        var check_departure = "ok"

    }
    if (user_input.nights === "") {
        var check_nights = "empty"
        $("#result_success").html("")
        $("#result_nights").html("Please enter the number of nights to check the availabilty of free rooms.").addClass("alert-danger").addClass("alert")

    } else {
        $("#result_nights").html("").removeClass("alert-danger").removeClass("alert")
        var check_nights = "ok"

    }
    if (user_input.people === "") {
        $("#result_people").html("Please enter the number of travelers to check the availabilty of free rooms.").addClass("alert-danger").addClass("alert")
        var check_people = "empty"
        $("#result_success").html("")
    } else {
        $("#result_people").html("").removeClass("alert-danger").removeClass("alert")
        var check_people = "ok"
    }
    if (user_input.destination == null) {
        $("#result_destination").html("Please choose a destination.").addClass("alert-danger").addClass("alert")
        var check_destination = "empty"
        $("#result_success").html("")
        console.log(check_destination)
    } else {
        $("#result_destination").html("").removeClass("alert-danger").removeClass("alert")
        var check_destination = "ok"
    }


    if ((check_departure === "ok" && check_nights === "ok" && check_people === "ok" && check_destination === "ok")) {
        $("#result_success").html("<h4>Fortunately, we still have free rooms for " + user_input.nights + " nights on your desired departure date.</h4>").addClass("text-success").addClass("text-justify")
        $("#result_price").html("<h4>The total price for your journey to <b>" + user_input.destination + "</b> amounts to <b>€" + discounted_price + "</b>.</h4>").addClass("text-success").addClass("text-justify")
        $("#personal_data").addClass('visible').removeClass("hide");
    } else {
        $("#personal_data").addClass('hide').removeClass("visible");
        $("#result_success").html("");
        $("#result_price").html("");
        console.log("fill in all fields")
    }



    console.log(user_input.departure + ", " + user_input.nights + ", " + user_input.people)
}



$("#submitbutton1").click(save_first_input);

function save_first_input() {

    g = $("#destination").val(),
        id = $('#cityname').find('option').filter(function() {
            return $.trim($(this).text()) === g;
        }).attr('value');

    user_input = {
        discount: document.getElementById("discount").value,
        destination: id,
        departure: document.getElementById("departure").value,
        nights: document.getElementById("nights").value,
        people: document.getElementById("people").value
    };


    console.log("user_input.destination : " + user_input.destination + " var id: " + id + " var g: " + g)

    // console.log("after saving variable "+user_input.destination)
    var myJSON, text, obj;
    //Storing data:

    names = {
        familyname: document.getElementById("familyname").value,
        firstname: document.getElementById("firstname").value
    }

    myJSON = JSON.stringify(names);
    localStorage.setItem("testJSON", myJSON);

    //call function price
    get_price();

    //call result function
    result();

    //call print_offers function

    print_offers();


} //end of save_first_input function

$("#submitbutton2").on("click", payment)

function payment() {

payment_info = {
        IBAN: document.getElementById("IBAN").value,
        BIC: document.getElementById("BIC").value,
        email: document.getElementById("email").value,
        
    };



    var check_BIC, check_IBAN, check_email

    if (payment_info.IBAN === "") {
        $("#result_IBAN").html("Please enter your IBAN to proceed to payment.").addClass("alert-danger").addClass("alert")
        var check_IBAN = "empty"
        console.log("no iban")
    } else {
        $("#result_IBAN").html("").removeClass("alert-danger").removeClass("alert")
        var check_IBAN = "ok"
        console.log("iban ok")
    }

    if (payment_info.BIC === "") {
        $("#result_BIC").html("Please enter your BIC to proceed to payment.").addClass("alert-danger").addClass("alert")
        var check_BIC = "empty"
        console.log("no bic")
    } else {
        $("#result_BIC").html("").removeClass("alert-danger").removeClass("alert")
        var check_BIC = "ok"
        console.log("bic ok")

    }

    if (payment_info.email === "") {
        $("#result_email").html("Please enter your email address to proceed to payment.").addClass("alert-danger").addClass("alert")
        var check_email = "empty"
        console.log("no email")
    } else {
        $("#result_email").html("").removeClass("alert-danger").removeClass("alert")
        var check_email = "ok"
        console.log("email ok")

    }


    if ((check_BIC === "ok" && check_IBAN === "ok" && check_email === "ok")) {
        $("#anchor_submit_payment").attr("href", "https://www.paypal.com/signin?country.x=AT")
        console.log("attribute href added to payment button")
    } else {

        console.log("fill in all payment data")
    }

} //end function payment




// deleting cookies
$("#delete_cookies").click(delete_cookies);

function delete_cookies() {
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    obj = "";
    myJSON = JSON.stringify(obj);
    localStorage.setItem("testJSON", myJSON);

    text2 = localStorage.getItem("testJSON2");
    promo_code = JSON.parse(text2);
    promo_code = "";
    myJSON2 = JSON.stringify(promo_code);
    localStorage.setItem("testJSON2", myJSON2);

    var myJSON3
    text3 = localStorage.getItem("testJSON3");
    obj3 = JSON.parse(text3);
    obj3 = "";
    myJSON3 = JSON.stringify(obj3);
    localStorage.setItem("testJSON3", myJSON3);

    $("#firstname").val("");
    $("#familyname").val("");
    $("#discount").val("");
    $("#IBAN").val("");
    $("#BIC").val("");
    $("#email").val("");
    $("#nights").val("");
    $("#people").val("");
    $("#departure").val("");
    $("#destination").val("");
}

var obj3;

//Retrieving data from local storage:
localstorage();

function localstorage() {
    var test2
    var promo_code
    text2 = localStorage.getItem("testJSON2");
    promo_code = JSON.parse(text2);
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    $("#firstname").val(obj.firstname);
    $("#familyname").val(obj.familyname);


    $("#discount").val(promo_code[0]);

    var myJSON3, text3;
    text3 = localStorage.getItem("testJSON3");
    obj3 = JSON.parse(text3);



    if (obj3 >= 0) {
        show_destination = offers[obj3][0]
            // calledonsole.log("var show_destination: "+show_destination)
        $("#destination").val(show_destination);
    }

}

print_offers();

function print_offers() {
    g = $("#destination").val(),
        id = $('#cityname').find('option').filter(function() {
            return $.trim($(this).text()) === g;
        }).attr('value');

    user_input = {
        IBAN: document.getElementById("IBAN").value,
        discount: document.getElementById("discount").value,
        destination: id,
        departure: document.getElementById("departure").value,
        nights: document.getElementById("nights").value,
        people: document.getElementById("people").value
    };

    if (user_input.destination == null) {
        $("#world").html('');
        $(".destination").html("");
        $(".picture").html("");
        $(".description2").html("");
        $(".price").html("");
        $(".details").eq(0).html("");
        $(".details").eq(1).html("");
    } else {
        // console.log("function printOffers called")
        console.log("user_input.destination: " + user_input.destination)
            // console.log("offers.length: "+offers.length)
        for (i = 0; i < offers.length; i++) {
            if (user_input.destination === offers[i][0]) {
                x = offers[i][0];
                // console.log("var x: "+x)
                var y
                y = i
                    // console.log("var y: "+y)
            } // end if

        } //end for
        // console.log("index from destination position in array: " + y)

        $("#world").html('"The World Is a Book and Those Who Do Not Travel Read Only One Page."').addClass("text-info").addClass("blockquote");
        $(".destination").html(offers[y][0]).addClass("brandfont");
        $(".picture").html("<img class='img-responsive center-block shadow' src= '" + offers[y][1] + "' alt='a picture'>");
        $(".description2").html(offers[y][2]).addClass("text-justify");
        $(".price").html("€" + offers[y][3] + " per person and night");
        $(".details").eq(0).html("<strong>The price includes:</strong><br><ul><li>Accommondation</li><li>Guide</li><li>Entries to sights</li></ul")
        $(".details").eq(1).html("<strong>The price does not include:</strong><br><ul><li>Flights</li><li>Food and Beverages</li><li>Tips</li></ul")
    } //end if

}
// end of function
