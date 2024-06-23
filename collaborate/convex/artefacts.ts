
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getArtefacts = query({
  async handler(ctx) {
    return await ctx.db.query("artefacts").collect();
  },
});

export const createArtefacts = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    description: v.string(),
    isCompleted: v.boolean(),
    qualitychecks: v.array(v.number()),
  },
  async handler(ctx, args) {
    await ctx.db.insert("artefacts", {
        id: args.id,
        name: args.name,
        description: args.description,
        isCompleted: args.isCompleted,
        qualitychecks: args.qualitychecks,
    });
  },
});