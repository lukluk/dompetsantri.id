const mongoose = require("mongoose");

const santriSchema = new mongoose.Schema({
  nama: String,
  nipd: String,
  saldo: Number,
  pesantren: String,
  nfc: String,
  kelas: String,
});

const Santri = new mongoose.model("Santri", santriSchema, "santri");

module.exports = Santri;
