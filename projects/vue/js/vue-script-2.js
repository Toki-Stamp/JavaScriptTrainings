Vue.use(VuePrintObject);

let ref = new Vue({
    el     : '#vue-application',
    data   : {
        list: [
            {
                "id"           : "-99", "entrance": "-", "explFloor": "-", "insulated": "-", "room": "-", "tree": null,
                "lev"          : null, "isChild": null, "parent_": null, "objectId": null, "parentId": null,
                "nameComponent": null, "technicDataWorkId": null, "char9": "27775.0", "char10": "-",
                "char15"       : "44440.0", "char16": null, "char45": "-", "char49": "27775.0", "char63": null,
                "char64"       : null, "char65": null, "char66": "44440.0", "char67": "-", "char68": "27775.0",
                "char19"       : "-", "char20": "-", "char12": null, "char48": null, "char69": " ", "char157": "Всего",
                "char161"      : null, "char166": null, "char43": null, "char46": null, "char18": "-", "char22": "-",
                "char74"       : null, "last": null, "clone": null, "char151": null, "buildingParentId": null,
                "buildingExtId": null, "copyCount": null, "edited": null, "insertedBy": null, "updetedBy": null
            }, {
                "id"               : "20018516872", "entrance": "1", "explFloor": null, "insulated": null, "room": null,
                "tree"             : "/20018516872", "lev": "1", "isChild": "0", "parent_": "20018516872",
                "objectId"         : "20245638", "parentId": "1", "nameComponent": "Экспликация помещений",
                "technicDataWorkId": "20017901345", "char9": "11110", "char10": null, "char15": "11110", "char16": null,
                "char45"           : null, "char49": "11110", "char63": null, "char64": null, "char65": null,
                "char66"           : "11110", "char67": null, "char68": "11110", "char19": null, "char20": null,
                "char12"           : null, "char48": null, "char69": "C", "char157": "Подъезд-1", "char161": "1",
                "char166"          : null, "char43": null, "char46": null, "char18": null, "char22": null,
                "char74"           : null, "last": null, "clone": "0", "char151": null,
                "buildingParentId" : "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"       : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516873", "entrance": "1", "explFloor": "1-й", "insulated": null,
                "room"         : null, "tree": "/20018516872/20018516873", "lev": "2", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516872",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901346", "char9": "110",
                "char10"       : null, "char15": "110", "char16": null, "char45": null, "char49": "110",
                "char63"       : null, "char64": null, "char65": null, "char66": "110", "char67": null,
                "char68"       : "110", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-2", "char161": null, "char166": null, "char43": "1-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516874", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-1",
                "room"         : null, "tree": "/20018516872/20018516873/20018516874", "lev": "3", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516873",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901347", "char9": "10",
                "char10"       : null, "char15": "10", "char16": null, "char45": null, "char49": "10",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "10", "char67": null,
                "char68"       : "10", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-1", "char161": "1-1-1", "char166": null, "char43": "1-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516875", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-1",
                "room"         : "1-1-1-1", "tree": "/20018516872/20018516873/20018516874/20018516875", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516874",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901348", "char9": "1",
                "char10"       : null, "char15": "1", "char16": null, "char45": null, "char49": "1",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "1", "char67": "1",
                "char68"       : "1", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "1-1-1-1", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516876", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-1",
                "room"         : "1-1-1-2", "tree": "/20018516872/20018516873/20018516874/20018516876", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516874",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901349", "char9": "2",
                "char10"       : null, "char15": "2", "char16": null, "char45": null, "char49": "2",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2", "char67": "1",
                "char68"       : "2", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "1-1-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": "1",
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516877", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-1",
                "room"         : "1-1-1-3", "tree": "/20018516872/20018516873/20018516874/20018516877", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516874",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901350", "char9": "3",
                "char10"       : null, "char15": "3", "char16": null, "char45": null, "char49": "3",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "3", "char67": "1",
                "char68"       : "3", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "1-1-1-3", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516883", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-1",
                "room"         : "1-1-1-4", "tree": "/20018516872/20018516873/20018516874/20018516883", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516874",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901356", "char9": "4",
                "char10"       : null, "char15": "4", "char16": null, "char45": null, "char49": "4",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4", "char67": "1",
                "char68"       : "4", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "1-1-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516878", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-2",
                "room"         : null, "tree": "/20018516872/20018516873/20018516878", "lev": "3", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516873",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901351", "char9": "100",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "100",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "100", "char67": null,
                "char68"       : "100", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "1-1-2", "char166": null, "char43": "1-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516879", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-2",
                "room"         : "1-1-2-1", "tree": "/20018516872/20018516873/20018516878/20018516879", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516878",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901352", "char9": "10",
                "char10"       : null, "char15": "10", "char16": null, "char45": null, "char49": "10",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "10", "char67": "1",
                "char68"       : "10", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "1-1-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516880", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-2",
                "room"         : "1-1-2-2", "tree": "/20018516872/20018516873/20018516878/20018516880", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516878",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901353", "char9": "20",
                "char10"       : null, "char15": "20", "char16": null, "char45": null, "char49": "20",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "20", "char67": "1",
                "char68"       : "20", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "1-1-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516881", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-2",
                "room"         : "1-1-2-3", "tree": "/20018516872/20018516873/20018516878/20018516881", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516878",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901354", "char9": "30",
                "char10"       : null, "char15": "30", "char16": null, "char45": null, "char49": "30",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "30", "char67": "1",
                "char68"       : "30", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "1-1-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516882", "entrance": "1", "explFloor": "1-й", "insulated": "1-1-2",
                "room"         : "1-1-2-4", "tree": "/20018516872/20018516873/20018516878/20018516882", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516878",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901355", "char9": "40",
                "char10"       : null, "char15": "40", "char16": null, "char45": null, "char49": "40",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "40", "char67": "1",
                "char68"       : "40", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "1-1-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516975", "entrance": "1", "explFloor": "2-й", "insulated": null,
                "room"         : null, "tree": "/20018516872/20018516975", "lev": "2", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516872",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901421", "char9": "11000",
                "char10"       : null, "char15": "11000", "char16": null, "char45": null, "char49": "11000",
                "char63"       : null, "char64": null, "char65": null, "char66": "11000", "char67": null,
                "char68"       : "11000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-2", "char161": null, "char166": null, "char43": "2-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516976", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-1",
                "room"         : null, "tree": "/20018516872/20018516975/20018516976", "lev": "3", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516975",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901422", "char9": "1000",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "1000",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "1000", "char67": null,
                "char68"       : "1000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-1", "char161": "1-2-1", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516977", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-1",
                "room"         : "1-2-1-1", "tree": "/20018516872/20018516975/20018516976/20018516977", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516976",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901424", "char9": "100",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "100",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "100", "char67": "1",
                "char68"       : "100", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "1-2-1-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516978", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-1",
                "room"         : "1-2-1-2", "tree": "/20018516872/20018516975/20018516976/20018516978", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516976",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901425", "char9": "200",
                "char10"       : null, "char15": "200", "char16": null, "char45": null, "char49": "200",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "200", "char67": "1",
                "char68"       : "200", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "1-2-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516979", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-1",
                "room"         : "1-2-1-3", "tree": "/20018516872/20018516975/20018516976/20018516979", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516976",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901426", "char9": "300",
                "char10"       : null, "char15": "300", "char16": null, "char45": null, "char49": "300",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "300", "char67": "1",
                "char68"       : "300", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "1-2-1-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516980", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-1",
                "room"         : "1-2-1-4", "tree": "/20018516872/20018516975/20018516976/20018516980", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516976",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901427", "char9": "400",
                "char10"       : null, "char15": "400", "char16": null, "char45": null, "char49": "400",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "400", "char67": "1",
                "char68"       : "400", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "1-2-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516981", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-2", "room": null,
                "tree"         : "/20018516872/20018516975/20018516981", "lev": "3", "isChild": "0",
                "parent_"      : "20018516872", "objectId": "20245638", "parentId": "20018516975",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901423", "char9": "10000",
                "char10"       : null, "char15": "10000", "char16": null, "char45": null, "char49": "10000",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "10000", "char67": null,
                "char68"       : "10000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "1-2-2", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516982", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-2",
                "room"         : "1-2-2-1", "tree": "/20018516872/20018516975/20018516981/20018516982", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516981",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901428", "char9": "1000",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "1000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "1000", "char67": "1",
                "char68"       : "1000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "1-2-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516983", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-2",
                "room"         : "1-2-2-2", "tree": "/20018516872/20018516975/20018516981/20018516983", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516981",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901429", "char9": "2000",
                "char10"       : null, "char15": "2000", "char16": null, "char45": null, "char49": "2000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2000", "char67": "1",
                "char68"       : "2000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "1-2-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516984", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-2",
                "room"         : "1-2-2-3", "tree": "/20018516872/20018516975/20018516981/20018516984", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516981",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901430", "char9": "3000",
                "char10"       : null, "char15": "3000", "char16": null, "char45": null, "char49": "3000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "3000", "char67": "1",
                "char68"       : "3000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "1-2-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516985", "entrance": "1", "explFloor": "2-й", "insulated": "1-2-2",
                "room"         : "1-2-2-4", "tree": "/20018516872/20018516975/20018516981/20018516985", "lev": "4",
                "isChild"      : "1", "parent_": "20018516872", "objectId": "20245638", "parentId": "20018516981",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901431", "char9": "4000",
                "char10"       : null, "char15": "4000", "char16": null, "char45": null, "char49": "4000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4000", "char67": "1",
                "char68"       : "4000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "1-2-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"               : "20018516986", "entrance": "2", "explFloor": null, "insulated": null, "room": null,
                "tree"             : "/20018516986", "lev": "1", "isChild": "0", "parent_": "20018516986",
                "objectId"         : "20245638", "parentId": "1", "nameComponent": "Экспликация помещений",
                "technicDataWorkId": "20017901432", "char9": "7777", "char10": null, "char15": "11110", "char16": null,
                "char45"           : null, "char49": "7777", "char63": null, "char64": null, "char65": null,
                "char66"           : "11110", "char67": null, "char68": "7777", "char19": null, "char20": null,
                "char12"           : null, "char48": null, "char69": "C", "char157": "Подъезд-2", "char161": "2",
                "char166"          : null, "char43": null, "char46": null, "char18": null, "char22": null,
                "char74"           : null, "last": null, "clone": "0", "char151": null,
                "buildingParentId" : "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"       : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516987", "entrance": "2", "explFloor": "1-й", "insulated": null,
                "room"         : null, "tree": "/20018516986/20018516987", "lev": "2", "isChild": "0",
                "parent_"      : "20018516986", "objectId": "20245638", "parentId": "20018516986",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901433", "char9": "77",
                "char10"       : null, "char15": "110", "char16": null, "char45": null, "char49": "77",
                "char63"       : null, "char64": null, "char65": null, "char66": "110", "char67": null,
                "char68"       : "77", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-1", "char161": null, "char166": null, "char43": "1-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018516988", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-1",
                "room"            : null, "tree": "/20018516986/20018516987/20018516988", "lev": "3", "isChild": "0",
                "parent_"         : "20018516986", "objectId": "20245638", "parentId": "20018516987",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901435", "char9": "7",
                "char10"          : null, "char15": "10", "char16": null, "char45": null, "char49": "7",
                "char63"          : "жил.", "char64": null, "char65": null, "char66": "10", "char67": null,
                "char68"          : "7", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "Гр",
                "char157"         : "Группа-1", "char161": "2-1-1", "char166": null, "char43": "1-й", "char46": "0",
                "char18"          : null, "char22": null, "char74": null, "last": null, "clone": "0", "char151": null,
                "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018516989", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-1",
                "room"            : "2-1-1-1", "tree": "/20018516986/20018516987/20018516988/20018516989", "lev": "4",
                "isChild"         : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516988",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901439", "char9": "0.7",
                "char10"          : null, "char15": "1", "char16": null, "char45": null, "char49": "0.7",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "1", "char67": "0.7",
                "char68"          : "0.7", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-1", "char161": "2-1-1-1",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018516990", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-1",
                "room"            : "2-1-1-2", "tree": "/20018516986/20018516987/20018516988/20018516990", "lev": "4",
                "isChild"         : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516988",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901440", "char9": "1.4",
                "char10"          : null, "char15": "2", "char16": null, "char45": null, "char49": "1.4",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "2", "char67": "0.7",
                "char68"          : "1.4", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-2", "char161": "2-1-1-2",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018516991", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-1",
                "room"            : "2-1-1-3", "tree": "/20018516986/20018516987/20018516988/20018516991", "lev": "4",
                "isChild"         : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516988",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901441", "char9": "2.1",
                "char10"          : null, "char15": "3", "char16": null, "char45": null, "char49": "2.1",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "3", "char67": "0.7",
                "char68"          : "2.1", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-3", "char161": "2-1-1-3",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018516992", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-1",
                "room"            : "2-1-1-4", "tree": "/20018516986/20018516987/20018516988/20018516992", "lev": "4",
                "isChild"         : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516988",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901442", "char9": "2.8",
                "char10"          : null, "char15": "4", "char16": null, "char45": null, "char49": "2.8",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "4", "char67": "0.7",
                "char68"          : "2.8", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-4", "char161": "2-1-1-4",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516993", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-2",
                "room"         : null, "tree": "/20018516986/20018516987/20018516993", "lev": "3", "isChild": "0",
                "parent_"      : "20018516986", "objectId": "20245638", "parentId": "20018516987",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901436", "char9": "70",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "70",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "100", "char67": null,
                "char68"       : "70", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "2-1-2", "char166": null, "char43": "1-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516994", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-2",
                "room"         : "2-1-2-1", "tree": "/20018516986/20018516987/20018516993/20018516994", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516993",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901443", "char9": "7",
                "char10"       : null, "char15": "10", "char16": null, "char45": null, "char49": "7",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "10", "char67": "0.7",
                "char68"       : "7", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "2-1-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516995", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-2",
                "room"         : "2-1-2-2", "tree": "/20018516986/20018516987/20018516993/20018516995", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516993",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901444", "char9": "14",
                "char10"       : null, "char15": "20", "char16": null, "char45": null, "char49": "14",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "20", "char67": "0.7",
                "char68"       : "14", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "2-1-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516996", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-2",
                "room"         : "2-1-2-3", "tree": "/20018516986/20018516987/20018516993/20018516996", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516993",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901445", "char9": "21",
                "char10"       : null, "char15": "30", "char16": null, "char45": null, "char49": "21",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "30", "char67": "0.7",
                "char68"       : "21", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "2-1-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516997", "entrance": "2", "explFloor": "1-й", "insulated": "2-1-2",
                "room"         : "2-1-2-4", "tree": "/20018516986/20018516987/20018516993/20018516997", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516993",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901446", "char9": "28",
                "char10"       : null, "char15": "40", "char16": null, "char45": null, "char49": "28",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "40", "char67": "0.7",
                "char68"       : "28", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "2-1-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018516998", "entrance": "2", "explFloor": "2-й", "insulated": null,
                "room"         : null, "tree": "/20018516986/20018516998", "lev": "2", "isChild": "0",
                "parent_"      : "20018516986", "objectId": "20245638", "parentId": "20018516986",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901434", "char9": "7700",
                "char10"       : null, "char15": "11000", "char16": null, "char45": null, "char49": "7700",
                "char63"       : null, "char64": null, "char65": null, "char66": "11000", "char67": null,
                "char68"       : "7700", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-2", "char161": null, "char166": null, "char43": "2-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018516999", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-1",
                "room"         : null, "tree": "/20018516986/20018516998/20018516999", "lev": "3", "isChild": "0",
                "parent_"      : "20018516986", "objectId": "20245638", "parentId": "20018516998",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901437", "char9": "700",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "700",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "1000", "char67": null,
                "char68"       : "700", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-1", "char161": "2-2-1", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517000", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-1",
                "room"         : "2-2-1-1", "tree": "/20018516986/20018516998/20018516999/20018517000", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516999",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901447", "char9": "70",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "70",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "100", "char67": "0.7",
                "char68"       : "70", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "2-2-1-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517001", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-1",
                "room"         : "2-2-1-2", "tree": "/20018516986/20018516998/20018516999/20018517001", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516999",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901448", "char9": "140",
                "char10"       : null, "char15": "200", "char16": null, "char45": null, "char49": "140",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "200", "char67": "0.7",
                "char68"       : "140", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "2-2-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517002", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-1",
                "room"         : "2-2-1-3", "tree": "/20018516986/20018516998/20018516999/20018517002", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516999",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901449", "char9": "210",
                "char10"       : null, "char15": "300", "char16": null, "char45": null, "char49": "210",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "300", "char67": "0.7",
                "char68"       : "210", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "2-2-1-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517003", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-1",
                "room"         : "2-2-1-4", "tree": "/20018516986/20018516998/20018516999/20018517003", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018516999",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901450", "char9": "280",
                "char10"       : null, "char15": "400", "char16": null, "char45": null, "char49": "280",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "400", "char67": "0.7",
                "char68"       : "280", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "2-2-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517004", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-2",
                "room"         : null, "tree": "/20018516986/20018516998/20018517004", "lev": "3", "isChild": "0",
                "parent_"      : "20018516986", "objectId": "20245638", "parentId": "20018516998",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901438", "char9": "7000",
                "char10"       : null, "char15": "10000", "char16": null, "char45": null, "char49": "7000",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "10000", "char67": null,
                "char68"       : "7000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "2-2-2", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517005", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-2",
                "room"         : "2-2-2-1", "tree": "/20018516986/20018516998/20018517004/20018517005", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018517004",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901451", "char9": "700",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "700",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "1000", "char67": "0.7",
                "char68"       : "700", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "2-2-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517006", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-2",
                "room"         : "2-2-2-2", "tree": "/20018516986/20018516998/20018517004/20018517006", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018517004",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901452", "char9": "1400",
                "char10"       : null, "char15": "2000", "char16": null, "char45": null, "char49": "1400",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2000", "char67": "0.7",
                "char68"       : "1400", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "2-2-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517007", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-2",
                "room"         : "2-2-2-3", "tree": "/20018516986/20018516998/20018517004/20018517007", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018517004",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901453", "char9": "2100",
                "char10"       : null, "char15": "3000", "char16": null, "char45": null, "char49": "2100",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "3000", "char67": "0.7",
                "char68"       : "2100", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "2-2-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517008", "entrance": "2", "explFloor": "2-й", "insulated": "2-2-2",
                "room"         : "2-2-2-4", "tree": "/20018516986/20018516998/20018517004/20018517008", "lev": "4",
                "isChild"      : "1", "parent_": "20018516986", "objectId": "20245638", "parentId": "20018517004",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901454", "char9": "2800",
                "char10"       : null, "char15": "4000", "char16": null, "char45": null, "char49": "2800",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4000", "char67": "0.7",
                "char68"       : "2800", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "2-2-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"               : "20018517009", "entrance": "3", "explFloor": null, "insulated": null, "room": null,
                "tree"             : "/20018517009", "lev": "1", "isChild": "0", "parent_": "20018517009",
                "objectId"         : "20245638", "parentId": "1", "nameComponent": "Экспликация помещений",
                "technicDataWorkId": "20017901455", "char9": "5555", "char10": null, "char15": "11110", "char16": null,
                "char45"           : null, "char49": "5555", "char63": null, "char64": null, "char65": null,
                "char66"           : "11110", "char67": null, "char68": "5555", "char19": null, "char20": null,
                "char12"           : null, "char48": null, "char69": "C", "char157": "Подъезд-3", "char161": "3",
                "char166"          : null, "char43": null, "char46": null, "char18": null, "char22": null,
                "char74"           : null, "last": null, "clone": "0", "char151": null,
                "buildingParentId" : "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"       : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517010", "entrance": "3", "explFloor": "1-й", "insulated": null,
                "room"         : null, "tree": "/20018517009/20018517010", "lev": "2", "isChild": "0",
                "parent_"      : "20018517009", "objectId": "20245638", "parentId": "20018517009",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901456", "char9": "55",
                "char10"       : null, "char15": "110", "char16": null, "char45": null, "char49": "55",
                "char63"       : null, "char64": null, "char65": null, "char66": "110", "char67": null,
                "char68"       : "55", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-1", "char161": null, "char166": null, "char43": "1-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517011", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-1",
                "room"            : null, "tree": "/20018517009/20018517010/20018517011", "lev": "3", "isChild": "0",
                "parent_"         : "20018517009", "objectId": "20245638", "parentId": "20018517010",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901458", "char9": "5",
                "char10"          : null, "char15": "10", "char16": null, "char45": null, "char49": "5",
                "char63"          : "жил.", "char64": null, "char65": null, "char66": "10", "char67": null,
                "char68"          : "5", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "Гр",
                "char157"         : "Группа-1", "char161": "3-1-1", "char166": null, "char43": "1-й", "char46": "0",
                "char18"          : null, "char22": null, "char74": null, "last": null, "clone": "0", "char151": null,
                "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517012", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-1",
                "room"            : "3-1-1-1", "tree": "/20018517009/20018517010/20018517011/20018517012", "lev": "4",
                "isChild"         : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517011",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901462", "char9": "0.5",
                "char10"          : null, "char15": "1", "char16": null, "char45": null, "char49": "0.5",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "1", "char67": "0.5",
                "char68"          : "0.5", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-1", "char161": "3-1-1-1",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517013", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-1",
                "room"         : "3-1-1-2", "tree": "/20018517009/20018517010/20018517011/20018517013", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517011",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901463", "char9": "1",
                "char10"       : null, "char15": "2", "char16": null, "char45": null, "char49": "1",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2", "char67": "0.5",
                "char68"       : "1", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "3-1-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"              : "20018517014", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-1",
                "room"            : "3-1-1-3", "tree": "/20018517009/20018517010/20018517011/20018517014", "lev": "4",
                "isChild"         : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517011",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901464", "char9": "1.5",
                "char10"          : null, "char15": "3", "char16": null, "char45": null, "char49": "1.5",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "3", "char67": "0.5",
                "char68"          : "1.5", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-3", "char161": "3-1-1-3",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517015", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-1",
                "room"         : "3-1-1-4", "tree": "/20018517009/20018517010/20018517011/20018517015", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517011",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901465", "char9": "2",
                "char10"       : null, "char15": "4", "char16": null, "char45": null, "char49": "2",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4", "char67": "0.5",
                "char68"       : "2", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "3-1-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517016", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-2",
                "room"         : null, "tree": "/20018517009/20018517010/20018517016", "lev": "3", "isChild": "0",
                "parent_"      : "20018517009", "objectId": "20245638", "parentId": "20018517010",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901459", "char9": "50",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "50",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "100", "char67": null,
                "char68"       : "50", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "3-1-2", "char166": null, "char43": "1-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517017", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-2",
                "room"         : "3-1-2-1", "tree": "/20018517009/20018517010/20018517016/20018517017", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517016",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901466", "char9": "5",
                "char10"       : null, "char15": "10", "char16": null, "char45": null, "char49": "5",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "10", "char67": "0.5",
                "char68"       : "5", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "3-1-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517018", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-2",
                "room"         : "3-1-2-2", "tree": "/20018517009/20018517010/20018517016/20018517018", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517016",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901467", "char9": "10",
                "char10"       : null, "char15": "20", "char16": null, "char45": null, "char49": "10",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "20", "char67": "0.5",
                "char68"       : "10", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "3-1-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517019", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-2",
                "room"         : "3-1-2-3", "tree": "/20018517009/20018517010/20018517016/20018517019", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517016",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901468", "char9": "15",
                "char10"       : null, "char15": "30", "char16": null, "char45": null, "char49": "15",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "30", "char67": "0.5",
                "char68"       : "15", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "3-1-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517020", "entrance": "3", "explFloor": "1-й", "insulated": "3-1-2",
                "room"         : "3-1-2-4", "tree": "/20018517009/20018517010/20018517016/20018517020", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517016",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901469", "char9": "20",
                "char10"       : null, "char15": "40", "char16": null, "char45": null, "char49": "20",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "40", "char67": "0.5",
                "char68"       : "20", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "3-1-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517021", "entrance": "3", "explFloor": "2-й", "insulated": null,
                "room"         : null, "tree": "/20018517009/20018517021", "lev": "2", "isChild": "0",
                "parent_"      : "20018517009", "objectId": "20245638", "parentId": "20018517009",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901457", "char9": "5500",
                "char10"       : null, "char15": "11000", "char16": null, "char45": null, "char49": "5500",
                "char63"       : null, "char64": null, "char65": null, "char66": "11000", "char67": null,
                "char68"       : "5500", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-2", "char161": null, "char166": null, "char43": "2-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517022", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-1",
                "room"         : null, "tree": "/20018517009/20018517021/20018517022", "lev": "3", "isChild": "0",
                "parent_"      : "20018517009", "objectId": "20245638", "parentId": "20018517021",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901460", "char9": "500",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "500",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "1000", "char67": null,
                "char68"       : "500", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-1", "char161": "3-2-1", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517023", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-1",
                "room"         : "3-2-1-1", "tree": "/20018517009/20018517021/20018517022/20018517023", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517022",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901470", "char9": "50",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "50",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "100", "char67": "0.5",
                "char68"       : "50", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "3-2-1-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517024", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-1",
                "room"         : "3-2-1-2", "tree": "/20018517009/20018517021/20018517022/20018517024", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517022",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901471", "char9": "100",
                "char10"       : null, "char15": "200", "char16": null, "char45": null, "char49": "100",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "200", "char67": "0.5",
                "char68"       : "100", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "3-2-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517025", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-1",
                "room"         : "3-2-1-3", "tree": "/20018517009/20018517021/20018517022/20018517025", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517022",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901472", "char9": "150",
                "char10"       : null, "char15": "300", "char16": null, "char45": null, "char49": "150",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "300", "char67": "0.5",
                "char68"       : "150", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "3-2-1-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517026", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-1",
                "room"         : "3-2-1-4", "tree": "/20018517009/20018517021/20018517022/20018517026", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517022",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901473", "char9": "200",
                "char10"       : null, "char15": "400", "char16": null, "char45": null, "char49": "200",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "400", "char67": "0.5",
                "char68"       : "200", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "3-2-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517027", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-2",
                "room"         : null, "tree": "/20018517009/20018517021/20018517027", "lev": "3", "isChild": "0",
                "parent_"      : "20018517009", "objectId": "20245638", "parentId": "20018517021",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901461", "char9": "5000",
                "char10"       : null, "char15": "10000", "char16": null, "char45": null, "char49": "5000",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "10000", "char67": null,
                "char68"       : "5000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "3-2-2", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517028", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-2",
                "room"         : "3-2-2-1", "tree": "/20018517009/20018517021/20018517027/20018517028", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517027",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901474", "char9": "500",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "500",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "1000", "char67": "0.5",
                "char68"       : "500", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "3-2-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517029", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-2",
                "room"         : "3-2-2-2", "tree": "/20018517009/20018517021/20018517027/20018517029", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517027",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901475", "char9": "1000",
                "char10"       : null, "char15": "2000", "char16": null, "char45": null, "char49": "1000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2000", "char67": "0.5",
                "char68"       : "1000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "3-2-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517030", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-2",
                "room"         : "3-2-2-3", "tree": "/20018517009/20018517021/20018517027/20018517030", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517027",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901476", "char9": "1500",
                "char10"       : null, "char15": "3000", "char16": null, "char45": null, "char49": "1500",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "3000", "char67": "0.5",
                "char68"       : "1500", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "3-2-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517031", "entrance": "3", "explFloor": "2-й", "insulated": "3-2-2",
                "room"         : "3-2-2-4", "tree": "/20018517009/20018517021/20018517027/20018517031", "lev": "4",
                "isChild"      : "1", "parent_": "20018517009", "objectId": "20245638", "parentId": "20018517027",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901477", "char9": "2000",
                "char10"       : null, "char15": "4000", "char16": null, "char45": null, "char49": "2000",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4000", "char67": "0.5",
                "char68"       : "2000", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "3-2-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"               : "20018517139", "entrance": "4", "explFloor": null, "insulated": null, "room": null,
                "tree"             : "/20018517139", "lev": "1", "isChild": "0", "parent_": "20018517139",
                "objectId"         : "20245638", "parentId": "1", "nameComponent": "Экспликация помещений",
                "technicDataWorkId": "20017901557", "char9": "3333", "char10": null, "char15": "11110", "char16": null,
                "char45"           : null, "char49": "3333", "char63": null, "char64": null, "char65": null,
                "char66"           : "11110", "char67": null, "char68": "3333", "char19": null, "char20": null,
                "char12"           : null, "char48": null, "char69": "C", "char157": "Подъезд-4", "char161": "4",
                "char166"          : null, "char43": null, "char46": null, "char18": null, "char22": null,
                "char74"           : null, "last": null, "clone": "0", "char151": null,
                "buildingParentId" : "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"       : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517140", "entrance": "4", "explFloor": "1-й", "insulated": null,
                "room"         : null, "tree": "/20018517139/20018517140", "lev": "2", "isChild": "0",
                "parent_"      : "20018517139", "objectId": "20245638", "parentId": "20018517139",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901558", "char9": "33",
                "char10"       : null, "char15": "110", "char16": null, "char45": null, "char49": "33",
                "char63"       : null, "char64": null, "char65": null, "char66": "110", "char67": null,
                "char68"       : "33", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-1", "char161": null, "char166": null, "char43": "1-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517141", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-1",
                "room"            : null, "tree": "/20018517139/20018517140/20018517141", "lev": "3", "isChild": "0",
                "parent_"         : "20018517139", "objectId": "20245638", "parentId": "20018517140",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901560", "char9": "3",
                "char10"          : null, "char15": "10", "char16": null, "char45": null, "char49": "3",
                "char63"          : "жил.", "char64": null, "char65": null, "char66": "10", "char67": null,
                "char68"          : "3", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "Гр",
                "char157"         : "Группа-1", "char161": "4-1-1", "char166": null, "char43": "1-й", "char46": "0",
                "char18"          : null, "char22": null, "char74": null, "last": null, "clone": "0", "char151": null,
                "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517142", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-1",
                "room"            : "4-1-1-1", "tree": "/20018517139/20018517140/20018517141/20018517142", "lev": "4",
                "isChild"         : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517141",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901564", "char9": "0.3",
                "char10"          : null, "char15": "1", "char16": null, "char45": null, "char49": "0.3",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "1", "char67": "0.3",
                "char68"          : "0.3", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-1", "char161": "4-1-1-1",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517143", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-1",
                "room"            : "4-1-1-2", "tree": "/20018517139/20018517140/20018517141/20018517143", "lev": "4",
                "isChild"         : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517141",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901565", "char9": "0.6",
                "char10"          : null, "char15": "2", "char16": null, "char45": null, "char49": "0.6",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "2", "char67": "0.3",
                "char68"          : "0.6", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-2", "char161": "4-1-1-2",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517144", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-1",
                "room"            : "4-1-1-3", "tree": "/20018517139/20018517140/20018517141/20018517144", "lev": "4",
                "isChild"         : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517141",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901566", "char9": "0.9",
                "char10"          : null, "char15": "3", "char16": null, "char45": null, "char49": "0.9",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "3", "char67": "0.3",
                "char68"          : "0.9", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-3", "char161": "4-1-1-3",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"              : "20018517145", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-1",
                "room"            : "4-1-1-4", "tree": "/20018517139/20018517140/20018517141/20018517145", "lev": "4",
                "isChild"         : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517141",
                "nameComponent"   : "Экспликация помещений", "technicDataWorkId": "20017901567", "char9": "1.2",
                "char10"          : null, "char15": "4", "char16": null, "char45": null, "char49": "1.2",
                "char63"          : "жил.", "char64": "жил.", "char65": "0", "char66": "4", "char67": "0.3",
                "char68"          : "1.2", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"          : "П", "char157": "Помещение-4", "char161": "4-1-1-4",
                "char166"         : "Автоматизированный подсчет", "char43": "1-й", "char46": null, "char18": null,
                "char22"          : null, "char74": null, "last": null, "clone": "0", "char151": "А",
                "buildingParentId": "20018392838", "buildingExtId": "20018392838", "copyCount": null, "edited": null,
                "insertedBy"      : "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517146", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-2",
                "room"         : null, "tree": "/20018517139/20018517140/20018517146", "lev": "3", "isChild": "0",
                "parent_"      : "20018517139", "objectId": "20245638", "parentId": "20018517140",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901561", "char9": "30",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "30",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "100", "char67": null,
                "char68"       : "30", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "4-1-2", "char166": null, "char43": "1-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517147", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-2",
                "room"         : "4-1-2-1", "tree": "/20018517139/20018517140/20018517146/20018517147", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517146",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901568", "char9": "3",
                "char10"       : null, "char15": "10", "char16": null, "char45": null, "char49": "3",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "10", "char67": "0.3",
                "char68"       : "3", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "4-1-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517148", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-2",
                "room"         : "4-1-2-2", "tree": "/20018517139/20018517140/20018517146/20018517148", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517146",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901569", "char9": "6",
                "char10"       : null, "char15": "20", "char16": null, "char45": null, "char49": "6",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "20", "char67": "0.3",
                "char68"       : "6", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "4-1-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517149", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-2",
                "room"         : "4-1-2-3", "tree": "/20018517139/20018517140/20018517146/20018517149", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517146",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901570", "char9": "9",
                "char10"       : null, "char15": "30", "char16": null, "char45": null, "char49": "9",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "30", "char67": "0.3",
                "char68"       : "9", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "4-1-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517150", "entrance": "4", "explFloor": "1-й", "insulated": "4-1-2",
                "room"         : "4-1-2-4", "tree": "/20018517139/20018517140/20018517146/20018517150", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517146",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901571", "char9": "12",
                "char10"       : null, "char15": "40", "char16": null, "char45": null, "char49": "12",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "40", "char67": "0.3",
                "char68"       : "12", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "4-1-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "1-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838",
                "buildingExtId": "20018392838", "copyCount": null, "edited": null, "insertedBy": "Фомичёв Ю.В.",
                "updetedBy"    : "Фомичёв Ю.В."
            }, {
                "id"           : "20018517151", "entrance": "4", "explFloor": "2-й", "insulated": null,
                "room"         : null, "tree": "/20018517139/20018517151", "lev": "2", "isChild": "0",
                "parent_"      : "20018517139", "objectId": "20245638", "parentId": "20018517139",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901559", "char9": "3300",
                "char10"       : null, "char15": "11000", "char16": null, "char45": null, "char49": "3300",
                "char63"       : null, "char64": null, "char65": null, "char66": "11000", "char67": null,
                "char68"       : "3300", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Э", "char157": "Этаж-2", "char161": null, "char166": null, "char43": "2-й",
                "char46"       : null, "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517152", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-1",
                "room"         : null, "tree": "/20018517139/20018517151/20018517152", "lev": "3", "isChild": "0",
                "parent_"      : "20018517139", "objectId": "20245638", "parentId": "20018517151",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901562", "char9": "300",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "300",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "1000", "char67": null,
                "char68"       : "300", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-1", "char161": "4-2-1", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517153", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-1",
                "room"         : "4-2-1-1", "tree": "/20018517139/20018517151/20018517152/20018517153", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517152",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901572", "char9": "30",
                "char10"       : null, "char15": "100", "char16": null, "char45": null, "char49": "30",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "100", "char67": "0.3",
                "char68"       : "30", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "4-2-1-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517154", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-1",
                "room"         : "4-2-1-2", "tree": "/20018517139/20018517151/20018517152/20018517154", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517152",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901573", "char9": "60",
                "char10"       : null, "char15": "200", "char16": null, "char45": null, "char49": "60",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "200", "char67": "0.3",
                "char68"       : "60", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "4-2-1-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517155", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-1",
                "room"         : "4-2-1-3", "tree": "/20018517139/20018517151/20018517152/20018517155", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517152",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901574", "char9": "90",
                "char10"       : null, "char15": "300", "char16": null, "char45": null, "char49": "90",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "300", "char67": "0.3",
                "char68"       : "90", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "4-2-1-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517156", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-1",
                "room"         : "4-2-1-4", "tree": "/20018517139/20018517151/20018517152/20018517156", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517152",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901575", "char9": "120",
                "char10"       : null, "char15": "400", "char16": null, "char45": null, "char49": "120",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "400", "char67": "0.3",
                "char68"       : "120", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "4-2-1-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517157", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-2",
                "room"         : null, "tree": "/20018517139/20018517151/20018517157", "lev": "3", "isChild": "0",
                "parent_"      : "20018517139", "objectId": "20245638", "parentId": "20018517151",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901563", "char9": "3000",
                "char10"       : null, "char15": "10000", "char16": null, "char45": null, "char49": "3000",
                "char63"       : "жил.", "char64": null, "char65": null, "char66": "10000", "char67": null,
                "char68"       : "3000", "char19": null, "char20": null, "char12": null, "char48": null,
                "char69"       : "Гр", "char157": "Группа-2", "char161": "4-2-2", "char166": null, "char43": "2-й",
                "char46"       : "0", "char18": null, "char22": null, "char74": null, "last": null, "clone": "0",
                "char151"      : null, "buildingParentId": "20018392838", "buildingExtId": null, "copyCount": null,
                "edited"       : null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517158", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-2",
                "room"         : "4-2-2-1", "tree": "/20018517139/20018517151/20018517157/20018517158", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517157",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901576", "char9": "300",
                "char10"       : null, "char15": "1000", "char16": null, "char45": null, "char49": "300",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "1000", "char67": "0.3",
                "char68"       : "300", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-1", "char161": "4-2-2-1", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517159", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-2",
                "room"         : "4-2-2-2", "tree": "/20018517139/20018517151/20018517157/20018517159", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517157",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901577", "char9": "600",
                "char10"       : null, "char15": "2000", "char16": null, "char45": null, "char49": "600",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "2000", "char67": "0.3",
                "char68"       : "600", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-2", "char161": "4-2-2-2", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517160", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-2",
                "room"         : "4-2-2-3", "tree": "/20018517139/20018517151/20018517157/20018517160", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517157",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901578", "char9": "900",
                "char10"       : null, "char15": "3000", "char16": null, "char45": null, "char49": "900",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "3000", "char67": "0.3",
                "char68"       : "900", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-3", "char161": "4-2-2-3", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }, {
                "id"           : "20018517161", "entrance": "4", "explFloor": "2-й", "insulated": "4-2-2",
                "room"         : "4-2-2-4", "tree": "/20018517139/20018517151/20018517157/20018517161", "lev": "4",
                "isChild"      : "1", "parent_": "20018517139", "objectId": "20245638", "parentId": "20018517157",
                "nameComponent": "Экспликация помещений", "technicDataWorkId": "20017901579", "char9": "1200",
                "char10"       : null, "char15": "4000", "char16": null, "char45": null, "char49": "1200",
                "char63"       : "жил.", "char64": "жил.", "char65": "0", "char66": "4000", "char67": "0.3",
                "char68"       : "1200", "char19": null, "char20": null, "char12": null, "char48": null, "char69": "П",
                "char157"      : "Помещение-4", "char161": "4-2-2-4", "char166": "Автоматизированный подсчет",
                "char43"       : "2-й", "char46": null, "char18": null, "char22": null, "char74": null, "last": null,
                "clone"        : "0", "char151": "А", "buildingParentId": "20018392838", "buildingExtId": "20018392838",
                "copyCount"    : null, "edited": null, "insertedBy": "Фомичёв Ю.В.", "updetedBy": "Фомичёв Ю.В."
            }
        ],
        tree: null
    },
    created: function () {
        let list         = this.list.slice(0), //clone
            straightTree = Object.create(null),
            deepTree     = Object.create(null);
        
        list.shift(); //remove total
        list.forEach(data => {
            let path = data.tree.substring(1).split('/');
            
            straightTree = this.goStraight(straightTree, data);
            deepTree = this.goDeep(deepTree, path, data, null);
        });
        console.log('straight tree', straightTree);
        console.log('deep tree', deepTree);
        this.tree = deepTree;
    },
    mounted: function () {
        console.log('mounted');
        console.log(this.list);
    },
    methods: {
        goStraight: function (tree, data) {
            let path = data.tree.substring(1).split('/');
            let id = path.shift();
            let object = tree[id] || Object.create(null);
            
            object.children = ($.extend(Object.create(null), object.children) || Object.create(null));
            
            if (path.length) {
                path.forEach(step => {
                    let obj = tree[step] || Object.create(null);
                    obj.children = ($.extend(Object.create(null), object.children) || Object.create(null));
                    obj.children[step] = true;
                    
                    tree[step] = obj;
                });
            } else {
                
                tree[id] = object;
            }
            
            return tree;
        },
        goDeep    : function (tree, path, data, parents) {
            let currentLevel = parseInt(path.shift(), 10),
                thisParents  = (parents || []);
            
            if (!tree[currentLevel]) {
                tree[currentLevel] = Object.create(null);
            }
            
            if (path.length) {
                if (!tree[currentLevel].children) {
                    tree[currentLevel].children = Object.create(null);
                }
                
                thisParents.push(currentLevel);
                this.goDeep(tree[currentLevel].children, path, data, thisParents);
            } else {
                tree[currentLevel].level = parseInt(data.lev, 10);
                // tree[currentLevel].data = data;
                
                if (thisParents && thisParents.length) {
                    tree[currentLevel].parents = thisParents;
                }
            }
            
            return tree;
        },
    }
});