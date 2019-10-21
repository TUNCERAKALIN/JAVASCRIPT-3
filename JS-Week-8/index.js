function forclick() {
    console.log("You clicked me")
    var searchTerm = document.getElementById("myinput").value;
    if (searchTerm == "") {
        alert("PLEASE FILL THE BLANKS");
    
    } else {
        fetch("https://api.github.com/repos/HackYourFuture/" + searchTerm)

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                document.write("Please make sure that You are typing correctly")
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            document.getElementById("myAnchor").href = data.contributors_url;
                var div = document.createElement("div");
                div.innerHTML +=data.name;
                
             if (data.name==undefined) {
                alert("SORRY WE COULDNT FIND WHAT YOU ARE LOOKING FOR. IT IS NOT IN OUR DATABASE. MAKE SURE YOU TYPED IN CORRECTLY")}
                else{
        
                mainContainer.appendChild(div);
                }
            }
 
        }
    }

