Development notes

1) Install dependencies

Open Command Prompt (cmd) or an elevated PowerShell, then run:

npm install

If you're using PowerShell and see an execution policy error, run as admin:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

2) Run the dev server

npm run dev

3) Editor setup (VS Code)

- Install Tailwind CSS IntelliSense extension
- Restart VS Code if CSS at-rules or Tailwind utilities appear as errors
- The repository includes `.vscode/settings.json` to disable some CSS validation that conflicts with Tailwind in some setups

4) Optional packages added by UI work

- framer-motion (used in blog page animations) — run `npm install` to fetch it

5) Notes

- If TypeScript complains about `SessionProviderWrapper`, restart the TypeScript server (Command Palette -> "TypeScript: Restart TS Server") or reopen VS Code.
