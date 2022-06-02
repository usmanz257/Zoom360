/* eslint-disable */

function _compareFieldValues(trigger, field_value) {
    if (trigger.constructor === Array && field_value.constructor === Array) {
        if (
            trigger.filter(function(e) {
                return field_value.indexOf(e) > -1
            }).length > 0 ||
            trigger.includes('*')
        ) {
            return true
        }
    } else if (trigger.constructor === Array) {
        for (let i = 0; i < trigger.length; i++) {
            if (_compareFieldValues(trigger[i], field_value)) {
                return true
            }
        }
    } else {
        if (field_value == trigger || trigger == '*') {
            return true
        }
    }
    return false
}

function checkAlertTriggers(jq_node, alerts) {
    let triggered_alerts = []
    for (let i = 0; i < alerts.length; i++) {
        let trigger = alerts[i].trigger
        let field_value
        if (jq_node.is('input') && jq_node.prop('type') === 'checkbox') {
            field_value = _getCheckboxValue(jq_node)
        } else if (jq_node.is('input')) {
            field_value = _getInputValue(jq_node)
        } else if (jq_node.is('select') && jq_node.prop('multiple') == false) {
            field_value = _getSingleSelectValue(jq_node)
        } else if (jq_node.is('select') && jq_node.prop('type') === 'select-multiple') {
            field_value = _getMultiSelectValue(jq_node)
        }
        if (field_value !== undefined && _compareFieldValues(trigger, field_value)) {
            triggered_alerts.push(alerts[i])
        }
    }
    return triggered_alerts
}

function _getCheckboxValue(jq_node) {
    return jq_node.prop('checked')
}

function _getInputValue(jq_node) {
    return jq_node.val()
}

function _getSingleSelectValue(jq_node) {
    return jq_node.val()
}

function _getMultiSelectValue(jq_node) {
    return jq_node.val()
}

function fieldAlertId(field) {
    return 'field-alert-' + field.id
}

function showFieldAlert(field, alert_descriptor) {
    let new_alert = document.createElement('div')
    const alert_type = 'alert-' + alert_descriptor['type']
    new_alert.innerHTML = alert_descriptor['message']
    new_alert.id = fieldAlertId(field)
    new_alert.classList.add('alert', alert_type, 'form_alert')
    $(field)
        .parents('.form-row')
        .append(new_alert)
}

function hideFieldAlerts(field) {
    $('#' + fieldAlertId(field)).remove()
}

function alertChangeHandler(node) {
    /* Parsing to correct potential unicode-string (python 2.7) and single-quote issues */
    let alert_data = $(node)
        .attr('field-alerts')
        .replace(/u'(?=[^:]+')/g, "'")
        .replace(/\'/g, '"')
    let formatted_alerts = JSON.parse(alert_data)

    hideFieldAlerts(node)
    const triggered_alerts = checkAlertTriggers($('#' + node.id), formatted_alerts)
    for (let i = 0; i < triggered_alerts.length; i++) {
        showFieldAlert(node, triggered_alerts[i])
    }
}

$(document).ready(function() {
    $('[field-alerts]').each(function() {
        alertChangeHandler(this)
    })
    $('[field-alerts]').change(function() {
        alertChangeHandler(this)
    })
})
