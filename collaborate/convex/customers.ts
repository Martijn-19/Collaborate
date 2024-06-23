
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getCustomers = query({
  async handler(ctx) {
    return await ctx.db.query("customers").collect();
  },
});

export const createCustomer = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    email: v.string(),
    projectId: v.number(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("customers", {
      name: args.name,
      id: args.id,
      projectId: args.projectId,
      email: args.email,
    });
  },
});