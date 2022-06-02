(function ($) {
  /**
   * Content tabs
   */
  $.init_form_tabs = function () {
      var $tabs = $(this);
      var tab_prefix = $tabs.data('tab-prefix');
      if (!tab_prefix)
          return;
      var $tab_links = $tabs.find('a');

      function tab_contents($link) {
          return $('.' + tab_prefix + '-' + $link.attr('href').replace('#', ''));
      }

      function process_tab_errors($tab_links) {
          var found_error = false;
          $tab_links.each(function () {
              var $link = $(this);
              if (tab_contents($link).find('.errorlist').length !== 0) {
                  $link.addClass('error');
                  if (!found_error) {
                      // "redirect" to first tab with error
                      window.location.hash = '#' + $link[0].href.split("#")[1];
                      $link.trigger('click');
                  }
                  found_error = true;
              }
          });
          return found_error;
      }

      function activate_tabs() {
          // Init tab by error, by url hash or init first tab
          if (!process_tab_errors($tab_links)) {
              $tab_links.first().trigger('click');
              if(window.location.hash) {
                  $($tabs).find('a[href="' + window.location.hash + '"]').click();
              }
          }
      }

      $tab_links.click(function () {
          var $link = $(this);
          $link.parent().parent().find('.active').removeClass('active');
          $link.parent().addClass('active');
          $('.' + tab_prefix).removeClass('show').addClass('hide');
          tab_contents($link).removeClass('hide').addClass('show');
      });
      activate_tabs();
  };
}());
