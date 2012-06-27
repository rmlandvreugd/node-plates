$(function() {
    ClientTemplateView = Backbone.View.extend({
        url: '/' + page + '/',
        id: '#' + page,

        initialize: function() {
            $(this.id).hide();
            this.render();
        },
        fix_links_for_client_side_template: function (data) {
            for(item in data.actions){
                if (data.actions[item].href === '/') data.actions[item].href = "/home";
                var href = "/views" + data.actions[item].href + ".html";
                data.actions[item].href = href;
            }
        },
        compile_template: function () {
            var current = this;
            var compiled = dust.compile($(this.id).html(), page);
            dust.loadSource(compiled);

            $.getJSON(this.url, null, function (data) {
                current.fix_links_for_client_side_template(data);

                dust.render(page, data, function(err, out) {
                    if(err != null) alert("bollocks");
                    document.title = data.title;
                    $(current.id).html(out);
                    $(current.id).show();
                    $.mobile.initializePage();
                });
            });
        },
        render: function() {
            this.compile_template();
            $(this.id).show();

            setTimeout(function() {
                    $('#options').append('<li>dust.js enabled with compile per request client side templating</li>');},1250
            );
        }
    });
});

$(document).ready(function(){
    var view = new ClientTemplateView(page);
    var socket = io.connect(uri,{ port: uri_port });

    socket.on('hello', function( ){
        setTimeout(function() {
                $('#options').append('<li>socket.io is enabled</li>');},1250
        );
    });

    socket.emit('ready', { true:true });
});
