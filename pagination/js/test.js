/**
 * Created by Fomichev Yuri on 21.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
// Items
var items = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];

// Create List
for (var i = 0; i < items.length; i++) {
    $("ul").append("<li>" + items[i] + "</li>");
}

// Pagination
// Limit
var lim = 10;
// All Items Length
var len = $("ul li").length;
$("ul li:gt(" + (lim - 1) + ")").hide();
var totalPage = Math.round(len / lim);
for (var i = 1; i <= totalPage; i++) {
    $("#numbers").append("<a href='javascript:void(0);'>" + i + "</a>");
}
$("#numbers a:first").addClass("active");
$("#numbers a").click(function () {
    var index = $(this).index() + 1;
    var gt = lim * index;
    $("#numbers a").removeClass("active");
    $(this).addClass("active");
    $("ul li").hide();
    for (var i = gt - lim; i < gt; i++) {
        $("ul li:eq(" + i + ")").show();
    }
});