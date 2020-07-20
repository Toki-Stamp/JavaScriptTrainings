import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        classifiers: {
            /* статус */ commonSelStateSubject: [
                {
                    "type": 19,
                    "code": 1,
                    "name": "Актуален",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 19,
                    "code": 2,
                    "name": "Умер/Прекращен",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 19,
                    "code": 3,
                    "name": "Ошибочно внесен",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 19,
                    "code": 4,
                    "name": "Присоединен",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": null
                }
            ],
            /* вид */ commonSelTypeSubject: [
                {
                    "type": 21,
                    "code": 1,
                    "name": "Республика Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство, АТЕ",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 2,
                    "name": "Административно-территориальная единица",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство, АТЕ",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 3,
                    "name": "Иностранное государство",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство, АТЕ",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 4,
                    "name": "Гражданин Республики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Физическое лицо",
                    "name2": "F",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 5,
                    "name": "Иностранный гражданин",
                    "act": 1,
                    "shortName": null,
                    "name1": "Физическое лицо",
                    "name2": "F",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 6,
                    "name": "Лицо без гражданства",
                    "act": 1,
                    "shortName": null,
                    "name1": "Физическое лицо",
                    "name2": "F",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 7,
                    "name": "Юридическое лицо, резидент Республики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Юридическое лицо",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 8,
                    "name": "Юридическое лицо, нерезидент Республики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Юридическое лицо",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 9,
                    "name": "Международная организация",
                    "act": 1,
                    "shortName": null,
                    "name1": "Юридическое лицо",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 10,
                    "name": "Международное юридическое лицо (организация, не являющаяся юридическим лицом)",
                    "act": 1,
                    "shortName": null,
                    "name1": "Юридическое лицо",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 11,
                    "name": "Государственный орган",
                    "act": 1,
                    "shortName": null,
                    "name1": "Юридическое лицо",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 12,
                    "name": "Иной субъект",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": "U",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 13,
                    "name": "Индивидуальный предприниматель, резидент Республики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": "P",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 14,
                    "name": "Индивидуальный предприниматель, нерезидент Республики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": "P",
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 15,
                    "name": "Регистратор республиканской организации по государственной регистрации",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 16,
                    "name": "Нотариус",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 17,
                    "name": "Риэлтер",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иной субъект",
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 100,
                    "name": "Некорректный субъект",
                    "act": 1,
                    "shortName": null,
                    "name1": "Некорректный субъект",
                    "name2": null,
                    "visualCode": null
                },
                {
                    "type": 21,
                    "code": 101,
                    "name": "Авторизованный посредник",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": null
                }
            ],
            /* страна */ formTypeCountry: [
                {
                    "type": 18,
                    "code": 1,
                    "name": "АФГАНИСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Переходное Исламское Государство Афганистан",
                    "name2": null,
                    "visualCode": "004"
                },
                {
                    "type": 18,
                    "code": 2,
                    "name": "АЛБАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Албания",
                    "name2": null,
                    "visualCode": "008"
                },
                {
                    "type": 18,
                    "code": 3,
                    "name": "АНТАРКТИДА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "010"
                },
                {
                    "type": 18,
                    "code": 4,
                    "name": "АЛЖИР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Алжирская Народная Демократическая Республика",
                    "name2": null,
                    "visualCode": "012"
                },
                {
                    "type": 18,
                    "code": 5,
                    "name": "АМЕРИКАНСКОЕ САМОА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "016"
                },
                {
                    "type": 18,
                    "code": 6,
                    "name": "АНДОРРА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Княжество Андорра",
                    "name2": null,
                    "visualCode": "020"
                },
                {
                    "type": 18,
                    "code": 7,
                    "name": "АНГОЛА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Ангола",
                    "name2": null,
                    "visualCode": "024"
                },
                {
                    "type": 18,
                    "code": 8,
                    "name": "АНТИГУА И БАРБУДА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "028"
                },
                {
                    "type": 18,
                    "code": 9,
                    "name": "АЗЕРБАЙДЖАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Азербайджан",
                    "name2": null,
                    "visualCode": "031"
                },
                {
                    "type": 18,
                    "code": 10,
                    "name": "АРГЕНТИНА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Аргентинская Республика",
                    "name2": null,
                    "visualCode": "032"
                },
                {
                    "type": 18,
                    "code": 11,
                    "name": "АВСТРАЛИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "036"
                },
                {
                    "type": 18,
                    "code": 12,
                    "name": "АВСТРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Австрийская Республика",
                    "name2": null,
                    "visualCode": "040"
                },
                {
                    "type": 18,
                    "code": 13,
                    "name": "БАГАМЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Содружество Багамы",
                    "name2": null,
                    "visualCode": "044"
                },
                {
                    "type": 18,
                    "code": 14,
                    "name": "БАХРЕЙН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Бахрейн",
                    "name2": null,
                    "visualCode": "048"
                },
                {
                    "type": 18,
                    "code": 15,
                    "name": "БАНГЛАДЕШ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Народная Республика Бангладеш",
                    "name2": null,
                    "visualCode": "050"
                },
                {
                    "type": 18,
                    "code": 16,
                    "name": "АРМЕНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Армения",
                    "name2": null,
                    "visualCode": "051"
                },
                {
                    "type": 18,
                    "code": 17,
                    "name": "БАРБАДОС",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "052"
                },
                {
                    "type": 18,
                    "code": 18,
                    "name": "БЕЛЬГИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Бельгии",
                    "name2": null,
                    "visualCode": "056"
                },
                {
                    "type": 18,
                    "code": 19,
                    "name": "БЕРМУДЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "060"
                },
                {
                    "type": 18,
                    "code": 20,
                    "name": "БУТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Бутан",
                    "name2": null,
                    "visualCode": "064"
                },
                {
                    "type": 18,
                    "code": 21,
                    "name": "Боливия, Многонациональное Государство",
                    "act": 1,
                    "shortName": null,
                    "name1": "Многонациональное Государство Боливия",
                    "name2": null,
                    "visualCode": "068"
                },
                {
                    "type": 18,
                    "code": 22,
                    "name": "БОСНИЯ И ГЕРЦЕГОВИНА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Босния и Герцеговина",
                    "name2": null,
                    "visualCode": "070"
                },
                {
                    "type": 18,
                    "code": 23,
                    "name": "БОТСВАНА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республики Ботсвана",
                    "name2": null,
                    "visualCode": "072"
                },
                {
                    "type": 18,
                    "code": 24,
                    "name": "ОСТРОВ БУВЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "074"
                },
                {
                    "type": 18,
                    "code": 25,
                    "name": "БРАЗИЛИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Республика Бразилия",
                    "name2": null,
                    "visualCode": "076"
                },
                {
                    "type": 18,
                    "code": 26,
                    "name": "БЕЛИЗ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "084"
                },
                {
                    "type": 18,
                    "code": 27,
                    "name": "БРИТАНСКАЯ ТЕРРИТОРИЯ В ИНДИЙСКОМ ОКЕАНЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "086"
                },
                {
                    "type": 18,
                    "code": 28,
                    "name": "СОЛОМОНОВЫ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "090"
                },
                {
                    "type": 18,
                    "code": 29,
                    "name": "ВИРГИНСКИЕ ОСТРОВА, БРИТАНСКИЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Британские Виргинские Острова",
                    "name2": null,
                    "visualCode": "092"
                },
                {
                    "type": 18,
                    "code": 30,
                    "name": "БРУНЕЙ-ДАРУССАЛАМ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство Бруней-Даруссалам",
                    "name2": null,
                    "visualCode": "096"
                },
                {
                    "type": 18,
                    "code": 31,
                    "name": "БОЛГАРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Болгария",
                    "name2": null,
                    "visualCode": "100"
                },
                {
                    "type": 18,
                    "code": 32,
                    "name": "МЬЯНМА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Союз Мьянма",
                    "name2": null,
                    "visualCode": "104"
                },
                {
                    "type": 18,
                    "code": 33,
                    "name": "БУРУНДИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Бурунди",
                    "name2": null,
                    "visualCode": "108"
                },
                {
                    "type": 18,
                    "code": 34,
                    "name": "БЕЛАРУСЬ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Беларусь",
                    "name2": null,
                    "visualCode": "112"
                },
                {
                    "type": 18,
                    "code": 35,
                    "name": "КАМБОДЖА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Камбоджа",
                    "name2": null,
                    "visualCode": "116"
                },
                {
                    "type": 18,
                    "code": 36,
                    "name": "КАМЕРУН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Камерун",
                    "name2": null,
                    "visualCode": "120"
                },
                {
                    "type": 18,
                    "code": 37,
                    "name": "КАНАДА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "124"
                },
                {
                    "type": 18,
                    "code": 38,
                    "name": "КАБО-ВЕРДЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Кабо-Верде",
                    "name2": null,
                    "visualCode": "132"
                },
                {
                    "type": 18,
                    "code": 39,
                    "name": "ОСТРОВА КАЙМАН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "136"
                },
                {
                    "type": 18,
                    "code": 40,
                    "name": "ЦЕНТРАЛЬНО-АФРИКАНСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Центральноафриканская                                        Республика",
                    "name2": null,
                    "visualCode": "140"
                },
                {
                    "type": 18,
                    "code": 41,
                    "name": "ШРИ-ЛАНКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Демократическая Социалистическая Республика Шри-Ланка",
                    "name2": null,
                    "visualCode": "144"
                },
                {
                    "type": 18,
                    "code": 42,
                    "name": "ЧАД",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Чад",
                    "name2": null,
                    "visualCode": "148"
                },
                {
                    "type": 18,
                    "code": 43,
                    "name": "ЧИЛИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Чили",
                    "name2": null,
                    "visualCode": "152"
                },
                {
                    "type": 18,
                    "code": 44,
                    "name": "КИТАЙ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Китайская Народная Республика",
                    "name2": null,
                    "visualCode": "156"
                },
                {
                    "type": 18,
                    "code": 45,
                    "name": "ТАЙВАНЬ (КИТАЙ)",
                    "act": 1,
                    "shortName": null,
                    "name1": "ТАЙВАНЬ (КИТАЙ)",
                    "name2": null,
                    "visualCode": "158"
                },
                {
                    "type": 18,
                    "code": 46,
                    "name": "ОСТРОВ РОЖДЕСТВА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "162"
                },
                {
                    "type": 18,
                    "code": 47,
                    "name": "КОКОСОВЫЕ (КИЛИНГ) ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "166"
                },
                {
                    "type": 18,
                    "code": 48,
                    "name": "КОЛУМБИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Колумбия",
                    "name2": null,
                    "visualCode": "170"
                },
                {
                    "type": 18,
                    "code": 49,
                    "name": "КОМОРЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Союз Коморы",
                    "name2": null,
                    "visualCode": "174"
                },
                {
                    "type": 18,
                    "code": 50,
                    "name": "МАЙОТТА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "175"
                },
                {
                    "type": 18,
                    "code": 51,
                    "name": "КОНГО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Конго",
                    "name2": null,
                    "visualCode": "178"
                },
                {
                    "type": 18,
                    "code": 52,
                    "name": "КОНГО, ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Демократическая Республика Конго",
                    "name2": null,
                    "visualCode": "180"
                },
                {
                    "type": 18,
                    "code": 53,
                    "name": "ОСТРОВА КУКА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "184"
                },
                {
                    "type": 18,
                    "code": 54,
                    "name": "КОСТА-РИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Коста-Рика",
                    "name2": null,
                    "visualCode": "188"
                },
                {
                    "type": 18,
                    "code": 55,
                    "name": "ХОРВАТИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Хорватия",
                    "name2": null,
                    "visualCode": "191"
                },
                {
                    "type": 18,
                    "code": 56,
                    "name": "КУБА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Куба",
                    "name2": null,
                    "visualCode": "192"
                },
                {
                    "type": 18,
                    "code": 57,
                    "name": "КИПР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Кипр",
                    "name2": null,
                    "visualCode": "196"
                },
                {
                    "type": 18,
                    "code": 58,
                    "name": "ЧЕШСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Чешская Республика",
                    "name2": null,
                    "visualCode": "203"
                },
                {
                    "type": 18,
                    "code": 59,
                    "name": "БЕНИН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Бенин",
                    "name2": null,
                    "visualCode": "204"
                },
                {
                    "type": 18,
                    "code": 60,
                    "name": "ДАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Дания",
                    "name2": null,
                    "visualCode": "208"
                },
                {
                    "type": 18,
                    "code": 61,
                    "name": "ДОМИНИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Содружество Доминики",
                    "name2": null,
                    "visualCode": "212"
                },
                {
                    "type": 18,
                    "code": 62,
                    "name": "ДОМИНИКАНСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "214"
                },
                {
                    "type": 18,
                    "code": 63,
                    "name": "ЭКВАДОР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Эквадор",
                    "name2": null,
                    "visualCode": "218"
                },
                {
                    "type": 18,
                    "code": 64,
                    "name": "ЭЛЬ-САЛЬВАДОР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Эль-Сальвадор",
                    "name2": null,
                    "visualCode": "222"
                },
                {
                    "type": 18,
                    "code": 65,
                    "name": "ЭКВАТОРИАЛЬНАЯ ГВИНЕЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Экваториальная Гвинея",
                    "name2": null,
                    "visualCode": "226"
                },
                {
                    "type": 18,
                    "code": 66,
                    "name": "ЭФИОПИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Демократическая Республика Эфиопия",
                    "name2": null,
                    "visualCode": "231"
                },
                {
                    "type": 18,
                    "code": 67,
                    "name": "ЭРИТРЕЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "ГОСУДАРСТВО ЭРИТРЕЯ",
                    "name2": null,
                    "visualCode": "232"
                },
                {
                    "type": 18,
                    "code": 68,
                    "name": "ЭСТОНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Эстонская Республика",
                    "name2": null,
                    "visualCode": "233"
                },
                {
                    "type": 18,
                    "code": 69,
                    "name": "ФАРЕРСКИЕ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "234"
                },
                {
                    "type": 18,
                    "code": 70,
                    "name": "ФОЛКЛЕНДСКИЕ ОСТРОВА (МАЛЬВИНСКИЕ)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "238"
                },
                {
                    "type": 18,
                    "code": 71,
                    "name": "ЮЖНАЯ ДЖОРДЖИЯ И ЮЖНЫЕ САНДВИЧЕВЫ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "239"
                },
                {
                    "type": 18,
                    "code": 72,
                    "name": "ФИДЖИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Островов Фиджи",
                    "name2": null,
                    "visualCode": "242"
                },
                {
                    "type": 18,
                    "code": 73,
                    "name": "ФИНЛЯНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Финляндская Республика",
                    "name2": null,
                    "visualCode": "246"
                },
                {
                    "type": 18,
                    "code": 74,
                    "name": "АЛАНДСКИЕ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Аландские острова",
                    "name2": null,
                    "visualCode": "248"
                },
                {
                    "type": 18,
                    "code": 75,
                    "name": "ФРАНЦИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Французская Республика",
                    "name2": null,
                    "visualCode": "250"
                },
                {
                    "type": 18,
                    "code": 76,
                    "name": "ФРАНЦУЗСКАЯ ГВИАНА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "254"
                },
                {
                    "type": 18,
                    "code": 77,
                    "name": "ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "258"
                },
                {
                    "type": 18,
                    "code": 78,
                    "name": "ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "260"
                },
                {
                    "type": 18,
                    "code": 79,
                    "name": "ДЖИБУТИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Джибути",
                    "name2": null,
                    "visualCode": "262"
                },
                {
                    "type": 18,
                    "code": 80,
                    "name": "ГАБОН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Габонская Республика",
                    "name2": null,
                    "visualCode": "266"
                },
                {
                    "type": 18,
                    "code": 81,
                    "name": "ГРУЗИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "268"
                },
                {
                    "type": 18,
                    "code": 82,
                    "name": "ГАМБИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гамбия",
                    "name2": null,
                    "visualCode": "270"
                },
                {
                    "type": 18,
                    "code": 83,
                    "name": "ПАЛЕСТИНА, ГОСУДАРСТВО",
                    "act": 1,
                    "shortName": null,
                    "name1": "ГОСУДАРСТВО ПАЛЕСТИНА",
                    "name2": null,
                    "visualCode": "275"
                },
                {
                    "type": 18,
                    "code": 84,
                    "name": "ГЕРМАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Республика Германия",
                    "name2": null,
                    "visualCode": "276"
                },
                {
                    "type": 18,
                    "code": 85,
                    "name": "ГАНА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гана",
                    "name2": null,
                    "visualCode": "288"
                },
                {
                    "type": 18,
                    "code": 86,
                    "name": "ГИБРАЛТАР",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "292"
                },
                {
                    "type": 18,
                    "code": 87,
                    "name": "КИРИБАТИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Кирибати ",
                    "name2": null,
                    "visualCode": "296"
                },
                {
                    "type": 18,
                    "code": 88,
                    "name": "ГРЕЦИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Греческая Республика",
                    "name2": null,
                    "visualCode": "300"
                },
                {
                    "type": 18,
                    "code": 89,
                    "name": "ГРЕНЛАНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "304"
                },
                {
                    "type": 18,
                    "code": 90,
                    "name": "ГРЕНАДА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "308"
                },
                {
                    "type": 18,
                    "code": 91,
                    "name": "ГВАДЕЛУПА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "312"
                },
                {
                    "type": 18,
                    "code": 92,
                    "name": "ГУАМ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "316"
                },
                {
                    "type": 18,
                    "code": 93,
                    "name": "ГВАТЕМАЛА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гватемала",
                    "name2": null,
                    "visualCode": "320"
                },
                {
                    "type": 18,
                    "code": 94,
                    "name": "ГВИНЕЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Гвинейская Республика",
                    "name2": null,
                    "visualCode": "324"
                },
                {
                    "type": 18,
                    "code": 95,
                    "name": "ГАЙАНА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гайана",
                    "name2": null,
                    "visualCode": "328"
                },
                {
                    "type": 18,
                    "code": 96,
                    "name": "ГАИТИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гаити",
                    "name2": null,
                    "visualCode": "332"
                },
                {
                    "type": 18,
                    "code": 97,
                    "name": "ОСТРОВ ХЕРД И ОСТРОВА МАКДОНАЛЬД",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "334"
                },
                {
                    "type": 18,
                    "code": 98,
                    "name": "ПАПСКИЙ ПРЕСТОЛ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "336"
                },
                {
                    "type": 18,
                    "code": 99,
                    "name": "ГОНДУРАС",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гондурас",
                    "name2": null,
                    "visualCode": "340"
                },
                {
                    "type": 18,
                    "code": 100,
                    "name": "ГОНКОНГ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Специальный административный регион Китая Гонконг ",
                    "name2": null,
                    "visualCode": "344"
                },
                {
                    "type": 18,
                    "code": 101,
                    "name": "ВЕНГРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Венгрия",
                    "name2": null,
                    "visualCode": "348"
                },
                {
                    "type": 18,
                    "code": 102,
                    "name": "ИСЛАНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Исландия",
                    "name2": null,
                    "visualCode": "352"
                },
                {
                    "type": 18,
                    "code": 103,
                    "name": "ИНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Индия",
                    "name2": null,
                    "visualCode": "356"
                },
                {
                    "type": 18,
                    "code": 104,
                    "name": "ИНДОНЕЗИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Индонезия",
                    "name2": null,
                    "visualCode": "360"
                },
                {
                    "type": 18,
                    "code": 105,
                    "name": "ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Исламская Республика Иран",
                    "name2": null,
                    "visualCode": "364"
                },
                {
                    "type": 18,
                    "code": 106,
                    "name": "ИРАК",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Ирак",
                    "name2": null,
                    "visualCode": "368"
                },
                {
                    "type": 18,
                    "code": 107,
                    "name": "ИРЛАНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "372"
                },
                {
                    "type": 18,
                    "code": 108,
                    "name": "ИЗРАИЛЬ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство Израиль",
                    "name2": null,
                    "visualCode": "376"
                },
                {
                    "type": 18,
                    "code": 109,
                    "name": "ИТАЛИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Итальянская Республика",
                    "name2": null,
                    "visualCode": "380"
                },
                {
                    "type": 18,
                    "code": 110,
                    "name": "КОТ-Д’ИВУАР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Кот-д’Ивуар",
                    "name2": null,
                    "visualCode": "384"
                },
                {
                    "type": 18,
                    "code": 111,
                    "name": "ЯМАЙКА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "388"
                },
                {
                    "type": 18,
                    "code": 112,
                    "name": "ЯПОНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "392"
                },
                {
                    "type": 18,
                    "code": 113,
                    "name": "КАЗАХСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Казахстан",
                    "name2": null,
                    "visualCode": "398"
                },
                {
                    "type": 18,
                    "code": 114,
                    "name": "ИОРДАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Иорданское Хашимитское Королевство",
                    "name2": null,
                    "visualCode": "400"
                },
                {
                    "type": 18,
                    "code": 115,
                    "name": "КЕНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Кения",
                    "name2": null,
                    "visualCode": "404"
                },
                {
                    "type": 18,
                    "code": 116,
                    "name": "КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Корейская Народно-Демократическая Республика",
                    "name2": null,
                    "visualCode": "408"
                },
                {
                    "type": 18,
                    "code": 117,
                    "name": "КОРЕЯ, РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Корея",
                    "name2": null,
                    "visualCode": "410"
                },
                {
                    "type": 18,
                    "code": 118,
                    "name": "КУВЕЙТ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство Кувейт",
                    "name2": null,
                    "visualCode": "414"
                },
                {
                    "type": 18,
                    "code": 119,
                    "name": "КЫРГЫЗСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Кыргызская Республика",
                    "name2": null,
                    "visualCode": "417"
                },
                {
                    "type": 18,
                    "code": 120,
                    "name": "ЛАОССКАЯ НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Лаосская Народно-Демократическая Республика",
                    "name2": null,
                    "visualCode": "418"
                },
                {
                    "type": 18,
                    "code": 121,
                    "name": "ЛИВАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Ливанская Республика",
                    "name2": null,
                    "visualCode": "422"
                },
                {
                    "type": 18,
                    "code": 122,
                    "name": "ЛЕСОТО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Лесото",
                    "name2": null,
                    "visualCode": "426"
                },
                {
                    "type": 18,
                    "code": 123,
                    "name": "ЛАТВИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Латвийская Республика",
                    "name2": null,
                    "visualCode": "428"
                },
                {
                    "type": 18,
                    "code": 124,
                    "name": "ЛИБЕРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Либерия",
                    "name2": null,
                    "visualCode": "430"
                },
                {
                    "type": 18,
                    "code": 125,
                    "name": "ЛИВИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "434"
                },
                {
                    "type": 18,
                    "code": 126,
                    "name": "ЛИХТЕНШТЕЙН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Княжество Лихтенштейн",
                    "name2": null,
                    "visualCode": "438"
                },
                {
                    "type": 18,
                    "code": 127,
                    "name": "ЛИТВА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Литовская Республика",
                    "name2": null,
                    "visualCode": "440"
                },
                {
                    "type": 18,
                    "code": 128,
                    "name": "ЛЮКСЕМБУРГ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Великое Герцогство Люксембург",
                    "name2": null,
                    "visualCode": "442"
                },
                {
                    "type": 18,
                    "code": 129,
                    "name": "МАКАО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Специальный административный регион Китая Макао ",
                    "name2": null,
                    "visualCode": "446"
                },
                {
                    "type": 18,
                    "code": 130,
                    "name": "МАДАГАСКАР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Мадагаскар",
                    "name2": null,
                    "visualCode": "450"
                },
                {
                    "type": 18,
                    "code": 131,
                    "name": "МАЛАВИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Малави",
                    "name2": null,
                    "visualCode": "454"
                },
                {
                    "type": 18,
                    "code": 132,
                    "name": "МАЛАЙЗИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "458"
                },
                {
                    "type": 18,
                    "code": 133,
                    "name": "МАЛЬДИВЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Мальдивская Республика",
                    "name2": null,
                    "visualCode": "462"
                },
                {
                    "type": 18,
                    "code": 134,
                    "name": "МАЛИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Мали",
                    "name2": null,
                    "visualCode": "466"
                },
                {
                    "type": 18,
                    "code": 135,
                    "name": "МАЛЬТА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Мальта",
                    "name2": null,
                    "visualCode": "470"
                },
                {
                    "type": 18,
                    "code": 136,
                    "name": "МАРТИНИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "474"
                },
                {
                    "type": 18,
                    "code": 137,
                    "name": "МАВРИТАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Исламская Республика Мавритания",
                    "name2": null,
                    "visualCode": "478"
                },
                {
                    "type": 18,
                    "code": 138,
                    "name": "МАВРИКИЙ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Маврикий",
                    "name2": null,
                    "visualCode": "480"
                },
                {
                    "type": 18,
                    "code": 139,
                    "name": "МЕКСИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Мексиканские Соединенные Штаты",
                    "name2": null,
                    "visualCode": "484"
                },
                {
                    "type": 18,
                    "code": 140,
                    "name": "МОНАКО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Княжество Монако",
                    "name2": null,
                    "visualCode": "492"
                },
                {
                    "type": 18,
                    "code": 141,
                    "name": "МОНГОЛИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "496"
                },
                {
                    "type": 18,
                    "code": 142,
                    "name": "МОЛДОВА, РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Молдова",
                    "name2": null,
                    "visualCode": "498"
                },
                {
                    "type": 18,
                    "code": 143,
                    "name": "ЧЕРНОГОРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Черногория",
                    "name2": null,
                    "visualCode": "499"
                },
                {
                    "type": 18,
                    "code": 144,
                    "name": "МОНТСЕРРАТ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "500"
                },
                {
                    "type": 18,
                    "code": 145,
                    "name": "МАРОККО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Марокко",
                    "name2": null,
                    "visualCode": "504"
                },
                {
                    "type": 18,
                    "code": 146,
                    "name": "МОЗАМБИК",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Мозамбик",
                    "name2": null,
                    "visualCode": "508"
                },
                {
                    "type": 18,
                    "code": 147,
                    "name": "ОМАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Султанат Оман",
                    "name2": null,
                    "visualCode": "512"
                },
                {
                    "type": 18,
                    "code": 148,
                    "name": "НАМИБИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Намибия",
                    "name2": null,
                    "visualCode": "516"
                },
                {
                    "type": 18,
                    "code": 149,
                    "name": "НАУРУ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Науру",
                    "name2": null,
                    "visualCode": "520"
                },
                {
                    "type": 18,
                    "code": 150,
                    "name": "Непал",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Демократическая Республика Непал",
                    "name2": null,
                    "visualCode": "524"
                },
                {
                    "type": 18,
                    "code": 151,
                    "name": "НИДЕРЛАНДЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Нидерландов",
                    "name2": null,
                    "visualCode": "528"
                },
                {
                    "type": 18,
                    "code": 152,
                    "name": "Кюрасао",
                    "act": 1,
                    "shortName": null,
                    "name1": "Кюрасао",
                    "name2": null,
                    "visualCode": "531"
                },
                {
                    "type": 18,
                    "code": 153,
                    "name": "АРУБА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "533"
                },
                {
                    "type": 18,
                    "code": 154,
                    "name": "СЕН-МАРТЕН (НИДЕРЛАНДСКАЯ ЧАСТЬ)",
                    "act": 1,
                    "shortName": null,
                    "name1": "Сен-Мартен (Нидерландская часть)",
                    "name2": null,
                    "visualCode": "534"
                },
                {
                    "type": 18,
                    "code": 155,
                    "name": "БОНЭЙР, СИНТ-ЭСТАТИУС И САБА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Бонэйр, Синт-Эстатиус и Саба",
                    "name2": null,
                    "visualCode": "535"
                },
                {
                    "type": 18,
                    "code": 156,
                    "name": "НОВАЯ КАЛЕДОНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "540"
                },
                {
                    "type": 18,
                    "code": 157,
                    "name": "ВАНУАТУ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Вануату",
                    "name2": null,
                    "visualCode": "548"
                },
                {
                    "type": 18,
                    "code": 158,
                    "name": "НОВАЯ ЗЕЛАНДИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "554"
                },
                {
                    "type": 18,
                    "code": 159,
                    "name": "НИКАРАГУА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Никарагуа",
                    "name2": null,
                    "visualCode": "558"
                },
                {
                    "type": 18,
                    "code": 160,
                    "name": "НИГЕР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Нигер",
                    "name2": null,
                    "visualCode": "562"
                },
                {
                    "type": 18,
                    "code": 161,
                    "name": "НИГЕРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Республика Нигерия",
                    "name2": null,
                    "visualCode": "566"
                },
                {
                    "type": 18,
                    "code": 162,
                    "name": "НИУЭ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Ниуэ",
                    "name2": null,
                    "visualCode": "570"
                },
                {
                    "type": 18,
                    "code": 163,
                    "name": "ОСТРОВ НОРФОЛК",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "574"
                },
                {
                    "type": 18,
                    "code": 164,
                    "name": "НОРВЕГИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Норвегия",
                    "name2": null,
                    "visualCode": "578"
                },
                {
                    "type": 18,
                    "code": 165,
                    "name": "СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Содружество Северных Марианских Островов",
                    "name2": null,
                    "visualCode": "580"
                },
                {
                    "type": 18,
                    "code": 166,
                    "name": "МАЛЫЕ ТИХООКЕАНСКИЕ ОТДАЛЕННЫЕ ОСТРОВА СОЕДИНЕННЫХ ШТАТОВ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "581"
                },
                {
                    "type": 18,
                    "code": 167,
                    "name": "МИКРОНЕЗИЯ, ФЕДЕРАТИВНЫЕ ШТАТЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративные Штаты Микронезии",
                    "name2": null,
                    "visualCode": "583"
                },
                {
                    "type": 18,
                    "code": 168,
                    "name": "МАРШАЛЛОВЫ ОСТРОВА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Маршалловы Острова",
                    "name2": null,
                    "visualCode": "584"
                },
                {
                    "type": 18,
                    "code": 169,
                    "name": "ПАЛАУ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Палау",
                    "name2": null,
                    "visualCode": "585"
                },
                {
                    "type": 18,
                    "code": 170,
                    "name": "ПАКИСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Исламская Республика Пакистан",
                    "name2": null,
                    "visualCode": "586"
                },
                {
                    "type": 18,
                    "code": 171,
                    "name": "ПАНАМА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Панама",
                    "name2": null,
                    "visualCode": "591"
                },
                {
                    "type": 18,
                    "code": 172,
                    "name": "ПАПУА – НОВАЯ ГВИНЕЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "НЕЗАВИСИМОЕ ГОСУДАРСТВО ПАПУА-НОВАЯ ГВИНЕЯ",
                    "name2": null,
                    "visualCode": "598"
                },
                {
                    "type": 18,
                    "code": 173,
                    "name": "ПАРАГВАЙ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Парагвай",
                    "name2": null,
                    "visualCode": "600"
                },
                {
                    "type": 18,
                    "code": 174,
                    "name": "ПЕРУ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Перу",
                    "name2": null,
                    "visualCode": "604"
                },
                {
                    "type": 18,
                    "code": 175,
                    "name": "ФИЛИППИНЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Филиппины",
                    "name2": null,
                    "visualCode": "608"
                },
                {
                    "type": 18,
                    "code": 176,
                    "name": "ПИТКЭРН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "612"
                },
                {
                    "type": 18,
                    "code": 177,
                    "name": "ПОЛЬША",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Польша",
                    "name2": null,
                    "visualCode": "616"
                },
                {
                    "type": 18,
                    "code": 178,
                    "name": "ПОРТУГАЛИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Португальская Республика",
                    "name2": null,
                    "visualCode": "620"
                },
                {
                    "type": 18,
                    "code": 179,
                    "name": "ГВИНЕЯ-БИСАУ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Гвинея-Бисау",
                    "name2": null,
                    "visualCode": "624"
                },
                {
                    "type": 18,
                    "code": 180,
                    "name": "ТИМОР-ЛЕСТЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Демократическая Республика Тимор-Лесте",
                    "name2": null,
                    "visualCode": "626"
                },
                {
                    "type": 18,
                    "code": 181,
                    "name": "ПУЭРТО-РИКО",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "630"
                },
                {
                    "type": 18,
                    "code": 182,
                    "name": "КАТАР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Государство Катар",
                    "name2": null,
                    "visualCode": "634"
                },
                {
                    "type": 18,
                    "code": 183,
                    "name": "РЕЮНЬОН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "638"
                },
                {
                    "type": 18,
                    "code": 184,
                    "name": "РУМЫНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Румыния",
                    "name2": null,
                    "visualCode": "642"
                },
                {
                    "type": 18,
                    "code": 185,
                    "name": "РОССИЙСКАЯ ФЕДЕРАЦИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Российская Федерация",
                    "name2": null,
                    "visualCode": "643"
                },
                {
                    "type": 18,
                    "code": 186,
                    "name": "РУАНДА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Руандийская Республика",
                    "name2": null,
                    "visualCode": "646"
                },
                {
                    "type": 18,
                    "code": 187,
                    "name": "СЕН БАРТЕЛЕМИ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "652"
                },
                {
                    "type": 18,
                    "code": 188,
                    "name": "Святая Елена, остров Вознесения и Тристан-да-Кунья",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "654"
                },
                {
                    "type": 18,
                    "code": 189,
                    "name": "СЕНТ-КИТС И НЕВИС",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федерация Сент-Китс и Невис",
                    "name2": null,
                    "visualCode": "659"
                },
                {
                    "type": 18,
                    "code": 190,
                    "name": "АНГИЛЬЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "660"
                },
                {
                    "type": 18,
                    "code": 191,
                    "name": "СЕНТ-ЛЮСИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "662"
                },
                {
                    "type": 18,
                    "code": 192,
                    "name": "СЕН МАРТИН (французская часть)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "663"
                },
                {
                    "type": 18,
                    "code": 193,
                    "name": "СЕН-ПЬЕР И МИКЕЛОН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "666"
                },
                {
                    "type": 18,
                    "code": 194,
                    "name": "СЕНТ-ВИНСЕНТ И ГРЕНАДИНЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "670"
                },
                {
                    "type": 18,
                    "code": 195,
                    "name": "САН-МАРИНО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сан-Марино",
                    "name2": null,
                    "visualCode": "674"
                },
                {
                    "type": 18,
                    "code": 196,
                    "name": "САН-ТОМЕ И ПРИНСИПИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Демократическая Республика Сан-Томе и Принсипи",
                    "name2": null,
                    "visualCode": "678"
                },
                {
                    "type": 18,
                    "code": 197,
                    "name": "САУДОВСКАЯ АРАВИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Саудовская Аравия",
                    "name2": null,
                    "visualCode": "682"
                },
                {
                    "type": 18,
                    "code": 198,
                    "name": "СЕНЕГАЛ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сенегал",
                    "name2": null,
                    "visualCode": "686"
                },
                {
                    "type": 18,
                    "code": 199,
                    "name": "СЕРБИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сербия",
                    "name2": null,
                    "visualCode": "688"
                },
                {
                    "type": 18,
                    "code": 200,
                    "name": "СЕЙШЕЛЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сейшелы",
                    "name2": null,
                    "visualCode": "690"
                },
                {
                    "type": 18,
                    "code": 201,
                    "name": "СЬЕРРА-ЛЕОНЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сьерра-Леоне",
                    "name2": null,
                    "visualCode": "694"
                },
                {
                    "type": 18,
                    "code": 202,
                    "name": "СИНГАПУР",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Сингапур",
                    "name2": null,
                    "visualCode": "702"
                },
                {
                    "type": 18,
                    "code": 203,
                    "name": "СЛОВАКИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Словацкая Республика",
                    "name2": null,
                    "visualCode": "703"
                },
                {
                    "type": 18,
                    "code": 204,
                    "name": "ВЬЕТНАМ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Социалистическая Республика Вьетнам",
                    "name2": null,
                    "visualCode": "704"
                },
                {
                    "type": 18,
                    "code": 205,
                    "name": "СЛОВЕНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Словения",
                    "name2": null,
                    "visualCode": "705"
                },
                {
                    "type": 18,
                    "code": 206,
                    "name": "СОМАЛИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Федеративная Республика Сомали",
                    "name2": null,
                    "visualCode": "706"
                },
                {
                    "type": 18,
                    "code": 207,
                    "name": "ЮЖНАЯ АФРИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Южно-Африканская Республика",
                    "name2": null,
                    "visualCode": "710"
                },
                {
                    "type": 18,
                    "code": 208,
                    "name": "ЗИМБАБВЕ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Зимбабве",
                    "name2": null,
                    "visualCode": "716"
                },
                {
                    "type": 18,
                    "code": 209,
                    "name": "ИСПАНИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Испания",
                    "name2": null,
                    "visualCode": "724"
                },
                {
                    "type": 18,
                    "code": 210,
                    "name": "ЮЖНЫЙ СУДАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Южный Судан",
                    "name2": null,
                    "visualCode": "728"
                },
                {
                    "type": 18,
                    "code": 211,
                    "name": "СУДАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Судан",
                    "name2": null,
                    "visualCode": "729"
                },
                {
                    "type": 18,
                    "code": 212,
                    "name": "ЗАПАДНАЯ САХАРА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "732"
                },
                {
                    "type": 18,
                    "code": 213,
                    "name": "СУРИНАМ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Суринам",
                    "name2": null,
                    "visualCode": "740"
                },
                {
                    "type": 18,
                    "code": 214,
                    "name": "ШПИЦБЕРГЕН И ЯН-МАЙЕН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "744"
                },
                {
                    "type": 18,
                    "code": 215,
                    "name": "СВАЗИЛЕНД",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Свазиленд",
                    "name2": null,
                    "visualCode": "748"
                },
                {
                    "type": 18,
                    "code": 216,
                    "name": "ШВЕЦИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Швеция",
                    "name2": null,
                    "visualCode": "752"
                },
                {
                    "type": 18,
                    "code": 217,
                    "name": "ШВЕЙЦАРИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Швейцарская Конфедерация",
                    "name2": null,
                    "visualCode": "756"
                },
                {
                    "type": 18,
                    "code": 218,
                    "name": "СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Сирийская Арабская Республика",
                    "name2": null,
                    "visualCode": "760"
                },
                {
                    "type": 18,
                    "code": 219,
                    "name": "ТАДЖИКИСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Таджикистан",
                    "name2": null,
                    "visualCode": "762"
                },
                {
                    "type": 18,
                    "code": 220,
                    "name": "ТАИЛАНД",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Таиланд",
                    "name2": null,
                    "visualCode": "764"
                },
                {
                    "type": 18,
                    "code": 221,
                    "name": "ТОГО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Тоголезская Республика",
                    "name2": null,
                    "visualCode": "768"
                },
                {
                    "type": 18,
                    "code": 222,
                    "name": "ТОКЕЛАУ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "772"
                },
                {
                    "type": 18,
                    "code": 223,
                    "name": "ТОНГА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Королевство Тонга",
                    "name2": null,
                    "visualCode": "776"
                },
                {
                    "type": 18,
                    "code": 224,
                    "name": "ТРИНИДАД И ТОБАГО",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Тринидад и Тобаго",
                    "name2": null,
                    "visualCode": "780"
                },
                {
                    "type": 18,
                    "code": 225,
                    "name": "ОБЪЕДИНЕННЫЕ АРАБСКИЕ ЭМИРАТЫ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Объединенные Арабские Эмираты",
                    "name2": null,
                    "visualCode": "784"
                },
                {
                    "type": 18,
                    "code": 226,
                    "name": "ТУНИС",
                    "act": 1,
                    "shortName": null,
                    "name1": "Тунисская Республика",
                    "name2": null,
                    "visualCode": "788"
                },
                {
                    "type": 18,
                    "code": 227,
                    "name": "ТУРЦИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Турецкая Республика",
                    "name2": null,
                    "visualCode": "792"
                },
                {
                    "type": 18,
                    "code": 228,
                    "name": "ТУРКМЕНИСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "795"
                },
                {
                    "type": 18,
                    "code": 229,
                    "name": "ОСТРОВА ТЕРКС И КАЙКОС",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "796"
                },
                {
                    "type": 18,
                    "code": 230,
                    "name": "ТУВАЛУ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "798"
                },
                {
                    "type": 18,
                    "code": 231,
                    "name": "УГАНДА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Уганда",
                    "name2": null,
                    "visualCode": "800"
                },
                {
                    "type": 18,
                    "code": 232,
                    "name": "УКРАИНА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "804"
                },
                {
                    "type": 18,
                    "code": 233,
                    "name": "МАКЕДОНИЯ, БЫВШАЯ ЮГОСЛАВСКАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Бывшая Югославская Республика Македония",
                    "name2": null,
                    "visualCode": "807"
                },
                {
                    "type": 18,
                    "code": 234,
                    "name": "ЕГИПЕТ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Арабская Республика Египет",
                    "name2": null,
                    "visualCode": "818"
                },
                {
                    "type": 18,
                    "code": 235,
                    "name": "СОЕДИНЕННОЕ КОРОЛЕВСТВО ВЕЛИКОБРИТАНИИ И СЕВЕРНОЙ ИРЛАНДИИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Соединенное Королевство Великобритании и Северной Ирландии",
                    "name2": null,
                    "visualCode": "826"
                },
                {
                    "type": 18,
                    "code": 236,
                    "name": "ГЕРНСИ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "831"
                },
                {
                    "type": 18,
                    "code": 237,
                    "name": "ДЖЕРСИ",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "832"
                },
                {
                    "type": 18,
                    "code": 238,
                    "name": "ОСТРОВ МЭН",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "833"
                },
                {
                    "type": 18,
                    "code": 239,
                    "name": "ТАНЗАНИЯ, ОБЪЕДИНЕННАЯ РЕСПУБЛИКА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Объединенная Республика Танзания",
                    "name2": null,
                    "visualCode": "834"
                },
                {
                    "type": 18,
                    "code": 240,
                    "name": "СОЕДИНЕННЫЕ ШТАТЫ АМЕРИКИ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Соединенные Штаты Америки",
                    "name2": null,
                    "visualCode": "840"
                },
                {
                    "type": 18,
                    "code": 241,
                    "name": "ВИРГИНСКИЕ ОСТРОВА, США",
                    "act": 1,
                    "shortName": null,
                    "name1": "Виргинские Острова Соединенных Штатов",
                    "name2": null,
                    "visualCode": "850"
                },
                {
                    "type": 18,
                    "code": 242,
                    "name": "БУРКИНА-ФАСО",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "854"
                },
                {
                    "type": 18,
                    "code": 243,
                    "name": "УРУГВАЙ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Восточная Республика Уругвай",
                    "name2": null,
                    "visualCode": "858"
                },
                {
                    "type": 18,
                    "code": 244,
                    "name": "УЗБЕКИСТАН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Узбекистан",
                    "name2": null,
                    "visualCode": "860"
                },
                {
                    "type": 18,
                    "code": 245,
                    "name": "Венесуэла, Боливарианская Республика",
                    "act": 1,
                    "shortName": null,
                    "name1": "Боливарианская Республика Венесуэла",
                    "name2": null,
                    "visualCode": "862"
                },
                {
                    "type": 18,
                    "code": 246,
                    "name": "УОЛЛИС И ФУТУНА",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "876"
                },
                {
                    "type": 18,
                    "code": 247,
                    "name": "САМОА",
                    "act": 1,
                    "shortName": null,
                    "name1": "Независимое Государство Самоа",
                    "name2": null,
                    "visualCode": "882"
                },
                {
                    "type": 18,
                    "code": 248,
                    "name": "ЙЕМЕН",
                    "act": 1,
                    "shortName": null,
                    "name1": "Йеменская Республика",
                    "name2": null,
                    "visualCode": "887"
                },
                {
                    "type": 18,
                    "code": 249,
                    "name": "ЗАМБИЯ",
                    "act": 1,
                    "shortName": null,
                    "name1": "Республика Замбия",
                    "name2": null,
                    "visualCode": "894"
                },
                {
                    "type": 18,
                    "code": 999,
                    "name": "-",
                    "act": 1,
                    "shortName": null,
                    "name1": "-",
                    "name2": null,
                    "visualCode": "9999"
                }
            ],
            /* организационно-правовая форма */ formLegalOrganForm: [
                {
                    "type": 25,
                    "code": 1,
                    "name": "Коммерческие организации",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1000"
                },
                {
                    "type": 25,
                    "code": 2,
                    "name": "Хозяйственные товарищества и общества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1100"
                },
                {
                    "type": 25,
                    "code": 3,
                    "name": "Полные товарищества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1110"
                },
                {
                    "type": 25,
                    "code": 4,
                    "name": "Коммандитные товарищества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1120"
                },
                {
                    "type": 25,
                    "code": 5,
                    "name": "Акционерные общества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1130"
                },
                {
                    "type": 25,
                    "code": 6,
                    "name": "Открытые акционерные общества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1131"
                },
                {
                    "type": 25,
                    "code": 7,
                    "name": "Закрытые акционерные общества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1132"
                },
                {
                    "type": 25,
                    "code": 8,
                    "name": "Общества с ограниченной ответственностью",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1140"
                },
                {
                    "type": 25,
                    "code": 9,
                    "name": "Общества с дополнительной ответственностью",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1150"
                },
                {
                    "type": 25,
                    "code": 10,
                    "name": "Производственные кооперативы (артели)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1200"
                },
                {
                    "type": 25,
                    "code": 11,
                    "name": "Унитарные предприятия",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1300"
                },
                {
                    "type": 25,
                    "code": 12,
                    "name": "Унитарные предприятия, основанные на праве хозяйственного  ведения",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1310"
                },
                {
                    "type": 25,
                    "code": 13,
                    "name": "Унитарные предприятия, основанные на праве оперативного управления  (казенные предприятия)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1320"
                },
                {
                    "type": 25,
                    "code": 14,
                    "name": "Объединения предприятий, созданные органами государственного и местного управления и самоуправления",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1400"
                },
                {
                    "type": 25,
                    "code": 15,
                    "name": "Объединения предприятий и организаций, подчиненные Правительству Републики Беларусь",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1410"
                },
                {
                    "type": 25,
                    "code": 16,
                    "name": "Объединения предприятий и организаций, подчиненные местным исполнительным и распорядительным органам",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1420"
                },
                {
                    "type": 25,
                    "code": 17,
                    "name": "Арендные предприятия*",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1500"
                },
                {
                    "type": 25,
                    "code": 18,
                    "name": "Коллективные предприятия*",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1600"
                },
                {
                    "type": 25,
                    "code": 19,
                    "name": "Крестьянские (фермерские) хозяйства",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1700"
                },
                {
                    "type": 25,
                    "code": 20,
                    "name": "Прочие организационно-правовые формы коммерческих организаций",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "1900"
                },
                {
                    "type": 25,
                    "code": 21,
                    "name": "Некоммерческие организации",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2000"
                },
                {
                    "type": 25,
                    "code": 22,
                    "name": "Потребительские кооперативы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2100"
                },
                {
                    "type": 25,
                    "code": 23,
                    "name": "Потребительские союзы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2110"
                },
                {
                    "type": 25,
                    "code": 24,
                    "name": "Потребительские общества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2120"
                },
                {
                    "type": 25,
                    "code": 25,
                    "name": "Жилищно-строительные кооперативы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2130"
                },
                {
                    "type": 25,
                    "code": 26,
                    "name": "Садоводческие и садово-огородные товарищества",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2140"
                },
                {
                    "type": 25,
                    "code": 27,
                    "name": "Прочие потребительские кооперативы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2190"
                },
                {
                    "type": 25,
                    "code": 28,
                    "name": "Общественные организации (объединения)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2200"
                },
                {
                    "type": 25,
                    "code": 29,
                    "name": "Религиозные организации (объединения)",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2300"
                },
                {
                    "type": 25,
                    "code": 30,
                    "name": "Фонды",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2400"
                },
                {
                    "type": 25,
                    "code": 31,
                    "name": "Учреждения",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2500"
                },
                {
                    "type": 25,
                    "code": 32,
                    "name": "Высшие органы законодательной, исполнительной и судебной власти",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2510"
                },
                {
                    "type": 25,
                    "code": 33,
                    "name": "Органы государственного управления",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2520"
                },
                {
                    "type": 25,
                    "code": 34,
                    "name": "Государственные органы, организации и учреждения",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2530"
                },
                {
                    "type": 25,
                    "code": 35,
                    "name": "Объединения юридических лиц",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2600"
                },
                {
                    "type": 25,
                    "code": 36,
                    "name": "Ассоциации",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2610"
                },
                {
                    "type": 25,
                    "code": 37,
                    "name": "Союзы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2620"
                },
                {
                    "type": 25,
                    "code": 38,
                    "name": "Объединения",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2630"
                },
                {
                    "type": 25,
                    "code": 39,
                    "name": "Товарищества собственников",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2700"
                },
                {
                    "type": 25,
                    "code": 40,
                    "name": "Прочие организационно-правовые формы некоммерческих организаций",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "2900"
                },
                {
                    "type": 25,
                    "code": 41,
                    "name": "Обособленные подразделения юридических лиц",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "3000"
                },
                {
                    "type": 25,
                    "code": 42,
                    "name": "Представительства",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "3100"
                },
                {
                    "type": 25,
                    "code": 43,
                    "name": "Филиалы",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "3200"
                },
                {
                    "type": 25,
                    "code": 44,
                    "name": "Индивидуальные предприниматели",
                    "act": 1,
                    "shortName": null,
                    "name1": null,
                    "name2": null,
                    "visualCode": "4000"
                }
            ]
        }
    },
    getters: {
        getSubjectTypes(state) {
            return state.classifiers.commonSelTypeSubject;
        },
        getSubjectStatuses(state) {
            return state.classifiers.commonSelStateSubject;
        },
        getSubjectCountries(state) {
            return state.classifiers.formTypeCountry;
        },
        getSubjectOrganizationalAndLegalForms(state) {
            return state.classifiers.formLegalOrganForm;
        }
    },
    mutations: {},
    actions: {}
});

