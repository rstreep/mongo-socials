const { Schema, Types } = require("mongoose");
const dayjs = require('dayjs');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function(dateTime) {
        return dayjs(dateTime).format("MM/DD/YYYY hh:mm:ss A")
    },
  },
},
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

module.exports = reactionSchema;
