const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: String,
    image: String,
    email: String,
    address: String,
    city: String,
    description: String,
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  address: String,
  city: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    leader: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Override all methods
projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
