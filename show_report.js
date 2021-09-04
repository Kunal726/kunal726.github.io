let path = "";
function Show_Rep()
{
    var url = "show_rep.html?path=" + encodeURIComponent(path);
    window.location.href = url;
}

function Init()
{
    document.getElementById("gen").disabled = true;
}

function Upload()
{
    var file = document.getElementById("file_upload");
    if(file.files.length == 0)
    {
        alert(" No file Selected \n Please Select File to Continue!!! ");
    }
    else
    {
        path = file.value;
        alert("File Uploaded Succesfully!!");
        document.getElementById("gen").disabled = false;
    }
}

