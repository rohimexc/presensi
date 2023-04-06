const dataprodi = {
    'A111':'Pendidikan Bahasa Indonesia/Bahasa dan Seni',
    'A121':'Pendidikan Bahasa Inggris/Bahasa dan Seni',
    'A221':'Pendidikan Biologi/MIPA',
    'A231':'Pendidikan Matematika/MIPA',
    'A241':'Pendidikan Fisika/MIPA',
    'A251':'Pendidikan Kimia/MIPA',
    'A311':'Pendidikan Sejarah/Ilmu Pendidikan Sosial',
    'A351':'Geografi/Ilmu Pendidikan Sosial',
    'A401':'Pendidikan Guru Sekolah Dasar/Ilmu Pendidikan',
    'A411':'Pendidikan Guru PAUD/Ilmu Pendidikan',
    'A421':'PJKR/Ilmu Pendidikan',
    'A501':'Bimbingan Konseling/Ilmu Pendidikan',
    'B101':'Ilmu Administrasi Publik/Ilmu Administrasi',
    'B201':'Sosiologi/Sosiologi',
    'B301':'Antropologi/Sosiologi',
    'B401':'Ilmu Pemerintahan/ilmu administrasi',
    'B501':'Ilmu Komunikasi/Sosiologi',
    'C101':'Pembangunan/IESP',
    'C201':'Manajemen/Ekonomi Manajemen',
    'C301':'Akuntansi/Ekonomi Akuntansi',
    'D101':'Ilmu Hukum',
    'E281':'Agroteknologi',
    'E321':'Agribisnis',
    'F111':'Teknik Sipil/Teknik Sipil',
    'F131':'Teknik Lingkungan/Teknik Sipil',
    'F221':'Arsitektur/Arsitektur',
    'F231':'Perencanaan Wilayah Kota/Arsitektur',
    'F331':'Teknik Mesin/Teknik Mesin',
    'F441':'Teknik Elektro/Teknik Elektro',
    'F521':'Sistem Infomasi/Teknologi informasi',
    'F551':'Teknik Informatika/Teknologi Informasi',
    'G101':'Fisika/Fisika',
    'G201':'Matematika/Matematika',
    'G301':'Kimia/Kimia',
    'G401':'Biologi',
    'G501':'Statistika/Matematika',
    'G701':'Farmasi',
    'L131':'Kehutanan/Kehutanan',
    'O121':'Peternakan/Peternakan',
    'O271':'Akuakultur',
    'P101':'Kesehatan Masyarakat',
    'P211':'Gizi',
    'C300':'D3 Akuntansi',
    'G811':'Teknik Geofisika/Fisika',
    'A321':'Pendidikan Pancasila Dan Kewarganegaraan/Ilmu Pendidikan'
  };
const statusSelect = document.getElementById('status');
const idInput = document.getElementById('idStatus');
const prodiInput = document.getElementById('prodi');

statusSelect.addEventListener('change', function() {
  if (statusSelect.value === 'mahasiswa') {
    prodiInput.disabled = true;
    idInput.placeholder = 'Masukkan NIM';
    idInput.maxLength = 9;
    idInput.addEventListener('input', function() {
        const idStatusValue = idInput.value;
        const prefix = idStatusValue.slice(0, 4); // Get the first 4 characters of the input value
        const prodi = dataprodi[prefix];
        if (prodi) {
        prodiInput.placeholder = prodi;
        prodiInput.value = prodi; // Set the value as well if needed
        } else {
        prodiInput.placeholder = 'Program Studi';
        prodiInput.value = ''; // Reset the value if needed
        }
    });

  } else if (statusSelect.value === 'dosen') {
    idInput.placeholder = 'Masukkan NIDN';
    idInput.maxLength = 10;
    prodiInput.disabled = false;
  } else if (statusSelect.value === 'pegawai') {
    idInput.placeholder = 'Masukkan NIP';
    idInput.maxLength = 18;
    prodiInput.disabled = false;
  } else {
    idInput.placeholder = 'NIP/NIDN/NIM';
    idInput.maxLength = null;
    prodiInput.disabled = false;
  }
});
        
