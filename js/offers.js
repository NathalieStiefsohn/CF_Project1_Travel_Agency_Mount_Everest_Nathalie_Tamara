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

printOffers();

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
// 
choice();

function choice() {
    for (i = 0; i < offers.length; i++) {
        var button = $(".price")[i];
        $(button).on("click", function() {
            var myJSON3, text3, obj3;
            //Storing data:
            chosen_offer = $(".price").index(this)
            myJSON3 = JSON.stringify(chosen_offer);
            localStorage.setItem("testJSON3", myJSON3);
            text3 = localStorage.getItem("testJSON3");
            obj3 = JSON.parse(text3);
            console.log(obj3);
            console.log("test")
        });
    }
}
