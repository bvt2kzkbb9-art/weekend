
const data={
users:[{name:'DJ Nova',artistXP:1200},{name:'BassRider',artistXP:950}],
sets:[{title:'Techno Night'},{title:'Festival Vibes'}],
challenges:[{title:'Techno Challenge',xp:200}],
achievements:[{title:'Pierwszy Set'}],
battleArena:{setA:'Neon Pulse',setB:'Dark Groove',votesA:57,votesB:43}
};
document.getElementById('app')?.insertAdjacentHTML('beforeend',
`<div class="grid"><div class="card3d">Użytkownicy: ${data.users.length}</div><div class="card3d">Sety: ${data.sets.length}</div></div>`);
window.addEventListener('scroll',()=>{document.body.style.backgroundPositionY=(window.scrollY*0.15)+'px';});
