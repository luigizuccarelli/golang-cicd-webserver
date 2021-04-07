 function getResults(name) {

      xhttp = new XMLHttpRequest();
      // connect to golang-cicd-webpipeline
      xhttp.open("GET", "http://192.168.1.3:9002/api/v1/cicd/" + name, true);
      xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhttp.send();
       
      xhttp.onreadystatechange = function() {
        var el = document.getElementById('divContent');
        if (this.readyState == 4) {
          el.innerHTML=this.responseText;
        }
        $(function () {
          $('[data-toggle="popover"]').popover()
        })
        return;
      }
    }
