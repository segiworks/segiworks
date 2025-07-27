// Simplified JavaScript for CMSC UI Stock Summit 2025 website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');

      // Toggle icon
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
  // dark mode
  function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Simple form validation for registration
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      let isValid = true;
      const requiredFields = registrationForm.querySelectorAll('[required]');

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      // Handle form submission
      if (isValid) {
        // For demo purposes, just show success message
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
          successMessage.style.display = 'block';
          registrationForm.reset();

          // Hide the message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      }
    });
  }

  // Animation on scroll
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

  function checkIfInView() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }

  // Initial check and add scroll listener
  checkIfInView();
  window.addEventListener('scroll', checkIfInView);
});

// === Chatbot Widget Logic ===
let chatbotFirstOpen = true;
window.toggleChatbot = function() {
  const widget = document.getElementById('chatbot-widget');
  widget.classList.toggle('chatbot-open');
  widget.classList.toggle('chatbot-closed');
  if (widget.classList.contains('chatbot-open') && chatbotFirstOpen) {
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML += `<div class="bot"><b>CMSC Assistant:</b> Hai! 👋 Aku CMSC Assistant, siap bantu info seputar Creative Marketing School Club UI. Mau tanya apa nih?\nKetik 'keluar' untuk tutup chat ya!`;
    messages.scrollTop = messages.scrollHeight;
    chatbotFirstOpen = false;
  }
}

