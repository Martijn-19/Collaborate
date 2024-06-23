import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getQualitychecks = query({
  async handler(ctx) {
    return await ctx.db.query("qualitychecks").collect();
  },
});

export const createProject = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    questions: v.array(v.string()),
    isCompleted: v.boolean(),
    artefactId: v.number(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("qualitychecks", {
        id: args.id,
        name: args.name,
        questions: args.questions,
        isCompleted: args.isCompleted,
        artefactId: args.artefactId,
    });
  },
});