 $(document).ready(function() {

      $('#userinput').keypress(function(e) {

        if (e.keyCode == 13) {

          $('#searchbutt').click(); 

        }

       });

     

      $("#searchbutt").on('click', function() {

          var searchinput = document.getElementById("userinput").value;

          if (/\S/.test(searchinput) === false) {

              alert("Input is empty."); 

          }
          
             searchinput = encodeURIComponent(searchinput); 
             
          $.getJSON("https://en.wikipedia.org/w/api.php?callback=?&action=opensearch&search="+searchinput+"&format=json", function(data) {

            for (var counter = (data[1].length - 1); counter >= 0; counter--)  {

            $("#target-div").prepend("<a target = '_blank' class = 'a-target' href = "+data[3][counter]+"><div class = 'well'><h2>" + data[1][counter] + "</h2><p>" + data[2][counter] + "</p></div></a>")

             

                };     

            });

         }); 

       });