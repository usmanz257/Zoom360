 /* Set the width of the side navigation to 250px */
   function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("sideNavContent").style.width= "250px";
    }
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
    document.getElementById("sideNavContent").style.width= "0px";
    document.getElementById("mySidenav").style.width = "0";
    }
    
        $('#mainMenu').on('click', '.nav-item', function() {
        $(this).addClass('active1').siblings().removeClass('active1');
      });
    
    $(".dropdown-toggle").dropdown();
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    });