import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { rateLimit } from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

export async function registerRoutes(app: Express) {
  app.post("/api/leads", limiter, async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      res.json(lead);
    } catch (error) {
      res.status(400).json({ error: "Invalid lead data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
