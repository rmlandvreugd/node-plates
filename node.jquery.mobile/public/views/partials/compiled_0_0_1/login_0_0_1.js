(function(){dust.register("login",body_0);function body_0(chk,ctx){return chk.write("<div data-role=\"page\" id=\"index\" login=\"ui-page ui-body-c ui-page-active\"><div data-role=\"header\" class=\"ui-bar-a ui-header\" role=\"banner\"><a href=\"/\"  data-ajax=\"false\" class=\"ui-btn-left ui-btn ui-btn-icon-left ui-btn-corner-all ui-shadow ui-btn-up-a\" data-icon=\"arrow-l\" data-theme=\"a\"><span class=\"ui-btn-inner ui-btn-corner-all\"><span class=\"ui-btn-text\">Back</span><span class=\"ui-icon ui-icon-arrow-l ui-icon-shadow\"></span></span></a><h1 class=\"ui-title\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">").reference(ctx.get("title"),ctx,"h").write(" - login</h1></div><div data-role=\"content\" class=\"ui-content\" role=\"main\"><h2>").reference(ctx.get("title"),ctx,"h").write(" - login</h2><p>complete the below to login/register</p><form method=\"").reference(ctx.getPath(false,["login","method"]),ctx,"h").write("\" action=\"").reference(ctx.getPath(false,["login","url"]),ctx,"h").write("\" data-ajax=\"false\"  enctype=\"application/x-www-form-urlencoded\"><div data-role=\"fieldcontain\"><label for=\"name\">").reference(ctx.getPath(false,["login","username","label"]),ctx,"h").write(":</label><input type=\"text\" name=\"").reference(ctx.getPath(false,["login","username","name"]),ctx,"h").write("\" id=\"").reference(ctx.getPath(false,["login","username","name"]),ctx,"h").write("\" size=\"25\" class=\"username textbox\" placeholder=\"").reference(ctx.getPath(false,["login","username","placeholder"]),ctx,"h").write("\"  required/></div><div data-role=\"fieldcontain\"><label for=\"name\">").reference(ctx.getPath(false,["login","password","label"]),ctx,"h").write(":</label><input type=\"password\" name=\"").reference(ctx.getPath(false,["login","password","name"]),ctx,"h").write("\" id=\"").reference(ctx.getPath(false,["login","password","name"]),ctx,"h").write("\" size=\"25\" class=\"password textbox\" placeholder=\"").reference(ctx.getPath(false,["login","password","placeholder"]),ctx,"h").write("\" required/></div><input type=\"submit\" data-role=\"button\" data-icon=\"star\" value=\"").reference(ctx.getPath(false,["login","button","name"]),ctx,"h").write("\"></form></div><div data-role=\"footer\" class=\"ui-bar-a ui-footer\" role=\"contentinfo\"><h4 class=\"ui-title\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">@2012 ").reference(ctx.get("title"),ctx,"h").write("</h4></div></div>");}return body_0;})();