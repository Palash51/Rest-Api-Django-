const app = document.getElementById('root');

const logo = document.createElement('img');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// var request = new XMLHttpRequest();
// request.open('GET', 'https://1a274ad0.ngrok.io/contries/v1/', true);
// request.onload = function () {


$.ajax({
        method: "GET",
        url: 'https://5e00e51a.ngrok.io/contries/v1/',
        // headers: {
        //     "Authorization": 'Token ' + localStorage.getItem('Token')
        // },
        contentType: 'application/json',
        // async: false,
        success: function (data) {
            cdata = data.data;
            console.log(cdata)
            var countryName=document.getElementById('country')
            for(i=0;i<cdata.length;i++){

              console.log(cdata[i].name);
              $('#country').append("<li>"+ cdata[i].name +"</li>");
            }
            // remaining_percentage = data.data.remaining_percentage;
            // initializeDataTable(cdata);

        },
        error: function (err) {
            console.log(err)
        }
    });




  // Begin accessing JSON data here
  // var data = JSON.parse(this.response);
  // console.log(data)
  // var data = [{
  //   "title": "Castle in the Sky"},
  //   {"title": "Castle in the Sky"},
  //   {"title": "Castle in the Sky"},
  //   {"title": "Castle in the Sky"},
  //   {"title": "Castle in the Sky"},
  //   {"title": "Castle in the Sky"
  //   }]
  // console.log(data.data)
  // for (var i = data.length - 1; i >= 0; i--) {
  //   data[0]
  // }
  // var new_data = JSON.parse(data)
  // console.log(new_dataw)

//   if (request.status >= 200 && request.status < 400) {
//     data.data.forEach(movie => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = movie.name;

//       // const p = document.createElement('p');
//       // movie.description = movie.description.substring(0, 300);
//       // p.textContent = `${movie.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       // card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
//   // console.log(data)


// request.send();