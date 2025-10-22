const services = [
  { id:'pulsa', title:'Pulsa', desc:'Isi pulsa semua operator. Proses cepat.', price:'Mulai dari Rp5.000' },
  { id:'topup', title:'Topup Game', desc:'Topup Game: Mobile Legends, Free Fire, PUBG, dll.', price:'Harga sesuai nominal' },
  { id:'suntik', title:'Suntik Sosmed', desc:'Suntik like/followers/engagement (sesuai paket).', price:'Paket mulai Rp20.000' },
  { id:'edit', title:'Jasa Edit', desc:'Jasa edit video & foto profesional.', price:'Mulai Rp15.000' },
  { id:'apppro', title:'Aplikasi Pro', desc:'Akun & lisensi aplikasi berbayar (CapCut Pro, Canva Pro, dll).', price:'Hubungi untuk harga' }
];

const container = document.getElementById('services');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const orderWa = document.getElementById('order-wa');

function renderServices(){
  services.forEach(s=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="price">${s.price}</div>
      <div class="actions">
        <a class="btn" href="#" data-id="${s.id}">Detail</a>
        <a class="btn btn-primary" href="https://wa.me/6281357525602?text=${encodeURIComponent('Halo, saya mau pesan layanan '+s.title)}" target="_blank">Pesan</a>
      </div>
    `;
    container.appendChild(card);
  });

  // event listener untuk detail
  container.addEventListener('click', (e)=>{
    const btn = e.target.closest('.btn');
    if(!btn) return;
    const id = btn.dataset.id;
    if(!id) return;
    const s = services.find(x => x.id === id);
    if(s){
      modalTitle.textContent = s.title;
      modalDesc.textContent = `${s.desc}\n\nHarga: ${s.price}`;
      orderWa.href = `https://wa.me/6281357525602?text=${encodeURIComponent('Halo, saya mau pesan layanan '+s.title)}`;
      modal.classList.remove('hidden');
    }
  });
}

closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));
modal.addEventListener('click', (e)=>{
  if(e.target === modal) modal.classList.add('hidden');
});

renderServices();
