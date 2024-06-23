import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getProject = query({
  async handler(ctx) {

    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    console.log(userId);

    if (!userId) {
      return [];
    }

    return await ctx.db.query("projects").withIndex('by_tokenIdentifier', (q) => q.eq('tokenIdentifier', userId)).collect();
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
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    console.log(userId);

    if (!userId) {
      throw new ConvexError("Not authenticated");
    }

    await ctx.db.insert("projects", {
      name: args.name,
      id: args.id,
      description: args.description,
      phases: args.phases,
      customerId: args.customerId,
      isCompleted: args.isCompleted,
      tokenIdentifier: userId,

    });
  },
});
