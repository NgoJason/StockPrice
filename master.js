
	
   function addNumberOfShares(){
            // Number of inputs to create
            var number = document.getElementById("member").value;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            
            // Clear previous contents of the container
            
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            // Append a node with a random text
                container.appendChild(document.createTextNode("Number of Shares "));
            for (i=0;i<number;i++){
                // Append a line break 
                container.appendChild(document.createElement("br"));
                
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.name = "member" + i;
                input.setAttribute("id", "shares"+i);
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));
        
            }
        }
        
        function addCostFields(){
            // Number of inputs to create
            var number = document.getElementById("member").value;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container2");
            
            // Clear previous contents of the container
            var total = 0;
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            // Append a node with a random text
                container.appendChild(document.createTextNode("Cost of shares "));
            for (i=0;i<number;i++){
                // Append a line break 
                container.appendChild(document.createElement("br"));
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.name = "member" + i;
                input.setAttribute("id", "cost"+i);
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));
        
            }
        }

    function addTotal(){
        //set display paragraph HTML to variable
        var pDisplay = document.getElementById('pDisplay');
        var pDisplay2 = document.getElementById('pDisplay2');
        var totalShares  = 0;
        var totalSum = 0;
        var number = document.getElementById("member").value;
        for(var i = 0; i < number; i++){
            //get number of shares from HTML
            var shares = document.getElementById('shares' + i);
            //get number of cost per share from HTML
            var cost = document.getElementById('cost' + i);
            //add shares to total shares variable
            totalShares = +totalShares + +shares.value;
            //add sum to total sum
            totalSum = totalSum + (+shares.value * +cost.value);
        }
        //pDisplay.innerHTML= "Your average cost per share is $" + parseFloat(totalSum/totalShares).toFixed(2); //Math.round(totalSum/totalShares * 100) / 100;
        pDisplay.innerHTML =  totalShares;
        pDisplay2.innerHTML = "$"+ parseFloat(totalSum/totalShares).toFixed(2);
        
    }
       


   function displayNav () {
     document.getElementById('nav').style.display = "block";
   }
   
   function hideNav() {
     var pDisplay = document.getElementById('pDisplay');
     var pDisplay2 = document.getElementById('pDisplay2');
     pDisplay.innerHTML = "";
     pDisplay2.innerHTML = "";
     document.getElementById('nav').style.display = "none";
   }