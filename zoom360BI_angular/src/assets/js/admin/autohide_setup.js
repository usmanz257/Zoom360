/* global django load_autohide */
/* eslint-disable no-var */

django.jQuery(document).ready(function() {
    var valueFormMapReportType = {
        '-1': {
            'show': [],
            'hide': []
        },
        '1': {
            'show': [],
            'hide': ['.filters', '.fields'],
        },
        '2': {
            'show': ['.filters', '.fields'],
            'hide': []
        },
        '3': {
            'show': ['.filters', '.fields'],
            'hide': []
        },
    };

    load_autohide('#id_report_type', valueFormMapReportType);

    var valueFormMapDataType = {
        '-1': {
            'show': [],
            'hide': ['.field-content_owner_id']
        },
        '1': {
            'show': ['.field-report_type'],
            'hide': ['.field-content_owner_id']
        },
        '2': {
            'show': ['.field-report_type', '.field-content_owner_id'],
            'hide': []
        },
        '3': {
            'show': [],
            'hide': ['.field-report_type', '.field-content_owner_id']
        },
    };

    load_autohide('#id_data_type', valueFormMapDataType);

    function buildFormMapReport() {
        const reportIds = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        let mapReport = {};
        for (const reportId of reportIds) {
            mapReport[reportId] = reportId === '10' ? {
                'show': ['.field-video_ids'],
                'hide': []
            } : {
                'show': [],
                'hide': ['.field-video_ids']
            };
        }
        return mapReport
    }

    load_autohide('#id_report', buildFormMapReport());
});
