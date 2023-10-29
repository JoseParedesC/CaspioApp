$('.nav-item').click(function(){
    var iframe_dashboard = $('#dashboard');
    iframe_dashboard.src = iframe_dashboard.src;

    var iframe_search = $('#search');
    iframe_search.src = iframe_search.src;

    var iframe_new = $('#new');
    iframe_new.src = iframe_new.src;
});

