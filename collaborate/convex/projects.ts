import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getProject = query({
  async handler(ctx) {
    return await ctx.db.query("projects").collect();
  },
});

export const createProject = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    description: v.string(),
    phases: v.array(v.number()),
    customerId: v.number(),
    isCompleted: v.boolean(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("projects", {
      name: args.name,
      id: args.id,
      description: args.description,
      phases: args.phases,
      customerId: args.customerId,
      isCompleted: args.isCompleted,
    });
  },
});
