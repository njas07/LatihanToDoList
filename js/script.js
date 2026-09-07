let tasks = [];

        // Menambahkan tugas
        function addTask() {
            const input = document.getElementById("taskInput");
            const taskText = input.value.trim();

            if (taskText === "") {
                alert("Silakan masukkan tugas!");
                input.focus();
                return;
            }

            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            tasks.push(task);

            input.value = "";
            input.focus();

            displayTasks();
        }

        // Menampilkan semua tugas
        function displayTasks() {
            const taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            if (tasks.length === 0) {
                taskList.innerHTML = `
                    <li class="empty">
                        Belum ada tugas.
                    </li>
                `;

                updateStats();
                return;
            }

            tasks.forEach(task => {
                const li = document.createElement("li");
                li.className = "task-item";

                const taskLeft = document.createElement("div");
                taskLeft.className = "task-left";

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = task.completed;

                checkbox.addEventListener("change", function () {
                    toggleTask(task.id);
                });

                const text = document.createElement("span");
                text.className = "task-text";

                if (task.completed) {
                    text.classList.add("completed");
                }

                text.textContent = task.text;

                const deleteButton = document.createElement("button");
                deleteButton.className = "btn-delete";
                deleteButton.textContent = "🗑";

                deleteButton.addEventListener("click", function () {
                    deleteTask(task.id);
                });

                taskLeft.appendChild(checkbox);
                taskLeft.appendChild(text);

                li.appendChild(taskLeft);
                li.appendChild(deleteButton);

                taskList.appendChild(li);
            });

            updateStats();
        }

        // Menandai tugas selesai / belum selesai
        function toggleTask(id) {
            tasks = tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }

                return task;
            });

            displayTasks();
        }

        // Menghapus tugas
        function deleteTask(id) {
            tasks = tasks.filter(task => task.id !== id);

            displayTasks();
        }

        // Mengupdate statistik
        function updateStats() {
            const total = tasks.length;

            const completed = tasks.filter(
                task => task.completed
            ).length;

            const pending = total - completed;

            document.getElementById("totalTask").textContent = total;
            document.getElementById("completedTask").textContent = completed;
            document.getElementById("pendingTask").textContent = pending;
        }

        // Tombol Enter untuk menambahkan tugas
        document.getElementById("taskInput").addEventListener(
            "keydown",
            function(event) {
                if (event.key === "Enter") {
                    addTask();
                }
            }
        );

        // Menampilkan kondisi awal
        displayTasks();
