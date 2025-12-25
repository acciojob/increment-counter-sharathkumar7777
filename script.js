
let count = 0;

    const counterEl = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function () {
      // Show alert with un-incremented value
      alert(count);

      // Increment counter
      count++;

      // Update UI
      counterEl.textContent = count;
    });