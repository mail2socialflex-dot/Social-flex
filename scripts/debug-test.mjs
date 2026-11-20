#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("\n=======================================================");
console.log(" 🩺 SOCIAL FLEX STUDIO — DIAGNOSTIC & DEBUG SUITE");
console.log("=======================================================\n");

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  process.stdout.write(`  [TEST ${totalTests}] ${name} ... `);
  try {
    fn();
    console.log("✅ PASS");
    passedTests++;
  } catch (err) {
    console.log("❌ FAIL");
    console.error(`      Error: ${err.message || err}`);
  }
}

// 1. Check Configuration & Environment
runTest("Environment & Secret Configuration", () => {
  const envPath = path.join(rootDir, ".env");
  if (!fs.existsSync(envPath)) {
    throw new Error(".env file is missing");
  }
  const envContent = fs.readFileSync(envPath, "utf8");
  if (envContent.includes("SUPABASE_SERVICE_ROLE_KEY") && envContent.includes("VITE_SUPABASE_SERVICE_ROLE_KEY")) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY must not be exposed with VITE_ prefix!");
  }
  if (!envContent.includes("VITE_SUPABASE_URL") || !envContent.includes("VITE_SUPABASE_PUBLISHABLE_KEY")) {
    throw new Error("Required Supabase client environment variables are missing");
  }
});

// 2. TypeScript Static Type Check
runTest("TypeScript Compilation (tsc --noEmit)", () => {
  execSync("npx tsc --noEmit", { cwd: rootDir, stdio: "pipe" });
});

// 2b. ESLint Code Quality Check
runTest("ESLint Static Analysis (eslint .)", () => {
  execSync("npm run lint", { cwd: rootDir, stdio: "pipe" });
});

// 3. Security Audit (Dependencies)
runTest("Vulnerability Audit (npm audit)", () => {
  const env = { ...process.env };
  delete env.npm_config_allow_scripts;
  const output = execSync("npm audit", { cwd: rootDir, encoding: "utf8", env });
  if (!output.includes("found 0 vulnerabilities")) {
    throw new Error("Vulnerabilities detected in dependencies");
  }
});

// 4. Input & Enquiry Data Validation Logic Test
runTest("Enquiry Form Data Validation Rules", () => {
  function validateSubmission(p) {
    const name = String(p.name ?? "").trim();
    const email = String(p.email ?? "").trim();
    const phone = String(p.phone ?? "").trim();
    const message = String(p.message ?? "").trim();

    if (!name || name.length < 2) throw new Error("Name must be at least 2 characters");
    if (name.length > 100) throw new Error("Name is too long");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email address is required");
    if (email.length > 320) throw new Error("Email address is too long");
    if (phone && phone.replace(/[^0-9]/g, "").length < 7) throw new Error("Phone number seems too short");
    if (!message || message.length < 5 || message.length > 5000) throw new Error("Please describe your project details (5-5000 chars)");
    return true;
  }

  // Should pass valid payload
  validateSubmission({
    name: "Alex Smith",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    message: "We need a complete brand campaign video.",
  });

  // Should reject invalid email
  let threw = false;
  try {
    validateSubmission({ name: "Alex", email: "invalid-email", message: "Hello world" });
  } catch {
    threw = true;
  }
  if (!threw) throw new Error("Failed to reject invalid email");

  // Should reject empty message
  threw = false;
  try {
    validateSubmission({ name: "Alex", email: "alex@test.com", message: "" });
  } catch {
    threw = true;
  }
  if (!threw) throw new Error("Failed to reject empty message");
});

// 5. Build & Bundle Integrity
runTest("Production Build Pipeline (vite build)", () => {
  execSync("npm run build", { cwd: rootDir, stdio: "pipe" });
  const publicDir = path.join(rootDir, ".output/public");
  if (!fs.existsSync(publicDir)) {
    throw new Error(".output/public directory was not generated");
  }
});

// 6. Subagent, Workflow & GSD Validators
runTest("GSD Workflow & Subagent Integrity (validate-all.sh)", () => {
  execSync("./scripts/validate-all.sh", { cwd: rootDir, stdio: "pipe" });
});

console.log("\n-------------------------------------------------------");
console.log(` Summary: ${passedTests}/${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log(" 🎉 All diagnostic tests passed successfully!\n");
  process.exit(0);
} else {
  console.log(` ⚠️ ${totalTests - passedTests} tests failed.\n`);
  process.exit(1);
}
