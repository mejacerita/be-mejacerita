import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    photoProfile: {
      type: String,
      default: "",
    },
    googleAuth: {
      type: Object,
      default: {},
    },
    bio: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },

    likedStory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likedComment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    savedStory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
    stories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
    followedTags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    date: { type: Date, default: Date.now() },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  },
  { minimize: true, timestamps: true }
);

export default model("User", schema);
