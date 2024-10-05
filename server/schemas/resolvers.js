const { User, Journal, Song } = require("../models");

const resolvers = {
  Query: {
    journals: async () => {
      return Journal.find().populate("author");
    },
    songs: async () => {
      return Song.find({});
    },
    users: async () => {
      return User.find().populate("journals");
    },
    singleuser: async (parent, { email }) => {
      return User.findOne({ email }).populate("journals");
    },
  },
  Mutation: {
    //-------------------- Journal Mutations---------------------------
    addJournal: async (_, { title, content, authorId }) => {
      if (!content || !authorId) {
        throw new Error("Must have all fields filled in!");
      }
      try {
        //check if the author exists
        const author = await User.findById(authorId);
        if (!author) {
          throw new Error("Author not found");
        }
        const newJournal = await Journal.create({
          content,
          author: authorId,
        });
        // Add the blog post to the user's journals array
        await User.findByIdAndUpdate(authorId, {
          $push: { journals: newJournal._id },
        });
        //populate the author field for the journal; was receiving error in GrpahQL that author parameters were not defined when I created a blog post
        const populateJournal = await Journal.findById(newJournal._id).populate(
          "author"
        );
        return populateJournal;
      } catch (err) {
        throw new Error("Error creating blog post " + err.message);
      }
    },
  },
};
module.exports = resolvers;
