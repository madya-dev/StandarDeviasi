let form = document.getElementById("form");
let jawaban = document.getElementById("jawaban");
jawaban.style.display = "none";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  jawaban.style.display = "block";
  let type = document.getElementById("tipe").value;
  let dataInput = document.getElementById("data").value;
  let data = dataInput.split(",");
  standar_deviasi_tunggal(data, type);
});

function standar_deviasi_tunggal(data, type) {
  let totalData = 0;
  for (i = 0; i < data.length; i++) {
    dataInt = parseInt(data[i]);
    totalData += dataInt;
  }
  let rataX = totalData / data.length;
  let sigma = 0;
  for (j = 0; j < data.length; j++) {
    sigma += (data[j] - rataX) ** 2;
  }
  let bagiSigma = 0;
  if (type == 0) {
    bagiSigma = sigma / data.length; //populasi
  } else {
    bagiSigma = sigma / (data.length - 1); //sample
  }
  let sd_tunggal = bagiSigma ** (1 / 2);
  let hasil = document.getElementById("hasil");
  hasil.innerText = `Standar Deviasi ${type == 0 ? "σ" : "s"} : ${sd_tunggal}`;
}
