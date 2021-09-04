function Init()
{
    document.getElementById("gen").disabled = true;
}

function Upload()
{
    var file = document.getElementById("file");
    if(file.files.length == 0)
    {
        alert(" No file Selected \n Please Select File to Continue!!! ");
    }
    else
    {
        path = file;
        alert("File Uploaded Succesfully!!");
        document.getElementById("gen").disabled = false;
    }
}

function Show_Rep()
{
    window.location.href = "show_rep.html";
}

