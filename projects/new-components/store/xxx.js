/**
 * Created by Fomichev Yuri on 09.04.2018
 * Contact me at : toki.stamp@gmail.com
 */

$(function () {

    if (!getOptsFromUrl().obj_id) {
        alert('Неизвестен номер объекта!');
        return false;
    }
    var infoFromUrl = getOptsFromUrl();
    general_info_about_cs.obj_id = infoFromUrl.obj_id;
    general_info_about_cs.order_id = infoFromUrl.order_id;
    general_info_about_cs.$body = $('body');
    general_info_about_cs.parent_id = null;
    var infoObj = JSON.parse(localStorage.getItem('infoForAtticAndFooter'));
    var selector = $('#saveAllData, #firstBut');
    var data = {
        objId: general_info_about_cs.obj_id,
        ordId: general_info_about_cs.order_id,
        selector: selector,
        infoObj: infoObj
    };
    functions.checkTheRightToEditForCurrentObject(data);

    generalInfoAboutCSService.findObjectById(general_info_about_cs.obj_id, {
        callback: function (object) {
            descriptionOfTheSections(window.location.search.toString(), general_info_about_cs.obj_id, object);
            $('#general_info_about_cs').removeClass('btn-default').addClass('btn-warning');
            addAtticAndFooter('guide.html');
        }
    });

    forAllService.findXRh3ExpressionById(31, {
        callback: function (obj) {
            $('#fifthInp').data('expression', obj.expression);
        }
    });

    $('#fifthInp').on('change', function () {
        var self = $(this);
        self.parent().removeClass('has-error');
        if (self.val()) {
            if (testInput(self.data('expression'), self.val())) {
                self.parent().addClass('has-error');
                $(document).trigger("add-alerts", [
                    {
                        'message': "Данные не соответствуют форматно логическому контролю!",
                        'priority': 'danger'
                    }
                ]);
            }
        }
    });

    if (JSON.parse(localStorage.getItem('infoForAtticAndFooter')).banToEditRegistryOfObjects) {
        $('#firstBut').attr('disabled', 'disabled');
    }

    //----------------------обработчики---------------------------------------------------------------------------------

    $('#address').buttonset();
    $('#adres, #location').button('option', 'disabled', true);
    $('#mainTable')
        .on('change', '#eighthSel', function () {
            var newVal = $(this).val();
            $('#ninthSel').select2('val', newVal);
        })
        .on('click', '#firstBut', function () {
            var id = $('#fifthInp').val();
            if (!id) {
                alert('Для поиска нужно указать ID!');
                return false;
            }
            if ($('td.has-error').length) {
                alert('Проверьте правильность введенных значений!');
                return false;
            }
            general_info_about_cs.$body.css('cursor', 'wait');
            $('.btnSub').addClass('disabled');
            generalInfoAboutCSService.findObjectById(id, {
                callback: function (object) {
                    if (!object ||  object.parcel_number || object.object_vyd_id.code != 2) {
                        $('.btnSub').removeClass('disabled');
                        general_info_about_cs.$body.css('cursor', 'default');
                        alert('Объект с таким ID не найден!');
                        return false;
                    }
                    generalInfoAboutCSService.getComponentsWithCharacteristicsByObjectId(object.id, 6, {
                        callback: function (componentList) {
                            $('.btnSub').removeClass('disabled');
                            general_info_about_cs.$body.css('cursor', 'default');
                            var componentObj = componentList[0];
                            if (!componentList.length) {
                                componentObj = {};
                            }
                            general_info_about_cs.fillFields(object, componentObj);
                            general_info_about_cs.getWallMaterial(object);
                        }
                    });
                }
            })
        });

    //------------------------обработчик кнопки Сохранить---------------------------------------------------------------

    $('#saveAllData').on('click', function () {
        if (!general_info_about_cs.parent_obj_id) {
            alert('Родительский объект не прикреплен!');
            return false;
        }
        general_info_about_cs.saveAllDataFunction(general_info_about_cs.collectData());
    });

    //-------------------заполнение списка организаций------------------------------------------------------------------

    general_info_about_cs.$body.css('cursor', 'wait');
    $('.btnSub').addClass('disabled');

    generalInfoAboutCSService.getAllOrganregistr({
        callback: function (list) {
            var eighthSel = document.getElementById('eighthSel');
            var ninthSel = document.getElementById('ninthSel');
            if (list.length != 0) {
                dwr.util.addOptions(eighthSel, list,
                    function (data) {
                        if (data.kodreg != null)
                            return data.kodreg;
                    },
                    function (data) {
                        if (data.kodreg != null)
                            return data.kodreg;
                    }
                );
                dwr.util.addOptions(ninthSel, list,
                    function (data) {
                        if (data.kodreg != null)
                            return data.kodreg;
                    },
                    function (data) {
                        if (data.short_name != null)
                            return data.short_name;
                    }
                );
            }
            $('select').select2();

            generalInfoAboutCSService.findObjectParentsForObjects(general_info_about_cs.obj_id, false, {
                callback: function (list) {
                    var neededObj = {};
                    for (var i = 0; i < list.length; i++) {
                        if (!list[i].objectParentId.parcel_number) {
                            neededObj = list[i];
                            break;
                        }
                    }
                    if ($.isEmptyObject(neededObj)) {
                        $("#formWait").hide();
                        alert('Ошибка при запросе родительского объекта!');
                        return false;
                    }
                    general_info_about_cs.parent_row_id = neededObj.id;
                    general_info_about_cs.parent_id = neededObj.objectParentId.id;
                    generalInfoAboutCSService.getComponentsWithCharacteristicsByObjectId(neededObj.objectParentId.id, 6, {
                        callback: function (componentList) {
                            general_info_about_cs.fillFields(neededObj.objectParentId, componentList[0]);
                            general_info_about_cs.getWallMaterial(neededObj.objectParentId);
                        }
                    });
                }
            });
        }
    });
});


