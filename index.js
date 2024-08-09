document.addEventListener('DOMContentLoaded', ()=>{
    const cards =document.getElementById('card')
    const search =document.getElementById('search')
    const fetchBots = () =>{
        fetch('http://localhost:3000/bots')
        .then(res=>res.json())
        .then(data=>{
            bots = data
            displayBots(bots)
        })
    }
    const displayBots = (botsToDisplay) => {
        cards.innerHTML =botsToDisplay.map(bot=>
            `<div id='card-bot' >               <img src=${bot.avatar_url}/>
            <h2>name: ${bot.name}</h2>
            <p>class: ${bot.bot_class}</p>
            <p>health: ${bot.health}</p>
            </div>`
        ).join('')
    }
    const handleSearch = (event)=>{
        const query = event.target.value.toLowerCase()
        const filteredBots= bots.filter(bot=>bot.name.toLowerCase().includes(query))
        displayBots(filteredBots)
    }
    search.addEventListener('input',handleSearch)
    fetchBots()
})

