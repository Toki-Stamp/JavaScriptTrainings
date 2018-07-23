/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let data      = [{
            "reference"      : ["24.06.2018 1:52:44", "Индивидуальная заявка", "DeathDub", "Андрей Дубовец", "+375291324384", "", "", "", "", "", "", "", "", "", "", "", "", "Как водитель, на личном транспортном средстве", "Минск", "Пятница", "9:00:00", "2 места", "Сперва еду по работе....", "", "", "", "", "Индивидуальная заявка", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Воланчики берите"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "DeathDub", "nameAndSurname": "Андрей Дубовец", "contactPhone": ["(29) 132-4384"]},
            "transportation" : {"transportationType": "DRIVER", "city": "Минск", "departureDay": "FRIDAY", "time": "9:00", "emptySits": "TWO_SITS"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {"transportationInfo": "Сперва еду по работе....", "otherInfo": "Воланчики берите"}
        }, {
            "reference"      : ["24.06.2018 9:07:09", "Индивидуальная заявка", "Legioner_82", "Григорьев Андрей", "+375 (29) 3728469", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "нужен 2-местный номер"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Legioner_82", "nameAndSurname": "Григорьев Андрей", "contactPhone": ["(29) 372-8469"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"accommodationInfo": "нужен 2-местный номер"}
        }, {
            "reference"      : ["24.06.2018 9:19:42", "Индивидуальная заявка", "Yurbazzz ", "Ткачёнок Юрий ", "+375295070808 +375296099238", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск ", "Пятница", "8:00:00", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Yurbazzz ", "nameAndSurname": "Ткачёнок Юрий ", "contactPhone": ["(29) 507-0808", "(29) 609-9238"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск ", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {}
        }, {
            "reference"      : ["24.06.2018 10:44:02", "Индивидуальная заявка", "Bagor_by", "Примаков Денис", "+375(29)6710803", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "9:00:00", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Bagor_by", "nameAndSurname": "Примаков Денис", "contactPhone": ["(29) 671-0803"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "9:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {}
        }, {
            "reference"      : ["24.06.2018 11:11:08", "Индивидуальная заявка", "_AMBASADAR_", "Александр Василевский ", "+375291192805 ", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск ", "Суббота", "8:00:00", "Абы доехать, неважно на чём) ", "Групповая заявка, единые условия", "", "", "", "", "", "", "", "", "", "Без обеспечения", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "Без обеспечения", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С субботы на воскресенье", "В спальном корпусе №1"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "_AMBASADAR_", "nameAndSurname": "Александр Василевский ", "contactPhone": ["(29) 119-2805"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск ", "departureDay": "SATURDAY", "time": "8:00"},
            "provision"      : {
                "provisionType"    : "GROUP_COMMON",
                "foodOnFriday"     : "NOT_REQUIRED",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "NOT_REQUIRED",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "FIRST_HALF"
            },
            "accommodation"  : {"accommodationType": "FROM_SATURDAY_TO_SUNDAY", "preferences": "LIVING_BUILDING"},
            "information"    : {"transportationInfo": "Абы доехать, неважно на чём) "}
        }, {
            "reference"      : ["24.06.2018 13:37:37", "Индивидуальная заявка", "6y6Jlb_GuM_Blr", "Карканица Руслан", "447528561(МТС)", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "17:00:00", "Еду с USSRrat", "Индивидуальная заявка", "2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день)", "2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день)", "С пятницы на субботу", "Не имеет особого значения"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "6y6Jlb_GuM_Blr", "nameAndSurname": "Карканица Руслан", "contactPhone": ["(44) 752-8561"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "17:00"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FIRST_HALF",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FIRST_HALF",
                "alcoholOnSunday"  : "FIRST_HALF"
            },
            "accommodation"  : {"accommodationType": "FROM_FRIDAY_TO_SATURDAY", "preferences": "DOES_NOT_MATTER"},
            "information"    : {"transportationInfo": "Еду с USSRrat"}
        }, {
            "reference"      : ["24.06.2018 14:00:23", "Индивидуальная заявка", "Kydasofff", "Леопольд", "80293346638", "", "", "", "", "", "", "", "", "", "", "", "", "Как водитель, на личном транспортном средстве", "Минск", "Суббота", "7:00:00", "2 места", "", "", "", "", "", "Индивидуальная заявка", "Без обеспечения", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "Без обеспечения", "Без обеспечения", "Без обеспечения", "Без проживания", "Не имеет особого значения", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "К приезду юрбаз готовит шашлык"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Kydasofff", "nameAndSurname": "Леопольд", "contactPhone": ["(29) 334-6638"]},
            "transportation" : {"transportationType": "DRIVER", "city": "Минск", "departureDay": "SATURDAY", "time": "7:00", "emptySits": "TWO_SITS"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "NOT_REQUIRED",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "NOT_REQUIRED",
                "alcoholOnFriday"  : "NOT_REQUIRED",
                "alcoholOnSaturday": "NOT_REQUIRED",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "NOT_REQUIRED", "preferences": "DOES_NOT_MATTER"},
            "information"    : {"otherInfo": "К приезду юрбаз готовит шашлык"}
        }, {
            "reference"      : ["24.06.2018 17:10:22", "Индивидуальная заявка", "bespalikoff", "Михаил Роговцов", "+375293252200", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "9:00:00", "С простора как обычно", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "Я беру с собой баян и порву его к хуям"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "bespalikoff", "nameAndSurname": "Михаил Роговцов", "contactPhone": ["(29) 325-2200"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "9:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"transportationInfo": "С простора как обычно", "accommodationInfo": "Я беру с собой баян и порву его к хуям"}
        }, {
            "reference"      : ["24.06.2018 18:48:31", "Индивидуальная заявка", "__6opoDa_Mypa3opa__", "Бурый Илья", "+375 29 2857025", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "15:00:00", "Возможно, поеду на своём авто", "Индивидуальная заявка", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "Не имеет особого значения"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "__6opoDa_Mypa3opa__", "nameAndSurname": "Бурый Илья", "contactPhone": ["(29) 285-7025"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "15:00"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "DOES_NOT_MATTER"},
            "information"    : {"transportationInfo": "Возможно, поеду на своём авто"}
        }, {
            "reference"      : ["24.06.2018 18:54:46", "Групповая заявка", "", "", "", "M_c_D", "Матвеев Евгений", "+375296661668", "Всего 3 участника", "", "", "", "", "Подлазник Дмитрий", "+375336329584", "Шилович Сергей", "+375295515755", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "", "Групповая заявка, дифференцированные условия", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "Всего 3 участника", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "YNWA! ууу-у-у-у-ууу"],
            "groupId"        : 1,
            "applicationType": "GROUP_APPLICATION",
            "person"         : {"nickName": "M_c_D", "nameAndSurname": "Матвеев Евгений", "contactPhone": ["(29) 666-1668"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {
                "provisionType"    : "GROUP_DIFFERENTIATED",
                "foodOnFriday"     : "FULL_DAY",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "FULL_DAY",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "FIRST_HALF"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"otherInfo": "YNWA! ууу-у-у-у-ууу"}
        }, {
            "reference"      : ["24.06.2018 18:54:46", "Групповая заявка", "", "", "", "M_c_D", "Матвеев Евгений", "+375296661668", "Всего 3 участника", "", "", "", "", "Подлазник Дмитрий", "+375336329584", "Шилович Сергей", "+375295515755", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "", "Групповая заявка, дифференцированные условия", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "Всего 3 участника", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "YNWA! ууу-у-у-у-ууу"],
            "groupId"        : 1,
            "applicationType": "GROUP_APPLICATION",
            "person"         : {"nickName": "Гость M_c_D", "nameAndSurname": "Шилович Сергей", "contactPhone": ["(29) 551-5755"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {
                "provisionType"    : "GROUP_DIFFERENTIATED",
                "foodOnFriday"     : "FULL_DAY",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "FULL_DAY",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "FIRST_HALF"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {}
        }, {
            "reference"      : ["24.06.2018 18:54:46", "Групповая заявка", "", "", "", "M_c_D", "Матвеев Евгений", "+375296661668", "Всего 3 участника", "", "", "", "", "Подлазник Дмитрий", "+375336329584", "Шилович Сергей", "+375295515755", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "", "Групповая заявка, дифференцированные условия", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "Всего 3 участника", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "YNWA! ууу-у-у-у-ууу"],
            "groupId"        : 1,
            "applicationType": "GROUP_APPLICATION",
            "person"         : {"nickName": "Гость M_c_D", "nameAndSurname": "Подлазник Дмитрий", "contactPhone": ["(33) 632-9584"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {
                "provisionType"    : "GROUP_DIFFERENTIATED",
                "foodOnFriday"     : "FULL_DAY",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "FULL_DAY",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "FIRST_HALF"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {}
        }, {
            "reference"      : ["24.06.2018 19:56:42", "Индивидуальная заявка", "Warrior088", "Кучма Сергей", "+375296745167", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Брест", "Пятница", "11:00:00", "Скорей всего поездом до Баранок а там пешком)", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "Не имеет особого значения", "Язва есть, но пить можно)"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Warrior088", "nameAndSurname": "Кучма Сергей", "contactPhone": ["(29) 674-5167"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Брест", "departureDay": "FRIDAY", "time": "11:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "DOES_NOT_MATTER"},
            "information"    : {"transportationInfo": "Скорей всего поездом до Баранок а там пешком)", "accommodationInfo": "Язва есть, но пить можно)"}
        }, {
            "reference"      : ["25.06.2018 17:47:08", "Групповая заявка", "", "", "", "Фанат", "Казак максим", "+375296432415", "Всего 2 участника", "", "", "", "", "", "", "Димон", "", "Как водитель, на личном транспортном средстве", "Борисов", "Пятница", "0:00:00", "2 места", "", "", "", "", "", "Групповая заявка, единые условия", "", "", "", "", "", "", "", "", "", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике"],
            "groupId"        : 2,
            "applicationType": "GROUP_APPLICATION",
            "person"         : {"nickName": "Фанат", "nameAndSurname": "Казак максим", "contactPhone": ["(29) 643-2415"]},
            "transportation" : {"transportationType": "DRIVER", "city": "Борисов", "departureDay": "FRIDAY", "time": "0:00", "emptySits": "TWO_SITS"},
            "provision"      : {
                "provisionType"    : "GROUP_COMMON",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {}
        }, {
            "reference"      : ["25.06.2018 17:47:08", "Групповая заявка", "", "", "", "Фанат", "Казак максим", "+375296432415", "Всего 2 участника", "", "", "", "", "", "", "Димон", "", "Как водитель, на личном транспортном средстве", "Борисов", "Пятница", "0:00:00", "2 места", "", "", "", "", "", "Групповая заявка, единые условия", "", "", "", "", "", "", "", "", "", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике"],
            "groupId"        : 2,
            "applicationType": "GROUP_APPLICATION",
            "person"         : {"nickName": "Гость Фанат", "nameAndSurname": "Димон"},
            "transportation" : {"transportationType": "DRIVER", "city": "Борисов", "departureDay": "FRIDAY", "time": "0:00", "emptySits": "TWO_SITS"},
            "provision"      : {
                "provisionType"    : "GROUP_COMMON",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {}
        }, {
            "reference"      : ["25.06.2018 21:51:16", "Индивидуальная заявка", "kri0s", "Андрей", "80296461059", "", "", "", "", "", "", "", "", "", "", "", "", "Как водитель, на личном транспортном средстве", "Барановичи", "Пятница", "12:00:00", "Мест нет", "пока не известно", "", "", "", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "есть вопросы", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "надо кое что обсудить.сам не в Беларуси нуженвайбер организаторов"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "kri0s", "nameAndSurname": "Андрей", "contactPhone": ["(29) 646-1059"]},
            "transportation" : {"transportationType": "DRIVER", "city": "Барановичи", "departureDay": "FRIDAY", "time": "12:00", "emptySits": "NO_EMPTY_SITS"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"transportationInfo": "пока не известно", "accommodationInfo": "есть вопросы", "otherInfo": "надо кое что обсудить.сам не в Беларуси нуженвайбер организаторов"}
        }, {
            "reference"      : ["26.06.2018 0:02:06", "Индивидуальная заявка", "Wega_BY", "Чуприс Вадим", "+37533 665 06 62", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "9:30:00", "Маршрутка", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Wega_BY", "nameAndSurname": "Чуприс Вадим", "contactPhone": ["(33) 665-0662"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "9:30"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"transportationInfo": "Маршрутка"}
        }, {
            "reference"      : ["27.06.2018 15:38:02", "Индивидуальная заявка", "krez_BY", "Лужинский Алексей", "+375336604048", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "9:00:00", "Минск, маршрутка", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "Без обеспечения", "Без обеспечения", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "Не имеет особого значения"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "krez_BY", "nameAndSurname": "Лужинский Алексей", "contactPhone": ["(33) 660-4048"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "9:00"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "FULL_DAY",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "FIRST_HALF",
                "alcoholOnFriday"  : "NOT_REQUIRED",
                "alcoholOnSaturday": "NOT_REQUIRED",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "DOES_NOT_MATTER"},
            "information"    : {"transportationInfo": "Минск, маршрутка"}
        }, {
            "reference"      : ["09.07.2018 23:58:47", "Индивидуальная заявка", "Booze", "Фомичёв Юрий", "+375 (29) 858 7070", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "На маршрутке, с песнями, плясками и пивасиком...", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике", "Сначала думал, что хочу в спальный корпус, но потом понял, что лишу себя \"романтики\" и передумал. Короче, хочу в летнем домике!", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Жду не дождусь уже!"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Booze", "nameAndSurname": "Фомичёв Юрий", "contactPhone": ["(29) 858-7070"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {
                "transportationInfo": "На маршрутке, с песнями, плясками и пивасиком...",
                "accommodationInfo" : "Сначала думал, что хочу в спальный корпус, но потом понял, что лишу себя \"романтики\" и передумал. Короче, хочу в летнем домике!",
                "otherInfo"         : "Жду не дождусь уже!"
            }
        }, {
            "reference"      : ["10.07.2018 10:08:31", "Индивидуальная заявка", "Orgos_1", "Павел Муравейко", "+375291171412", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "Orgos_1", "nameAndSurname": "Павел Муравейко", "contactPhone": ["(29) 117-1412"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {}
        }, {
            "reference"      : ["11.07.2018 14:57:54", "Индивидуальная заявка", "USSRrat", "Павловец Александр ", "(29) 6905520", "", "", "", "", "", "", "", "", "", "", "", "", "Как водитель, на личном транспортном средстве", "Минск ", "Пятница", "7:00:00", "2 места", "", "", "", "", "", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "USSRrat", "nameAndSurname": "Павловец Александр ", "contactPhone": ["(29) 690-5520"]},
            "transportation" : {"transportationType": "DRIVER", "city": "Минск ", "departureDay": "FRIDAY", "time": "7:00", "emptySits": "TWO_SITS"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "NOT_REQUIRED"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {}
        }, {
            "reference"      : ["12.07.2018 23:24:13", "Индивидуальная заявка", "GimliwarII", "Вишневский Кирилл", "+375 29 7780490", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Минск", "Пятница", "8:00:00", "На маршрутке", "Индивидуальная заявка", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "1-ая половина дня (день)", "С пятницы на субботу, С субботы на воскресенье", "В спальном корпусе №1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Ппц жду СХОДКУ!!!!"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "GimliwarII", "nameAndSurname": "Вишневский Кирилл", "contactPhone": ["(29) 778-0490"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Минск", "departureDay": "FRIDAY", "time": "8:00"},
            "provision"      : {"provisionType": "INDIVIDUAL", "foodOnFriday": "FULL_DAY", "foodOnSaturday": "FULL_DAY", "foodOnSunday": "FIRST_HALF", "alcoholOnFriday": "FULL_DAY", "alcoholOnSaturday": "FULL_DAY", "alcoholOnSunday": "FIRST_HALF"},
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "LIVING_BUILDING"},
            "information"    : {"transportationInfo": "На маршрутке", "otherInfo": "Ппц жду СХОДКУ!!!!"}
        }, {
            "reference"      : ["14.07.2018 16:36:02", "Индивидуальная заявка", "1mm0rtaL_Spirit", "Герасевич Андрей", "+375292037836", "", "", "", "", "", "", "", "", "", "", "", "", "Как пассажир / группа пассажиров, в нагрузку к кому-либо из водителей или на маршрутном такси", "", "", "", "", "", "Брест", "Пятница", "10:00:00", "Из Бреста поездом до Баранок, а там кто нить подберет)))", "Индивидуальная заявка", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "2-ая половина дня (вечер)", "1-ая половина дня (день), 2-ая половина дня (вечер)", "Без обеспечения", "С пятницы на субботу, С субботы на воскресенье", "В летнем домике"],
            "applicationType": "INDIVIDUAL_APPLICATION",
            "person"         : {"nickName": "1mm0rtaL_Spirit", "nameAndSurname": "Герасевич Андрей", "contactPhone": ["(29) 203-7836"]},
            "transportation" : {"transportationType": "PASSENGER", "city": "Брест", "departureDay": "FRIDAY", "time": "10:00"},
            "provision"      : {
                "provisionType"    : "INDIVIDUAL",
                "foodOnFriday"     : "SECOND_HALF",
                "foodOnSaturday"   : "FULL_DAY",
                "foodOnSunday"     : "NOT_REQUIRED",
                "alcoholOnFriday"  : "SECOND_HALF",
                "alcoholOnSaturday": "FULL_DAY",
                "alcoholOnSunday"  : "NOT_REQUIRED"
            },
            "accommodation"  : {"accommodationType": "FULL_ACCOMMODATION", "preferences": "SUMMER_HOUSE"},
            "information"    : {"transportationInfo": "Из Бреста поездом до Баранок, а там кто нить подберет)))"}
        }],
        headers   = {
            id                : {
                text       : '#',
                description: 'Идентификационный номер записи'
            },
            applicationType   : {
                text       : 'TYP',
                description: 'Тип заявки по количеству участников',
            },
            nickName          : {
                text       : 'Nickname',
                description: 'Никнейм в игре World of Tanks'
            },
            nameAndSurname    : {
                text       : 'Name & Surname',
                description: 'Реальные имя и фамилия участника'
            },
            contactPhone      : {
                text       : 'Contact Phone',
                description: 'Контактный телефон участника'
            },
            transportationType: {
                text       : 'TRNSP',
                description: 'Тип заявки по способу транспортировки'
            },
            city              : {
                text       : 'City',
                description: 'Город отправления'
            },
            departureDay      : {
                text       : 'Day',
                description: 'День отправления'
            },
            time              : {
                text       : 'Time',
                description: 'Время отправления'
            },
            emptySits         : {
                text       : 'Sits',
                description: 'Количество свобдных мест (указывается для водителей личного ТС)'
            },
            foodAndDrinks     : {
                text          : 'Food & Drinks',
                description   : 'Продукты питания и прохладительные напитки',
                foodOnFriday  : {
                    text       : 'Fri',
                    description: 'Продукты питания на пятницу'
                },
                foodOnSaturday: {
                    text       : 'Sat',
                    description: 'Продукты питания на субботу'
                },
                foodOnSunday  : {
                    text       : 'Sun',
                    description: 'Продукты питания на пятницу'
                },
                foodInTotal   : {
                    text       : 'Tot',
                    description: 'Итоговое количество долей'
                },
                half          : {
                    first : {
                        text       : '1h',
                        description: 'На перую половину дня (утро)'
                    },
                    second: {
                        text       : '2h',
                        description: 'На вторую половину дня (вечер)'
                    }
                }
            },
            alcohol           : {
                text             : 'Alcohol',
                description      : 'Алкогольные напитки (и веселящие газы)',
                alcoholOnFriday  : {
                    text       : 'Fri',
                    description: 'Алкогольные напитки на пятницу'
                },
                alcoholOnSaturday: {
                    text       : 'Sat',
                    description: 'Алкогольные напитки на субботу'
                },
                alcoholOnSunday  : {
                    text       : 'Sun',
                    description: 'Алкогольные напитки на пятницу'
                },
                half             : {
                    first : {
                        text       : '1h',
                        description: 'На перую половину дня (утро)'
                    },
                    second: {
                        text       : '2h',
                        description: 'На вторую половину дня (вечер)'
                    }
                }
            },
            accommodation     : {
                text                : 'Accommodation',
                description         : 'Проживание и предпочтения на размещение по номерам',
                fromFridayToSaturday: {
                    text       : 'Fri/Sat',
                    description: 'Проживание с Пятницы на Субботу'
                },
                fromSaturdayToSunday: {
                    text       : 'Sat/Sun',
                    description: 'Проживание с Субботы на Воскресенье'
                },
                preferences         : {
                    text       : 'Preferences',
                    description: 'Предпочтения на размещение по типу номеров',
                },
                roomType            : {
                    text          : 'Room',
                    description   : 'Тип номера по уровню комфортности',
                    summerHouse   : {
                        text       : 'SUM',
                        description: '1 койко-место в летнем домике'
                    },
                    livingBuilding: {
                        text       : 'BED',
                        description: '1 койко-место в спальном корпусе №1'
                    },
                    doesNotMatter : {
                        text       : 'NOM',
                        description: 'Уровень комфорта не влияет на предпочтения на размещение'
                    }
                }
            },
            information       : {
                text       : 'Other Info',
                description: 'Прочая информация и пожелания',
            }
        },
        blocks    = {
            table   : {
                tag  : '<table>',
                class: 'table-x'
            }, thead: {
                tag  : '<thead>',
                class: 'thead-x'
            }, tbody: {
                tag  : '<tbody>',
                class: 'tbody-x'
            }, tr   : {
                tag  : '<tr>',
                class: 'tr-x'
            }, th   : {
                tag  : '<th>',
                class: 'th-x'
            }, td   : {
                tag  : '<td>',
                class: 'td-x'
            }
        },
        container = $('.container-fluid'),
        table,
        thead,
        tbody,
        tr,
        th,
        td;

    table = $(blocks.table.tag).addClass(blocks.table.class).appendTo(container);
    thead = $(blocks.thead.tag).addClass(blocks.thead.class).appendTo(table);
    tbody = $(blocks.tbody.tag).addClass(blocks.tbody.class).appendTo(table);
    tr    = $(blocks.tr.tag).addClass(blocks.tr.class).appendTo(thead);

    $(blocks.th.tag).addClass(blocks.th.class).text(headers.id.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.applicationType.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.nickName.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.nameAndSurname.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.contactPhone.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.transportationType.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.city.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.departureDay.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.time.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.emptySits.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.foodAndDrinks.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.foodAndDrinks.foodOnFriday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.foodAndDrinks.foodOnSaturday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.foodAndDrinks.foodOnSunday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.alcohol.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.alcohol.alcoholOnFriday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.alcohol.alcoholOnSaturday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.alcohol.alcoholOnSunday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.fromFridayToSaturday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.fromSaturdayToSunday.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.preferences.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.roomType.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.roomType.summerHouse.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.roomType.livingBuilding.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.accommodation.roomType.doesNotMatter.text).appendTo(tr);
    $(blocks.th.tag).addClass(blocks.th.class).text(headers.information.text).appendTo(tr);

    data.forEach(function (item, index) {

        console.log(index, item);
    });
});