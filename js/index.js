var offers = [
    
   
    
    ["Peru", "pictures/peru_lama.jpg", "Peru ist ein Staat im westlichen Südamerika und grenzt im Norden an Ecuador und Kolumbien, im Süden an Chile und im Westen an den Pazifik. Hinter der schmalen Küstenregion beginnt die Sierra. Sie besteht aus mehreren Bergzügen der Anden, die von Längstälern unterbrochen werden. Typisch für die gesamte Andenregion sind dazu tief eingeschnittene Täler und Durchbrüche der Gebirgsketten durch große Flüsse, an der West- und Ostseite der Kordillere.", 138],

    ["Kirkjufell", "pictures/kirkjufell.jpg", "Der Berg Kirkjufell liegt im Westen von Island. Er befindet sich nahe der Stadt Grundarfjörður Der Berg gehört zum Vulkansystem Lýsuskarð. Zahlreiche geologische Schichten lassen sich an ihm feststellen, die im Allgemeinen denen anderer Berge im Norden von Snæfellsnes entsprechen; so findet man an seinem Fuße Larven des Holozän, darüber abwechselnd Sedimentschichten wie auch Larven aus den Zwischeneiszeiten. Der Gipfel besteht aus Hyaloklastiten.", 125],
    
    ["Andalusien", "pictures/andalusien.png", "Die bedeutendsten Naturräume Andalusiens sind die südliche Abdachung der Sierra Morena, das Becken des Guadalquivir und die Betische Kordillere, zu der die Sierra Nevada gehört. Der Campo de Gibraltar, mit dem Felsen von Gibraltar bildet den südlichsten Teil des europäischen Festlandes. Bei Tarifa, der südlichsten Stadt, liegen Europa und Afrika nur 14 Kilometer voneinander entfernt. Bekannt ist die Region auch durch ihre Musik, den Flamenco.", 145]
]


function printOffers() {
    // begin of for loop
    for (i = 0; i < offers.length; i++) {
        var destination = $(".destination")[i];
        destination.innerHTML = offers[i][0];
        $(".destination").addClass("brandfont");
        var picture = $(".picture")[i];
        picture.innerHTML = "<img class='img-responsive center-block' src= '" + offers[i][1] + "' alt='a picture'>";
        var description = $(".description")[i];
        description.textContent = offers[i][2];
        var price = $(".price")[i];
        price.innerHTML = "€" + offers[i][3] + " per person and night";


    }
    // end of loop

}
// end of function

printOffers();


var recommends = [
        ["pictures/walter.jpg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."],
        ["pictures/anastasia.jpg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."],
        ["pictures/ernst.jpg", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."]
]

function presentRecommends() {
    // begin of for loop
    for (i = 0; i < recommends.length; i++) {
        var image = $(".image")[i];
        image.innerHTML = "<img src= '" + recommends[i][0] + "' alt='a picture'>";
        
        
        var text = $(".text")[i];
        text.textContent = recommends[i][1];

    }
    // end of loop

}
// end of function

presentRecommends();

$('.carousel').carousel({
        interval: 3000
    })