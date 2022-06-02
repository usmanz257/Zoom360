/* eslint-disable */
;(function($) {
    const ajax_start_event = 'heavy-view-ajax-request-start'
    const ajax_finish_event = 'heavy-view-ajax-request-finish'

    /**
     * Support function for HeavyRelatedSelect2Widget
     */
    const is_self_dependency = function(name, related) {
        /* determine if field is a related to itself */
        return (
            related
                .split(',')
                .map(function(v) {
                    return v.slice(4)
                })
                .indexOf(name) > -1
        )
    }

    /**
     * initializes the "disabled" property of the save buttons depending on the error state
     * of all heavy fields
     */
    const updateSaveButtonStatus = function() {
        let enableButtons = true
        for (const heavyFieldInProgress of Object.values(window.ajax_requests_in_progress)) {
            if (heavyFieldInProgress) {
                // at least one is in progress
                enableButtons = false
                break
            }
        }
        toggle_save_buttons(enableButtons)
    }

    const toggle_save_buttons = function(isEnabled) {
        $('input[name="_save"]').prop('disabled', !isEnabled)
        $('input[name="_saveasnew"]').prop('disabled', !isEnabled)
        $('input[name="_continue"]').prop('disabled', !isEnabled)
    }

    const register_ajax_start = function(domId) {
        document.dispatchEvent(new CustomEvent(ajax_start_event, { detail: domId }))
    }

    const register_ajax_stop = function(domId) {
        document.dispatchEvent(new CustomEvent(ajax_finish_event, { detail: domId }))
    }

    /**
     * in case of changeform_view this function maps the related fields to the formset fields
     */
    const map_related_fields = function(heavyFieldId, related) {
        if (heavyFieldId.startsWith('id_form-') && heavyFieldId.length > 10) {
            const prefix = '#' + heavyFieldId.slice(0, 10)
            let new_related = ''
            related.split(',').forEach(function(selector) {
                if (new_related.length > 0) {
                    new_related += ','
                }
                new_related += prefix
                new_related += selector.slice(4)
            })
            return new_related
        }
        return related
    }

    const setup_heavy_related_select2 = function(heavyField) {
        // NOTE: skip empty template forms rendered for inline admin
        if (!heavyField.length || heavyField.parents('.empty-form').length) {
            return
        }

        const name = heavyField.attr('name')
        const heavyFieldId = heavyField.prop('id')
        const related = map_related_fields(heavyFieldId, heavyField.data('heavy-related'))
        const self_dependent = is_self_dependency(name, related)
        const multiple = heavyField.attr('multiple')

        heavyField
            .djangoSelect2({
                ajax: {
                    data: function(params) {
                        /* For each related selector, pass input argument name/value */
                        $(related).each(function() {
                            let related_input = $(this)
                            let paramKey = related_input.attr('name')
                            if (paramKey.startsWith('form-') && paramKey.length > 7) {
                                paramKey = paramKey.slice(7)
                            }
                            if (related_input.attr('type') === 'checkbox') {
                                params[paramKey] = related_input.is(':checked')
                            } else {
                                params[paramKey] = related_input.val()
                            }
                        })
                        if (!params) {
                            throw false
                        }
                        return params
                    },
                    transport: function(params, success, failure) {
                        const $request = $.ajax(params)
                        register_ajax_start(heavyFieldId)
                        $request.then(function(data) {
                            register_ajax_stop(heavyFieldId)
                            success(data)
                        })
                        $request.fail(failure)
                        return $request
                    },
                },
                minimumInputLength: 2,
                closeOnSelect: !multiple,
                tokenSeparators: [',', ', '],
            })
            .on('select2:select', function() {
                /* workaround to force re-rendering dropdown box if field options depend on each other */
                if (self_dependent === true) {
                    $(this).select2('close')
                    $(this).select2('open')
                }
            })

        /* Make select2 drag & drop capable */
        if (multiple === true) {
            const ul = heavyField.next('.select2-container').first('ul')
            ul.sortable({
                items: 'li:not(.select2-search__field)',
                start: function() {
                    ul.find('.select2-search').hide()
                },
                stop: function() {
                    jQuery(
                        ul
                            .find('.select2-selection__choice')
                            .get()
                            .reverse(),
                    ).each(function() {
                        const id = jQuery(this).data('data').id
                        const option = heavyField.find(`option[value="${id}"]`)[0]
                        heavyField.prepend(option)
                    })
                    ul.append(ul.find('.select2-search').show())
                },
            })
        }
    }

    // Called when inline admin adds a new row
    django.jQuery(document).on('formset:added', function(event, $row) {
        $row.find("[data-heavy-widget='true']").each(function() {
            let element = $(this)
            // NOTE: django-select2 already triggered setup for embedded widget, since this
            // is only a DOM clone we need to remove the old container first
            element.next('.select2-container').remove()
            setup_heavy_related_select2(element)
        })
    })

    $(document)
        .on(ajax_start_event, function(event) {
            window.ajax_requests_in_progress[event.detail] = true
            toggle_save_buttons(false)
        })
        .on(ajax_finish_event, function(event) {
            window.ajax_requests_in_progress[event.detail] = false
            updateSaveButtonStatus()
        })
        .ready(function() {
            setTimeout(function() {
                // wait until auto-hide script completes
                window.ajax_requests_in_progress = window.ajax_requests_in_progress || {}
                let elementsWithError = $('.heavy-load-error')
                // filter out hidden elements
                elementsWithError = elementsWithError.filter(index => {
                    return $(elementsWithError[index]).parents('.autohide_hide').length === 0
                })
                for (const errorElement of elementsWithError) {
                    const selector = errorElement.parentElement.parentElement.getElementsByTagName('select')[0].id
                    window.ajax_requests_in_progress[selector] = true
                }
                updateSaveButtonStatus()
            }, 5)

            $("[data-heavy-widget='true']").each(function() {
                setup_heavy_related_select2($(this))
            })
        })
})($)
