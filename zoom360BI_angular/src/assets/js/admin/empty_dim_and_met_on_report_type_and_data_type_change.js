/* eslint-disable */

django.jQuery(document).ready(function() {
    $('#id_data_type, #id_report_type, #id_report').change(function() {
        $('#id_dimensions').empty()
        $('#id_metrics').empty()
    })

    $('#id_data_type, #id_report_type').change(function() {
        $('#id_report').empty()
    })
})
