const navToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const filters=document.querySelectorAll('.filter');
const products=document.querySelectorAll('.product');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;products.forEach(p=>p.style.display=(f==='All'||p.dataset.category===f)?'block':'none')}));
// Change this number to your real WhatsApp number in international format, without + or spaces.
const whatsappNumber='923000000000';
document.querySelectorAll('.order').forEach(btn=>btn.addEventListener('click',()=>{const product=btn.dataset.product;const msg=encodeURIComponent(`Hello Elvaria Mart Collection, I am interested in: ${product}. Please share availability and details.`);window.open(`https://wa.me/${whatsappNumber}?text=${msg}`,'_blank','noopener')}));
document.getElementById('year').textContent=new Date().getFullYear();
