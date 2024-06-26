function getKoalas() {
  console.log('in getKoalas');
  // axios call to server to get koalas

  axios({
    method: 'GET',
    url: '/koalas',
  })
    .then((response) => {
      console.log("GET /koalas response.data", response.data);
      renderKoalas(response.data);
    })
    .catch((error) => {
      console.log('Error', error);
    });
} // end getKoalas

function renderKoalas(koalasList) {
  let koalaTableBody = document.getElementById('koalaTableBody');
  koalaTableBody.innerHTML = '';
  // Loop over each song and append data to the DOM
  // for (let koala of koalasList) {
  //   koalaTableBody.innerHTML += `
  //     <tr>
  //       <td>${koala.name}</td>
  //       <td>${koala.age}</td>
  //       <td>${koala.favoriteColor}</td>
  //       <td>${koala.readyTransfer}</td>
  //       <td>${koala.notes}</td>
  //       <td>
  //         <button onclick="deleteKoala(${koala.id})">Delete</button>
  //       </td>
  //     </tr>
  //   `;
  // }
}

function saveKoala() {
  console.log('in saveKoala');
  // axios call to server to get koalas
}

getKoalas();
