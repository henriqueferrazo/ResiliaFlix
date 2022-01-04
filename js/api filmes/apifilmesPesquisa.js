let imagens = document.querySelectorAll('#search').value;
let modal = document.querySelector('#modal')
    
    Array.from(imagens).forEach((entrar) => entrar.addEventListener('click', (e) => {
        e.preventDefault()
        let idFilme = e.target.id
        
        $.ajax({
            type: "GET",
            url: `https://www.omdbapi.com/?t=${idFilme}&apikey=4b6071d7`,  
            success: function (response) {
                let infoFilme = {
                    title: response.Title, 
                    year: response.Year, 
                    actors: response.Actors, 
                    country: response.Country, 
                    genre: response.Genre, 
                    poster: response.Poster, 
                    plot: response.Plot 
                }

               localStorage.setItem("infoFilme", JSON.stringify(infoFilme));
            },
            error: function (erro) {
               console.log(erro)
            }
         })
         setTimeout(() => {
    
            let infoFilme = JSON.parse(localStorage.getItem("infoFilme"));
            $('#informacaoFilme').html(`
            <img src="${infoFilme.poster}"><n>
            <h1>${infoFilme.title}</h1>
            <p> ${infoFilme.plot}</p>
            <p> | Ano: ${infoFilme.year}</p>
            <p> | Gênero: ${infoFilme.genre}</p>
            <p> | Produzido: ${infoFilme.country}</p>
            <p> | Atores: ${infoFilme.actors}</p>
            `)
            modal.style.display = 'flex'
            console.log(infoFilme);
         }, [1000]);
        
         
      }))
      
let fecharModal = document.querySelector('#fecharModal')
fecharModal.addEventListener('click', () => modal.style.display = 'none')

let capturando = '';

