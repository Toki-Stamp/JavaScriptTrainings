export default {
    data() {
        return {
            classifiers: {
                "R1-searchTypeObject"         : {
                    "defData"  : [
                        {
                            "type" : 30, "code": 1, "name": "Капитальное строение", "act": 1, "shortName": "2",
                            "name1": "C", "name2": "B", "visualCode": "2"
                        },
                        {
                            "type" : 30, "code": 2, "name": "Изолированное помещение", "act": 1, "shortName": "8",
                            "name1": "D", "name2": "F", "visualCode": "4"
                        },
                        {
                            "type" : 30, "code": 3, "name": "Земельный участок", "act": 1, "shortName": "1",
                            "name1": "A", "name2": "P", "visualCode": "1"
                        },
                        {
                            "type": 30, "code": 4, "name": "Незавершенное законсервированное капитальное строение",
                            "act" : 1, "shortName": "4", "name1": "U", "name2": "B", "visualCode": "3"
                        },
                        {
                            "type" : 30, "code": 5, "name": "Машино-место", "act": 1, "shortName": "-", "name1": "D",
                            "name2": "F", "visualCode": "5"
                        },
                        {
                            "type" : 30, "code": 6, "name": "ПИК", "act": 1, "shortName": null, "name1": "P",
                            "name2": null, "visualCode": "6"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "commonSelTypeObject"         : {
                    "defData"  : [
                        {
                            "type" : 30, "code": 1, "name": "Капитальное строение", "act": 1, "shortName": "2",
                            "name1": "C", "name2": "B", "visualCode": "2"
                        },
                        {
                            "type" : 30, "code": 2, "name": "Изолированное помещение", "act": 1, "shortName": "8",
                            "name1": "D", "name2": "F", "visualCode": "4"
                        },
                        {
                            "type" : 30, "code": 3, "name": "Земельный участок", "act": 1, "shortName": "1",
                            "name1": "A", "name2": "P", "visualCode": "1"
                        },
                        {
                            "type": 30, "code": 4, "name": "Незавершенное законсервированное капитальное строение",
                            "act" : 1, "shortName": "4", "name1": "U", "name2": "B", "visualCode": "3"
                        },
                        {
                            "type" : 30, "code": 5, "name": "Машино-место", "act": 1, "shortName": "-", "name1": "D",
                            "name2": "F", "visualCode": "5"
                        },
                        {
                            "type" : 30, "code": 6, "name": "ПИК", "act": 1, "shortName": null, "name1": "P",
                            "name2": null, "visualCode": "6"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "commonSelTypeObjectForSearch": {
                    "defData"  : [
                        {
                            "type" : 132, "code": 1, "name": "Земельный участок", "act": 1, "shortName": null,
                            "name1": "3", "name2": "Земельный участок", "visualCode": null
                        }, {
                            "type"      : 132, "code": 2, "name": "Капитальное строение (НЗКС)", "act": 1,
                            "shortName" : null, "name1": "1, 4",
                            "name2"     : "Капитальное строение\nНезавершенное законсервированное капитальное строение",
                            "visualCode": null
                        }, {
                            "type"      : 132, "code": 3, "name": "Изолированное помещение (машино-место)", "act": 1,
                            "shortName" : null, "name1": "2, 5", "name2": "Изолированное помещение\nМашино-место",
                            "visualCode": null
                        }, {
                            "type"      : 132, "code": 4, "name": "Предприятие как имущественный комплекс", "act": 1,
                            "shortName" : null, "name1": "6", "name2": "Предприятие как имущественный комплекс",
                            "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formLPObjectAssignment"      : {
                    "defData"  : [
                        {
                            "type"     : 37, "code": 1,
                            "name"     : "Земельный участок для ведения товарного сельского хозяйства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10101"
                        }, {
                            "type"     : 37, "code": 2,
                            "name"     : "Земельный участок для ведения подсобного сельского хозяйства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10102"
                        }, {
                            "type": 37, "code": 3,
                            "name": "Земельный участок для ведения сельского хозяйства в исследовательских целях",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10103"
                        }, {
                            "type"     : 37, "code": 4,
                            "name"     : "Земельный участок для ведения сельского хозяйства в учебных целях", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10104"
                        }, {
                            "type": 37, "code": 5,
                            "name": "Земельный участок для ведения крестьянского (фермерского) хозяйства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10105"
                        }, {
                            "type"     : 37, "code": 6, "name": "Земельный участок для огородничества", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10106"
                        }, {
                            "type": 37, "code": 7, "name": "Земельный участок для сенокошения и выпаса скота",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10107"
                        }, {
                            "type"     : 37, "code": 8, "name": "Земельный участок под служебный надел", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10108"
                        }, {
                            "type": 37, "code": 9, "name": "Земельный участок для иных сельскохозяйственных целей",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10109"
                        }, {
                            "type"     : 37, "code": 10,
                            "name"     : "Земельный участок для ведения личного подсобного хозяйства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10200"
                        }, {
                            "type": 37, "code": 11, "name": "Земельный участок для индивидуального садоводства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10301"
                        }, {
                            "type": 37, "code": 12, "name": "Земельный участок для коллективного садоводства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10302"
                        }, {
                            "type": 37, "code": 13, "name": "Земельный участок для дачного строительства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10400"
                        }, {
                            "type": 37, "code": 14, "name": "Земельный участок для традиционных народных промыслов",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10500"
                        }, {
                            "type": 37, "code": 15, "name": "Земельный участок для ведения охотничьего хозяйства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10600"
                        }, {
                            "type": 37, "code": 16, "name": "Земельный участок для разведения диких животных",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10700"
                        }, {
                            "type"     : 37, "code": 17, "name": "Земельный участок для рыбоводства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "10800"
                        }, {
                            "type": 37, "code": 18,
                            "name": "Земельный участок для размещения объектов многоквартирной жилой застройки",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10901"
                        }, {
                            "type": 37, "code": 19,
                            "name": "Земельный участок для размещения объектов усадебной застройки (строительства и обслуживания жилого дома, обслуживания зарегистрированной организацией по государственной регистрации недвижимого имущества, прав на него и сделок с ним квартиры в блокированном жилом доме)",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10902"
                        }, {
                            "type": 37, "code": 20,
                            "name": "Земельный участок для размещения объектов многоквартирной жилой застройки с объектами обслуживания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10903"
                        }, {
                            "type": 37, "code": 21,
                            "name": "Земельный участок для размещения объектов усадебной застройки (строительства и обслуживания жилого дома) с объектами обслуживания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "10904"
                        }, {
                            "type": 37, "code": 22,
                            "name": "Земельный участок для размещения объектов улично-дорожной сети общего пользования",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11000"
                        }, {
                            "type": 37, "code": 23,
                            "name": "Земельный участок для размещения объектов горнодобывающей промышленности",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11101"
                        }, {
                            "type": 37, "code": 24,
                            "name": "Земельный участок для размещения объектов обрабатывающей промышленности",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11102"
                        }, {
                            "type": 37, "code": 25,
                            "name": "Земельный участок для размещения объектов железнодорожного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11201"
                        }, {
                            "type": 37, "code": 26,
                            "name": "Земельный участок для размещения объектов автомобильного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11202"
                        }, {
                            "type": 37, "code": 27,
                            "name": "Земельный участок для размещения объектов городского электрического транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11203"
                        }, {
                            "type": 37, "code": 28,
                            "name": "Земельный участок для размещения объектов трубопроводного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11204"
                        }, {
                            "type": 37, "code": 29,
                            "name": "Земельный участок для размещения объектов внутреннего водного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11205"
                        }, {
                            "type"     : 37, "code": 30,
                            "name"     : "Земельный участок для размещения объектов воздушного транспорта", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11206"
                        }, {
                            "type": 37, "code": 31, "name": "Земельный участок для размещения объектов связи",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11300"
                        }, {
                            "type": 37, "code": 32, "name": "Земельный участок для размещения объектов энергетики",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11400"
                        }, {
                            "type": 37, "code": 33,
                            "name": "Земельный участок для размещения объектов обороны и государственной безопасности",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11500"
                        }, {
                            "type": 37, "code": 34,
                            "name": "Земельный участок для размещения объектов административного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11601"
                        }, {
                            "type"     : 37, "code": 35,
                            "name"     : "Земельный участок для размещения объектов финансового назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11602"
                        }, {
                            "type"     : 37, "code": 36,
                            "name"     : "Земельный участок для размещения объектов розничной торговли", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11603"
                        }, {
                            "type": 37, "code": 37,
                            "name": "Земельный участок для размещения объектов по ремонту и обслуживанию автомобилей (в том числе автомобильных заправочных и газонаполнительных станций)",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11604"
                        }, {
                            "type": 37, "code": 38, "name": "Земельный участок для размещения автостоянок и гаражей",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11605"
                        }, {
                            "type": 37, "code": 39,
                            "name": "Земельный участок для размещения объектов оптовой торговли, материально-технического и продовольственного снабжения, заготовок и сбыта продукции",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11606"
                        }, {
                            "type"     : 37, "code": 40,
                            "name"     : "Земельный участок для размещения объектов общественного питания", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11607"
                        }, {
                            "type"     : 37, "code": 41,
                            "name"     : "Земельный участок для размещения объектов гостиничного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11608"
                        }, {
                            "type": 37, "code": 42,
                            "name": "Земельный участок для размещения объектов здравоохранения и предоставления социальных услуг",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11609"
                        }, {
                            "type"     : 37, "code": 43,
                            "name"     : "Земельный участок для размещения объектов образования и воспитания", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11610"
                        }, {
                            "type": 37, "code": 44,
                            "name": "Земельный участок для размещения объектов научного назначения и научного обслуживания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11611"
                        }, {
                            "type": 37, "code": 45,
                            "name": "Земельный участок для размещения объектов религиозного (культового) назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11612"
                        }, {
                            "type": 37, "code": 46, "name": "Земельный участок для размещения мест погребения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11613"
                        }, {
                            "type": 37, "code": 47,
                            "name": "Земельный участок для размещения объектов физкультурно-оздоровительного и спортивного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11614"
                        }, {
                            "type": 37, "code": 48,
                            "name": "Земельный участок для размещения объектов культурно-просветительного и зрелищного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11615"
                        }, {
                            "type": 37, "code": 49,
                            "name": "Земельный участок для размещения объектов бытового обслуживания населения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11616"
                        }, {
                            "type"     : 37, "code": 50,
                            "name"     : "Земельный участок для размещения объектов коммунального хозяйства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "11617"
                        }, {
                            "type": 37, "code": 51,
                            "name": "Земельный участок для размещения объектов экстерриториального назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11618"
                        }, {
                            "type": 37, "code": 52,
                            "name": "Земельный участок для размещения объектов гидрометеорологического назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11619"
                        }, {
                            "type": 37, "code": 53,
                            "name": "Земельный участок для размещения объектов неустановленного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11620"
                        }, {
                            "type": 37, "code": 54, "name": "Земельный участок природоохранного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11700"
                        }, {
                            "type": 37, "code": 55, "name": "Земельный участок оздоровительного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11800"
                        }, {
                            "type": 37, "code": 56, "name": "Земельный участок рекреационного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "11900"
                        }, {
                            "type": 37, "code": 57, "name": "Земельный участок историко-культурного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "12000"
                        }, {
                            "type": 37, "code": 58, "name": "Земельный участок лесохозяйственного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "12100"
                        }, {
                            "type": 37, "code": 59, "name": "Земельный участок водохозяйственного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "12200"
                        }, {
                            "type" : 37, "code": 60, "name": "Земельный участок запаса", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "12300"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "searchObjectDialogTypeObj"   : {
                    "defData"  : [
                        {
                            "type" : 30, "code": 1, "name": "Капитальное строение", "act": 1, "shortName": "2",
                            "name1": "C", "name2": "B", "visualCode": "2"
                        }, {
                            "type" : 30, "code": 2, "name": "Изолированное помещение", "act": 1, "shortName": "8",
                            "name1": "D", "name2": "F", "visualCode": "4"
                        }, {
                            "type" : 30, "code": 3, "name": "Земельный участок", "act": 1, "shortName": "1",
                            "name1": "A", "name2": "P", "visualCode": "1"
                        }, {
                            "type": 30, "code": 4, "name": "Незавершенное законсервированное капитальное строение",
                            "act" : 1, "shortName": "4", "name1": "U", "name2": "B", "visualCode": "3"
                        }, {
                            "type" : 30, "code": 5, "name": "Машино-место", "act": 1, "shortName": "-", "name1": "D",
                            "name2": "F", "visualCode": "5"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formCSObjectAssignment"      : {
                    "defData"  : [
                        {
                            "type"     : 37, "code": 61, "name": "Здание многоквартирного жилого дома", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "21101"
                        }, {
                            "type"     : 37, "code": 62, "name": "Здание блокированного жилого дома", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "21102"
                        }, {
                            "type"     : 37, "code": 63, "name": "Здание одноквартирного жилого дома", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "21103"
                        }, {
                            "type" : 37, "code": 64, "name": "Здание общежития", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "21201"
                        }, {
                            "type": 37, "code": 65, "name": "Здание спального корпуса школ-интернатов, детских домов",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "21202"
                        }, {
                            "type"     : 37, "code": 66, "name": "Здание дома для престарелых и инвалидов", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "21203"
                        }, {
                            "type"     : 37, "code": 67,
                            "name"     : "Памятник исторический, идентифицированный в основном как жилой дом", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "21204"
                        }, {
                            "type"     : 37, "code": 68, "name": "Здание специализированное растениеводства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22101"
                        }, {
                            "type"     : 37, "code": 69, "name": "Здание специализированное животноводства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22102"
                        }, {
                            "type": 37, "code": 70, "name": "Здание специализированное лесохозяйственного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22200"
                        }, {
                            "type"     : 37, "code": 71, "name": "Здание специализированное для рыбоводства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22300"
                        }, {
                            "type": 37, "code": 72, "name": "Здание специализированное для добычи и переработки торфа",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22401"
                        }, {
                            "type": 37, "code": 73, "name": "Здание специализированное для добычи нефти и газа",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22402"
                        }, {
                            "type": 37, "code": 74, "name": "Здание горнодобывающей промышленности иного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22403"
                        }, {
                            "type": 37, "code": 75,
                            "name": "Здание специализированное для производства продуктов питания, включая напитки, и табака",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22501"
                        }, {
                            "type": 37, "code": 76,
                            "name": "Здание специализированное для производства текстильных, швейных и кожаных изделий",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22502"
                        }, {
                            "type": 37, "code": 77,
                            "name": "Здание специализированное для обработки древесины и производства изделий из дерева, включая мебель",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22503"
                        }, {
                            "type": 37, "code": 78,
                            "name": "Здание специализированное для переработки нефти и газа, производства химических веществ, резиновых и пластмассовых изделий, прочих неметаллических минеральных продуктов",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22504"
                        }, {
                            "type"     : 37, "code": 79,
                            "name"     : "Здание специализированное для производства строительных материалов", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22505"
                        }, {
                            "type": 37, "code": 80,
                            "name": "Здание специализированное для металлургического производства и металлообработки",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22506"
                        }, {
                            "type": 37, "code": 81,
                            "name": "Здание специализированное для производства машин и оборудования (машиностроения)",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22507"
                        }, {
                            "type": 37, "code": 82,
                            "name": "Здание специализированное для производства электротехнического, электронного и оптического оборудования",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22508"
                        }, {
                            "type": 37, "code": 83,
                            "name": "Здание специализированное для производства транспортных средств и оборудования",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22509"
                        }, {
                            "type": 37, "code": 84, "name": "Здание обрабатывающей промышленности иного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22510"
                        }, {
                            "type": 37, "code": 85, "name": "Здание специализированное железнодорожного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22601"
                        }, {
                            "type": 37, "code": 86, "name": "Здание специализированное автомобильного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22602"
                        }, {
                            "type"     : 37, "code": 87,
                            "name"     : "Здание специализированное городского электрического транспорта", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22603"
                        }, {
                            "type": 37, "code": 88, "name": "Здание специализированное трубопроводного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22604"
                        }, {
                            "type": 37, "code": 89, "name": "Здание специализированное внутреннего водного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22605"
                        }, {
                            "type": 37, "code": 90, "name": "Здание специализированное воздушного транспорта",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22606"
                        }, {
                            "type"     : 37, "code": 91, "name": "Здание специализированное связи", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22700"
                        }, {
                            "type"     : 37, "code": 92, "name": "Здание специализированное энергетики", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22800"
                        }, {
                            "type": 37, "code": 93,
                            "name": "Здание специализированное для ремонта и технического обслуживания автомобилей (в том числе автомобильные заправочные и газонаполнительные станции)",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22901"
                        }, {
                            "type": 37, "code": 94,
                            "name": "Здание специализированное организаций оптовой торговли, материально-технического снабжения и сбыта продукции",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22902"
                        }, {
                            "type": 37, "code": 95, "name": "Здание специализированное розничной торговли",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22903"
                        }, {
                            "type"     : 37, "code": 96, "name": "Здание гостиниц, мотелей, кемпингов", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22904"
                        }, {
                            "type": 37, "code": 97,
                            "name": "Здание специализированное здравоохранения и предоставления социальных услуг",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22905"
                        }, {
                            "type"     : 37, "code": 98,
                            "name"     : "Здание специализированное лечебно-санитарного назначения (морг)", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22906"
                        }, {
                            "type": 37, "code": 99, "name": "Здание специализированное для общественного питания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22907"
                        }, {
                            "type": 37, "code": 100,
                            "name": "Здание специализированное складов, торговых баз, баз материально-технического снабжения, хранилищ",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22908"
                        }, {
                            "type": 37, "code": 101,
                            "name": "Здание специализированное научно-исследовательских, проектных, конструкторских организаций, информационных центров, общественных организаций и государственных архивов",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22909"
                        }, {
                            "type"     : 37, "code": 102, "name": "Здание административно-хозяйственное", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22910"
                        }, {
                            "type": 37, "code": 103,
                            "name": "Здание специализированное для органов государственного управления, обороны, государственной безопасности, внутренних дел",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22911"
                        }, {
                            "type": 37, "code": 104,
                            "name": "Здание специализированное для размещения представительств иностранных государств",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22912"
                        }, {
                            "type": 37, "code": 105, "name": "Здание специализированное финансового назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22913"
                        }, {
                            "type": 37, "code": 106, "name": "Здание специализированное для образования и воспитания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22914"
                        }, {
                            "type": 37, "code": 107,
                            "name": "Здание специализированное для лечебно-профилактических и санаторно-курортных целей",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22915"
                        }, {
                            "type": 37, "code": 108, "name": "Здание специализированное коммунального хозяйства",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22916"
                        }, {
                            "type": 37, "code": 109,
                            "name": "Здание специализированное культурно-просветительного и зрелищного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22917"
                        }, {
                            "type"     : 37, "code": 110,
                            "name"     : "Здание специализированное религиозного (культового) назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22918"
                        }, {
                            "type"     : 37, "code": 111,
                            "name"     : "Здание специализированное для ритуально-похоронного обслуживания", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22919"
                        }, {
                            "type": 37, "code": 112,
                            "name": "Здание специализированное физкультурно-оздоровительного и спортивного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22920"
                        }, {
                            "type"     : 37, "code": 113,
                            "name"     : "Здание специализированное для бытового обслуживания населения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22921"
                        }, {
                            "type"     : 37, "code": 114,
                            "name"     : "Здание специализированное для оказания ветеринарных услуг", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "22922"
                        }, {
                            "type": 37, "code": 115,
                            "name": "Здание специализированное для размещения подразделений по чрезвычайным ситуациям",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22923"
                        }, {
                            "type": 37, "code": 116, "name": "Здание специализированное для организации азартных игр",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22924"
                        }, {
                            "type" : 37, "code": 117, "name": "Здание многофункциональное", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "22925"
                        }, {
                            "type": 37, "code": 118,
                            "name": "Памятник исторический, идентифицированный в основном как нежилой дом",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "23000"
                        }, {
                            "type"     : 37, "code": 119, "name": "Садовый, дачный домик (дача)", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "23100"
                        }, {
                            "type"     : 37, "code": 120, "name": "Здание неустановленного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "29999"
                        }, {
                            "type"     : 37, "code": 121,
                            "name"     : "Сооружение специализированное сельскохозяйственного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30100"
                        }, {
                            "type"     : 37, "code": 122,
                            "name"     : "Сооружение специализированное лесохозяйственного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30200"
                        }, {
                            "type": 37, "code": 123, "name": "Сооружение специализированное для рыбоводства",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "30300"
                        }, {
                            "type"     : 37, "code": 124,
                            "name"     : "Сооружение специализированное горнодобывающей промышленности", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30400"
                        }, {
                            "type"     : 37, "code": 125,
                            "name"     : "Сооружение специализированное обрабатывающей промышленности", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30500"
                        }, {
                            "type"     : 37, "code": 126,
                            "name"     : "Сооружение специализированное железнодорожного транспорта", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30601"
                        }, {
                            "type": 37, "code": 127,
                            "name": "Сооружение специализированное автомобильного транспорта и автодорожного хозяйства",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "30602"
                        }, {
                            "type"     : 37, "code": 128,
                            "name"     : "Сооружение специализированное городского электрического транспорта", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30603"
                        }, {
                            "type": 37, "code": 129, "name": "Сооружение специализированное трубопроводного транспорта",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "30604"
                        }, {
                            "type"     : 37, "code": 130,
                            "name"     : "Сооружение специализированное внутреннего водного транспорта", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30605"
                        }, {
                            "type": 37, "code": 131, "name": "Сооружение специализированное воздушного транспорта",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "30606"
                        }, {
                            "type"     : 37, "code": 132, "name": "Сооружение специализированное связи", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30700"
                        }, {
                            "type"     : 37, "code": 133, "name": "Сооружение специализированное энергетики", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30800"
                        }, {
                            "type"     : 37, "code": 134,
                            "name"     : "Сооружение специализированное водохозяйственного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "30900"
                        }, {
                            "type": 37, "code": 135, "name": "Сооружение специализированное коммунального хозяйства",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31000"
                        }, {
                            "type": 37, "code": 136, "name": "Сооружение специализированное складов, хранилищ",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31100"
                        }, {
                            "type"     : 37, "code": 137,
                            "name"     : "Сооружение специализированное природоохранного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "31200"
                        }, {
                            "type"     : 37, "code": 138,
                            "name"     : "Сооружение специализированное оздоровительного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "31300"
                        }, {
                            "type": 37, "code": 139, "name": "Сооружение специализированное рекреационного назначения",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31400"
                        }, {
                            "type"     : 37, "code": 140,
                            "name"     : "Сооружение специализированное историко-культурного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "31500"
                        }, {
                            "type": 37, "code": 141,
                            "name": "Сооружение специализированное для культурно-просветительного и зрелищного назначения",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31600"
                        }, {
                            "type"     : 37, "code": 142,
                            "name"     : "Сооружение специализированное религиозного (культового) назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "31700"
                        }, {
                            "type": 37, "code": 143,
                            "name": "Сооружение специализированное физкультурно-оздоровительного и спортивного назначения",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31800"
                        }, {
                            "type": 37, "code": 144, "name": "Сооружение специализированное научного назначения",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "31900"
                        }, {
                            "type": 37, "code": 145, "name": "Сооружение специализированное геодезического назначения",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "32000"
                        }, {
                            "type": 37, "code": 146,
                            "name": "Сооружение специализированное для органов государственного управления, обороны, государственной безопасности, внутренних дел",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "32100"
                        }, {
                            "type": 37, "code": 147, "name": "Сооружение специализированное гражданской обороны",
                            "act" : 1, "shortName": null, "name1": "1", "name2": null, "visualCode": "32201"
                        }, {
                            "type"     : 37, "code": 148, "name": "Сооружение многофункциональное", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "32300"
                        }, {
                            "type"     : 37, "code": 149, "name": "Сооружение неустановленного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "39999"
                        }, {
                            "type": 37, "code": 186, "name": "Здание специализированное иного назначения",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "22900"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formCSCharacteristics"       : {
                    "defData"  : [
                        {
                            "type" : 52, "code": 1, "name": "Площадь, м2", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\", \"required\":true}",
                            "name2": "1", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 2, "name": "Готовность, %", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\",\"class\": \"length2\", \"required\":true, \"regexp\": \"(\\\\d{1,2})((([,|.]{1})(\\\\d{0,2}))?)\"}",
                            "name2": "7", "visualCode": "6"
                        }, {
                            "type"     : 52, "code": 3, "name": "Год постройки (дата ввода)", "act": 1,
                            "shortName": null,
                            "name1"    : "{\"type\": \"date\", \"class\": \"length3\", \"required\":true}",
                            "name2"    : "8", "visualCode": "5"
                        }, {
                            "type"      : 52, "code": 4, "name": "Год реконструкции", "act": 1, "shortName": null,
                            "name1"     : "{\"type\": \"date\", \"class\": \"length3\", \"br\":true}", "name2": "12",
                            "visualCode": "6"
                        }, {
                            "type" : 52, "code": 6, "name": "Этажность", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length4\", \"required\":true, \"multi\": true, \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "3", "visualCode": "3"
                        }, {
                            "type" : 52, "code": 7, "name": "Подземная этажность", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length4\", \"br\": true, \"multi\": true, \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "4", "visualCode": "4"
                        }, {
                            "type" : 52, "code": 8, "name": "Материал стен", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"classif\", \"class\": \"length6\", \"required\":true, \"br\":true, \"multi\": true,  \"classifier\":\"formCSWallMaterial\"}",
                            "name2": "5", "visualCode": "7"
                        }, {
                            "type" : 52, "code": 9, "name": "Протяженность, м", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "2", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 12, "name": "Дата консервации", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"date\", \"class\": \"length3\", \"required\":true}",
                            "name2": "6", "visualCode": "5"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formCSWallMaterial"          : {
                    "defData"  : [
                        {
                            "type" : 48, "code": 1, "name": "Древесина", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "1010000"
                        }, {
                            "type" : 48, "code": 2, "name": "Бревно", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "2020100"
                        }, {
                            "type" : 48, "code": 3, "name": "Брус", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "2020200"
                        }, {
                            "type" : 48, "code": 4, "name": "Доски", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "2020400"
                        }, {
                            "type" : 48, "code": 5, "name": "Изделия из древесины", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "2020000"
                        }, {
                            "type" : 48, "code": 6, "name": "Блоки, камни, кирпичи", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "2010000"
                        }, {
                            "type" : 48, "code": 7, "name": "Кирпич", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "2040000"
                        }, {
                            "type" : 48, "code": 8, "name": "Камень природный", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "2030300"
                        }, {
                            "type" : 48, "code": 9, "name": "Блоки стеновые", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "2010500"
                        }, {
                            "type" : 48, "code": 10, "name": "Бетоны", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "1060300"
                        }, {
                            "type" : 48, "code": 11, "name": "Бетон монолитный", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "2101201"
                        }, {
                            "type" : 48, "code": 12, "name": "Железобетон монолитный", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "1060303"
                        }, {
                            "type" : 48, "code": 13, "name": "Железобетонные изделия", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": null
                        }, {
                            "type" : 48, "code": 14, "name": "Металл", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "2070000"
                        }, {
                            "type" : 48, "code": 15, "name": "Сэндвич-панели", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": null
                        }, {
                            "type" : 48, "code": 16, "name": "Стекло", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "1070500"
                        }, {
                            "type" : 48, "code": 17, "name": "Пластмассы и полимеры", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "1050000"
                        }, {
                            "type" : 48, "code": 18, "name": "Иное", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "1070000"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formNCSObjectAssignment"     : {
                    "defData"  : [
                        {
                            "type"     : 37, "code": 120, "name": "Здание неустановленного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "29999"
                        }, {
                            "type"     : 37, "code": 149, "name": "Сооружение неустановленного назначения", "act": 1,
                            "shortName": null, "name1": "1", "name2": null, "visualCode": "39999"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formIPObjectAssignment"      : {
                    "defData"  : [
                        {
                            "type" : 37, "code": 150, "name": "Квартира", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": "40101"
                        }, {
                            "type"     : 37, "code": 151, "name": "Секция (ячейка жилая) общежития", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40102"
                        }, {
                            "type" : 37, "code": 152, "name": "Жилая комната", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40103"
                        }, {
                            "type"     : 37, "code": 153, "name": "Вспомогательное помещение жилого дома", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40104"
                        }, {
                            "type"     : 37, "code": 154, "name": "Специальное жилое помещение", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40105"
                        }, {
                            "type" : 37, "code": 155, "name": "Производственное помещение", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40201"
                        }, {
                            "type" : 37, "code": 156, "name": "Административное помещение", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40202"
                        }, {
                            "type" : 37, "code": 157, "name": "Торговое помещение", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40203"
                        }, {
                            "type"     : 37, "code": 158, "name": "Административно-торговое помещение", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40204"
                        }, {
                            "type" : 37, "code": 159, "name": "Складское помещение", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40205"
                        }, {
                            "type"     : 37, "code": 160,
                            "name"     : "Помещение образовательного, воспитательного и научного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40206"
                        }, {
                            "type"     : 37, "code": 161, "name": "Помещение санитарно-бытового назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40207"
                        }, {
                            "type" : 37, "code": 162, "name": "Помещение здравоохранения", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40208"
                        }, {
                            "type"     : 37, "code": 163, "name": "Помещение общественного питания", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40209"
                        }, {
                            "type"     : 37, "code": 164, "name": "Помещение коммунального хозяйства", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40210"
                        }, {
                            "type"     : 37, "code": 165, "name": "Помещение для оказания ветеринарных услуг", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40211"
                        }, {
                            "type"     : 37, "code": 166,
                            "name"     : "Помещение культурно-просветительного и зрелищного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40212"
                        }, {
                            "type"     : 37, "code": 167,
                            "name"     : "Помещение физкультурно-оздоровительного и спортивного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40213"
                        }, {
                            "type"     : 37, "code": 168, "name": "Помещение транспортного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40214"
                        }, {
                            "type": 37, "code": 169,
                            "name": "Вспомогательное (подсобное) помещение, не относящееся к жилищному фонду",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "40215"
                        }, {
                            "type" : 37, "code": 170, "name": "Помещение связи", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40216"
                        }, {
                            "type"     : 37, "code": 171,
                            "name"     : "Помещение для размещения представительств иностранных государств", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40217"
                        }, {
                            "type"     : 37, "code": 172, "name": "Помещение финансового назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40218"
                        }, {
                            "type": 37, "code": 173,
                            "name": "Помещение специализированное для органов государственного управления, обороны, государственной безопасности, внутренних дел",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "40219"
                        }, {
                            "type": 37, "code": 174, "name": "Помещение для ритуально-похоронного обслуживания",
                            "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "40220"
                        }, {
                            "type"     : 37, "code": 175, "name": "Помещение бытового обслуживания населения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40221"
                        }, {
                            "type"     : 37, "code": 176,
                            "name"     : "Помещение для размещения подразделений по чрезвычайным ситуациям", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40222"
                        }, {
                            "type"     : 37, "code": 177, "name": "Помещение гражданской обороны", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40223"
                        }, {
                            "type"     : 37, "code": 178, "name": "Помещение для организации азартных игр", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40224"
                        }, {
                            "type"     : 37, "code": 179, "name": "Помещение многофункциональное", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "40225"
                        }, {
                            "type"     : 37, "code": 180, "name": "Помещение неустановленного назначения", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": "49999"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formIPObjectAssignmentMP"    : {
                    "defData"  : [
                        {
                            "type" : 37, "code": 181, "name": "Машино-место", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": "40226"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formIPFloor"                 : {
                    "defData"  : [
                        {
                            "type" : 50, "code": 1, "name": "1-й", "act": 1, "shortName": "1", "name1": "1",
                            "name2": null, "visualCode": "1"
                        }, {
                            "type" : 50, "code": 2, "name": "2-й", "act": 1, "shortName": "2", "name1": "2",
                            "name2": null, "visualCode": "2"
                        }, {
                            "type" : 50, "code": 3, "name": "3-й", "act": 1, "shortName": "3", "name1": "3",
                            "name2": null, "visualCode": "3"
                        }, {
                            "type" : 50, "code": 4, "name": "4-й", "act": 1, "shortName": "4", "name1": "4",
                            "name2": null, "visualCode": "4"
                        }, {
                            "type" : 50, "code": 5, "name": "5-й", "act": 1, "shortName": "5", "name1": "5",
                            "name2": null, "visualCode": "5"
                        }, {
                            "type" : 50, "code": 6, "name": "6-й", "act": 1, "shortName": "6", "name1": "6",
                            "name2": null, "visualCode": "6"
                        }, {
                            "type" : 50, "code": 7, "name": "7-й", "act": 1, "shortName": "7", "name1": "7",
                            "name2": null, "visualCode": "7"
                        }, {
                            "type" : 50, "code": 8, "name": "8-й", "act": 1, "shortName": "8", "name1": "8",
                            "name2": null, "visualCode": "8"
                        }, {
                            "type" : 50, "code": 9, "name": "9-й", "act": 1, "shortName": "9", "name1": "9",
                            "name2": null, "visualCode": "9"
                        }, {
                            "type" : 50, "code": 10, "name": "10-й", "act": 1, "shortName": "10", "name1": "10",
                            "name2": null, "visualCode": "10"
                        }, {
                            "type" : 50, "code": 11, "name": "11-й", "act": 1, "shortName": "11", "name1": "11",
                            "name2": null, "visualCode": "11"
                        }, {
                            "type" : 50, "code": 12, "name": "12-й", "act": 1, "shortName": "12", "name1": "12",
                            "name2": null, "visualCode": "12"
                        }, {
                            "type" : 50, "code": 13, "name": "13-й", "act": 1, "shortName": "13", "name1": "13",
                            "name2": null, "visualCode": "13"
                        }, {
                            "type" : 50, "code": 14, "name": "14-й", "act": 1, "shortName": "14", "name1": "14",
                            "name2": null, "visualCode": "14"
                        }, {
                            "type" : 50, "code": 15, "name": "15-й", "act": 1, "shortName": "15", "name1": "15",
                            "name2": null, "visualCode": "15"
                        }, {
                            "type" : 50, "code": 16, "name": "16-й", "act": 1, "shortName": "16", "name1": "16",
                            "name2": null, "visualCode": "16"
                        }, {
                            "type" : 50, "code": 17, "name": "17-й", "act": 1, "shortName": "17", "name1": "17",
                            "name2": null, "visualCode": "17"
                        }, {
                            "type" : 50, "code": 18, "name": "18-й", "act": 1, "shortName": "18", "name1": "18",
                            "name2": null, "visualCode": "18"
                        }, {
                            "type" : 50, "code": 19, "name": "19-й", "act": 1, "shortName": "19", "name1": "19",
                            "name2": null, "visualCode": "19"
                        }, {
                            "type" : 50, "code": 20, "name": "20-й", "act": 1, "shortName": "20", "name1": "20",
                            "name2": null, "visualCode": "20"
                        }, {
                            "type" : 50, "code": 21, "name": "21-й", "act": 1, "shortName": "21", "name1": "21",
                            "name2": null, "visualCode": "21"
                        }, {
                            "type" : 50, "code": 22, "name": "22-й", "act": 1, "shortName": "22", "name1": "22",
                            "name2": null, "visualCode": "22"
                        }, {
                            "type" : 50, "code": 23, "name": "23-й", "act": 1, "shortName": "23", "name1": "23",
                            "name2": null, "visualCode": "23"
                        }, {
                            "type" : 50, "code": 24, "name": "24-й", "act": 1, "shortName": "24", "name1": "24",
                            "name2": null, "visualCode": "24"
                        }, {
                            "type" : 50, "code": 25, "name": "25-й", "act": 1, "shortName": "25", "name1": "25",
                            "name2": null, "visualCode": "25"
                        }, {
                            "type" : 50, "code": 26, "name": "26-й", "act": 1, "shortName": "26", "name1": "26",
                            "name2": null, "visualCode": "26"
                        }, {
                            "type" : 50, "code": 27, "name": "27-й", "act": 1, "shortName": "27", "name1": "27",
                            "name2": null, "visualCode": "27"
                        }, {
                            "type" : 50, "code": 28, "name": "28-й", "act": 1, "shortName": "28", "name1": "28",
                            "name2": null, "visualCode": "28"
                        }, {
                            "type" : 50, "code": 29, "name": "29-й", "act": 1, "shortName": "29", "name1": "29",
                            "name2": null, "visualCode": "29"
                        }, {
                            "type" : 50, "code": 30, "name": "30-й", "act": 1, "shortName": "30", "name1": "30",
                            "name2": null, "visualCode": "30"
                        }, {
                            "type" : 50, "code": 31, "name": "31-й", "act": 1, "shortName": "31", "name1": "31",
                            "name2": null, "visualCode": "31"
                        }, {
                            "type" : 50, "code": 32, "name": "32-й", "act": 1, "shortName": "32", "name1": "32",
                            "name2": null, "visualCode": "32"
                        }, {
                            "type" : 50, "code": 33, "name": "33-й", "act": 1, "shortName": "33", "name1": "33",
                            "name2": null, "visualCode": "33"
                        }, {
                            "type" : 50, "code": 34, "name": "34-й", "act": 1, "shortName": "34", "name1": "34",
                            "name2": null, "visualCode": "34"
                        }, {
                            "type" : 50, "code": 35, "name": "35-й", "act": 1, "shortName": "35", "name1": "35",
                            "name2": null, "visualCode": "35"
                        }, {
                            "type" : 50, "code": 36, "name": "36-й", "act": 1, "shortName": "36", "name1": "36",
                            "name2": null, "visualCode": "36"
                        }, {
                            "type" : 50, "code": 37, "name": "37-й", "act": 1, "shortName": "37", "name1": "37",
                            "name2": null, "visualCode": "37"
                        }, {
                            "type" : 50, "code": 38, "name": "38-й", "act": 1, "shortName": "38", "name1": "38",
                            "name2": null, "visualCode": "38"
                        }, {
                            "type" : 50, "code": 39, "name": "39-й", "act": 1, "shortName": "39", "name1": "39",
                            "name2": null, "visualCode": "39"
                        }, {
                            "type" : 50, "code": 40, "name": "40-й", "act": 1, "shortName": "40", "name1": "40",
                            "name2": null, "visualCode": "40"
                        }, {
                            "type" : 50, "code": 41, "name": "41-й", "act": 1, "shortName": "41", "name1": "41",
                            "name2": null, "visualCode": "41"
                        }, {
                            "type" : 50, "code": 42, "name": "42-й", "act": 1, "shortName": "42", "name1": "42",
                            "name2": null, "visualCode": "42"
                        }, {
                            "type" : 50, "code": 43, "name": "43-й", "act": 1, "shortName": "43", "name1": "43",
                            "name2": null, "visualCode": "43"
                        }, {
                            "type" : 50, "code": 44, "name": "44-й", "act": 1, "shortName": "44", "name1": "44",
                            "name2": null, "visualCode": "44"
                        }, {
                            "type" : 50, "code": 45, "name": "45-й", "act": 1, "shortName": "45", "name1": "45",
                            "name2": null, "visualCode": "45"
                        }, {
                            "type" : 50, "code": 46, "name": "46-й", "act": 1, "shortName": "46", "name1": "46",
                            "name2": null, "visualCode": "46"
                        }, {
                            "type" : 50, "code": 47, "name": "47-й", "act": 1, "shortName": "47", "name1": "47",
                            "name2": null, "visualCode": "47"
                        }, {
                            "type" : 50, "code": 48, "name": "48-й", "act": 1, "shortName": "48", "name1": "48",
                            "name2": null, "visualCode": "48"
                        }, {
                            "type" : 50, "code": 49, "name": "49-й", "act": 1, "shortName": "49", "name1": "49",
                            "name2": null, "visualCode": "49"
                        }, {
                            "type" : 50, "code": 50, "name": "50-й", "act": 1, "shortName": "50", "name1": "50",
                            "name2": null, "visualCode": "50"
                        }, {
                            "type" : 50, "code": 51, "name": "51-й", "act": 1, "shortName": "51", "name1": "51",
                            "name2": null, "visualCode": "51"
                        }, {
                            "type" : 50, "code": 52, "name": "52-й", "act": 1, "shortName": "52", "name1": "52",
                            "name2": null, "visualCode": "52"
                        }, {
                            "type" : 50, "code": 53, "name": "53-й", "act": 1, "shortName": "53", "name1": "53",
                            "name2": null, "visualCode": "53"
                        }, {
                            "type" : 50, "code": 54, "name": "54-й", "act": 1, "shortName": "54", "name1": "54",
                            "name2": null, "visualCode": "54"
                        }, {
                            "type" : 50, "code": 55, "name": "55-й", "act": 1, "shortName": "55", "name1": "55",
                            "name2": null, "visualCode": "55"
                        }, {
                            "type" : 50, "code": 56, "name": "56-й", "act": 1, "shortName": "56", "name1": "56",
                            "name2": null, "visualCode": "56"
                        }, {
                            "type" : 50, "code": 57, "name": "57-й", "act": 1, "shortName": "57", "name1": "57",
                            "name2": null, "visualCode": "57"
                        }, {
                            "type" : 50, "code": 58, "name": "58-й", "act": 1, "shortName": "58", "name1": "58",
                            "name2": null, "visualCode": "58"
                        }, {
                            "type" : 50, "code": 59, "name": "59-й", "act": 1, "shortName": "59", "name1": "59",
                            "name2": null, "visualCode": "59"
                        }, {
                            "type" : 50, "code": 60, "name": "60-й", "act": 1, "shortName": "60", "name1": "60",
                            "name2": null, "visualCode": "60"
                        }, {
                            "type" : 50, "code": 61, "name": "61-й", "act": 1, "shortName": "61", "name1": "61",
                            "name2": null, "visualCode": "61"
                        }, {
                            "type" : 50, "code": 62, "name": "62-й", "act": 1, "shortName": "62", "name1": "62",
                            "name2": null, "visualCode": "62"
                        }, {
                            "type" : 50, "code": 63, "name": "63-й", "act": 1, "shortName": "63", "name1": "63",
                            "name2": null, "visualCode": "63"
                        }, {
                            "type" : 50, "code": 64, "name": "64-й", "act": 1, "shortName": "64", "name1": "64",
                            "name2": null, "visualCode": "64"
                        }, {
                            "type" : 50, "code": 65, "name": "65-й", "act": 1, "shortName": "65", "name1": "65",
                            "name2": null, "visualCode": "65"
                        }, {
                            "type" : 50, "code": 66, "name": "66-й", "act": 1, "shortName": "66", "name1": "66",
                            "name2": null, "visualCode": "66"
                        }, {
                            "type" : 50, "code": 67, "name": "67-й", "act": 1, "shortName": "67", "name1": "67",
                            "name2": null, "visualCode": "67"
                        }, {
                            "type" : 50, "code": 68, "name": "68-й", "act": 1, "shortName": "68", "name1": "68",
                            "name2": null, "visualCode": "68"
                        }, {
                            "type" : 50, "code": 69, "name": "69-й", "act": 1, "shortName": "69", "name1": "69",
                            "name2": null, "visualCode": "69"
                        }, {
                            "type" : 50, "code": 70, "name": "70-й", "act": 1, "shortName": "70", "name1": "70",
                            "name2": null, "visualCode": "70"
                        }, {
                            "type" : 50, "code": 71, "name": "71-й", "act": 1, "shortName": "71", "name1": "71",
                            "name2": null, "visualCode": "71"
                        }, {
                            "type" : 50, "code": 72, "name": "72-й", "act": 1, "shortName": "72", "name1": "72",
                            "name2": null, "visualCode": "72"
                        }, {
                            "type" : 50, "code": 73, "name": "73-й", "act": 1, "shortName": "73", "name1": "73",
                            "name2": null, "visualCode": "73"
                        }, {
                            "type" : 50, "code": 74, "name": "74-й", "act": 1, "shortName": "74", "name1": "74",
                            "name2": null, "visualCode": "74"
                        }, {
                            "type" : 50, "code": 75, "name": "75-й", "act": 1, "shortName": "75", "name1": "75",
                            "name2": null, "visualCode": "75"
                        }, {
                            "type" : 50, "code": 76, "name": "76-й", "act": 1, "shortName": "76", "name1": "76",
                            "name2": null, "visualCode": "76"
                        }, {
                            "type" : 50, "code": 77, "name": "77-й", "act": 1, "shortName": "77", "name1": "77",
                            "name2": null, "visualCode": "77"
                        }, {
                            "type" : 50, "code": 78, "name": "78-й", "act": 1, "shortName": "78", "name1": "78",
                            "name2": null, "visualCode": "78"
                        }, {
                            "type" : 50, "code": 79, "name": "79-й", "act": 1, "shortName": "79", "name1": "79",
                            "name2": null, "visualCode": "79"
                        }, {
                            "type" : 50, "code": 80, "name": "80-й", "act": 1, "shortName": "80", "name1": "80",
                            "name2": null, "visualCode": "80"
                        }, {
                            "type" : 50, "code": 81, "name": "81-й", "act": 1, "shortName": "81", "name1": "81",
                            "name2": null, "visualCode": "81"
                        }, {
                            "type" : 50, "code": 82, "name": "82-й", "act": 1, "shortName": "82", "name1": "82",
                            "name2": null, "visualCode": "82"
                        }, {
                            "type" : 50, "code": 83, "name": "83-й", "act": 1, "shortName": "83", "name1": "83",
                            "name2": null, "visualCode": "83"
                        }, {
                            "type" : 50, "code": 84, "name": "84-й", "act": 1, "shortName": "84", "name1": "84",
                            "name2": null, "visualCode": "84"
                        }, {
                            "type" : 50, "code": 85, "name": "85-й", "act": 1, "shortName": "85", "name1": "85",
                            "name2": null, "visualCode": "85"
                        }, {
                            "type" : 50, "code": 86, "name": "86-й", "act": 1, "shortName": "86", "name1": "86",
                            "name2": null, "visualCode": "86"
                        }, {
                            "type" : 50, "code": 87, "name": "87-й", "act": 1, "shortName": "87", "name1": "87",
                            "name2": null, "visualCode": "87"
                        }, {
                            "type" : 50, "code": 88, "name": "88-й", "act": 1, "shortName": "88", "name1": "88",
                            "name2": null, "visualCode": "88"
                        }, {
                            "type" : 50, "code": 89, "name": "89-й", "act": 1, "shortName": "89", "name1": "89",
                            "name2": null, "visualCode": "89"
                        }, {
                            "type" : 50, "code": 90, "name": "90-й", "act": 1, "shortName": "90", "name1": "90",
                            "name2": null, "visualCode": "90"
                        }, {
                            "type" : 50, "code": 91, "name": "91-й", "act": 1, "shortName": "91", "name1": "91",
                            "name2": null, "visualCode": "91"
                        }, {
                            "type" : 50, "code": 92, "name": "92-й", "act": 1, "shortName": "92", "name1": "92",
                            "name2": null, "visualCode": "92"
                        }, {
                            "type" : 50, "code": 93, "name": "93-й", "act": 1, "shortName": "93", "name1": "93",
                            "name2": null, "visualCode": "93"
                        }, {
                            "type" : 50, "code": 94, "name": "94-й", "act": 1, "shortName": "94", "name1": "94",
                            "name2": null, "visualCode": "94"
                        }, {
                            "type" : 50, "code": 95, "name": "95-й", "act": 1, "shortName": "95", "name1": "95",
                            "name2": null, "visualCode": "95"
                        }, {
                            "type" : 50, "code": 96, "name": "96-й", "act": 1, "shortName": "96", "name1": "96",
                            "name2": null, "visualCode": "96"
                        }, {
                            "type" : 50, "code": 97, "name": "97-й", "act": 1, "shortName": "97", "name1": "97",
                            "name2": null, "visualCode": "97"
                        }, {
                            "type" : 50, "code": 98, "name": "98-й", "act": 1, "shortName": "98", "name1": "98",
                            "name2": null, "visualCode": "98"
                        }, {
                            "type" : 50, "code": 99, "name": "99-й", "act": 1, "shortName": "99", "name1": "99",
                            "name2": null, "visualCode": "99"
                        }, {
                            "type" : 50, "code": 100, "name": "100-й", "act": 1, "shortName": "100", "name1": "100",
                            "name2": null, "visualCode": "100"
                        }, {
                            "type" : 50, "code": 101, "name": "Мансардный (мансарда)", "act": 1, "shortName": "200",
                            "name1": "-", "name2": null, "visualCode": "200"
                        }, {
                            "type" : 50, "code": 102, "name": "Антресоль", "act": 1, "shortName": "201", "name1": "-",
                            "name2": null, "visualCode": "201"
                        }, {
                            "type" : 50, "code": 103, "name": "Мезонин", "act": 1, "shortName": "202", "name1": "-",
                            "name2": null, "visualCode": "202"
                        }, {
                            "type" : 50, "code": 104, "name": "Чердак", "act": 1, "shortName": "203", "name1": "-",
                            "name2": null, "visualCode": "203"
                        }, {
                            "type" : 50, "code": 105, "name": "Технический чердак", "act": 1, "shortName": "204",
                            "name1": "-", "name2": null, "visualCode": "204"
                        }, {
                            "type" : 50, "code": 106, "name": "Наземный цокольный", "act": 1, "shortName": "205",
                            "name1": "-", "name2": null, "visualCode": "205"
                        }, {
                            "type" : 50, "code": 107, "name": "1-й подземный", "act": 1, "shortName": "-1",
                            "name1": "-", "name2": null, "visualCode": "-1"
                        }, {
                            "type" : 50, "code": 108, "name": "2-й подземный", "act": 1, "shortName": "-2",
                            "name1": "-", "name2": null, "visualCode": "-2"
                        }, {
                            "type" : 50, "code": 109, "name": "3-й подземный", "act": 1, "shortName": "-3",
                            "name1": "-", "name2": null, "visualCode": "-3"
                        }, {
                            "type" : 50, "code": 110, "name": "4-й подземный", "act": 1, "shortName": "-4",
                            "name1": "-", "name2": null, "visualCode": "-4"
                        }, {
                            "type" : 50, "code": 111, "name": "5-й подземный", "act": 1, "shortName": "-5",
                            "name1": "-", "name2": null, "visualCode": "-5"
                        }, {
                            "type" : 50, "code": 112, "name": "6-й подземный", "act": 1, "shortName": "-6",
                            "name1": "-", "name2": null, "visualCode": "-6"
                        }, {
                            "type" : 50, "code": 113, "name": "7-й подземный", "act": 1, "shortName": "-7",
                            "name1": "-", "name2": null, "visualCode": "-7"
                        }, {
                            "type" : 50, "code": 114, "name": "8-й подземный", "act": 1, "shortName": "-8",
                            "name1": "-", "name2": null, "visualCode": "-8"
                        }, {
                            "type" : 50, "code": 115, "name": "9-й подземный", "act": 1, "shortName": "-9",
                            "name1": "-", "name2": null, "visualCode": "-9"
                        }, {
                            "type" : 50, "code": 116, "name": "10-й подземный", "act": 1, "shortName": "-10",
                            "name1": "-", "name2": null, "visualCode": "-10"
                        }, {
                            "type" : 50, "code": 117, "name": "11-й подземный", "act": 1, "shortName": "-11",
                            "name1": "-", "name2": null, "visualCode": "-11"
                        }, {
                            "type" : 50, "code": 118, "name": "12-й подземный", "act": 1, "shortName": "-12",
                            "name1": "-", "name2": null, "visualCode": "-12"
                        }, {
                            "type" : 50, "code": 119, "name": "13-й подземный", "act": 1, "shortName": "-13",
                            "name1": "-", "name2": null, "visualCode": "-13"
                        }, {
                            "type" : 50, "code": 120, "name": "14-й подземный", "act": 1, "shortName": "-14",
                            "name1": "-", "name2": null, "visualCode": "-14"
                        }, {
                            "type" : 50, "code": 121, "name": "15-й подземный", "act": 1, "shortName": "-15",
                            "name1": "-", "name2": null, "visualCode": "-15"
                        }, {
                            "type" : 50, "code": 122, "name": "16-й подземный", "act": 1, "shortName": "-16",
                            "name1": "-", "name2": null, "visualCode": "-16"
                        }, {
                            "type" : 50, "code": 123, "name": "17-й подземный", "act": 1, "shortName": "-17",
                            "name1": "-", "name2": null, "visualCode": "-17"
                        }, {
                            "type" : 50, "code": 124, "name": "18-й подземный", "act": 1, "shortName": "-18",
                            "name1": "-", "name2": null, "visualCode": "-18"
                        }, {
                            "type" : 50, "code": 125, "name": "19-й подземный", "act": 1, "shortName": "-19",
                            "name1": "-", "name2": null, "visualCode": "-19"
                        }, {
                            "type" : 50, "code": 126, "name": "20-й подземный", "act": 1, "shortName": "-20",
                            "name1": "-", "name2": null, "visualCode": "-20"
                        }, {
                            "type" : 50, "code": 127, "name": "21-й подземный", "act": 1, "shortName": "-21",
                            "name1": "-", "name2": null, "visualCode": "-21"
                        }, {
                            "type" : 50, "code": 128, "name": "22-й подземный", "act": 1, "shortName": "-22",
                            "name1": "-", "name2": null, "visualCode": "-22"
                        }, {
                            "type" : 50, "code": 129, "name": "23-й подземный", "act": 1, "shortName": "-23",
                            "name1": "-", "name2": null, "visualCode": "-23"
                        }, {
                            "type" : 50, "code": 130, "name": "24-й подземный", "act": 1, "shortName": "-24",
                            "name1": "-", "name2": null, "visualCode": "-24"
                        }, {
                            "type" : 50, "code": 131, "name": "25-й подземный", "act": 1, "shortName": "-25",
                            "name1": "-", "name2": null, "visualCode": "-25"
                        }, {
                            "type" : 50, "code": 132, "name": "26-й подземный", "act": 1, "shortName": "-26",
                            "name1": "-", "name2": null, "visualCode": "-26"
                        }, {
                            "type" : 50, "code": 133, "name": "27-й подземный", "act": 1, "shortName": "-27",
                            "name1": "-", "name2": null, "visualCode": "-27"
                        }, {
                            "type" : 50, "code": 134, "name": "28-й подземный", "act": 1, "shortName": "-28",
                            "name1": "-", "name2": null, "visualCode": "-28"
                        }, {
                            "type" : 50, "code": 135, "name": "29-й подземный", "act": 1, "shortName": "-29",
                            "name1": "-", "name2": null, "visualCode": "-29"
                        }, {
                            "type" : 50, "code": 136, "name": "30-й подземный", "act": 1, "shortName": "-30",
                            "name1": "-", "name2": null, "visualCode": "-30"
                        }, {
                            "type" : 50, "code": 137, "name": "Подвальный", "act": 1, "shortName": "-100", "name1": "-",
                            "name2": null, "visualCode": "-100"
                        }, {
                            "type" : 50, "code": 138, "name": "Цокольный", "act": 1, "shortName": "-101", "name1": "-",
                            "name2": null, "visualCode": "-101"
                        }, {
                            "type" : 50, "code": 139, "name": "Техническое подполье", "act": 1, "shortName": "-102",
                            "name1": "-", "name2": null, "visualCode": "-102"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formIPCharacteristics"       : {
                    "defData"  : [
                        {
                            "type" : 52, "code": 1, "name": "Площадь, м2", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\", \"required\":true}",
                            "name2": "1", "visualCode": "1"
                        }, {
                            "type"     : 52, "code": 3, "name": "Год постройки (дата ввода)", "act": 1,
                            "shortName": null,
                            "name1"    : "{\"type\": \"date\", \"class\": \"length3\", \"required\":true}",
                            "name2"    : "8", "visualCode": "5"
                        }, {
                            "type" : 52, "code": 13, "name": "Жилая площадь, м2", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "9", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 14, "name": "Этаж", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"classif\", \"class\": \"length4\", \"br\":true, \"multi\": true, \"classifier\":\"formIPFloor\"}",
                            "name2": "10", "visualCode": "2"
                        }, {
                            "type" : 52, "code": 15, "name": "Число комнат", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\", \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "11", "visualCode": "3"
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formObjectStatusType"        : {
                    "defData"  : [
                        {
                            "type" : 40, "code": 1, "name": "Актуален", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        },
                        {
                            "type"     : 40, "code": 4, "name": "Прекращен в результате исправления", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formDealingStateType"        : {
                    "defData"  : [
                        {
                            "type" : 71, "code": 1, "name": "Актуальна", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        }, {
                            "type"     : 71, "code": 4, "name": "Прекращена в результате исправления", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formPRStateType"             : {
                    "defData"  : [
                        {
                            "type" : 65, "code": 1, "name": "Актуально", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        }, {
                            "type"     : 65, "code": 4, "name": "Прекращено в результате исправления", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "sortingAddChar"              : {
                    "defData"  : [
                        {
                            "type" : 52, "code": 1, "name": "Площадь, м2", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\", \"required\":true}",
                            "name2": "1", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 9, "name": "Протяженность, м", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "2", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 6, "name": "Этажность", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length4\", \"required\":true, \"multi\": true, \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "3", "visualCode": "3"
                        }, {
                            "type" : 52, "code": 7, "name": "Подземная этажность", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length4\", \"br\": true, \"multi\": true, \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "4", "visualCode": "4"
                        }, {
                            "type" : 52, "code": 8, "name": "Материал стен", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"classif\", \"class\": \"length6\", \"required\":true, \"br\":true, \"multi\": true,  \"classifier\":\"formCSWallMaterial\"}",
                            "name2": "5", "visualCode": "7"
                        }, {
                            "type" : 52, "code": 12, "name": "Дата консервации", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"date\", \"class\": \"length3\", \"required\":true}",
                            "name2": "6", "visualCode": "5"
                        }, {
                            "type" : 52, "code": 2, "name": "Готовность, %", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\",\"class\": \"length2\", \"required\":true, \"regexp\": \"(\\\\d{1,2})((([,|.]{1})(\\\\d{0,2}))?)\"}",
                            "name2": "7", "visualCode": "6"
                        }, {
                            "type"     : 52, "code": 3, "name": "Год постройки (дата ввода)", "act": 1,
                            "shortName": null,
                            "name1"    : "{\"type\": \"date\", \"class\": \"length3\", \"required\":true}",
                            "name2"    : "8", "visualCode": "5"
                        }, {
                            "type" : 52, "code": 13, "name": "Жилая площадь, м2", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "9", "visualCode": "1"
                        }, {
                            "type" : 52, "code": 14, "name": "Этаж", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"classif\", \"class\": \"length4\", \"br\":true, \"multi\": true, \"classifier\":\"formIPFloor\"}",
                            "name2": "10", "visualCode": "2"
                        }, {
                            "type" : 52, "code": 15, "name": "Число комнат", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\", \"regexp\": \"(\\\\d{1,3})\"}",
                            "name2": "11", "visualCode": "3"
                        }, {
                            "type"      : 52, "code": 4, "name": "Год реконструкции", "act": 1, "shortName": null,
                            "name1"     : "{\"type\": \"date\", \"class\": \"length3\", \"br\":true}", "name2": "12",
                            "visualCode": "6"
                        }, {
                            "type" : 52, "code": 5, "name": "Количество подъездов", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "13", "visualCode": null
                        }, {
                            "type" : 52, "code": 10, "name": "Высота", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "14", "visualCode": null
                        }, {
                            "type" : 52, "code": 11, "name": "Глубина", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"number\", \"class\": \"length2\"}", "name2": "15", "visualCode": null
                        }, {
                            "type"     : 52, "code": 16, "name": "Статус объекта в реестре характеристик", "act": 1,
                            "shortName": null, "name1": "{\"type\": \"classif\"}", "name2": "16", "visualCode": null
                        }, {
                            "type"     : 52, "code": 17, "name": "Дата технической инвентаризации", "act": 1,
                            "shortName": null, "name1": "{\"type\": \"date\"}", "name2": "17", "visualCode": null
                        }, {
                            "type" : 52, "code": 18, "name": "Назначение объекта", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"classif\"}", "name2": "18", "visualCode": null
                        }, {
                            "type" : 52, "code": 19, "name": "Наименование объекта", "act": 1, "shortName": null,
                            "name1": "{\"type\": \"string\"}", "name2": "19", "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "formPRFixRightTypes"         : {
                    "defData"   : [
                        {
                            "type" : 30, "code": 1, "name": "Капитальное строение", "act": 1, "shortName": "2",
                            "name1": "C", "name2": "B", "visualCode": "2"
                        }, {
                            "type" : 30, "code": 2, "name": "Изолированное помещение", "act": 1, "shortName": "8",
                            "name1": "D", "name2": "F", "visualCode": "4"
                        }, {
                            "type" : 30, "code": 3, "name": "Земельный участок", "act": 1, "shortName": "1",
                            "name1": "A", "name2": "P", "visualCode": "1"
                        }, {
                            "type": 30, "code": 4, "name": "Незавершенное законсервированное капитальное строение",
                            "act" : 1, "shortName": "4", "name1": "U", "name2": "B", "visualCode": "3"
                        }, {
                            "type" : 30, "code": 5, "name": "Машино-место", "act": 1, "shortName": "-", "name1": "D",
                            "name2": "F", "visualCode": "5"
                        }, {
                            "type" : 30, "code": 6, "name": "ПИК", "act": 1, "shortName": null, "name1": "P",
                            "name2": null, "visualCode": "6"
                        }
                    ], "defSel" : {
                        "30-1"   : {
                            "formPRFixRightTypeWithoutOwners": {
                                "defData"  : [
                                    {
                                        "type" : 62, "code": 16, "name": "Арест", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "14000"
                                    }, {
                                        "type"      : 62, "code": 22,
                                        "name"      : "Запрещение ответчику совершать определенные действия с недвижимым имуществом, наложенное судом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16043"
                                    }, {
                                        "type"      : 62, "code": 23,
                                        "name"      : "Запрещение отчуждения недвижимого имущества, наложенное нотариусом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16030"
                                    }, {
                                        "type"      : 62, "code": 70,
                                        "name"      : "Запрещение отчуждения недвижимого имущества лицом, несовершеннолетние дети которого помещены на государственное обеспечение (ч. 5 п. 12 Декрета Президента Республики Беларусь от 24.11.2006 № 18 \"О дополнительных мерах по государственной защите детей в неблагополучных семьях\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16058"
                                    }, {
                                        "type"      : 62, "code": 71,
                                        "name"      : "Запрещение отчуждения недвижимого имущества кредитодателем, на которого переведен правовой титул, до истечения срока реализации права выкупа имущества кредитополучателем (ч. 2 ст. 149 Банковского кодекса Республики Беларусь)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16010"
                                    }, {
                                        "type"      : 62, "code": 72,
                                        "name"      : "Запрещение отчуждения в частную собственность (в том числе приватизации), передачи в залог, доверительное управление объектов недвижимого имущества, находящихся только в собственности государства (статья 8 Закона Республики Беларусь от 15.07.2010 \"Об объектах, находящихся только в собственности государства, и видах деятельности, на осуществление которых распространяется исключительное право государства\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16063"
                                    }, {
                                        "type"      : 62, "code": 75,
                                        "name"      : "Запрещение отчуждения объекта инфраструктуры и иного имущества на период срока действия соглашения о государственно-частном партнерстве, за исключением перемены партнера по соглашению о государственно-частном партнерстве (пункт 4 статьи 27 Закона Республики Беларусь от 30.12.2015 \"О государственно-частном партнерстве\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17021"
                                    }, {
                                        "type"      : 62, "code": 76,
                                        "name"      : "Запрещение отчуждения (продажи, дарения, мены) жилого помещения до полного погашения льготного кредита (пп. 1.8. п. 1 Указа Президента Республики Беларусь от 07.02.2006 № 75 \"О предоставлении гражданам, постоянно проживающим и работающим в населенных пунктах с численностью населения до 20 тыс. человек, льготных кредитов на капитальный ремонт и реконструкцию жилых помещений, строительство инженерных сетей, возведение хозяйственных помещений и построек\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16056"
                                    }, {
                                        "type"      : 62, "code": 77,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп.1.2 п.1 Указа Президента Республики Беларусь от 27.02.2007 № 108 \"О некоторых мерах по вовлечению в хозяйственный оборот неиспользуемого государственного имущества\", пп.6.20 п.6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16065"
                                    }, {
                                        "type"      : 62, "code": 78,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (часть пятая пункта 7-2 Указа Президента Республики Беларусь от 14.09.2006 № 575 \"О порядке распоряжения государственным имуществом\", пп. 6.15 пункта 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16066"
                                    }, {
                                        "type"      : 62, "code": 79,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп. 6.20 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16067"
                                    }, {
                                        "type"      : 62, "code": 80,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (ч.3 пп. 6.15 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16068"
                                    }, {
                                        "type"      : 62, "code": 81,
                                        "name"      : "Запрещение отчуждения жилого помещения, приобретенного в рассрочку, до полного погашения стоимости жилого помещения (п.3 ст.144 Жилищного кодекса Республики Беларусь от 28.08.2012)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16069"
                                    }, {
                                        "type"      : 62, "code": 82,
                                        "name"      : "Запрещение отчуждения жилого помещения, закрепленного за детьми-сиротами и детьми, оставшимися без попечения родителей (абз.2 п.6 Положения о порядке закрепления жилых помещений за детьми-сиротами и детьми, оставшимися без попечения родителей, утвержденного постановлением Совета Министров Республики Беларусь от 26.12.2006 №1728)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17008"
                                    }, {
                                        "type"      : 62, "code": 84,
                                        "name"      : "Запрещение отчуждения без согласия органа опеки и попечительства жилых помещений, в которых проживают несовершеннолетние члены, бывшие члены семей собственников жилых помещений, признанные находящимися в социально опасном положении, или граждане, признанные недееспособными или ограниченные в дееспособности судом, жилых помещений, закрепленных за детьми-сиротами или детьми, оставшимися без попечения родителей (пп.7.17 Положения об органах опеки и попечительства в Республике Беларусь, утвержденног",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17013"
                                    }, {
                                        "type"      : 62, "code": 85,
                                        "name"      : "Запрещение продажи, ограничение дарения, обмена жилого помещения до полного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17015"
                                    }, {
                                        "type"      : 62, "code": 86,
                                        "name"      : "Запрет осуществлять сделки с недвижимым имуществом, полученным в качестве помощи, влекущие возникновение, переход или прекращение прав, предусматривающие возможность перехода прав на него к иным лицам, в отношении объектов недвижимого имущества, являющихся иностранной безвозмездной помощью; осуществлять реконструкцию и другие действия, влекущие изменение технических характеристик недвижимого имущества, - без согласования с Департаментом по гуманитарной деятельности Управления делами Президента Республики Беларусь\" (ч.3 п.58 Положения о порядке получения, учета, регистрации, использования иностранной безвозмездной помощи, контроля за ее получением и целевым использованием, а также регистрации гуманитарных программ, утвержденного Декретом Президента Республики Беларусь от 31.08.2015 № 5)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17022"
                                    }, {
                                        "type"      : 62, "code": 90,
                                        "name"      : "Ограничение продажи, дарения, обмена жилого помещения в течение пяти лет со дня досрочного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17016"
                                    }, {
                                        "type"      : 62, "code": 93,
                                        "name"      : "Ограничение отчуждения земельных участков, предоставленных гражданам как состоящим на учете нуждающихся в улучшении жилищных условий, и (или) возведенных на них жилых домов, объектов недвижимости, образованных в результате их раздела, слияния или вычленения из них (долей в праве собственности на указанные объекты), до истечения восьми лет со дня государственной регистрации таких домов, за исключением отчуждения местным исполнительным комитетам при условии полного погашения льготного кредита на строительство жилых помещений (в том числе досрочного), если такой кредит привлекался (ч. 1 ст. 51-1 Кодекса Республики Беларусь о земле)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17025"
                                    }, {
                                        "type"      : 62, "code": 95,
                                        "name"      : "Ограничения (обременения) прав, устанавливаемые в зонах охраны недвижимых материальных ценностей",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15040"
                                    }, {
                                        "type"      : 62, "code": 96,
                                        "name"      : "Ограничения (обременения) прав на недвижимое имущество, установленные в связи с присвоением ему статуса памятника историко-культурного наследия",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15010"
                                    }, {
                                        "type"      : 62, "code": 97,
                                        "name"      : "Ограничение (обременение) доли в праве собственности (иное)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16048"
                                    }, {
                                        "type"      : 62, "code": 98,
                                        "name"      : "Ограничение (обременение) иных прав на недвижимое имущество",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16051"
                                    }, {
                                        "type"     : 62, "code": 99, "name": "Запрещение (иное)", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16040"
                                    }
                                ], "defSel": {}, "depData": {}
                            }, "formPRFixRightTypeWithOwners": {
                                "defData"  : [
                                    {
                                        "type"     : 62, "code": 5, "name": "Право хозяйственного ведения", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "5000"
                                    }, {
                                        "type"     : 62, "code": 6, "name": "Право оперативного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "6000"
                                    }, {
                                        "type"     : 62, "code": 7, "name": "Право доверительного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "7000"
                                    }, {
                                        "type" : 62, "code": 11, "name": "Сервитут", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "12000"
                                    }, {
                                        "type" : 62, "code": 12, "name": "Ипотека", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "13000"
                                    }, {
                                        "type"      : 62, "code": 13, "name": "Залог доли в праве собственности",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16046"
                                    }, {
                                        "type" : 62, "code": 15, "name": "Рента", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "16042"
                                    }
                                ], "defSel": {}, "depData": {}
                            }
                        }, "30-2": {
                            "formPRFixRightTypeWithoutOwners": {
                                "defData"  : [
                                    {
                                        "type" : 62, "code": 16, "name": "Арест", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "14000"
                                    }, {
                                        "type"      : 62, "code": 22,
                                        "name"      : "Запрещение ответчику совершать определенные действия с недвижимым имуществом, наложенное судом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16043"
                                    }, {
                                        "type"      : 62, "code": 23,
                                        "name"      : "Запрещение отчуждения недвижимого имущества, наложенное нотариусом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16030"
                                    }, {
                                        "type"      : 62, "code": 70,
                                        "name"      : "Запрещение отчуждения недвижимого имущества лицом, несовершеннолетние дети которого помещены на государственное обеспечение (ч. 5 п. 12 Декрета Президента Республики Беларусь от 24.11.2006 № 18 \"О дополнительных мерах по государственной защите детей в неблагополучных семьях\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16058"
                                    }, {
                                        "type"      : 62, "code": 71,
                                        "name"      : "Запрещение отчуждения недвижимого имущества кредитодателем, на которого переведен правовой титул, до истечения срока реализации права выкупа имущества кредитополучателем (ч. 2 ст. 149 Банковского кодекса Республики Беларусь)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16010"
                                    }, {
                                        "type"      : 62, "code": 72,
                                        "name"      : "Запрещение отчуждения в частную собственность (в том числе приватизации), передачи в залог, доверительное управление объектов недвижимого имущества, находящихся только в собственности государства (статья 8 Закона Республики Беларусь от 15.07.2010 \"Об объектах, находящихся только в собственности государства, и видах деятельности, на осуществление которых распространяется исключительное право государства\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16063"
                                    }, {
                                        "type"      : 62, "code": 75,
                                        "name"      : "Запрещение отчуждения объекта инфраструктуры и иного имущества на период срока действия соглашения о государственно-частном партнерстве, за исключением перемены партнера по соглашению о государственно-частном партнерстве (пункт 4 статьи 27 Закона Республики Беларусь от 30.12.2015 \"О государственно-частном партнерстве\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17021"
                                    }, {
                                        "type"      : 62, "code": 76,
                                        "name"      : "Запрещение отчуждения (продажи, дарения, мены) жилого помещения до полного погашения льготного кредита (пп. 1.8. п. 1 Указа Президента Республики Беларусь от 07.02.2006 № 75 \"О предоставлении гражданам, постоянно проживающим и работающим в населенных пунктах с численностью населения до 20 тыс. человек, льготных кредитов на капитальный ремонт и реконструкцию жилых помещений, строительство инженерных сетей, возведение хозяйственных помещений и построек\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16056"
                                    }, {
                                        "type"      : 62, "code": 77,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп.1.2 п.1 Указа Президента Республики Беларусь от 27.02.2007 № 108 \"О некоторых мерах по вовлечению в хозяйственный оборот неиспользуемого государственного имущества\", пп.6.20 п.6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16065"
                                    }, {
                                        "type"      : 62, "code": 78,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (часть пятая пункта 7-2 Указа Президента Республики Беларусь от 14.09.2006 № 575 \"О порядке распоряжения государственным имуществом\", пп. 6.15 пункта 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16066"
                                    }, {
                                        "type"      : 62, "code": 79,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп. 6.20 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16067"
                                    }, {
                                        "type"      : 62, "code": 80,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (ч.3 пп. 6.15 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16068"
                                    }, {
                                        "type"      : 62, "code": 81,
                                        "name"      : "Запрещение отчуждения жилого помещения, приобретенного в рассрочку, до полного погашения стоимости жилого помещения (п.3 ст.144 Жилищного кодекса Республики Беларусь от 28.08.2012)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16069"
                                    }, {
                                        "type"      : 62, "code": 82,
                                        "name"      : "Запрещение отчуждения жилого помещения, закрепленного за детьми-сиротами и детьми, оставшимися без попечения родителей (абз.2 п.6 Положения о порядке закрепления жилых помещений за детьми-сиротами и детьми, оставшимися без попечения родителей, утвержденного постановлением Совета Министров Республики Беларусь от 26.12.2006 №1728)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17008"
                                    }, {
                                        "type"      : 62, "code": 84,
                                        "name"      : "Запрещение отчуждения без согласия органа опеки и попечительства жилых помещений, в которых проживают несовершеннолетние члены, бывшие члены семей собственников жилых помещений, признанные находящимися в социально опасном положении, или граждане, признанные недееспособными или ограниченные в дееспособности судом, жилых помещений, закрепленных за детьми-сиротами или детьми, оставшимися без попечения родителей (пп.7.17 Положения об органах опеки и попечительства в Республике Беларусь, утвержденног",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17013"
                                    }, {
                                        "type"      : 62, "code": 85,
                                        "name"      : "Запрещение продажи, ограничение дарения, обмена жилого помещения до полного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17015"
                                    }, {
                                        "type"      : 62, "code": 86,
                                        "name"      : "Запрет осуществлять сделки с недвижимым имуществом, полученным в качестве помощи, влекущие возникновение, переход или прекращение прав, предусматривающие возможность перехода прав на него к иным лицам, в отношении объектов недвижимого имущества, являющихся иностранной безвозмездной помощью; осуществлять реконструкцию и другие действия, влекущие изменение технических характеристик недвижимого имущества, - без согласования с Департаментом по гуманитарной деятельности Управления делами Президента Республики Беларусь\" (ч.3 п.58 Положения о порядке получения, учета, регистрации, использования иностранной безвозмездной помощи, контроля за ее получением и целевым использованием, а также регистрации гуманитарных программ, утвержденного Декретом Президента Республики Беларусь от 31.08.2015 № 5)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17022"
                                    }, {
                                        "type"      : 62, "code": 90,
                                        "name"      : "Ограничение продажи, дарения, обмена жилого помещения в течение пяти лет со дня досрочного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17016"
                                    }, {
                                        "type"      : 62, "code": 95,
                                        "name"      : "Ограничения (обременения) прав, устанавливаемые в зонах охраны недвижимых материальных ценностей",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15040"
                                    }, {
                                        "type"      : 62, "code": 96,
                                        "name"      : "Ограничения (обременения) прав на недвижимое имущество, установленные в связи с присвоением ему статуса памятника историко-культурного наследия",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15010"
                                    }, {
                                        "type"      : 62, "code": 97,
                                        "name"      : "Ограничение (обременение) доли в праве собственности (иное)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16048"
                                    }, {
                                        "type"      : 62, "code": 98,
                                        "name"      : "Ограничение (обременение) иных прав на недвижимое имущество",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16051"
                                    }, {
                                        "type"     : 62, "code": 99, "name": "Запрещение (иное)", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16040"
                                    }
                                ], "defSel": {}, "depData": {}
                            }, "formPRFixRightTypeWithOwners": {
                                "defData"  : [
                                    {
                                        "type"     : 62, "code": 5, "name": "Право хозяйственного ведения", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "5000"
                                    }, {
                                        "type"     : 62, "code": 6, "name": "Право оперативного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "6000"
                                    }, {
                                        "type"     : 62, "code": 7, "name": "Право доверительного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "7000"
                                    }, {
                                        "type" : 62, "code": 11, "name": "Сервитут", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "12000"
                                    }, {
                                        "type" : 62, "code": 12, "name": "Ипотека", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "13000"
                                    }, {
                                        "type"      : 62, "code": 13, "name": "Залог доли в праве собственности",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16046"
                                    }, {
                                        "type" : 62, "code": 15, "name": "Рента", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "16042"
                                    }
                                ], "defSel": {}, "depData": {}
                            }
                        }, "30-3": {
                            "formPRFixRightTypeWithoutOwners": {
                                "defData"  : [
                                    {
                                        "type" : 62, "code": 16, "name": "Арест", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "14000"
                                    }, {
                                        "type"      : 62, "code": 22,
                                        "name"      : "Запрещение ответчику совершать определенные действия с недвижимым имуществом, наложенное судом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16043"
                                    }, {
                                        "type"      : 62, "code": 23,
                                        "name"      : "Запрещение отчуждения недвижимого имущества, наложенное нотариусом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16030"
                                    }, {
                                        "type": 62, "code": 25,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в прибрежных полосах водных объектов",
                                        "act" : 1, "shortName": "1", "name1": null, "name2": null, "visualCode": "15070"
                                    }, {
                                        "type": 62, "code": 26,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в водоохранных зонах водных объектов вне прибрежных полос",
                                        "act" : 1, "shortName": "2", "name1": null, "name2": null, "visualCode": "15060"
                                    }, {
                                        "type": 62, "code": 27,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в зонах санитарной охраны поверхностных и подземных источников водоснабжения хозяйственно-питьевого назначения",
                                        "act" : 1, "shortName": "3", "name1": null, "name2": null, "visualCode": "15110"
                                    }, {
                                        "type": 62, "code": 28,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в санитарно-защитных полосах водоводов",
                                        "act" : 1, "shortName": "4", "name1": null, "name2": null, "visualCode": "15021"
                                    }, {
                                        "type": 62, "code": 29,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в охранных зонах линий связи и радиофикации",
                                        "act" : 1, "shortName": "5", "name1": null, "name2": null, "visualCode": "15022"
                                    }, {
                                        "type": 62, "code": 30,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в охранных зонах линий электропередачи",
                                        "act" : 1, "shortName": "6", "name1": null, "name2": null, "visualCode": "15023"
                                    }, {
                                        "type": 62, "code": 31,
                                        "name": "Ограничения (обременения) прав в использовании земель, находящихся в охранных зонах магистральных трубопроводов, систем газоснабжения и других линейных инженерных сооружений",
                                        "act" : 1, "shortName": "7", "name1": null, "name2": null, "visualCode": "15024"
                                    }, {
                                        "type": 62, "code": 32,
                                        "name": "Ограничения (обременения) прав в использовании земель, подвергшихся радиоактивному загрязнению",
                                        "act" : 1, "shortName": "8", "name1": null, "name2": null, "visualCode": "15030"
                                    }, {
                                        "type": 62, "code": 33,
                                        "name": "Ограничения (обременения) прав в использовании земель оздоровительного назначения",
                                        "act" : 1, "shortName": "9", "name1": null, "name2": null, "visualCode": "15080"
                                    }, {
                                        "type"      : 62, "code": 34,
                                        "name"      : "Ограничения (обременения) прав в использовании земель рекреационного назначения",
                                        "act"       : 1, "shortName": "10", "name1": null, "name2": null,
                                        "visualCode": "15090"
                                    }, {
                                        "type"      : 62, "code": 35,
                                        "name"      : "Ограничения (обременения) прав в использовании земель историко-культурного назначения",
                                        "act"       : 1, "shortName": "11", "name1": null, "name2": null,
                                        "visualCode": "15050"
                                    }, {
                                        "type"      : 62, "code": 36,
                                        "name"      : "Ограничения (обременения) прав в использовании земель природоохранного назначения",
                                        "act"       : 1, "shortName": "12", "name1": null, "name2": null,
                                        "visualCode": "15100"
                                    }, {
                                        "type"      : 62, "code": 37,
                                        "name"      : "Ограничения (обременения) прав в использовании земель по строительству, благоустройству и тому подобные",
                                        "act"       : 1, "shortName": "13", "name1": null, "name2": null,
                                        "visualCode": "16052"
                                    }, {
                                        "type"      : 62, "code": 38,
                                        "name"      : "Ограничения (обременения) прав в использовании земель (иные)",
                                        "act"       : 1, "shortName": "14", "name1": null, "name2": null,
                                        "visualCode": "16053"
                                    }, {
                                        "type": 62, "code": 40,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные на территории заказников и памятников природы, объявленных без изъятия земельных участков у землепользователей",
                                        "act" : 1, "shortName": "1", "name1": null, "name2": null, "visualCode": "15140"
                                    }, {
                                        "type": 62, "code": 41,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в границах охранных зон особо охраняемых природных территорий",
                                        "act" : 1, "shortName": "2", "name1": null, "name2": null, "visualCode": "15150"
                                    }, {
                                        "type": 62, "code": 42,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные на территориях, подвергшихся радиоактивному заражению",
                                        "act" : 1, "shortName": "3", "name1": null, "name2": null, "visualCode": "15160"
                                    }, {
                                        "type": 62, "code": 43,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в водоохранных зонах, прибрежных полосах водных объектов, зонах санитарной охраны водных объектов, используемых для питьевого водоснабжения, водоохранных и защитных лесов, охраняемых типичных и редких природных ландшафтов",
                                        "act" : 1, "shortName": "4", "name1": null, "name2": null, "visualCode": "15170"
                                    }, {
                                        "type": 62, "code": 44,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные на территории курортов, зон санитарной охраны месторождений лечебных минеральных вод и лечебных сапропелей, иных земель, обладающих природными лечебными факторами и используемых или предназначенных для организованного массового отдыха населения и туризма",
                                        "act" : 1, "shortName": "5", "name1": null, "name2": null, "visualCode": "15180"
                                    }, {
                                        "type": 62, "code": 45,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в зонах охраны недвижимых материальных историко-культурных ценностей",
                                        "act" : 1, "shortName": "6", "name1": null, "name2": null, "visualCode": "15190"
                                    }, {
                                        "type": 62, "code": 46,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в придорожных полосах (контролируемых зонах) автомобильных, железных дорог, а также в охранных зонах иных транспортных коммуникаций",
                                        "act" : 1, "shortName": "7", "name1": null, "name2": null, "visualCode": "15200"
                                    }, {
                                        "type": 62, "code": 47,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в границах ботанических и дендрологических садов, их охранных зон",
                                        "act" : 1, "shortName": "8", "name1": null, "name2": null, "visualCode": "15210"
                                    }, {
                                        "type": 62, "code": 48,
                                        "name": "Ограничения (обременения) прав на земельные участки, расположенные в местах обитания объектов животного мира, произрастания объектов растительного мира, в обращении с которыми в соответствии с законодательными актами установлены ограничения и запреты",
                                        "act" : 1, "shortName": "9", "name1": null, "name2": null, "visualCode": "15220"
                                    }, {
                                        "type"      : 62, "code": 49,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах вокруг стационарных пунктов гидрометеорологических наблюдений государственной сети гидрометеорологических наблюдений",
                                        "act"       : 1, "shortName": "10", "name1": null, "name2": null,
                                        "visualCode": "15230"
                                    }, {
                                        "type"      : 62, "code": 50,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах геодезических пунктов",
                                        "act"       : 1, "shortName": "11", "name1": null, "name2": null,
                                        "visualCode": "15240"
                                    }, {
                                        "type"      : 62, "code": 51,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в пределах территорий перспективного развития населенных пунктов",
                                        "act"       : 1, "shortName": "12", "name1": null, "name2": null,
                                        "visualCode": "15250"
                                    }, {
                                        "type"      : 62, "code": 52,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на иных территориях в соответствии с законодательными актами",
                                        "act"       : 1, "shortName": "13", "name1": null, "name2": null,
                                        "visualCode": "15260"
                                    }, {
                                        "type"      : 62, "code": 53,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в водоохранных зонах водных объектов",
                                        "act"       : 1, "shortName": "4,1", "name1": null, "name2": null,
                                        "visualCode": "15270"
                                    }, {
                                        "type"      : 62, "code": 54,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в прибрежных полосах водных объектов",
                                        "act"       : 1, "shortName": "4,2", "name1": null, "name2": null,
                                        "visualCode": "15280"
                                    }, {
                                        "type"      : 62, "code": 55,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах санитарной охраны водных объектов, используемых для питьевого водоснабжения",
                                        "act"       : 1, "shortName": "4,3", "name1": null, "name2": null,
                                        "visualCode": "15290"
                                    }, {
                                        "type"      : 62, "code": 56,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на участках водоохранных и защитных лесов",
                                        "act"       : 1, "shortName": "4,4", "name1": null, "name2": null,
                                        "visualCode": "15300"
                                    }, {
                                        "type"      : 62, "code": 57,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на участках охраняемых типичных и редких природных ландшафтов",
                                        "act"       : 1, "shortName": "4,5", "name1": null, "name2": null,
                                        "visualCode": "15310"
                                    }, {
                                        "type"      : 62, "code": 58,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в придорожных полосах (контролируемых зонах) автомобильных дорог",
                                        "act"       : 1, "shortName": "7,1", "name1": null, "name2": null,
                                        "visualCode": "15320"
                                    }, {
                                        "type"      : 62, "code": 59,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах железных дорог",
                                        "act"       : 1, "shortName": "7,2", "name1": null, "name2": null,
                                        "visualCode": "15330"
                                    }, {
                                        "type"      : 62, "code": 60,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах иных транспортных коммуникаций",
                                        "act"       : 1, "shortName": "7,3", "name1": null, "name2": null,
                                        "visualCode": "15340"
                                    }, {
                                        "type"      : 62, "code": 61,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах линий связи и радиофикации",
                                        "act"       : 1, "shortName": "13,1", "name1": null, "name2": null,
                                        "visualCode": "15350"
                                    }, {
                                        "type"      : 62, "code": 62,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах линий электропередачи",
                                        "act"       : 1, "shortName": "13,2", "name1": null, "name2": null,
                                        "visualCode": "15360"
                                    }, {
                                        "type"      : 62, "code": 63,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах магистральных трубопроводов",
                                        "act"       : 1, "shortName": "13,3", "name1": null, "name2": null,
                                        "visualCode": "15370"
                                    }, {
                                        "type"      : 62, "code": 64,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений водоснабжения",
                                        "act"       : 1, "shortName": "13,4", "name1": null, "name2": null,
                                        "visualCode": "15380"
                                    }, {
                                        "type"      : 62, "code": 65,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений канализации",
                                        "act"       : 1, "shortName": "13,5", "name1": null, "name2": null,
                                        "visualCode": "15390"
                                    }, {
                                        "type"      : 62, "code": 66,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений теплоснабжения",
                                        "act"       : 1, "shortName": "13,6", "name1": null, "name2": null,
                                        "visualCode": "15400"
                                    }, {
                                        "type"      : 62, "code": 67,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений газоснабжения",
                                        "act"       : 1, "shortName": "13,7", "name1": null, "name2": null,
                                        "visualCode": "15410"
                                    }, {
                                        "type"      : 62, "code": 68,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на иных территориях",
                                        "act"       : 1, "shortName": "13,8", "name1": null, "name2": null,
                                        "visualCode": "15420"
                                    }, {
                                        "type"      : 62, "code": 70,
                                        "name"      : "Запрещение отчуждения недвижимого имущества лицом, несовершеннолетние дети которого помещены на государственное обеспечение (ч. 5 п. 12 Декрета Президента Республики Беларусь от 24.11.2006 № 18 \"О дополнительных мерах по государственной защите детей в неблагополучных семьях\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16058"
                                    }, {
                                        "type"      : 62, "code": 71,
                                        "name"      : "Запрещение отчуждения недвижимого имущества кредитодателем, на которого переведен правовой титул, до истечения срока реализации права выкупа имущества кредитополучателем (ч. 2 ст. 149 Банковского кодекса Республики Беларусь)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16010"
                                    }, {
                                        "type"      : 62, "code": 72,
                                        "name"      : "Запрещение отчуждения в частную собственность (в том числе приватизации), передачи в залог, доверительное управление объектов недвижимого имущества, находящихся только в собственности государства (статья 8 Закона Республики Беларусь от 15.07.2010 \"Об объектах, находящихся только в собственности государства, и видах деятельности, на осуществление которых распространяется исключительное право государства\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16063"
                                    }, {
                                        "type"      : 62, "code": 75,
                                        "name"      : "Запрещение отчуждения объекта инфраструктуры и иного имущества на период срока действия соглашения о государственно-частном партнерстве, за исключением перемены партнера по соглашению о государственно-частном партнерстве (пункт 4 статьи 27 Закона Республики Беларусь от 30.12.2015 \"О государственно-частном партнерстве\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17021"
                                    }, {
                                        "type"      : 62, "code": 83,
                                        "name"      : "Запрещение использования земельного участка для строительства индивидуальных и многоквартирных жилых домов, гаражей и других хозяйственных построек (кроме специальных зданий и сооружений, обеспечивающих работоспособность полигонов), спортивно-оздоровительных комплексов, а также коллективного садоводства и дачного строительства, в связи с его расположением в зоне безопасности полигонов и войсковых стрельбищ (п.10 Положения о порядке установления размеров и границ зон безопасности полигонов и войсковых стрельбищ Вооруженных Сил Республики Беларусь, режима ведения в этих зонах хозяйственной и иной деятельности, утвержденного постановлением Совета Министров Республики Беларусь от 13.09.2013 № 810)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17017"
                                    }, {
                                        "type"      : 62, "code": 86,
                                        "name"      : "Запрет осуществлять сделки с недвижимым имуществом, полученным в качестве помощи, влекущие возникновение, переход или прекращение прав, предусматривающие возможность перехода прав на него к иным лицам, в отношении объектов недвижимого имущества, являющихся иностранной безвозмездной помощью; осуществлять реконструкцию и другие действия, влекущие изменение технических характеристик недвижимого имущества, - без согласования с Департаментом по гуманитарной деятельности Управления делами Президента Республики Беларусь\" (ч.3 п.58 Положения о порядке получения, учета, регистрации, использования иностранной безвозмездной помощи, контроля за ее получением и целевым использованием, а также регистрации гуманитарных программ, утвержденного Декретом Президента Республики Беларусь от 31.08.2015 № 5)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17022"
                                    }, {
                                        "type"      : 62, "code": 87,
                                        "name"      : "Запрет изменения целевого назначения земельных участков, предоставленных для ведения личного подсобного хозяйства, земельных участков, предоставленных для строительства (строительства и обслуживания) капитальных строений (зданий, сооружений), до завершения их строительства, а также земельных участков, предоставленных гражданам как состоящим на учете нуждающихся в улучшении жилищных условий, до истечения 8 лет со дня государственной регистрации жилых домов (ч.6 ст.10 Кодекса Республики Беларусь о земле)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17023"
                                    }, {
                                        "type"      : 62, "code": 92,
                                        "name"      : "Ограничение отчуждения (купли-продажи, мены, дарения) земельных участков в пригородных зонах г. Минска и областных центров, предоставленных в частную собственность для коллективного садоводства, в том числе земельных участков, образованных в результате их раздела, слияния,  до истечения 5 лет со дня государственной регистрации возникновения прав на такие земельные участки (ч. 8 ст. 51 Кодекса Республики Беларусь о земле)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17024"
                                    }, {
                                        "type"      : 62, "code": 93,
                                        "name"      : "Ограничение отчуждения земельных участков, предоставленных гражданам как состоящим на учете нуждающихся в улучшении жилищных условий, и (или) возведенных на них жилых домов, объектов недвижимости, образованных в результате их раздела, слияния или вычленения из них (долей в праве собственности на указанные объекты), до истечения восьми лет со дня государственной регистрации таких домов, за исключением отчуждения местным исполнительным комитетам при условии полного погашения льготного кредита на строительство жилых помещений (в том числе досрочного), если такой кредит привлекался (ч. 1 ст. 51-1 Кодекса Республики Беларусь о земле)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17025"
                                    }, {
                                        "type"      : 62, "code": 95,
                                        "name"      : "Ограничения (обременения) прав, устанавливаемые в зонах охраны недвижимых материальных ценностей",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15040"
                                    }, {
                                        "type"      : 62, "code": 97,
                                        "name"      : "Ограничение (обременение) доли в праве собственности (иное)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16048"
                                    }, {
                                        "type"      : 62, "code": 98,
                                        "name"      : "Ограничение (обременение) иных прав на недвижимое имущество",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16051"
                                    }, {
                                        "type"     : 62, "code": 99, "name": "Запрещение (иное)", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16040"
                                    }, {
                                        "type"      : 62, "code": 107,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории заказников и памятников природы, объявленных без изъятия земельных участков у землепользователей",
                                        "act"       : 1, "shortName": "1", "name1": null, "name2": null,
                                        "visualCode": "101000"
                                    }, {
                                        "type"      : 62, "code": 108,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране",
                                        "act"       : 1, "shortName": "2", "name1": null, "name2": null,
                                        "visualCode": "102000"
                                    }, {
                                        "type"      : 62, "code": 109,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в курортных зонах",
                                        "act"       : 1, "shortName": "2,1", "name1": null, "name2": null,
                                        "visualCode": "102005"
                                    }, {
                                        "type"      : 62, "code": 110,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах отдыха",
                                        "act"       : 1, "shortName": "2,2", "name1": null, "name2": null,
                                        "visualCode": "102010"
                                    }, {
                                        "type"      : 62, "code": 111,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в парках, скверах, на бульварах",
                                        "act"       : 1, "shortName": "2,3", "name1": null, "name2": null,
                                        "visualCode": "102015"
                                    }, {
                                        "type"      : 62, "code": 112,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в водоохранных зонах рек и водоемов",
                                        "act"       : 1, "shortName": "2,4", "name1": null, "name2": null,
                                        "visualCode": "102020"
                                    }, {
                                        "type"      : 62, "code": 113,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в прибрежных полосах рек и водоемов",
                                        "act"       : 1, "shortName": "2,5", "name1": null, "name2": null,
                                        "visualCode": "102025"
                                    }, {
                                        "type"      : 62, "code": 114,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах санитарной охраны месторождений минеральных вод и лечебных сапропелей",
                                        "act"       : 1, "shortName": "2,6", "name1": null, "name2": null,
                                        "visualCode": "102030"
                                    }, {
                                        "type"      : 62, "code": 115,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах санитарной охраны водных объектов, используемых для хозяйственно-питьевого водоснабжения, в зонах санитарной охраны в местах водозабора",
                                        "act"       : 1, "shortName": "2,7", "name1": null, "name2": null,
                                        "visualCode": "102035"
                                    }, {
                                        "type"      : 62, "code": 116,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в лесах первой группы, особо защитных участках лесов второй группы",
                                        "act"       : 1, "shortName": "2,8", "name1": null, "name2": null,
                                        "visualCode": "102040"
                                    }, {
                                        "type"      : 62, "code": 117,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на участках типичных и редких природных ландшафтов и биотопов",
                                        "act"       : 1, "shortName": "2,9", "name1": null, "name2": null,
                                        "visualCode": "102045"
                                    }, {
                                        "type"      : 62, "code": 118,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на участках верховых болот, болот, являющихся истоками водотоков",
                                        "act"       : 1, "shortName": "2,10", "name1": null, "name2": null,
                                        "visualCode": "102050"
                                    }, {
                                        "type"      : 62, "code": 119,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в местах обитания диких животных и местах произрастания дикорастущих растений, относящихся к видам, включенным в Красную книгу Республики Беларусь",
                                        "act"       : 1, "shortName": "2,11", "name1": null, "name2": null,
                                        "visualCode": "102055"
                                    }, {
                                        "type"      : 62, "code": 120,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, имеющих значение для размножения, нагула, зимовки и (или) миграции диких животных",
                                        "act"       : 1, "shortName": "2,12", "name1": null, "name2": null,
                                        "visualCode": "102060"
                                    }, {
                                        "type"      : 62, "code": 121,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах особо охраняемых природных территорий",
                                        "act"       : 1, "shortName": "2,13", "name1": null, "name2": null,
                                        "visualCode": "102065"
                                    }, {
                                        "type"      : 62, "code": 122,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на иных территориях, для которых установлен специальный режим охраны и использования",
                                        "act"       : 1, "shortName": "2,14", "name1": null, "name2": null,
                                        "visualCode": "102070"
                                    }, {
                                        "type"      : 62, "code": 123,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территориях, подвергшихся радиоактивному загрязнению",
                                        "act"       : 1, "shortName": "3", "name1": null, "name2": null,
                                        "visualCode": "103000"
                                    }, {
                                        "type"      : 62, "code": 124,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах объектов военного назначения",
                                        "act"       : 1, "shortName": "4", "name1": null, "name2": null,
                                        "visualCode": "104000"
                                    }, {
                                        "type"      : 62, "code": 125,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах объектов инженерной инфраструктуры",
                                        "act"       : 1, "shortName": "5", "name1": null, "name2": null,
                                        "visualCode": "105000"
                                    }, {
                                        "type"      : 62, "code": 126,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах линий связи и радиофикации",
                                        "act"       : 1, "shortName": "5,1", "name1": null, "name2": null,
                                        "visualCode": "105005"
                                    }, {
                                        "type"      : 62, "code": 127,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах электрических сетей",
                                        "act"       : 1, "shortName": "5,2", "name1": null, "name2": null,
                                        "visualCode": "105010"
                                    }, {
                                        "type"      : 62, "code": 128,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах магистральных трубопроводов",
                                        "act"       : 1, "shortName": "5,3", "name1": null, "name2": null,
                                        "visualCode": "105015"
                                    }, {
                                        "type"      : 62, "code": 129,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений водоснабжения",
                                        "act"       : 1, "shortName": "5,4", "name1": null, "name2": null,
                                        "visualCode": "105020"
                                    }, {
                                        "type"      : 62, "code": 130,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений канализации",
                                        "act"       : 1, "shortName": "5,5", "name1": null, "name2": null,
                                        "visualCode": "105025"
                                    }, {
                                        "type"      : 62, "code": 131,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений теплоснабжения",
                                        "act"       : 1, "shortName": "5,6", "name1": null, "name2": null,
                                        "visualCode": "105030"
                                    }, {
                                        "type"      : 62, "code": 132,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах объектов газораспределительной системы",
                                        "act"       : 1, "shortName": "5,7", "name1": null, "name2": null,
                                        "visualCode": "105035"
                                    }, {
                                        "type"      : 62, "code": 133,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах охраны недвижимых материальных историко-культурных ценностей",
                                        "act"       : 1, "shortName": "6", "name1": null, "name2": null,
                                        "visualCode": "106000"
                                    }, {
                                        "type"      : 62, "code": 134,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в придорожных полосах (контролируемых зонах) автомобильных, железных дорог, а также в охранных зонах иных транспортных коммуникаций",
                                        "act"       : 1, "shortName": "7", "name1": null, "name2": null,
                                        "visualCode": "107000"
                                    }, {
                                        "type"      : 62, "code": 135,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в  придорожных поласах (контролируемых зонах) автомобильных дорог",
                                        "act"       : 1, "shortName": "7,1", "name1": null, "name2": null,
                                        "visualCode": "107005"
                                    }, {
                                        "type"      : 62, "code": 136,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах железных дорог",
                                        "act"       : 1, "shortName": "7,2", "name1": null, "name2": null,
                                        "visualCode": "107010"
                                    }, {
                                        "type"      : 62, "code": 137,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах иных транспортных коммуникаций",
                                        "act"       : 1, "shortName": "7,3", "name1": null, "name2": null,
                                        "visualCode": "107015"
                                    }, {
                                        "type"      : 62, "code": 138,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в границах ботанических и дендрологических садов, их охранных зон",
                                        "act"       : 1, "shortName": "8", "name1": null, "name2": null,
                                        "visualCode": "108000"
                                    }, {
                                        "type"      : 62, "code": 139,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах вокруг стационарных пунктов гидрометеорологических наблюдений государственной сети гидрометеорологических наблюдений",
                                        "act"       : 1, "shortName": "9", "name1": null, "name2": null,
                                        "visualCode": "109000"
                                    }, {
                                        "type"      : 62, "code": 140,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах геодезических пунктов",
                                        "act"       : 1, "shortName": "10", "name1": null, "name2": null,
                                        "visualCode": "110000"
                                    }, {
                                        "type"      : 62, "code": 141,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в пределах территорий перспективного развития населенных пунктов",
                                        "act"       : 1, "shortName": "11", "name1": null, "name2": null,
                                        "visualCode": "111000"
                                    }, {
                                        "type"      : 62, "code": 142,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на иных территориях в соответствии с законодательными актами",
                                        "act"       : 1, "shortName": "12", "name1": null, "name2": null,
                                        "visualCode": "112000"
                                    }, {
                                        "type"      : 62, "code": 143,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на мелиорируемых (мелиорированных) землях",
                                        "act"       : 1, "shortName": "12,1", "name1": null, "name2": null,
                                        "visualCode": "112005"
                                    }, {
                                        "type"      : 62, "code": 144,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на площадях залегания полезных ископаемых",
                                        "act"       : 1, "shortName": "12,2", "name1": null, "name2": null,
                                        "visualCode": "112010"
                                    }, {
                                        "type"      : 62, "code": 145,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зоне минимальных расстояний от магистральных газопроводов",
                                        "act"       : 1, "shortName": "12,3", "name1": null, "name2": null,
                                        "visualCode": "112015"
                                    }, {
                                        "type"      : 62, "code": 146,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в  санитарно-защитной зоне газораспределительных станций магистральных газопроводов",
                                        "act"       : 1, "shortName": "12,4", "name1": null, "name2": null,
                                        "visualCode": "112020"
                                    }, {
                                        "type"      : 62, "code": 148,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории заказников и памятников природы, объявленных без изъятия земельных участков у землепользователей",
                                        "act"       : 1, "shortName": "1", "name1": null, "name2": null,
                                        "visualCode": "151000"
                                    }, {
                                        "type"      : 62, "code": 149,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране",
                                        "act"       : 1, "shortName": "2", "name1": null, "name2": null,
                                        "visualCode": "152000"
                                    }, {
                                        "type"      : 62, "code": 150,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в курортной зоне)",
                                        "act"       : 1, "shortName": "2,1", "name1": null, "name2": null,
                                        "visualCode": "152005"
                                    }, {
                                        "type"      : 62, "code": 151,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в зоне отдыха)",
                                        "act"       : 1, "shortName": "2,2", "name1": null, "name2": null,
                                        "visualCode": "152010"
                                    }, {
                                        "type"      : 62, "code": 152,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в парке, сквере, на бульваре)",
                                        "act"       : 1, "shortName": "2,3", "name1": null, "name2": null,
                                        "visualCode": "152020"
                                    }, {
                                        "type"      : 62, "code": 153,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в водоохранной зоне реки, водоема)",
                                        "act"       : 1, "shortName": "2,4", "name1": null, "name2": null,
                                        "visualCode": "152030"
                                    }, {
                                        "type"      : 62, "code": 154,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в прибрежной полосе реки, водоема)",
                                        "act"       : 1, "shortName": "2,5", "name1": null, "name2": null,
                                        "visualCode": "152040"
                                    }, {
                                        "type"      : 62, "code": 155,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в зоне санитарной охраны месторождения минеральных вод и лечебных сапропелей)",
                                        "act"       : 1, "shortName": "2,6", "name1": null, "name2": null,
                                        "visualCode": "152050"
                                    }, {
                                        "type"      : 62, "code": 156,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в зоне санитарной охраны водного объекта, используемого для хозяйственно-питьевого водоснабжения, в зоне санитарной охраны в местах водозабора)",
                                        "act"       : 1, "shortName": "2,7", "name1": null, "name2": null,
                                        "visualCode": "152060"
                                    }, {
                                        "type"      : 62, "code": 157,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (рекреационно-оздоровительные и защитные леса)",
                                        "act"       : 1, "shortName": "2,8", "name1": null, "name2": null,
                                        "visualCode": "152070"
                                    }, {
                                        "type"      : 62, "code": 158,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (на участках типичных и редких природных ландшафтов и биотопов)",
                                        "act"       : 1, "shortName": "2,9", "name1": null, "name2": null,
                                        "visualCode": "152080"
                                    }, {
                                        "type"      : 62, "code": 159,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (на участках верховых болот, болот, являющихся истоками водотоков)",
                                        "act"       : 1, "shortName": "2,10", "name1": null, "name2": null,
                                        "visualCode": "152090"
                                    }, {
                                        "type"      : 62, "code": 160,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в местах обитания диких животных и местах произрастания дикорастущих растений, относящихся к видам, включенным в Красную книгу Республики Беларусь)",
                                        "act"       : 1, "shortName": "2,11", "name1": null, "name2": null,
                                        "visualCode": "152100"
                                    }, {
                                        "type"      : 62, "code": 161,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, имеющих значение для размножения, нагула, зимовки и (или) миграции диких животных",
                                        "act"       : 1, "shortName": "2,12", "name1": null, "name2": null,
                                        "visualCode": "152110"
                                    }, {
                                        "type"      : 62, "code": 162,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на природных территориях, подлежащих специальной охране (в охранных зонах особо охраняемых природных территорий)",
                                        "act"       : 1, "shortName": "2,13", "name1": null, "name2": null,
                                        "visualCode": "152120"
                                    }, {
                                        "type"      : 62, "code": 163,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на иных территориях, для которых установлен специальный режим охраны и использования",
                                        "act"       : 1, "shortName": "2,14", "name1": null, "name2": null,
                                        "visualCode": "152130"
                                    }, {
                                        "type"      : 62, "code": 164,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные  на территории, подвергшейся радиоактивному загрязнению в результате катастрофы на Чернобыльской АЭС",
                                        "act"       : 1, "shortName": "3", "name1": null, "name2": null,
                                        "visualCode": "153000"
                                    }, {
                                        "type"      : 62, "code": 165,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные  на территории, подвергшейся радиоактивному загрязнению (зона эвакуации)",
                                        "act"       : 1, "shortName": "3,1", "name1": null, "name2": null,
                                        "visualCode": "153010"
                                    }, {
                                        "type"      : 62, "code": 166,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории, подвергшейся радиоактивному загрязнению (зона первоочередного отселения)",
                                        "act"       : 1, "shortName": "3,2", "name1": null, "name2": null,
                                        "visualCode": "153020"
                                    }, {
                                        "type"      : 62, "code": 167,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории, подвергшейся радиоактивному загрязнению (зона последующего отселения)",
                                        "act"       : 1, "shortName": "3,3", "name1": null, "name2": null,
                                        "visualCode": "153030"
                                    }, {
                                        "type"      : 62, "code": 168,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории, подвергшейся радиоактивному загрязнению (зона с правом на отселение)",
                                        "act"       : 1, "shortName": "3,4", "name1": null, "name2": null,
                                        "visualCode": "153040"
                                    }, {
                                        "type"      : 62, "code": 169,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории, подвергшейся радиоактивному загрязнению (зона проживания с периодическим радиационным контролем)",
                                        "act"       : 1, "shortName": "3,5", "name1": null, "name2": null,
                                        "visualCode": "153050"
                                    }, {
                                        "type"      : 62, "code": 170,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на территории, подвергшейся радиоактивному загрязнению (территория, на которой невозможно или ограничено производство сельскохозяйственной продукции)",
                                        "act"       : 1, "shortName": "3,6", "name1": null, "name2": null,
                                        "visualCode": "153060"
                                    }, {
                                        "type"      : 62, "code": 171,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранной зоне объектов военного назначения",
                                        "act"       : 1, "shortName": "4", "name1": null, "name2": null,
                                        "visualCode": "154000"
                                    }, {
                                        "type"      : 62, "code": 172,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зоне безопасности полигона и войскового стрельбища Вооруженных Сил Республики Беларусь",
                                        "act"       : 1, "shortName": "4,1", "name1": null, "name2": null,
                                        "visualCode": "154010"
                                    }, {
                                        "type"      : 62, "code": 173,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах объектов инженерной инфраструктуры",
                                        "act"       : 1, "shortName": "5", "name1": null, "name2": null,
                                        "visualCode": "155000"
                                    }, {
                                        "type"      : 62, "code": 174,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах линий связи и радиофикации",
                                        "act"       : 1, "shortName": "5,1", "name1": null, "name2": null,
                                        "visualCode": "155010"
                                    }, {
                                        "type"      : 62, "code": 175,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах электрических сетей",
                                        "act"       : 1, "shortName": "5,2", "name1": null, "name2": null,
                                        "visualCode": "155020"
                                    }, {
                                        "type"      : 62, "code": 176,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах магистральных трубопроводов",
                                        "act"       : 1, "shortName": "5,3", "name1": null, "name2": null,
                                        "visualCode": "155030"
                                    }, {
                                        "type"      : 62, "code": 177,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах санитарной охраны водопроводных сооружений",
                                        "act"       : 1, "shortName": "5,4", "name1": null, "name2": null,
                                        "visualCode": "155040"
                                    }, {
                                        "type"      : 62, "code": 178,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в санитарно-защитных полосах водоводов",
                                        "act"       : 1, "shortName": "5,5", "name1": null, "name2": null,
                                        "visualCode": "155050"
                                    }, {
                                        "type"      : 62, "code": 179,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах сетей и сооружений теплоснабжения",
                                        "act"       : 1, "shortName": "5,6", "name1": null, "name2": null,
                                        "visualCode": "155060"
                                    }, {
                                        "type"      : 62, "code": 180,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах объектов газораспределительной системы",
                                        "act"       : 1, "shortName": "5,7", "name1": null, "name2": null,
                                        "visualCode": "155070"
                                    }, {
                                        "type"      : 62, "code": 181,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в санитарно-защитных полосах вокруг первого пояса зоны санитарной охраны водопроводных сооружений",
                                        "act"       : 1, "shortName": "5,8", "name1": null, "name2": null,
                                        "visualCode": "155080"
                                    }, {
                                        "type"      : 62, "code": 182,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах охраны недвижимых материальных историко-культурных ценностей",
                                        "act"       : 1, "shortName": "6", "name1": null, "name2": null,
                                        "visualCode": "156000"
                                    }, {
                                        "type"      : 62, "code": 183,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в придорожных полосах (контролируемых зонах) автомобильных, железных дорог, а также в охранных зонах иных транспортных коммуникаций",
                                        "act"       : 1, "shortName": "7", "name1": null, "name2": null,
                                        "visualCode": "157000"
                                    }, {
                                        "type"      : 62, "code": 184,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в придорожной полосе (контролируемой зоне) автомобильной дороги",
                                        "act"       : 1, "shortName": "7,1", "name1": null, "name2": null,
                                        "visualCode": "157010"
                                    }, {
                                        "type"      : 62, "code": 185,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранной зоне железной дороги",
                                        "act"       : 1, "shortName": "7,1", "name1": null, "name2": null,
                                        "visualCode": "157020"
                                    }, {
                                        "type"      : 62, "code": 186,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах иных транспортных коммуникаций",
                                        "act"       : 1, "shortName": "7,3", "name1": null, "name2": null,
                                        "visualCode": "157030"
                                    }, {
                                        "type"      : 62, "code": 187,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в санитарно-защитных зонах организаций, сооружений и иных объектов",
                                        "act"       : 1, "shortName": "8", "name1": null, "name2": null,
                                        "visualCode": "158000"
                                    }, {
                                        "type"      : 62, "code": 188,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в санитарно-защитных зоне организаций, сооружений и иных объектов",
                                        "act"       : 1, "shortName": "8,1", "name1": null, "name2": null,
                                        "visualCode": "158010"
                                    }, {
                                        "type"      : 62, "code": 189,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранной зоне вокруг стационарных пунктов гидрометеорологических наблюдений государственной сети гидрометеорологических наблюдений",
                                        "act"       : 1, "shortName": "9", "name1": null, "name2": null,
                                        "visualCode": "159000"
                                    }, {
                                        "type"      : 62, "code": 190,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в охранных зонах геодезических пунктов",
                                        "act"       : 1, "shortName": "10", "name1": null, "name2": null,
                                        "visualCode": "160000"
                                    }, {
                                        "type"      : 62, "code": 191,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в пределах территории перспективного развития населенного пункта",
                                        "act"       : 1, "shortName": "11", "name1": null, "name2": null,
                                        "visualCode": "161000"
                                    }, {
                                        "type"      : 62, "code": 192,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на мелиорируемых (мелиорированных) землях",
                                        "act"       : 1, "shortName": "12", "name1": null, "name2": null,
                                        "visualCode": "162000"
                                    }, {
                                        "type"      : 62, "code": 193,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные на площадях залегания полезных ископаемых",
                                        "act"       : 1, "shortName": "13", "name1": null, "name2": null,
                                        "visualCode": "163000"
                                    }, {
                                        "type"      : 62, "code": 194,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зонах минимальных расстояний магистральных трубопроводов",
                                        "act"       : 1, "shortName": "14", "name1": null, "name2": null,
                                        "visualCode": "164000"
                                    }, {
                                        "type"      : 62, "code": 195,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зоне минимальных расстояний магистральных газопроводов",
                                        "act"       : 1, "shortName": "14,1", "name1": null, "name2": null,
                                        "visualCode": "164010"
                                    }, {
                                        "type"      : 62, "code": 196,
                                        "name"      : "Ограничения (обременения) прав на земельные участки, расположенные в зоне минимальных расстояний магистральных нефтепроводов и нефтепродуктопроводов",
                                        "act"       : 1, "shortName": "14,2", "name1": null, "name2": null,
                                        "visualCode": "164020"
                                    }
                                ], "defSel": {}, "depData": {}
                            }, "formPRFixRightTypeWithOwners": {
                                "defData"  : [
                                    {
                                        "type": 62, "code": 2, "name": "Право пожизненного наследуемого владения",
                                        "act" : 1, "shortName": null, "name1": null, "name2": null, "visualCode": "2000"
                                    }, {
                                        "type"     : 62, "code": 3, "name": "Право постоянного пользования", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "3000"
                                    }, {
                                        "type"     : 62, "code": 4, "name": "Право временного пользования", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "4000"
                                    }, {
                                        "type"     : 62, "code": 7, "name": "Право доверительного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "7000"
                                    }, {
                                        "type" : 62, "code": 8, "name": "Право аренды", "act": 1, "shortName": null,
                                        "name1": "доля в праве аренды", "name2": null, "visualCode": "8000"
                                    }, {
                                        "type" : 62, "code": 9, "name": "Право субаренды", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "9000"
                                    }, {
                                        "type" : 62, "code": 11, "name": "Сервитут", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "12000"
                                    }, {
                                        "type" : 62, "code": 12, "name": "Ипотека", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "13000"
                                    }, {
                                        "type"      : 62, "code": 13, "name": "Залог доли в праве собственности",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16046"
                                    }, {
                                        "type"     : 62, "code": 14, "name": "Залог права аренды", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16050"
                                    }, {
                                        "type" : 62, "code": 15, "name": "Рента", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "16042"
                                    }
                                ], "defSel": {}, "depData": {}
                            }
                        }, "30-4": {
                            "formPRFixRightTypeWithoutOwners": {
                                "defData"  : [
                                    {
                                        "type" : 62, "code": 16, "name": "Арест", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "14000"
                                    }, {
                                        "type"      : 62, "code": 22,
                                        "name"      : "Запрещение ответчику совершать определенные действия с недвижимым имуществом, наложенное судом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16043"
                                    }, {
                                        "type"      : 62, "code": 23,
                                        "name"      : "Запрещение отчуждения недвижимого имущества, наложенное нотариусом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16030"
                                    }, {
                                        "type"      : 62, "code": 70,
                                        "name"      : "Запрещение отчуждения недвижимого имущества лицом, несовершеннолетние дети которого помещены на государственное обеспечение (ч. 5 п. 12 Декрета Президента Республики Беларусь от 24.11.2006 № 18 \"О дополнительных мерах по государственной защите детей в неблагополучных семьях\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16058"
                                    }, {
                                        "type"      : 62, "code": 71,
                                        "name"      : "Запрещение отчуждения недвижимого имущества кредитодателем, на которого переведен правовой титул, до истечения срока реализации права выкупа имущества кредитополучателем (ч. 2 ст. 149 Банковского кодекса Республики Беларусь)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16010"
                                    }, {
                                        "type"      : 62, "code": 72,
                                        "name"      : "Запрещение отчуждения в частную собственность (в том числе приватизации), передачи в залог, доверительное управление объектов недвижимого имущества, находящихся только в собственности государства (статья 8 Закона Республики Беларусь от 15.07.2010 \"Об объектах, находящихся только в собственности государства, и видах деятельности, на осуществление которых распространяется исключительное право государства\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16063"
                                    }, {
                                        "type"      : 62, "code": 75,
                                        "name"      : "Запрещение отчуждения объекта инфраструктуры и иного имущества на период срока действия соглашения о государственно-частном партнерстве, за исключением перемены партнера по соглашению о государственно-частном партнерстве (пункт 4 статьи 27 Закона Республики Беларусь от 30.12.2015 \"О государственно-частном партнерстве\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17021"
                                    }, {
                                        "type"      : 62, "code": 76,
                                        "name"      : "Запрещение отчуждения (продажи, дарения, мены) жилого помещения до полного погашения льготного кредита (пп. 1.8. п. 1 Указа Президента Республики Беларусь от 07.02.2006 № 75 \"О предоставлении гражданам, постоянно проживающим и работающим в населенных пунктах с численностью населения до 20 тыс. человек, льготных кредитов на капитальный ремонт и реконструкцию жилых помещений, строительство инженерных сетей, возведение хозяйственных помещений и построек\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16056"
                                    }, {
                                        "type"      : 62, "code": 77,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп.1.2 п.1 Указа Президента Республики Беларусь от 27.02.2007 № 108 \"О некоторых мерах по вовлечению в хозяйственный оборот неиспользуемого государственного имущества\", пп.6.20 п.6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16065"
                                    }, {
                                        "type"      : 62, "code": 78,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (часть пятая пункта 7-2 Указа Президента Республики Беларусь от 14.09.2006 № 575 \"О порядке распоряжения государственным имуществом\", пп. 6.15 пункта 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16066"
                                    }, {
                                        "type"      : 62, "code": 79,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп. 6.20 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16067"
                                    }, {
                                        "type"      : 62, "code": 80,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (ч.3 пп. 6.15 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16068"
                                    }, {
                                        "type"      : 62, "code": 81,
                                        "name"      : "Запрещение отчуждения жилого помещения, приобретенного в рассрочку, до полного погашения стоимости жилого помещения (п.3 ст.144 Жилищного кодекса Республики Беларусь от 28.08.2012)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16069"
                                    }, {
                                        "type"      : 62, "code": 82,
                                        "name"      : "Запрещение отчуждения жилого помещения, закрепленного за детьми-сиротами и детьми, оставшимися без попечения родителей (абз.2 п.6 Положения о порядке закрепления жилых помещений за детьми-сиротами и детьми, оставшимися без попечения родителей, утвержденного постановлением Совета Министров Республики Беларусь от 26.12.2006 №1728)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17008"
                                    }, {
                                        "type"      : 62, "code": 84,
                                        "name"      : "Запрещение отчуждения без согласия органа опеки и попечительства жилых помещений, в которых проживают несовершеннолетние члены, бывшие члены семей собственников жилых помещений, признанные находящимися в социально опасном положении, или граждане, признанные недееспособными или ограниченные в дееспособности судом, жилых помещений, закрепленных за детьми-сиротами или детьми, оставшимися без попечения родителей (пп.7.17 Положения об органах опеки и попечительства в Республике Беларусь, утвержденног",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17013"
                                    }, {
                                        "type"      : 62, "code": 85,
                                        "name"      : "Запрещение продажи, ограничение дарения, обмена жилого помещения до полного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17015"
                                    }, {
                                        "type"      : 62, "code": 86,
                                        "name"      : "Запрет осуществлять сделки с недвижимым имуществом, полученным в качестве помощи, влекущие возникновение, переход или прекращение прав, предусматривающие возможность перехода прав на него к иным лицам, в отношении объектов недвижимого имущества, являющихся иностранной безвозмездной помощью; осуществлять реконструкцию и другие действия, влекущие изменение технических характеристик недвижимого имущества, - без согласования с Департаментом по гуманитарной деятельности Управления делами Президента Республики Беларусь\" (ч.3 п.58 Положения о порядке получения, учета, регистрации, использования иностранной безвозмездной помощи, контроля за ее получением и целевым использованием, а также регистрации гуманитарных программ, утвержденного Декретом Президента Республики Беларусь от 31.08.2015 № 5)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17022"
                                    }, {
                                        "type"      : 62, "code": 90,
                                        "name"      : "Ограничение продажи, дарения, обмена жилого помещения в течение пяти лет со дня досрочного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17016"
                                    }, {
                                        "type"      : 62, "code": 91,
                                        "name"      : "Ограничение отчуждения гражданами незавершенных законсервированных строений, расположенных на земельных участках, предоставленных гражданам как состоящим на учете нуждающихся в улучшении жилищных условий, за исключением отчуждения местным исполнительным комитетам (п.11-1 Указа Президента Республики Беларусь от 27.12.2007 №667 \"Об изъятии и предоставлении земельных участков\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17018"
                                    }, {
                                        "type"      : 62, "code": 93,
                                        "name"      : "Ограничение отчуждения земельных участков, предоставленных гражданам как состоящим на учете нуждающихся в улучшении жилищных условий, и (или) возведенных на них жилых домов, объектов недвижимости, образованных в результате их раздела, слияния или вычленения из них (долей в праве собственности на указанные объекты), до истечения восьми лет со дня государственной регистрации таких домов, за исключением отчуждения местным исполнительным комитетам при условии полного погашения льготного кредита на строительство жилых помещений (в том числе досрочного), если такой кредит привлекался (ч. 1 ст. 51-1 Кодекса Республики Беларусь о земле)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17025"
                                    }, {
                                        "type"      : 62, "code": 95,
                                        "name"      : "Ограничения (обременения) прав, устанавливаемые в зонах охраны недвижимых материальных ценностей",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15040"
                                    }, {
                                        "type"      : 62, "code": 96,
                                        "name"      : "Ограничения (обременения) прав на недвижимое имущество, установленные в связи с присвоением ему статуса памятника историко-культурного наследия",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15010"
                                    }, {
                                        "type"      : 62, "code": 97,
                                        "name"      : "Ограничение (обременение) доли в праве собственности (иное)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16048"
                                    }, {
                                        "type"      : 62, "code": 98,
                                        "name"      : "Ограничение (обременение) иных прав на недвижимое имущество",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16051"
                                    }, {
                                        "type"     : 62, "code": 99, "name": "Запрещение (иное)", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16040"
                                    }
                                ], "defSel": {}, "depData": {}
                            }, "formPRFixRightTypeWithOwners": {
                                "defData"  : [
                                    {
                                        "type"     : 62, "code": 5, "name": "Право хозяйственного ведения", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "5000"
                                    }, {
                                        "type"     : 62, "code": 6, "name": "Право оперативного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "6000"
                                    }, {
                                        "type"     : 62, "code": 7, "name": "Право доверительного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "7000"
                                    }, {
                                        "type" : 62, "code": 11, "name": "Сервитут", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "12000"
                                    }, {
                                        "type" : 62, "code": 12, "name": "Ипотека", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "13000"
                                    }, {
                                        "type"      : 62, "code": 13, "name": "Залог доли в праве собственности",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16046"
                                    }, {
                                        "type" : 62, "code": 15, "name": "Рента", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "16042"
                                    }
                                ], "defSel": {}, "depData": {}
                            }
                        }, "30-5": {
                            "formPRFixRightTypeWithoutOwners": {
                                "defData"  : [
                                    {
                                        "type" : 62, "code": 16, "name": "Арест", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "14000"
                                    }, {
                                        "type"      : 62, "code": 22,
                                        "name"      : "Запрещение ответчику совершать определенные действия с недвижимым имуществом, наложенное судом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16043"
                                    }, {
                                        "type"      : 62, "code": 23,
                                        "name"      : "Запрещение отчуждения недвижимого имущества, наложенное нотариусом",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16030"
                                    }, {
                                        "type"      : 62, "code": 70,
                                        "name"      : "Запрещение отчуждения недвижимого имущества лицом, несовершеннолетние дети которого помещены на государственное обеспечение (ч. 5 п. 12 Декрета Президента Республики Беларусь от 24.11.2006 № 18 \"О дополнительных мерах по государственной защите детей в неблагополучных семьях\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16058"
                                    }, {
                                        "type"      : 62, "code": 71,
                                        "name"      : "Запрещение отчуждения недвижимого имущества кредитодателем, на которого переведен правовой титул, до истечения срока реализации права выкупа имущества кредитополучателем (ч. 2 ст. 149 Банковского кодекса Республики Беларусь)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16010"
                                    }, {
                                        "type"      : 62, "code": 72,
                                        "name"      : "Запрещение отчуждения в частную собственность (в том числе приватизации), передачи в залог, доверительное управление объектов недвижимого имущества, находящихся только в собственности государства (статья 8 Закона Республики Беларусь от 15.07.2010 \"Об объектах, находящихся только в собственности государства, и видах деятельности, на осуществление которых распространяется исключительное право государства\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16063"
                                    }, {
                                        "type"      : 62, "code": 75,
                                        "name"      : "Запрещение отчуждения объекта инфраструктуры и иного имущества на период срока действия соглашения о государственно-частном партнерстве, за исключением перемены партнера по соглашению о государственно-частном партнерстве (пункт 4 статьи 27 Закона Республики Беларусь от 30.12.2015 \"О государственно-частном партнерстве\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17021"
                                    }, {
                                        "type"      : 62, "code": 76,
                                        "name"      : "Запрещение отчуждения (продажи, дарения, мены) жилого помещения до полного погашения льготного кредита (пп. 1.8. п. 1 Указа Президента Республики Беларусь от 07.02.2006 № 75 \"О предоставлении гражданам, постоянно проживающим и работающим в населенных пунктах с численностью населения до 20 тыс. человек, льготных кредитов на капитальный ремонт и реконструкцию жилых помещений, строительство инженерных сетей, возведение хозяйственных помещений и построек\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16056"
                                    }, {
                                        "type"      : 62, "code": 77,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп.1.2 п.1 Указа Президента Республики Беларусь от 27.02.2007 № 108 \"О некоторых мерах по вовлечению в хозяйственный оборот неиспользуемого государственного имущества\", пп.6.20 п.6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16065"
                                    }, {
                                        "type"      : 62, "code": 78,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (часть пятая пункта 7-2 Указа Президента Республики Беларусь от 14.09.2006 № 575 \"О порядке распоряжения государственным имуществом\", пп. 6.15 пункта 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16066"
                                    }, {
                                        "type"      : 62, "code": 79,
                                        "name"      : "Запрещение покупателю отчуждения имущества до выполнения условий договора купли-продажи (пп. 6.20 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16067"
                                    }, {
                                        "type"      : 62, "code": 80,
                                        "name"      : "Запрещение отчуждения и последующего залога приобретаемого в рассрочку государственного имущества до полной оплаты его цены (ч.3 пп. 6.15 п. 6 Указа Президента Республики Беларусь от 04.07.2012 № 294 \"О порядке распоряжения государственным имуществом\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16068"
                                    }, {
                                        "type"      : 62, "code": 81,
                                        "name"      : "Запрещение отчуждения жилого помещения, приобретенного в рассрочку, до полного погашения стоимости жилого помещения (п.3 ст.144 Жилищного кодекса Республики Беларусь от 28.08.2012)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16069"
                                    }, {
                                        "type"      : 62, "code": 82,
                                        "name"      : "Запрещение отчуждения жилого помещения, закрепленного за детьми-сиротами и детьми, оставшимися без попечения родителей (абз.2 п.6 Положения о порядке закрепления жилых помещений за детьми-сиротами и детьми, оставшимися без попечения родителей, утвержденного постановлением Совета Министров Республики Беларусь от 26.12.2006 №1728)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17008"
                                    }, {
                                        "type"      : 62, "code": 84,
                                        "name"      : "Запрещение отчуждения без согласия органа опеки и попечительства жилых помещений, в которых проживают несовершеннолетние члены, бывшие члены семей собственников жилых помещений, признанные находящимися в социально опасном положении, или граждане, признанные недееспособными или ограниченные в дееспособности судом, жилых помещений, закрепленных за детьми-сиротами или детьми, оставшимися без попечения родителей (пп.7.17 Положения об органах опеки и попечительства в Республике Беларусь, утвержденног",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17013"
                                    }, {
                                        "type"      : 62, "code": 85,
                                        "name"      : "Запрещение продажи, ограничение дарения, обмена жилого помещения до полного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17015"
                                    }, {
                                        "type"      : 62, "code": 86,
                                        "name"      : "Запрет осуществлять сделки с недвижимым имуществом, полученным в качестве помощи, влекущие возникновение, переход или прекращение прав, предусматривающие возможность перехода прав на него к иным лицам, в отношении объектов недвижимого имущества, являющихся иностранной безвозмездной помощью; осуществлять реконструкцию и другие действия, влекущие изменение технических характеристик недвижимого имущества, - без согласования с Департаментом по гуманитарной деятельности Управления делами Президента Республики Беларусь\" (ч.3 п.58 Положения о порядке получения, учета, регистрации, использования иностранной безвозмездной помощи, контроля за ее получением и целевым использованием, а также регистрации гуманитарных программ, утвержденного Декретом Президента Республики Беларусь от 31.08.2015 № 5)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17022"
                                    }, {
                                        "type"      : 62, "code": 90,
                                        "name"      : "Ограничение продажи, дарения, обмена жилого помещения в течение пяти лет со дня досрочного погашения льготного кредита (пп.1.18 п.1 Указа Президента Республики Беларусь от 06.01.2012 № 13 \"О некоторых вопросах предоставления гражданам государственной поддержки при строительстве (реконструкции) или приобретении жилых помещений\")",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "17016"
                                    }, {
                                        "type"      : 62, "code": 95,
                                        "name"      : "Ограничения (обременения) прав, устанавливаемые в зонах охраны недвижимых материальных ценностей",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15040"
                                    }, {
                                        "type"      : 62, "code": 96,
                                        "name"      : "Ограничения (обременения) прав на недвижимое имущество, установленные в связи с присвоением ему статуса памятника историко-культурного наследия",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "15010"
                                    }, {
                                        "type"      : 62, "code": 97,
                                        "name"      : "Ограничение (обременение) доли в праве собственности (иное)",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16048"
                                    }, {
                                        "type"      : 62, "code": 98,
                                        "name"      : "Ограничение (обременение) иных прав на недвижимое имущество",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16051"
                                    }, {
                                        "type"     : 62, "code": 99, "name": "Запрещение (иное)", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "16040"
                                    }
                                ], "defSel": {}, "depData": {}
                            }, "formPRFixRightTypeWithOwners": {
                                "defData"  : [
                                    {
                                        "type"     : 62, "code": 5, "name": "Право хозяйственного ведения", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "5000"
                                    }, {
                                        "type"     : 62, "code": 6, "name": "Право оперативного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "6000"
                                    }, {
                                        "type"     : 62, "code": 7, "name": "Право доверительного управления", "act": 1,
                                        "shortName": null, "name1": null, "name2": null, "visualCode": "7000"
                                    }, {
                                        "type" : 62, "code": 11, "name": "Сервитут", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "12000"
                                    }, {
                                        "type" : 62, "code": 12, "name": "Ипотека", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "13000"
                                    }, {
                                        "type"      : 62, "code": 13, "name": "Залог доли в праве собственности",
                                        "act"       : 1, "shortName": null, "name1": null, "name2": null,
                                        "visualCode": "16046"
                                    }, {
                                        "type" : 62, "code": 15, "name": "Рента", "act": 1, "shortName": null,
                                        "name1": null, "name2": null, "visualCode": "16042"
                                    }
                                ], "defSel": {}, "depData": {}
                            }
                        }, "30-6": {
                            "formPRFixRightTypeWithoutOwners": {"defData": [], "defSel": {}, "depData": {}},
                            "formPRFixRightTypeWithOwners"   : {"defData": [], "defSel": {}, "depData": {}}
                        }
                    }, "depData": {}
                },
                "formPRFixRightStateRight"    : {
                    "defData"  : [
                        {
                            "type" : 65, "code": 1, "name": "Актуально", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        }, {
                            "type" : 65, "code": 2, "name": "Прекращено", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        }, {
                            "type" : 65, "code": 3, "name": "Аннулировано", "act": 1, "shortName": null, "name1": null,
                            "name2": null, "visualCode": null
                        }, {
                            "type"     : 65, "code": 4, "name": "Прекращено в результате исправления", "act": 1,
                            "shortName": null, "name1": null, "name2": null, "visualCode": null
                        }, {
                            "type" : 65, "code": 5, "name": "Прекращено автоматически", "act": 1, "shortName": null,
                            "name1": null, "name2": null, "visualCode": null
                        }
                    ], "defSel": {}, "depData": {}
                },
                "regOrgs"                     : [
                    {
                        "idReg"       : 0, "orgUID": 663,
                        "orgName"     : "Государственное республиканское унитарное предприятие \"Национальное кадастровое агентство\"",
                        "orgShortName": "Национальное кадастровое агентство", "act": 1, "dateOut": null,
                        "unp"         : "101480212", "address": "г.Минск, пер. Краснозвездный, 12"
                    },
                    {
                        "idReg"       : 100, "orgUID": 424,
                        "orgName"     : "Республиканское унитарное предприятие \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Брестское агентство", "act": 1, "dateOut": null, "unp": "200019518",
                        "address"     : "г. Брест, ул. Гоголя, 2"
                    },
                    {
                        "idReg"       : 110, "orgUID": 675,
                        "orgName"     : "Барановичский филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Барановичский филиал", "act": 1, "dateOut": null, "unp": "200272597",
                        "address"     : "г. Барановичи, ул. Брестская, 186"
                    },
                    {
                        "idReg"       : 111, "orgUID": 440,
                        "orgName"     : "Ляховичское бюро Барановичского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ляховичское бюро", "act": 1, "dateOut": null, "unp": "200272597",
                        "address"     : "г. Ляховичи, ул. Южакова, 19"
                    },
                    {
                        "idReg"       : 120, "orgUID": 434,
                        "orgName"     : "Березовский филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Березовский филиал", "act": 1, "dateOut": null, "unp": "200255181",
                        "address"     : "г. Береза, ул. Пушкина, 23"
                    },
                    {
                        "idReg"       : 121, "orgUID": 712,
                        "orgName"     : "Дрогичинское бюро Березовского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Дрогичинское бюро", "act": 1, "dateOut": null, "unp": "200255181",
                        "address"     : "г. Дрогичин, ул. Чкалова, 6"
                    },
                    {
                        "idReg"       : 122, "orgUID": 713,
                        "orgName"     : "Ивацевичское бюро Березовского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ивацевичское бюро", "act": 1, "dateOut": null, "unp": "200255181",
                        "address"     : "г. Ивацевичи, ул. Дзержинского, 30"
                    },
                    {
                        "idReg"       : 130, "orgUID": 686,
                        "orgName"     : "Пинский филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Пинский филиал", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "225710 г. Пинск, ул. Брестская, 83"
                    },
                    {
                        "idReg"       : 131, "orgUID": 433,
                        "orgName"     : "Давид-Городокское бюро Пинского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Давид-Городокское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "г. Давид-Городок, ул. Энергетическая, 15"
                    },
                    {
                        "idReg"       : 132, "orgUID": 625,
                        "orgName"     : "Ивановское бюро Пинского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ивановское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "г. Иваново, ул.Советская, 81"
                    },
                    {
                        "idReg"       : 135, "orgUID": 684,
                        "orgName"     : "Столинское бюро Пинского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Столинское бюро", "act": 1, "dateOut": null, "unp": "200279137",
                        "address"     : "г. Столин, ул.Ленина, 10"
                    },
                    {
                        "idReg"       : 140, "orgUID": 698,
                        "orgName"     : "Кобринский филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кобринский филиал", "act": 1, "dateOut": null, "unp": "200226088",
                        "address"     : "225306 г.Кобрин, пл.Свободы, 11"
                    },
                    {
                        "idReg"       : 141, "orgUID": 699,
                        "orgName"     : "Жабинковское бюро Кобринского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Жабинковское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "225110 г.Жабинка, ул.Свободы, 6А"
                    },
                    {
                        "idReg"       : 142, "orgUID": 700,
                        "orgName"     : "Малоритское бюро Кобринского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Малоритское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "225910 г. Малорита, ул. Ленина, 9"
                    },
                    {
                        "idReg"       : 150, "orgUID": 701,
                        "orgName"     : "Лунинецкий филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Лунинецкий филиал", "act": 1, "dateOut": null, "unp": "200106673",
                        "address"     : "225644 г. Лунинец, ул. Красная, 74"
                    },
                    {
                        "idReg"       : 151, "orgUID": 702,
                        "orgName"     : "Ганцевичское бюро Лунинецкого филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ганцевичское бюро", "act": 1, "dateOut": null, "unp": "200272597",
                        "address"     : "225432 г. Ганцевичи, ул. Коммунистическая, 5"
                    }, {
                        "idReg"       : 152, "orgUID": 703,
                        "orgName"     : "Микашевичское бюро Лунинецкого филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Микашевичское бюро", "act": 1, "dateOut": null, "unp": "200106673",
                        "address"     : "225610 р.п. Микашевичи, ул. Первомайская,11"
                    }, {
                        "idReg"       : 160, "orgUID": 704,
                        "orgName"     : "Пружанский филиал Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Пружанский филиал", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "225133 г. Пружаны, ул. Советская, 9"
                    }, {
                        "idReg"       : 161, "orgUID": 705,
                        "orgName"     : "Каменецкое бюро Пружанского филиала Республиканского унитарного предприятия \"Брестское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Каменецкое бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "225050 г. Каменец, ул. 8 Марта, 19"
                    }, {
                        "idReg"       : 200, "orgUID": 647,
                        "orgName"     : "Республиканское унитарное предприятие \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Витебское агентство", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "210026 г. Витебск, ул. Политехническая, 5/18"
                    }, {
                        "idReg"       : 201, "orgUID": 732,
                        "orgName"     : "Городокское бюро Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Городокское бюро", "act": 1, "dateOut": null, "unp": "300001950",
                        "address"     : "211540 г.Городок, ул. Комсомольская, 8"
                    }, {
                        "idReg"       : 202, "orgUID": 449,
                        "orgName"     : "Лиозненское бюро Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Лиозненское бюро", "act": 1, "dateOut": null, "unp": "Лиозненское бюро РУП",
                        "address"     : "211200 г.п. Лиозно, ул. Добромыслянская, 5"
                    }, {
                        "idReg"       : 203, "orgUID": 446,
                        "orgName"     : "Шумилинское бюро Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Шумилинское бюро", "act": 1, "dateOut": null, "unp": "Шумилинское бюро РУП",
                        "address"     : "211260 г.п. Шумилино, ул. Ленинская, 24"
                    }, {
                        "idReg"       : 220, "orgUID": 731,
                        "orgName"     : "Глубокский филиал Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Глубокский филиал", "act": 1, "dateOut": null, "unp": "300022287",
                        "address"     : "211800 г. Глубокое, ул. Ленина, 30А"
                    }, {
                        "idReg"       : 222, "orgUID": 720,
                        "orgName"     : "Поставское бюро Глубокского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Поставское бюро", "act": 1, "dateOut": null, "unp": "300022287",
                        "address"     : "211840 г. Поставы, ул. Юбилейная, 8"
                    }, {
                        "idReg"       : 223, "orgUID": 653,
                        "orgName"     : "Шарковщинское бюро Глубокского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Шарковщинское бюро", "act": 1, "dateOut": null, "unp": "300022287",
                        "address"     : "211910 г.п.Шарковщина, ул.Комсомольская, 15"
                    }, {
                        "idReg"       : 224, "orgUID": 678,
                        "orgName"     : "Докшицкое бюро Глубокского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Докшицкое бюро", "act": 1, "dateOut": null, "unp": "300022287",
                        "address"     : "211720 г.Докшицы, ул.Ленинская, 2"
                    }, {
                        "idReg"       : 225, "orgUID": 739,
                        "orgName"     : "Бегомльское бюро Глубокского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Бегомльское бюро", "act": 1, "dateOut": null, "unp": "300022287",
                        "address"     : "211710 г.п.Бегомль, ул.Советская, 14"
                    }, {
                        "idReg"       : 230, "orgUID": 710,
                        "orgName"     : "Лепельский филиал Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Лепельский филиал", "act": 1, "dateOut": null, "unp": "300039362",
                        "address"     : "211174 г. Лепель, ул. М.Горького, 42"
                    }, {
                        "idReg"       : 231, "orgUID": 462,
                        "orgName"     : "Бешенковичское бюро Лепельского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Бешенковичское бюро", "act": 1, "dateOut": null, "unp": "300039362",
                        "address"     : "211350 г.п. Бешенковичи, ул. Школьная, 6"
                    }, {
                        "idReg"       : 233, "orgUID": 465,
                        "orgName"     : "Новолукомльское бюро Лепельского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Новолукомльское бюро", "act": 1, "dateOut": null, "unp": "300039362",
                        "address"     : "211162 г. Новолукомль, ул. Энергетиков, 15"
                    }, {
                        "idReg"       : 234, "orgUID": 463,
                        "orgName"     : "Ушачское бюро Лепельского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ушачское бюро", "act": 1, "dateOut": null, "unp": "300039362",
                        "address"     : "211480 г.п. Ушачи, ул. Ленинская, 12"
                    }, {
                        "idReg"       : 235, "orgUID": 461,
                        "orgName"     : "Чашникское бюро Лепельского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Чашникское бюро", "act": 1, "dateOut": null, "unp": "300039362",
                        "address"     : "211150 г. Чашники, ул. Советская, 59"
                    }, {
                        "idReg"       : 240, "orgUID": 612,
                        "orgName"     : "Оршанский филиал Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Оршанский филиал", "act": -1, "dateOut": null, "unp": "300051789",
                        "address"     : "211030 г. Орша, ул. Комсомольская, 11"
                    }, {
                        "idReg"       : 241, "orgUID": 454,
                        "orgName"     : "Дубровенское бюро Оршанского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Дубровенское бюро", "act": 1, "dateOut": null, "unp": "300051789",
                        "address"     : "211040 г. Дубровно, ул. Комсомольская, 15"
                    }, {
                        "idReg"       : 242, "orgUID": 744,
                        "orgName"     : "Сенненское бюро Оршанского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Сенненское бюро", "act": 1, "dateOut": null, "unp": "300051789",
                        "address"     : "211120 г. Сенно, ул. Машерова, 2"
                    }, {
                        "idReg"       : 243, "orgUID": 714,
                        "orgName"     : "Толочинское бюро Оршанского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Толочинское бюро", "act": 1, "dateOut": null, "unp": "300051789",
                        "address"     : "211070 г. Толочин, ул. Ленина, 3"
                    }, {
                        "idReg"       : 244, "orgUID": 741,
                        "orgName"     : "Богушевское бюро Оршанского филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Богушевское бюро", "act": 1, "dateOut": null, "unp": "300051789",
                        "address"     : "211510 Витебская обл., Сенненский р-н, г.п.Богушевск, ул.Парковая, 7"
                    }, {
                        "idReg"       : 250, "orgUID": 582,
                        "orgName"     : "Полоцкий филиал Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Полоцкий филиал", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211400 г. Полоцк, ул. Свердлова, 22"
                    }, {
                        "idReg"       : 251, "orgUID": 716,
                        "orgName"     : "Верхнедвинское бюро Полоцкого филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Верхнедвинское бюро", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211620 г. Верхнедвинск, ул. Мира, 4"
                    }, {
                        "idReg"       : 252, "orgUID": 614,
                        "orgName"     : "Новополоцкое бюро Полоцкого филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Новополоцкое бюро", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211440 г. Новополоцк, ул. Дружбы, 6"
                    }, {
                        "idReg"       : 253, "orgUID": 674,
                        "orgName"     : "Россонское бюро Полоцкого филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Россонское бюро", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211460 г.п. Россоны, ул. Советская, 4"
                    }, {
                        "idReg"       : 254, "orgUID": 651,
                        "orgName"     : "Миорское бюро Полоцкого филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Миорское бюро", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211930, г.Миоры, ул.Коммунистическая, 52"
                    }, {
                        "idReg"       : 255, "orgUID": 652,
                        "orgName"     : "Браславское бюро Полоцкого филиала Республиканского унитарного предприятия \"Витебское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Браславское бюро", "act": 1, "dateOut": null, "unp": "300167281",
                        "address"     : "211970 г.Браслав, ул.Ленинская, 89"
                    }, {
                        "idReg"       : 300, "orgUID": 681,
                        "orgName"     : "Республиканское унитарное предприятие \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Гомельское агентство", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "246050 г. Гомель, ул. Крестьянская, 31"
                    }, {
                        "idReg"       : 310, "orgUID": 738,
                        "orgName"     : "Гомельский межгородской филиал Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Гомельский межгородской филиал", "act": 1, "dateOut": null, "unp": "400563391",
                        "address"     : "246047 г. Гомель, ул. Войкова, 87"
                    }, {
                        "idReg"       : 311, "orgUID": 734,
                        "orgName"     : "Добрушское бюро Гомельского межгородского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Добрушское бюро", "act": 1, "dateOut": null, "unp": "400563391",
                        "address"     : "247050 г. Добруш, ул. Советская, 33"
                    }, {
                        "idReg"       : 320, "orgUID": 730,
                        "orgName"     : "Жлобинский филиал Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Жлобинский филиал", "act": 1, "dateOut": null, "unp": "490086579",
                        "address"     : "247210 г. Жлобин, микрорайон 17, д. 22-а"
                    }, {
                        "idReg"       : 321, "orgUID": 726,
                        "orgName"     : "Буда-Кошелевское бюро Жлобинского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Буда-Кошелевское бюро", "act": 1, "dateOut": null, "unp": "401157717",
                        "address"     : "247350 г. Буда-Кошелево, ул.М.Горького, 3 а"
                    }, {
                        "idReg"       : 322, "orgUID": 640,
                        "orgName"     : "Рогачевское бюро Жлобинского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Рогачевское бюро", "act": 1, "dateOut": null, "unp": "490086579",
                        "address"     : "247250 г. Рогачев, ул. Либкнехта, 107"
                    }, {
                        "idReg"       : 323, "orgUID": 641,
                        "orgName"     : "Кормянское бюро Жлобинского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кормянское бюро", "act": 1, "dateOut": null, "unp": "490086579",
                        "address"     : "247170 г.п. Корма, ул. Ленина, 36"
                    }, {
                        "idReg"       : 324, "orgUID": 642,
                        "orgName"     : "Чечерское бюро Жлобинского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Чечерское бюро", "act": 1, "dateOut": null, "unp": "490086579",
                        "address"     : "247152 г.Чечерск, ул. Советская, 13"
                    }, {
                        "idReg"       : 330, "orgUID": 654,
                        "orgName"     : "Мозырский филиал Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Мозырский филиал", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247760 г. Мозырь, ул. Советская, 198"
                    }, {
                        "idReg"       : 331, "orgUID": 561,
                        "orgName"     : "Ельское бюро Мозырского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ельское бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247810 г. Ельск, ул.Дзержинского, 5"
                    }, {
                        "idReg"       : 332, "orgUID": 634,
                        "orgName"     : "Житковичское бюро Мозырского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Житковичское бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247940 г. Житковичи, ул. Маркса, 58"
                    }, {
                        "idReg"       : 333, "orgUID": 725,
                        "orgName"     : "Калинковичское бюро Мозырского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Калинковичское бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247710 г. Калинковичи, ул. Красноармейская, 3"
                    }, {
                        "idReg"       : 334, "orgUID": 665,
                        "orgName"     : "Лельчицкое бюро Мозырского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Лельчицкое бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247840 г.п. Лельчицы, ул. Советская, 24"
                    }, {
                        "idReg"       : 335, "orgUID": 563,
                        "orgName"     : "Петриковское бюро Мозырского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Петриковское бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247940 г. Петриков, ул. Коммунальная,11"
                    }, {
                        "idReg"       : 336, "orgUID": 688,
                        "orgName"     : "Наровлянское бюро Мозырьского филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Наровлянское бюро", "act": 1, "dateOut": null, "unp": "401068273",
                        "address"     : "247802 г.Наровля, ул.Ленина, д.3"
                    }, {
                        "idReg"       : 340, "orgUID": 584,
                        "orgName"     : "Речицкий филиал Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Речицкий филиал", "act": 1, "dateOut": null, "unp": "400160375",
                        "address"     : "247500 г. Речица, ул. Советская, 80"
                    }, {
                        "idReg"       : 341, "orgUID": 585,
                        "orgName"     : "Октябрьское бюро Речицкого филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Октябрьское бюро", "act": 1, "dateOut": null, "unp": "400160375",
                        "address"     : "247821 г.п. Октябрьский, ул. Калинина, 26"
                    }, {
                        "idReg"       : 342, "orgUID": 721,
                        "orgName"     : "Светлогорское бюро Речицкого филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Светлогорское бюро", "act": 1, "dateOut": null, "unp": "400160375",
                        "address"     : "247400 г. Светлогорск, ул. Мирошниченко, 9"
                    }, {
                        "idReg"       : 343, "orgUID": 676,
                        "orgName"     : "Хойникское бюро Речицкого филиала Республиканского унитарного предприятия \"Гомельское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Хойникское бюро", "act": 1, "dateOut": null, "unp": "400160375",
                        "address"     : "247600 г. Хойники, ул. Лермонтова, 3"
                    }, {
                        "idReg"       : 350, "orgUID": 616,
                        "orgName"     : "Гомельский городской филиал Республиканского унитарного предприятия \"Гомельское агенство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Гомельский городской филиал", "act": 1, "dateOut": null, "unp": "401147651",
                        "address"     : "г. Гомель, ул. Полесская, 19б"
                    }, {
                        "idReg"       : 400, "orgUID": 728,
                        "orgName"     : "Республиканское унитарное предприятие \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Гродненское агентство", "act": 1, "dateOut": null, "unp": "500055350",
                        "address"     : "230019 г. Гродно, ул. Захарова, 27"
                    }, {
                        "idReg"       : 401, "orgUID": 492,
                        "orgName"     : "Скидельское бюро Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Скидельское бюро", "act": 1, "dateOut": null, "unp": "500055350",
                        "address"     : "231761 г. Скидель,ул. Луговая, 3"
                    }, {
                        "idReg"       : 410, "orgUID": 722,
                        "orgName"     : "Волковысский филиал Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Волковысский филиал", "act": 1, "dateOut": null, "unp": "500055350",
                        "address"     : "231900 г. Волковыск, ул. Советская, 135 А"
                    }, {
                        "idReg"       : 411, "orgUID": 643,
                        "orgName"     : "Берестовицкое бюро Волковысского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Берестовицкое бюро", "act": 1, "dateOut": null, "unp": "500316820",
                        "address"     : "231770 г.п. Большая Берестовица, ул. Советская, 3"
                    }, {
                        "idReg"       : 412, "orgUID": 644,
                        "orgName"     : "Мостовское бюро Волковысского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Мостовское бюро", "act": 1, "dateOut": null, "unp": "500316820",
                        "address"     : "231600 г. Мосты, ул. Лермонтова, 11 А"
                    }, {
                        "idReg"       : 413, "orgUID": 711,
                        "orgName"     : "Свислочское бюро Волковысского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Свислочское бюро", "act": 1, "dateOut": null, "unp": "500316820",
                        "address"     : "231960 г. Свислочь, ул. Комсомольская, 15"
                    }, {
                        "idReg"       : 420, "orgUID": 497,
                        "orgName"     : "Лидский филиал Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Лидский филиал", "act": 1, "dateOut": null, "unp": "500173117",
                        "address"     : "231300 г. Лида, ул. Чапаева, 20"
                    }, {
                        "idReg"       : 421, "orgUID": 719,
                        "orgName"     : "Вороновское бюро Лидского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Вороновское бюро", "act": 1, "dateOut": null, "unp": "500055350",
                        "address"     : "231370 г.п. Вороново, ул. Канарчика, 5"
                    }, {
                        "idReg"       : 422, "orgUID": 707,
                        "orgName"     : "Щучинское бюро Лидского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Щучинское бюро", "act": 1, "dateOut": null, "unp": "500173117",
                        "address"     : "231513 г. Щучин, ул. 17 Сентября, 8"
                    }, {
                        "idReg"       : 430, "orgUID": 723,
                        "orgName"     : "Новогрудский филиал Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Новогрудский филиал", "act": 1, "dateOut": null, "unp": "500171221",
                        "address"     : "231400 г. Новогрудок, ул. А. Мицкевича, 10"
                    }, {
                        "idReg"       : 431, "orgUID": 724,
                        "orgName"     : "Кореличское бюро Новогрудского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кореличское бюро", "act": 1, "dateOut": null, "unp": "500171221",
                        "address"     : "231430 г.п. Кореличи, пер.Пионерский, 8"
                    }, {
                        "idReg"       : 440, "orgUID": 502,
                        "orgName"     : "Ошмянский филиал Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ошмянский филиал", "act": 1, "dateOut": null, "unp": "500088488",
                        "address"     : "231100 г. Ошмяны, ул. Советская, 59"
                    }, {
                        "idReg"       : 441, "orgUID": 729,
                        "orgName"     : "Ивьевское бюро Ошмянского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Ивьевское бюро", "act": 1, "dateOut": null, "unp": "500088488",
                        "address"     : "231330 г. Ивье, ул. Крупской, 1"
                    }, {
                        "idReg"       : 442, "orgUID": 504,
                        "orgName"     : "Островецкое бюро Ошмянского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Островецкое бюро", "act": 1, "dateOut": null, "unp": "500088488",
                        "address"     : "231210 г.п. Островец, ул. Набережная, 2"
                    }, {
                        "idReg"       : 443, "orgUID": 505,
                        "orgName"     : "Сморгонское бюро Ошмянского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Сморгонское бюро", "act": 1, "dateOut": null, "unp": "500088488",
                        "address"     : "231000 г. Сморгонь, ул. Гагарина, 9"
                    }, {
                        "idReg"       : 450, "orgUID": 506,
                        "orgName"     : "Слонимский филиал Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Слонимский филиал", "act": 1, "dateOut": null, "unp": "500159285",
                        "address"     : "231800 г. Слоним, ул. Я.Купалы, 5"
                    }, {
                        "idReg"       : 451, "orgUID": 589,
                        "orgName"     : "Дятловское бюро Слонимского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Дятловское бюро", "act": 1, "dateOut": null, "unp": "500159285",
                        "address"     : "231460 г. Дятлово, ул. Красноармейская, 21"
                    }, {
                        "idReg"       : 452, "orgUID": 508,
                        "orgName"     : "Зельвенское бюро Слонимского филиала Республиканского унитарного предприятия \"Гродненское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Зельвенское бюро", "act": 1, "dateOut": null, "unp": "500159285",
                        "address"     : "231930 г.п. Зельва, ул. Советская, 2"
                    }, {
                        "idReg"       : 500, "orgUID": 682,
                        "orgName"     : "Республиканское унитарное предприятие \"Минское городское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Минское городское агентство", "act": 1, "dateOut": null, "unp": "100211473",
                        "address"     : "220034 г. Минск, ул. Румянцева, 17"
                    }, {
                        "idReg"       : 600, "orgUID": 689,
                        "orgName"     : "Республиканское унитарное предприятие \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Минское областное агентство", "act": 1, "dateOut": null, "unp": "600013237",
                        "address"     : "г. Минск, ул. Папанина, 7"
                    }, {
                        "idReg"       : 601, "orgUID": 668,
                        "orgName"     : "Логойское бюро Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Логойское бюро", "act": 1, "dateOut": null, "unp": "600013237",
                        "address"     : "220310 г. Логойск, ул. Темчука, 6"
                    }, {
                        "idReg"       : 602, "orgUID": 685,
                        "orgName"     : "Марьиногорское бюро Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Марьиногорское бюро", "act": 1, "dateOut": null, "unp": "600013237",
                        "address"     : "222811 г. М.Горка, ул. Чапаева, 15"
                    }, {
                        "idReg"       : 610, "orgUID": 512,
                        "orgName"     : "Борисовский филиал Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Борисовский филиал", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "222120 г. Борисов, ул. Чапаева, 12"
                    }, {
                        "idReg"       : 611, "orgUID": 517,
                        "orgName"     : "Березинское бюро Борисовского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Березинское бюро", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "223310 г. Березино, ул. Октябрьская, 18"
                    }, {
                        "idReg"       : 612, "orgUID": 514,
                        "orgName"     : "Жодинское бюро Борисовского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Жодинское бюро", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "222160 г. Жодино, ул. 50-летия Октября, 3"
                    }, {
                        "idReg"       : 613, "orgUID": 515,
                        "orgName"     : "Крупское бюро Борисовского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Крупское бюро", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "222010 г. Крупки, ул. Зайцева, 3"
                    }, {
                        "idReg"       : 614, "orgUID": 513,
                        "orgName"     : "Смолевичское бюро Борисовского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Смолевичское бюро", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "222210 г. Смолевичи, ул. Торговая, 14б"
                    }, {
                        "idReg"       : 615, "orgUID": 516,
                        "orgName"     : "Червенское бюро Борисовского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Червенское бюро", "act": 1, "dateOut": null, "unp": "600214035",
                        "address"     : "223210 г. Червень, пл. Свободы, 18"
                    }, {
                        "idReg"       : 620, "orgUID": 718,
                        "orgName"     : "Дзержинский филиал Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Дзержинский филиал", "act": 1, "dateOut": null, "unp": "600198241",
                        "address"     : "222720 г. Дзержинск, ул. Минская, 34"
                    }, {
                        "idReg"       : 621, "orgUID": 648,
                        "orgName"     : "Несвижское бюро Дзержинского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Несвижское бюро", "act": 1, "dateOut": null, "unp": "600198241",
                        "address"     : "222620 г. Несвиж, ул. Гейсика, 11"
                    }, {
                        "idReg"       : 622, "orgUID": 649,
                        "orgName"     : "Столбцовское бюро Дзержинского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Столбцовское бюро", "act": 1, "dateOut": null, "unp": "600198241",
                        "address"     : "222660 г. Столбцы, ул. Социалистическая, 30"
                    }, {
                        "idReg"       : 623, "orgUID": 708,
                        "orgName"     : "Узденское бюро Дзержинского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Узденское бюро", "act": 1, "dateOut": null, "unp": "600198241",
                        "address"     : "223400 г. Узда, пер. Карла Маркса, 2"
                    }, {
                        "idReg"       : 630, "orgUID": 522,
                        "orgName"     : "Молодечненский филиал Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Молодечненский филиал", "act": 1, "dateOut": null, "unp": "600199462",
                        "address"     : "222310 г. Молодечно, ул. Б.Хмельницкого, 24"
                    }, {
                        "idReg"       : 631, "orgUID": 590,
                        "orgName"     : "Вилейское бюро Молодечненского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Вилейское бюро", "act": 1, "dateOut": null, "unp": "600199462",
                        "address"     : "222410 г. Вилейка, ул. Островского, 7"
                    }, {
                        "idReg"       : 632, "orgUID": 523,
                        "orgName"     : "Воложинское бюро Молодечненского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Воложинское бюро", "act": 1, "dateOut": null, "unp": "600199462",
                        "address"     : "222340 г. Воложин, ул. Советская, 3"
                    }, {
                        "idReg"       : 633, "orgUID": 709,
                        "orgName"     : "Мядельское бюро Молодечненского филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Мядельское бюро", "act": 1, "dateOut": null, "unp": "600199462",
                        "address"     : "222380 г. Мядель, ул. 1 Мая, 8"
                    }, {
                        "idReg"       : 640, "orgUID": 630,
                        "orgName"     : "Слуцкий филиал Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Слуцкий филиал", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "223610 г. Слуцк, ул. Виленская, 53"
                    }, {
                        "idReg"       : 641, "orgUID": 529,
                        "orgName"     : "Клецкое бюро Слуцкого филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Клецкое бюро", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "222640 г. Клецк, ул. Школьная, 5 А"
                    }, {
                        "idReg"       : 642, "orgUID": 528,
                        "orgName"     : "Копыльское бюро Слуцкого филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Копыльское бюро", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "223910 г. Копыль, ул. Партизанская, 5"
                    }, {
                        "idReg"       : 643, "orgUID": 631,
                        "orgName"     : "Любанское бюро Слуцкого филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Любанское бюро", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "223810 г. Любань, пер. Пожарный, 6Б"
                    }, {
                        "idReg"       : 644, "orgUID": 632,
                        "orgName"     : "Солигорское бюро Слуцкого филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Солигорское бюро", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "223710 г. Солигорск, ул. Ленина, 2 Б"
                    }, {
                        "idReg"       : 645, "orgUID": 633,
                        "orgName"     : "Стародорожское бюро Слуцкого филиала Республиканского унитарного предприятия \"Минское областное агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Стародорожское бюро", "act": 1, "dateOut": null, "unp": "600154887",
                        "address"     : "222910 г. Старые Дороги, ул. Кирова, 26"
                    }, {
                        "idReg"       : 700, "orgUID": 680,
                        "orgName"     : "Республиканское унитарное предприятие \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Могилевское агентство", "act": 1, "dateOut": null, "unp": "700010076",
                        "address"     : "212030 г. Могилев, ул.Езерская, 4А"
                    }, {
                        "idReg"       : 701, "orgUID": 592,
                        "orgName"     : "Белыничское бюро Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Белыничское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213160 г.п. Белыничи, ул. Советская, 28"
                    }, {
                        "idReg"       : 702, "orgUID": 593,
                        "orgName"     : "Быховское бюро Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Быховское бюро", "act": 1, "dateOut": null, "unp": "700169940",
                        "address"     : "213320 г. Быхов, ул. Пушкина, 41а"
                    }, {
                        "idReg"       : 710, "orgUID": 717,
                        "orgName"     : "Бобруйский филиал Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Бобруйский филиал", "act": 1, "dateOut": null, "unp": "700169940",
                        "address"     : "213815 г. Бобруйск, ул. Пролетарская, 35"
                    }, {
                        "idReg"       : 711, "orgUID": 595,
                        "orgName"     : "Глусское бюро Бобруйского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Глусское бюро", "act": 1, "dateOut": null, "unp": "700169940",
                        "address"     : "213879 г.п. Глуск, ул. Комсомольская, 6"
                    }, {
                        "idReg"       : 712, "orgUID": 697,
                        "orgName"     : "Кировское бюро Бобруйского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кировское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213940 г. Кировск, ул. Пушкинская, 21"
                    }, {
                        "idReg"       : 713, "orgUID": 597,
                        "orgName"     : "Кличевское бюро Бобруйского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кличевское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213900 г. Кличев, ул. Ленинская, 61"
                    }, {
                        "idReg"       : 714, "orgUID": 735,
                        "orgName"     : "Осиповичское бюро Бобруйского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Осиповичское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213760 г. Осиповичи, ул. Ленинская, 86"
                    }, {
                        "idReg"       : 720, "orgUID": 662,
                        "orgName"     : "Горецкий филиал Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Горецкий филиал", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213410 г. Горки, ул. Якубовского, 32"
                    }, {
                        "idReg"       : 721, "orgUID": 600,
                        "orgName"     : "Дрибинское бюро Горецкого филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Дрибинское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213971 г.п. Дрибин, ул. Ленина, 19"
                    }, {
                        "idReg"       : 722, "orgUID": 601,
                        "orgName"     : "Круглянское бюро Горецкого филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Круглянское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213188 г.п. Круглое, ул. Советская, 51"
                    }, {
                        "idReg"       : 723, "orgUID": 602,
                        "orgName"     : "Мстиславское бюро Горецкого филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Мстиславское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213410 г. Мстиславль, ул. Калинина, 21"
                    }, {
                        "idReg"       : 724, "orgUID": 603,
                        "orgName"     : "Чаусское бюро Горецкого филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Чаусское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213206 г. Чаусы, ул. Ленинская, 19"
                    }, {
                        "idReg"       : 725, "orgUID": 694,
                        "orgName"     : "Шкловское бюро Горецкого филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Шкловское бюро", "act": 1, "dateOut": null, "unp": "700170825",
                        "address"     : "213010 г. Шклов, ул. Ленинская, 76"
                    }, {
                        "idReg"       : 730, "orgUID": 541,
                        "orgName"     : "Кричевский филиал Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Кричевский филиал", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213500 г. Кричев, ул.Ленинская, 50"
                    }, {
                        "idReg"       : 731, "orgUID": 605,
                        "orgName"     : "Климовичское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Климовичское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213633 г. Климовичи, ул. Пролетарская, 16"
                    }, {
                        "idReg"       : 732, "orgUID": 606,
                        "orgName"     : "Костюковичское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Костюковичское бюро", "act": 1, "dateOut": null, "unp": "700164908",
                        "address"     : "213640 г. Костюковичи, ул. Бонч-Бруевича, 2"
                    }, {
                        "idReg"       : 733, "orgUID": 607,
                        "orgName"     : "Краснопольское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Краснопольское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213560 г.п. Краснополье, ул. Ленинская, 2"
                    }, {
                        "idReg"       : 734, "orgUID": 608,
                        "orgName"     : "Славгородское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Славгородское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213240 г. Славгород, ул. К.Маркса, 5"
                    }, {
                        "idReg"       : 735, "orgUID": 609,
                        "orgName"     : "Хотимское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Хотимское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213660 г.п. Хотимск, пл. Ленина, 2"
                    }, {
                        "idReg"       : 736, "orgUID": 610,
                        "orgName"     : "Чериковское бюро Кричевского филиала Республиканского унитарного предприятия \"Могилевское агентство по государственной регистрации и земельному кадастру\"",
                        "orgShortName": "Чериковское бюро", "act": 1, "dateOut": null, "unp": null,
                        "address"     : "213530 г. Чериков, ул. Болдина, 31"
                    }
                ]
            }
        }
    }
}