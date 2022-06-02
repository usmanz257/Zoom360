/* global django */
/* eslint-disable no-unused-vars */

function autohide(value, elements, all_xshows) {
    const show = []
    const hide = []

    const definition = elements[value || '-1']

    if (definition) {
        if (definition.show) {
            Array.prototype.push.apply(show, definition.show)
        }

        if (definition.xshow) {
            Array.prototype.push.apply(show, definition.xshow)
        }

        if (definition.hide) {
            Array.prototype.push.apply(hide, definition.hide)
        }
    }

    if (all_xshows) {
        all_xshows.forEach(field => {
            if (show.indexOf(field) === -1) {
                hide.push(field)
            }
        })
    }

    show.forEach(field => {
        django.jQuery(field).removeClass('autohide_hide')
    })

    hide.forEach(field => {
        django.jQuery(field).addClass('autohide_hide')
    })
}

function get_value(field) {
    const fieldType = field.attr('type') || field.data('type')
    if (fieldType === 'checkbox') {
        return field[0].checked
    }
    if (fieldType === 'radio') {
        return field.filter(':checked').val()
    }
    return field.val()
}

function get_all_xshows(value_map) {
    const xshows = []

    Object.keys(value_map).forEach(key => {
        const value = value_map[key]
        if (value.xshow) {
            Array.prototype.push.apply(xshows, value.xshow)
        }
    })

    return xshows
}

function load_autohide(ident, value_map) {
    const all_xshows = get_all_xshows(value_map)
    const type_selector = django.jQuery(ident)

    // init hide
    autohide(get_value(type_selector), value_map, all_xshows)

    $(document).on('change', ident, event => {
        autohide(get_value($(event.target)), value_map, all_xshows)
    })
}
