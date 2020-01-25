const body = document.querySelector('body');

let requestURL = 'https://swapi.co/api';
let request = new XMLHttpRequest();
    
    var reqType;
    function callApi(type) {
    reqType = type;
    request.open('GET', `${requestURL}/${type}`);
    request.responseType = 'json';
    request.send();
     
    }

    const btnPeople = document.getElementById("teste");

    const searchBtn = document.getElementById("searchBtn")

    searchBtn.onclick = function(){
      var value = document.getElementById('myInput').value
      callApi(`people/?search=${value}`);
        request.onload = function(){
            const char = request.response
            console.log(char)
        }
    }

    btnPeople.onclick = function (){
        callApi('people');
        request.onload = function(){
            const char = request.response
            prettyPrint(char)
            console.log(char)
            //document.getElementById("result").innerText = JSON.stringify(char);
        }
    }




    
    

    function prettyPrint(jsonObj) {
      const char = jsonObj
      console.log(char.results)

      for(let i = 0; i < char.results.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('p');
        // const myPara1 = document.createElement('p');
        // const myPara2 = document.createElement('p');
        // const photo = document.createElement('img')
        

        myH2.textContent = 'Nome: ' + char.results[i].name;
        // myPara1.textContent = 'Preço: '+ casas[i].price
        // myPara2.textContent = 'Tipo: '+ casas[i].property_type
        // photo.src = casas[i].photo        

         myArticle.appendChild(myH2);
        // myArticle.appendChild(myPara1);
        // myArticle.appendChild(myPara2);
        // myArticle.appendChild(photo)
        
        // body.appendChild(myArticle);

        document.getElementById("result").appendChild(myArticle);
      }
    }