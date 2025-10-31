// Fungsi utama untuk menambahkan tugas baru
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); // Ambil teks dan hapus spasi di awal/akhir

    // Pastikan input tidak kosong
    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // 1. Buat elemen LI baru
    const listItem = document.createElement('li');

    // 2. Buat elemen SPAN untuk teks tugas
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;
    
    // Tambahkan event listener untuk menandai selesai
    textSpan.addEventListener('click', function() {
        listItem.classList.toggle('done');
    });

    // 3. Buat tombol HAPUS
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Hapus';
    
    // Tambahkan event listener untuk menghapus tugas
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // 4. Gabungkan elemen ke dalam LI
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteBtn);

    // 5. Tambahkan LI ke daftar tugas
    taskList.appendChild(listItem);

    // 6. Bersihkan input setelah tugas ditambahkan
    taskInput.value = '';
}