//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


var general_info_about_cs = {

    //-----------------------заполнение---------------------------------------------------------------------------------

    fillFields: function (object, componentObj) {
        general_info_about_cs.parent_obj_id = object.id;
        if (object.old_id != null) {
            $('#firstH3').text('ID объекта: ' + object.id + " (" + object.old_id + ')');
        } else {
            $('#firstH3').text('ID объекта: ' + object.id);
        }
        $('#eighthSel').select2('val', object.org_uid);
        if (object.inventory_number) {
            $('#fourthInp').val(object.inventory_number);
        }
        if (object.object_type_id) {
            $('#thirdSel').empty()
                .append('<option value="' + object.object_type_id.objectTypeId + '">' +
                    object.object_type_id.objectName + '</option>')
                .select2();
        }
        if (object.object_name) {
            $('#firstInp').val(object.object_name).trigger('change');
        }
        if (object.nazn) {
            $('#fourthSel').empty()
                .append('<option value="' + object.nazn.code + '">' + object.nazn.code + ' - ' +
                    object.nazn.immovablePurposeName + '</option>')
                .select2().trigger('change');
        }
        if (object.address) {
            var $firstTextarea = $('#firstTextarea');
            $firstTextarea.val(object.address.adrstr);
            if (object.address.idAdr) {
                $('#location').button('option', 'disabled', true);
                $('#adres').button('option', 'disabled', false).trigger('click');
            } else {
                $('#adres').button('option', 'disabled', true);
                $('#location').button('option', 'disabled', false).trigger('click');
            }
        }
        if (object.org_uid != null) {
            $('#eighthSel, #ninthSel').select2('val', object.org_uid)
        }
        if ($.isEmptyObject(componentObj)) {
            $('#secondInp, #thirdInp').val('');
            $('#firstSel, #secondSel').select2('val', '');
            $(document).trigger('add-alerts', [
                {
                    'message': 'Форма заполнена',
                    'priority': 'success'
                }
            ]);
            return false;
        }
        var charObj = componentObj.characteristics;
        var $secondInp = $('#secondInp');
        var $thirdInp = $('#thirdInp');

        charObj.single.char2 ? $secondInp.val(charObj.single.char2) : $secondInp.val(charObj.single.char2);
        charObj.single.char4 ? $thirdInp.val(charObj.single.char4) : $thirdInp.val(charObj.single.char4);

        $(document).trigger('add-alerts', [
            {
                'message': 'Форма заполнена',
                'priority': 'success'
            }
        ])
    },

    getWallMaterial: function (parent_id) {
        $("#formWait").show();
        var wallMaterialMass = [];
        var yearBuiltMass = [];
        var yearRecobstructionMass = [];
        var wallMaterial = document.getElementById('wallMaterial');
        var firstSel = document.getElementById('firstSel');
        var secondSel = document.getElementById('secondSel');
        var str;
        var $firstSel = $('#firstSel');
        var $secondSel = $('#secondSel');
        general_info_about_cs.parent_id = parent_id.id;

        generalInfoAboutCSService.selectGetPageGeneralInfoAboutCs(general_info_about_cs.obj_id, general_info_about_cs.parent_id, {
            async: false,
            callback: function (list) {
                if (list.objectTypeId == 6) {
                    str = '<tr> <td>Материал стен</td> <td colspan="4"> ' +
                        '<select id="wallMaterial" class="btn-block js-example-basic-multiple emptyAfterFindSel" multiple="multiple" '+
                        'disabled></select> ' +
                        '</td> </tr>';
                    if (!wallMaterial) {
                        $('#mainTable').append(str);
                    }
                    $('#wallMaterial').select2('val', '');
                    wallMaterial = document.getElementById('wallMaterial');
                    for (var key in list.XRh3Materials) {
                        wallMaterialMass.push(list.XRh3Materials[key][0]);
                    }
                    dwr.util.addOptions(wallMaterial, list.XRh3Materials,
                        function (data) {
                            if (data[0] != null)
                                return data[0];
                        },
                        function (data) {
                            if (data[1] != null)
                                return data[1];
                        }
                    );
                    $('#wallMaterial').select2();
                    $('ul.select2-choices').css('border-radius','4px');
                }
                for (var key in list.xRh3YearBuilt) {
                    yearBuiltMass.push(list.xRh3YearBuilt[key][0]);
                }
                for (var key in list.xRh3YearReconstruction) {
                    yearRecobstructionMass.push(list.xRh3YearReconstruction[key][0]);
                }
                $('.btnSub').removeClass('disabled');
                general_info_about_cs.$body.css('cursor', 'default');
                dwr.util.addOptions(firstSel, list.xRh3YearBuilt,
                    function (data) {
                        if (data[0] != null)
                            return data[0];
                    },
                    function (data) {
                        if (data[1] != null)
                            return data[1];
                    }
                );
                dwr.util.addOptions(secondSel, list.xRh3YearReconstruction,
                    function (data) {
                        if (data[0] != null)
                            return data[0];
                    },
                    function (data) {
                        if (data[1] != null)
                            return data[1];
                    }
                );
                $('#firstSel, #secondSel').select2();
            }
        });

        yearBuiltMass ? $firstSel.select2('val', yearBuiltMass) : $firstSel.select2('val', '');
        yearRecobstructionMass ? $secondSel.select2('val', yearRecobstructionMass) : $secondSel.select2('val', '');
        wallMaterialMass ? $('#wallMaterial').select2('val', wallMaterialMass) : $('#wallMaterial').select2('val', '');
        $("#formWait").hide();
    },

    //--------------------сбор данных-----------------------------------------------------------------------------------

    collectData: function () {
        var object = {};
        object.id = general_info_about_cs.parent_row_id;
        object.objectId = {
            id: general_info_about_cs.obj_id
        };
        object.objectParentId = {
            id: general_info_about_cs.parent_obj_id
        };
        return object;
    },

    //--------------------сохранение данных-----------------------------------------------------------------------------

    saveAllDataFunction: function (data) {
        general_info_about_cs.$body.css('cursor', 'wait');
        $('#saveAllData').addClass('disabled');
        generalInfoAboutCSService.saveObjectParentsForObjects(data, {
                callback: function (id) {
                    general_info_about_cs.$body.css('cursor', 'default');
                    $('#saveAllData').removeClass('disabled');
                    if (id < 0) {
                        alert('Ошибка сохранения!');
                    }
                    $(document).trigger('add-alerts', [
                        {
                            'message': 'Сохранение прошло успешно!',
                            'priority': 'success'
                        }
                    ]);
                }
            }
        )
    }
};
