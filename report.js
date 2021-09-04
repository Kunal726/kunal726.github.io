function Report()
{
    var url = document.location.href;
    var params = url.split('?')[1].split('&');
    var data = {};
    var tmp;
    for(var i = 0, l = params.length; i < l ; i++)
    {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }

    //alert(data.path);
    var path = data.path.replace("%3A",":");
    path = path.replace("%5C","/");
    path = path.replace("%5C","/");
    path = path.replace("%20"," ");
    console.log(path);
    document.getElementById("emb").src = path;
}