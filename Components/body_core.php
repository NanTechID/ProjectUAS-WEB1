<body>
    <audio id="myAudio" autoplay loop>
      <source src="Assets/music/musik.mp3" type="audio/mpeg" />
    </audio>
    <button id="playButton" class="moon-button"></button>
    <section id="sectionBesar">
      <div class="pembungkus">
        <p>THE WEDDING OF</p>
        <h1>Isnan & Amelia</h1>
        <p>13 . 12 . 2045</p>
      </div>
    </section>
    <section id="sectionKecil">
      <div class="cover" id="cover">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80"
          alt="Foto pasangan"
          class="pengantin"
        />
        <p class="gowunbatang-bold">The Wedding Of</p>
        <h1>Isnan & Amelia</h1>
        <p class="gowunbatang-bold">13 . 12 . 2045</p>
      </div>
      <div class="ayat">
        <p class="gowunbatang-bold judul appear">Surah Ar-Rum Ayat 21</p>
        <div class="arab appear">
          <p>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
        </div>
        <div class="translation appear">
          <p>
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berpikir."
          </p>
        </div>
      </div>
      <div class="mempelai">
        <img
          src="Assets/images/bismillah.png"
          alt="Bismillah"
          class="appear"
        />
        <p class="appear">Assalamu'alaikum Warahmatullaahi Wabarakaatuh</p>
        <p class="desk appear">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </p>
        <div class="pengantin-pria appear">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
            alt="Foto Isnan"
            class="foto"
          />
          <h1>Isnan</h1>
          <h3>Isnan Ramadhan</h3>
          <p>
            Putra ke 2 dari <br />
            Bapak Fahroji <br />
            dan Ibu Sari
          </p>
          <a
            href="https://www.instagram.com/isnan.ramadhan"
            target="_blank"
            class="ig"
          >
            <img
              src="Assets/icon/instagram.svg"
              alt="instagram"
              class="instagram"
            />
            Instagram
          </a>
        </div>
        <div class="dan appear">---- & ----</div>
        <div class="pengantin-wanita appear">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
            alt="Foto Amelia"
            class="foto"
          />
          <h1>Amelia</h1>
          <h3>Amelia Putri</h3>
          <p>
            Putri pertama dari <br />
            Bapak Suhadi <br />
            dan Ibu Susi
          </p>
          <a
            href="https://www.instagram.com/amelia.putri"
            target="_blank"
            class="ig"
          >
            <img
              src="Assets/icon/instagram.svg"
              alt="instagram"
              class="instagram"
            />
            Instagram
          </a>
        </div>
      </div>
      <div class="acara">
        <div class="akad appear">
          <p class="judul">Akad Nikah</p>
          <div class="tanggal">
            <p class="angka">13</p>
            <p class="teks">
              jum'at <br />
              Desember <br />
              2045
            </p>
          </div>
          <p class="garis">------------------</p>
          <p class="Lokasi">
            Lokasi Acara : <br />
            Aula Mesjid Hasanudin Majedi
          </p>
        </div>
        <div class="resepsi appear">
          <p class="judul">Resepsi Pernikahan</p>
          <div class="tanggal">
            <p class="angka">14</p>
            <p class="teks">
              jum'at <br />
              Desember <br />
              2045
            </p>
          </div>
          <p class="garis">------------------</p>
          <p class="Lokasi">
            Lokasi Acara : <br />
            Aula Mesjid Hasanudin Majedi
          </p>
        </div>
        <div class="countdown appear">
          <h1>Hitung Mundur</h1>
          <!-- Editable event date: set data-event in ISO 8601 format (YYYY-MM-DDTHH:MM:SS) or use data-date/data-time -->
          <div class="flipdown-container" data-event="2045-12-13T09:00:00">
            <div
              id="flipdown"
              class="flipdown"
              style="text-align: center"
            ></div>
          </div>

          <!-- Small admin UI for preview/testing date (hidden by default). Add ?admin=1 to URL to show -->
          <div id="flipdownAdmin" class="flipdown-admin" style="display:none; margin-top:10px; font-size:14px;">
            <label>Test/Tweak Tanggal:</label>
            <input type="text" id="adminDate" placeholder="YYYY-MM-DD or DD-MM-YYYY or DD/MM/YYYY or YYYY-MM-DDTHH:MM:SS" style="margin-left:8px;" />
            <input type="text" id="adminTime" placeholder="HH:MM or HH:MM:SS (optional)" style="margin-left:8px; width:110px;" />
            <button type="button" id="previewBtn" style="margin-left:8px;">Preview</button>
            <div id="previewResult" style="margin-top:6px; color:#333"></div>
            <p style="margin-top:6px; font-size:12px; color:#666">Formats accepted: <code>YYYY-MM-DD</code>, <code>DD-MM-YYYY</code>, <code>DD/MM/YYYY</code>, or full ISO <code>YYYY-MM-DDTHH:MM:SS</code>. Time optional.</p>
          </div>
        </div>
      </div>
      <div class="lokasi">
        <h1 class="appear">Lokasi Acara</h1>
        <p class="appear">Aula Mesjid Hasanudin Majedi</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1134339844934!2d114.5862576735172!3d-3.289033941091887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4230eafdb99a3%3A0xbf71bec5fc63c63e!2sMasjid%20Hasanuddin%20Madjedi!5e1!3m2!1sid!2sid!4v1727264354913!5m2!1sid!2sid"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="maps appear"
        ></iframe>
        <a
          href="https://maps.app.goo.gl/uB6KFBaVT2dcCJfm6"
          target="_blank"
          class="lihatPeta appear"
          >Lihat Lokasi Acara</a
        >
      </div>
      <div class="galeri">
        <h1 class="appear">--- Galeri ---</h1>
        <div class="img-container appear">
          <div class="mySlide">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" alt="Foto pasangan" />
          </div>
          <div class="mySlide">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80" alt="Foto Isnan" />
          </div>
          <div class="mySlide">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Foto Amelia" />
          </div>
          <a class="prev" onclick="plusSlide(-1)">&#10094;</a>
          <a class="next" onclick="plusSlide(1)">&#10095;</a>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1-GLrbJzG3A?si=cYq8_8PYTY-5_F9t"
          title="YouTube video player"
          frameborder="0"
          class="appear"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="rsvp">
        <h1 class="appear">RSVP & Ucapan</h1>
        <form id="rsvpForm" class="appear">
          <label for="name" style="font-size: 20px">Nama:</label>
          <input type="text" id="name" name="name" required />

          <div>
            <p class="confirm">Konfirmasi Kehadiran:</p>

            <div class="radio-box">
              <div class="radio-container">
                <input
                  type="radio"
                  id="yes"
                  name="attendance"
                  value="Hadir"
                  required
                />
                <label for="yes">Hadir</label>
              </div>

              <div class="radio-container">
                <input
                  type="radio"
                  id="no"
                  name="attendance"
                  value="Tidak Hadir"
                  required
                />
                <label for="no">Tidak Hadir</label>
              </div>
            </div>
          </div>

          <label for="message" style="font-size: 20px">Ucapan/Doa:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Kirim</button>

          <h2>Daftar Kehadiran & Ucapan</h2>
          <div id="submittedData"></div>
        </form>
      </div>
      <div class="hadiah">
        <h1 class="appear">-- Hadiah Pernikahan --</h1>
        <p class="appear">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless.
        </p>
        <div class="card appear">
          <div class="bank">
            <img src="Assets/icon/Logo-Bank-BRI.png" alt="bri" />
            <p>
              11211211 <br />
              A/N: Isnan
            </p>
          </div>
          <div class="atau">-------- Atau Scan --------</div>
          <img src="Assets/icon/qris.png" alt="qris" style="width: 80%" />
        </div>
      </div>
      <div class="penutup" id="penutup">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80"
          alt="Foto pasangan"
          class="pengantin"
        />
        <p class="gowunbatang-bold">
          Ungkapan terima kasih yang tulus dari kami apabila
          Bapak/Ibu/Teman-teman berkenan hadir dan memberikan do’a restu.
        </p>
        <p>Wassalamualaikum Warahmatullahi Wabarakatuh</p>
        <p class="garis">--------------</p>
        <p class="gowunbatang-bold">Turut berbahagia, segenap keluarga besar</p>
        <h1>Isnan & Amelia</h1>
      </div>
    </section>
  </body>