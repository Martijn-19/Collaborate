import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    id: v.number(),
    name: v.string(),
    description: v.string(),
    phases: v.array(v.number()),
    customerId: v.number(),
    isCompleted: v.boolean(),
  }),
  customers: defineTable({
    id: v.number(),
    projectId: v.number(),
    name: v.string(),
    email: v.string(),
  }),
  phases: defineTable({
    id: v.number(),
    projectId: v.number(),
    name: v.string(),
    description: v.string(),
    isCompleted: v.boolean(),
    artefacts: v.array(v.number()),
  }),
  artefacts: defineTable({
    id: v.number(),
    name: v.string(),
    description: v.string(),
    isCompleted: v.boolean(),
    qualitychecks: v.array(v.number()),
  }),
  qualitychecks: defineTable({
    id: v.number(),
    name: v.string(),
    questions: v.array(v.string()),
    isCompleted: v.boolean(),
    artefactId: v.number(),
  }),
});