window.sendMessage = function() {
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  messages.innerHTML += `<div class="user"><b>Kamu:</b> ${userMsg}</div>`;
  input.value = '';

  let botReply = '';
  const msg = userMsg.toLowerCase();

if (msg === 'keluar') {
  botReply = 'Sip, sampai jumpa di SegiWorks! Jangan lupa follow IG kami di @segi.fest ya! 👋';
} else if (msg.includes('segiworks') && (msg.includes('apa') || msg.includes('itu'))) {
  botReply = 'SegiWorks adalah workshop kreatif dari SegiFest yang dirancang untuk membantu peserta menyalurkan energi positif dan emosi lewat seni lukis. Menggunakan metode Art Therapy yang menyenangkan dan menenangkan! 🎨✨';
} else if (msg.includes('segiworks') && (msg.includes('siapa') || msg.includes('dibuat') || msg.includes('penyelenggara'))) {
  botReply = 'SegiWorks adalah bagian dari rangkaian acara SegiFest yang menghadirkan pengalaman workshop kreatif untuk mendukung keseimbangan emosi dan ekspresi diri!';
} else if (msg.includes('kapan') || msg.includes('tanggal') || msg.includes('pelaksanaan')) {
  botReply = 'Workshop SegiWorks akan diadakan pada tanggal 13 September 2025. Tandai kalendermu ya! 📅';
} else if (msg.includes('jam berapa') || msg.includes('pukul berapa') || msg.includes('waktu mulai')) {
  botReply = 'Workshop SegiWorks akan dimulai pada tanggal 13 September 2025, info jam mulai akan diumumkan lebih lanjut ya!';
} else if (msg.includes('dimana') || msg.includes('lokasi') || msg.includes('tempat') || msg.includes('venue')) {
  botReply = 'Lokasi acara akan diinformasikan segera. Pastikan follow Instagram @segi.fest untuk update terbaru ya!';
} else if (msg.includes('tujuan') && msg.includes('acara')) {
  botReply = 'Tujuan SegiWorks adalah untuk membantu peserta menyalurkan ide dan emosi melalui seni melukis, serta membangkitkan kembali kesadaran akan pentingnya keseimbangan energi dan kreativitas. 🎯';
} else if (msg.includes('kegiatan') || msg.includes('isi') || msg.includes('rundown')) {
  botReply = 'Workshop ini menghadirkan sesi “Melukis di Media Canvas” di mana peserta bisa berkarya di atas bucket hat, totebag, dan kanvas. Dipandu oleh tim profesional dan ada pendekatan Art Therapy juga lho!';
} else if (msg.includes('berapa sesi') || msg.includes('ada berapa kegiatan')) {
  botReply = 'Acaranya terdiri dari 2 sesi besar: 1) Melukis di Media Canvas, dan 2) Art Therapy dengan pendekatan terapeutik yang personal dan emosional.';
} else if (msg.includes('melukis') && msg.includes('media')) {
  botReply = 'Sesi Melukis di Media Canvas akan menggunakan berbagai media seperti bucket hat, totebag, dan kanvas. Semua disediakan panitia!';
} else if (msg.includes('media') || msg.includes('alat') || msg.includes('apa saja yang digunakan')) {
  botReply = 'Media yang digunakan dalam workshop SegiWorks antara lain bucket hat, totebag, dan kanvas. Semua disediakan, kamu tinggal bawa semangat positifmu! 🖌️';
} else if (msg.includes('art therapy') || msg.includes('terapi seni') || msg.includes('teraphy')) {
  botReply = 'Art Therapy di SegiWorks bertujuan membantu peserta menyalurkan emosi dan energi lewat lukisan. Ada nuansa private dan didampingi host profesional.';
} else if (msg.includes('apa manfaat') && msg.includes('art therapy')) {
  botReply = 'Manfaat Art Therapy di SegiWorks antara lain: membantu mengelola stres, mengekspresikan perasaan yang sulit diucapkan, serta meningkatkan kreativitas dan keseimbangan diri.';
} else if (msg.includes('pemateri') || msg.includes('narasumber')) {
  botReply = 'Peserta akan dibimbing oleh pemateri profesional dari UMKM terkemuka di bidang seni lukis. 🎨';
} else if (msg.includes('host') || msg.includes('pembawa acara')) {
  botReply = 'Acara akan dipandu oleh host profesional di bidang terapi dan seni untuk memastikan pengalamanmu menyenangkan dan nyaman!';
} else if (msg.includes('siapa saja') && msg.includes('boleh ikut')) {
  botReply = 'SegiWorks terbuka untuk umum! Siapa pun bisa ikut, tidak harus dari kampus tertentu. Yuk ajak teman-teman juga!';
} else if (msg.includes('apakah cocok') && msg.includes('pemula')) {
  botReply = 'Cocok banget! Workshop ini dirancang untuk semua level, bahkan kalau kamu belum pernah melukis pun tetap bisa ikut dan menikmati prosesnya.';
} else if (msg.includes('cara') && msg.includes('daftar')) {
  botReply = 'Pendaftaran bisa dilakukan lewat link di bio Instagram @segi.fest. Langsung cek ya sebelum kehabisan slot!';
} else if (msg.includes('biaya') || msg.includes('bayar') || msg.includes('htm')) {
  botReply = 'Tenang, pendaftaran SegiWorks GRATIS alias tidak dipungut biaya! Tapi kuotanya terbatas, jadi buruan daftar ya! 🎉';
} else if (msg.includes('kuota') || msg.includes('peserta maksimal')) {
  botReply = 'Kuota peserta terbatas agar workshop tetap intimate dan fokus. Segera daftar kalau tertarik ya!';
} else if (msg.includes('dapat apa aja') || msg.includes('fasilitas') || msg.includes('bonus')) {
  botReply = 'Kamu akan mendapatkan akses ke workshop, bahan lukis lengkap (kanvas, cat, kuas), serta didampingi pemateri profesional. Dokumentasi juga akan disediakan!';
} else if (msg.includes('sertifikat') || msg.includes('e-sertifikat')) {
  botReply = 'Peserta SegiWorks akan mendapatkan pengalaman langsung dan bisa mendapatkan dokumentasi acara, namun tidak disebutkan adanya sertifikat.';
} else if (msg.includes('dokumentasi') || msg.includes('foto') || msg.includes('aftermovie')) {
  botReply = 'Pasti dong! Akan ada dokumentasi dan aftermovie kegiatan yang dibagikan di Instagram @segi.fest dan grup peserta.';
} else if (msg.includes('kenapa') || msg.includes('manfaat ikut')) {
  botReply = 'Dengan ikut SegiWorks, kamu bisa mengekspresikan diri lewat seni, dapat insight tentang keseimbangan mental, dan tentu saja pengalaman yang berkesan dan seru!';
} else if (msg.includes('grup') || msg.includes('whatsapp')) {
  botReply = 'Setelah mendaftar, kamu akan diundang ke grup WhatsApp untuk info teknis dan update kegiatan.';
} else if (msg.includes('cp') || msg.includes('kontak') || msg.includes('hubungi siapa')) {
  botReply = 'Kamu bisa menghubungi Najma di 087786439788 atau Razan di 089517272016. Fast response ya!';
} else if (msg.includes('instagram') || msg.includes('ig')) {
  botReply = 'Follow IG kami di @segi.fest untuk info terbaru dan keseruan lainnya!';
} else {
  botReply = 'Wah, aku belum punya info itu, coba dilihat di bagian about event. Untuk info lebih lanjut kamu bisa menghubungi kami di 087786439788 (Najma)/089517272016 (Razan) dan kalian bisa menghubungi kami melalui Instagram @segi.fest';
}

  setTimeout(() => {
    messages.innerHTML += `<div class=\"bot\"><b>CMSC Assistant:</b> ${botReply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);
}
function openChatbot() {
    document.getElementById('chatbot-body').style.display = 'flex';
    document.getElementById('close-btn').style.display = 'block';
}

function closeChatbot() {
    document.getElementById('chatbot-body').style.display = 'none';
    document.getElementById('close-btn').style.display = 'none';
}

function sendMessage() {
    console.log("Pesan dikirim");
}

