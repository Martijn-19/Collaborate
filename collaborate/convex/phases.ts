
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPhases = query({
  async handler(ctx) {
    return await ctx.db.query("phases").collect();
  },
});

export const createPhases = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    description: v.string(),
    projectId: v.number(),
    isCompleted: v.boolean(),
    Artefacts: v.array(v.number()),
  },
  async handler(ctx, args) {
    await ctx.db.insert("phases", {
        id: args.id,
        name: args.name,
        description: args.description,
        projectId: args.projectId,
        isCompleted: args.isCompleted,
        artefacts: args.Artefacts,
    });
  },
});