export default {
    data() {
        return {
            formData: {
                objectType          : {
                    label      : 'Вид объекта',
                    placeholder: 'Выберите вид объекта...',
                    value      : null
                },
                objectNumber        : {
                    label      : 'Номер объекта',
                    placeholder: 'Введите номер объекта...',
                    value      : '',
                    objectType : {
                        1: {
                            size      : {min: 18, max: 18},
                            validation: {
                                regexp: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
                            }
                        },
                        2: {
                            size      : {min: 4, max: 33},
                            validation: {
                                regexp: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
                            }
                        },
                        3: {
                            size      : {min: 4, max: 34},
                            validation: {
                                regexp: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
                            }
                        },
                    },
                },
                objectNumberDetailed: {
                    slot1: {
                        value     : '',
                        objectType: {
                            1: {
                                size      : {},
                                validation: {
                                    regexp: '^[1-9][0-9]{9}$'
                                }
                            },
                            2: {},
                            3: {}
                        },
                    },
                    slot2: {
                        value     : '',
                        validation: {
                            regexp: '^[0-9]{2}$'
                        }
                    },
                    slot3: {
                        value     : '',
                        validation: {
                            regexp: '^[0-9]{6}$'
                        }
                    }
                },
                extended            : {state: false, title: 'Показать дополнительные критерии поиска'}
            }
        }
    }
}