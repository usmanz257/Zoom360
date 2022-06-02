/* eslint-disable no-var,no-undef */

function show_tenant_mapping_fields(value) {
    if (value === 1 || value === '1') {
        django.jQuery('.form-tenant_single_mapping').show()
        django.jQuery('.form-tenant_mapping_column_name').hide()
        django.jQuery('.form-tenant_mapping_table').hide()
        django.jQuery('.form-tenant_missing_action').hide()
    } else if (value === 2 || value === '2') {
        django.jQuery('.form-tenant_single_mapping').hide()
        django.jQuery('.form-tenant_mapping_column_name').show()
        django.jQuery('.form-tenant_mapping_table').show()
        django.jQuery('.form-tenant_missing_action').show()
    } else {
        django.jQuery('.form-tenant_single_mapping').hide()
        django.jQuery('.form-tenant_mapping_column_name').hide()
        django.jQuery('.form-tenant_mapping_table').hide()
        django.jQuery('.form-tenant_missing_action').hide()
    }
}

function show_retation_number(value) {
    if (value === 1 || value === '1') {
        django.jQuery('.form-retention_number').hide()
    } else {
        django.jQuery('.form-retention_number').show()
    }
}

django.jQuery(document).ready(() => {
    /* Tenant mapping type */
    const checkedTenantMappingType = django.jQuery('input[name="tenant_mapping_type"]').val()
    show_tenant_mapping_fields(checkedTenantMappingType)
    django.jQuery('input[name="tenant_mapping_type"]').change(ev => 
        show_tenant_mapping_fields(ev.target.value)
    )

    /* Retention number  */
    const retentionType = django.jQuery('#id_retention_type :checked').val()
    show_retation_number(retentionType)
    django.jQuery('#id_retention_type').change(() => {
        show_retation_number(this.value)
    })
})
