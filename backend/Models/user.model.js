const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
    tdee: Number,
    goalCal: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    sugar: Number,
    height: Number,
    weight: Number,
    age: Number,
    male: Boolean,
    female: Boolean,
    daysOfWorkout: Number,
    durationOfWorkout: Number,
    ecto: Boolean,
    meso: Boolean,
    endo: Boolean,
    lose: Boolean,
    gain: Boolean,
    maintain: Boolean,
    lowCarbs: Boolean,
    moderateCarbs: Boolean,
    highCarbs: Boolean
  },

  { versionKey: false }
);

const User = mongoose.model("recipes-users", userSchema);

module.exports = User;
