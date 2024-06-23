
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getProject = query({
  async handler(ctx) {
    return await ctx.db.query('projects').collect()
  },
})

export const createProject = mutation({
  args: {
    name: v.string()
  },
  async handler(ctx, args) {
    await ctx.db.insert('projects', {
      name: args.name
    })
  },
})