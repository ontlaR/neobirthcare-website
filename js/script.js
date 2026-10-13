// ================= PART 3 - FUNCTIONALITY =================

// 2.1 Interactive Elements - Accordion FAQ
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      header.classList.toggle('active');
    });
  });

  // 2.1 Interactive Map - Leaflet.js - Mbombela coords
  if (document.getElementById('map')) {
    const map = L.map('map').setView([-25.4753, 30.9694], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap France'
}).addTo(map);
    L.marker([-25.4753, 30.9694]).addTo(map)
      .bindPopup('Neo Birth Care Center<br>Mbombela, Mpumalanga')
      .openPopup();
  }

  // 2.1 Lightbox Gallery
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (galleryImages) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.style.transform = 'scale(0.8)';
        setTimeout(() => lightboxImg.style.transform = 'scale(1)', 10);
      });
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', () => lightbox.style.display = 'none');
  }

  // 2.2 Dynamic Content - Load services from JS array
  const services = [
    { id: 1, title: "Antenatal Care", desc: "Complete care for expecting mothers - checkups, ultrasounds, health education", category: "maternal" },
    { id: 2, title: "Newborn Screening", desc: "Early detection for newborn health - weight, jaundice, immunization", category: "newborn" },
    { id: 3, title: "Postnatal Support", desc: "Support after birth for mother and baby - wound care, family planning", category: "maternal" },
    { id: 4, title: "Breastfeeding Clinic", desc: "Guidance and support for breastfeeding and infant nutrition", category: "newborn" }
  ];

  const servicesContainer = document.getElementById('dynamic-services');
  if (servicesContainer) {
    const renderServices = (list) => {
      servicesContainer.innerHTML = '';
      list.forEach(s => {
        servicesContainer.innerHTML += `
          <div class="card" data-category="${s.category}" style="background:white; padding:15px; border-radius:10px; margin:10px;">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        `;
      });
    };
    renderServices(services);

    // 2.2 Search Functionality - Filter and Sort
    const searchInput = document.getElementById('searchServices');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = services.filter(s => s.title.toLowerCase().includes(term) || s.desc.toLowerCase().includes(term));
        renderServices(filtered);
      });
    }
  }
});

// 4. Form Validation - JavaScript Validation + AJAX Simulation
function validateEnquiryForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorEl = document.getElementById('formError');

  errorEl.innerHTML = '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (name.length < 2) {
    errorEl.innerHTML = 'Name must be at least 2 characters';
    return false;
  }
  if (!emailRegex.test(email)) {
    errorEl.innerHTML = 'Please enter a valid email address';
    return false;
  }
  if (phone && !phoneRegex.test(phone)) {
    errorEl.innerHTML = 'Phone must be 10 digits (e.g., 0821234567)';
    return false;
  }
  if (message.length < 10) {
    errorEl.innerHTML = 'Message must be at least 10 characters';
    return false;
  }

  errorEl.style.color = 'green';
  errorEl.innerHTML = 'Sending enquiry...';
  
  setTimeout(() => {
    const emailBody = `New Enquiry from ${name} (${email}, ${phone}): ${message}`;
    console.log('Email to be sent:', emailBody);
    errorEl.innerHTML = `Thank you ${name}! Your enquiry has been received. We will email you at ${email}.`;
    document.getElementById('enquiryForm').reset();
  }, 1000);

  return false;
}

function validateContactForm(event) {
  event.preventDefault();
  const name = document.getElementById('c-name').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const errorEl = document.getElementById('contactError');

  if (name === '' || email === '') {
    errorEl.innerHTML = 'Please fill in all required fields';
    return false;
  }
  errorEl.style.color = 'green';
  errorEl.innerHTML = 'Message sent successfully! Thank you for contacting Neo Birth Care Center.';
  setTimeout(() => document.getElementById('contactForm').reset(), 500);
  return false;
}