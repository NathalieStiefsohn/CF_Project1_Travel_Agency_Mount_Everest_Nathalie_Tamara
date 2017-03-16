// array for destinations
var offers = [
    ["Nepal", "../images_offer/nepal2.jpg", "Menschen wie Götter wurden obdachlos, als Nepals unruhige Erde im April 2015 erbebte. Doch Stein für Stein bauen die Nepalesen ihre Häuser wieder auf und rekonstruieren die Heiligtümer in mühevoller Kleinarbeit, getragen von der Kraft ihres Glaubens. Mit einem Besuch im kleinen Himalayastaat zeigen wir den Menschen unsere Solidarität. Grandiose landschaftliche Höhepunkte hat das Land wie eh und je im Überfluss zu bieten, genauso wie eine jahrhundertealte Kultur. Kunstvolle Terrassenfelder, verschwiegene Bergseen und kleine Dörfer erkunden Sie auf dieser WanderStudienreise zu Fuß. Ein Höhepunkt im wahrsten Sinne des Wortes: eine zweitägige Wanderung vor der Kulisse schneebedeckter Achttausender.", 156],
    ["Tibet", "../images_offer/tibet.jpg", "Tibet ist ein ausgedehntes Hochland in Zentralasien, das oft als Dach der Welt bezeichnet wird. Abgeschieden durch das Himalaya-Gebirge am Südrand hat Tibet eine eigenständige Kultur und schon vor dem 7. Jahrhundert auch eigenständige Staaten (Shangshung, Tubo) herausgebildet, die sich über Teile des Hochlands erstreckten. Mitte des 13. Jahrhunderts geriet Tibet durch die mongolische Herrschaft in den Einzugsbereich des chinesischen Vielvölkerstaates.", 145],
    ["Shandong", "../images_offer/china_shandong.jpg", "Die chinesische Provinz Shandong liegt an der Ostküste von China, ziemlich genau auf halber Strecke zwischen den Megastädten Peking und Shanghai. Der chinesische Name der Provinz Shandong ist (ausgesprochen Shāndōng), was übesetzt in etwa östlich des Berges bedeutet. Im Falle Shangdongs ist vermutlich der Taishan-Berg gemeint, der in Shandong liegt.", 125],
    ["Mongolei", "../images_offer/mongolei.jpg", "Die Mongolei, ein dünn besiedelter Binnenstaat im Osten Asiens, grenzt im Norden an Russland und im Süden an China. Wer einen etwas älteren Atlas zu Hause hat, findet für den Nomadenstaat die Bezeichnung „Äußere Mongolei“ – im Unterschied zur „Inneren Mongolei“, die als autonome Region Teil Chinas ist. Bis zur Verfassungsänderung im Juli 1992 bezeichnete sich die Mongolei als Volksrepublik. Heute ist sie stolz darauf eine parlamentarische Republik zu sein, dessen Staatsoberhaupt alle vier Jahre vom Volk gewählt wird.", 165],
    ["Peru", "../images_offer/peru.jpg", "Peru ist ein Staat im westlichen Südamerika und grenzt im Norden an Ecuador und Kolumbien, im Osten an Brasilien, im Südosten an Bolivien, im Süden an Chile und im Westen an den Pazifik. Hinter der schmalen Küstenregion beginnt die Sierra. Sie besteht aus mehreren Bergzügen der Anden, die von Längstälern unterbrochen werden. Typisch für die gesamte Andenregion sind dazu tief eingeschnittene Täler (Canyons) und Durchbrüche der Gebirgsketten (span. Pongo) durch große Flüsse, an der West- und Ostseite der Kordillere.", 138],
    ["Mount Everest", "../images_offer/mounteverest.jpg", "Der Mount Everest befindet sich im Mahalangur Himal in der Region Khumbu in Nepal an der Grenze zu China (Autonomes Gebiet Tibet); der westliche und südöstliche seiner drei Gipfelgrate bilden die Grenze. Auf nepalesischer Seite ist er Teil des Sagarmatha-Nationalparks, der zum UNESCO-Welterbe gehört. Wie im Grunde alle markanten Gipfel der Khumbu-Region ist auch der Mount Everest für die Sherpas ein heiliger Berg.", 380],
    ["Kirkjufell", "..images_offer/kirkjufell.jpg", "Der Berg Kirkjufell (463 m) liegt im Westen von Island. Er befindet sich nahe der Stadt Grundarfjörður Der Berg gehört zum Vulkansystem Lýsuskarð. Zahlreiche geologische Schichten lassen sich an ihm feststellen, die im Allgemeinen denen anderer Berge im Norden von Snæfellsnes entsprechen; so findet man an seinem Fuße Laven des Holozän, darüber abwechselnd Sedimentschichten wie auch Laven aus den Zwischeneiszeiten des Tertiär. Diese Larven sind einige Millionen Jahre alt. Dazwischen findet man auch Sedimentschichten mit Resten von Meereslebewesen wie am Kap Búlandshöfði. Der Gipfel besteht größtenteils aus Hyaloklastiten.", 125],
    ["Teneriffa", "../images_offer/teneriffa.jpg", "Teneriffa ist eine Vulkaninsel. Sie gehört – wie alle Kanarischen Inseln – topografisch zu Afrika, liegt 288 Kilometer vor der Küste Marokkos und der Westsahara und ist 1.274 Kilometer von der Südküste des spanischen Mutterlandes entfernt. Sie ist mit etwa 1.000.000 Einwohnern, die bevölkerungsreichste Insel Spaniens. Die Hauptstadt ist Santa Cruz de Tenerife.", 98],
    ["Mallorca", "../images_offer/mallorca.jpg", "Mallorca ist die größte Insel der Balearen-Gruppe, bestehend aus den Gymnesianen und den Pityusen, die eine autonome Gemeinschaft innerhalb des spanischen Staates bildet. Auf Mallorca befindet sich die Hauptstadt der Balearischen Inseln, Palma. Das besondere Licht Mallorcas, die mit Windrädern und Olivenhainen geschmückte Landschaft, das grandiose Hinterland mit verträumten Dörfern sowie die schönsten Sandstrände und Buchten verzaubern jeden Besucher.", 130],
    ["Fjorde, Norwegen", "../images_offer/fjord.jpg", "Über eintausend Fjorde gibt es in Norwegen. Doch die legendärsten von ihnen – die, die Sie bestimmt schon mal auf Postkarten gesehen haben, wie der Nærøyfjord, der Sognefjord, der Lysefjord und der Geirangerfjord – liegen an der Westküste. Die Fjorde sehen aus wie ruhige blaue Seen. Sie enthalten jedoch Salzwasser – denn sie sind die verlängerten Arme der Meere.", 160],
    ["Jakobsweg", "../images_offer/jakobsweg.jpg", "Als Jakobsweg (spanisch Camino de Santiago) wird eine Anzahl von Pilgerwegen durch ganz Europa bezeichnet, die alle das angebliche Grab des Apostels Jakobus in Santiago de Compostela in Galicien (Spanien) zum Ziel haben. In erster Linie wird darunter der Camino Francés verstanden, jene hochmittelalterliche Hauptverkehrsachse Nordspaniens, die von den Pyrenäen zum Jakobsgrab führt und die Königsstädte Jaca, Pamplona, Estella, Burgos und León miteinander verbindet. Diese Route, so wie sie heute noch begangen wird, entstand in der ersten Hälfte des 11. Jahrhunderts.", 25],
    ["Andalusien", "../images_offer/andalusien.png", "Die bedeutendsten Naturräume Andalusiens sind die südliche Abdachung der Sierra Morena, das Becken des Guadalquivir und die Betische Kordillere, zu der die Sierra Nevada gehört. Der Campo de Gibraltar, mit dem Felsen von Gibraltar bildet den südlichsten Teil des europäischen Festlandes. Bei Tarifa, der südlichsten Stadt, liegen Europa und Afrika nur 14 Kilometer voneinander entfernt, getrennt durch die Straße von Gibraltar. Bekannt ist die Region auch durch ihre Musik, den Flamenco. Andalusien war in der Vergangenheit oft umkämpft. Es kam daher zu vielfältigen kulturellen Einflüsse, wie zum Beispiel durch die Araber oder die Römer.", 145]
];
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
    if (names.firstname.charAt(0) === "L") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "C") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "H") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "I") {
        name_discount = (20 / 100);
    } //end if
    if (names.firstname.charAt(0) === "G") {
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


if (game_discount>=0){
console.log("there is a game discount of "+game_discount)

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
    $("#world").html('"The World Is a Book and Those Who Do Not Travel Read Only One Page."').addClass("text-info").addClass("blockquote-reverse");
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
        $("#result_success").html("<h4>Fortunately, we still have free rooms for " + user_input.nights + " nights on your desired departure date.<h4>").addClass("text-success").addClass("text-justify")
        $("#result_price").html("<h4>The total price for your journey to <b>" + user_input.destination + "</b> amounts to <b>€" + discounted_price + "</b>.<h4> <br> <a target='_blank' href='https://www.paypal.com/signin?country.x=AT'><button class='btn btn-success'>book now</button></a>").addClass("text-success").addClass("text-justify")
    } else {
        console.log("fill in all fields")
    }



    console.log(user_input.departure + ", " + user_input.nights + ", " + user_input.people)
}




// local storage

$("#submitbutton").click(savevariables);

function savevariables() {
    var g = $("#destination").val(),
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

} //end of savevariables function

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

    $("#firstname").val("");
    $("#familyname").val("");
    $("#discount").val("");
    $("#IBAN").val("");
    $("#BIC").val("");
    $("#nights").val("");
    $("#people").val("");
    $("#departure").val("");
    $("#destination").val("");
}


//Retrieving data from local storage:
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
}
localstorage();
