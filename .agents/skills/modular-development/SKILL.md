---
name: modular-development
description: >
  Scoped, test-driven development workflow. AI edits ONLY the isolated module/files
  explicitly listed in the current phase. Prevents codebase contamination by enforcing
  a build → test → review → merge → global-check pipeline.
  Flexible: phases skippable for hot-fixes or simple changes via fast-track mode.
  Trigger: "modular dev", "modular mode", "/modular", "scoped build", "isolated module".
---

# Modular Development Skill

Scoped, phase-gated build workflow. AI touches only declared files. No drift. No hidden edits.

---

## Core Principle

> **Scope LOCKED to active phase files.** Dev must explicitly unlock next phase or expand scope.

Two tracks available:

| Track | When | Phases |
|-------|------|--------|
| **Full** | New feature / complex module | 1 → 2 → 3 → 4 → 5 → 6 |
| **Fast** | Hot-fix / trivial change / solo dev | 1 → 2 → 4 (tests optional) |

Dev picks track at Phase 1. Default: **Full**.

---

## Phases

### Phase 1 — SCOPE DECLARATION
**Who:** Dev

Declare before any code written:

```
MODULE:      <name>
TRACK:       full | fast
FILES:       <exhaustive list AI may touch>
GOAL:        <one sentence — what this does>
ENTRY:       <function / API / component being built>
SKIP TESTS:  yes | no  (fast track only)
```

AI echo scope back. Confirm before writing. **No file outside FILES touched.**

---

### Phase 2 — ISOLATED BUILD
**Who:** AI (scope-locked)

- Code only in `FILES`.
- No editing external modules — read-only OK.
- Missing dep found → STOP, report. No silent new files.
- Minimal public API surface. Expose only what integration needs.
- Follow **Code Quality Standards** below — applied every build, no exceptions.

Output: working isolated module + defined exports.

---

### Phase 3 — MODULE TESTS *(skippable on fast track)*
**Who:** AI (scope = module + its test file)

- Test file adjacent or in `/tests` matching module path.
- Mock ALL external deps — tests run standalone.
- Cover: happy path, edge, error/failure.
- Single command to run. Document it.
- Targets: **80% lines, 100% exported fns** (adjust per project).

Output: test file + run command + passing output.

> **Fast track:** If `SKIP TESTS: yes` declared, go straight to Phase 4. Note skipped tests as TODO.

---

### Phase 4 — REVIEW GATE ⛔
**Who:** Dev

AI presents (compressed):

1. Built: `<what>` (`<N>` bullets)
2. Files: `<changed list>`
3. Tests: `<pass/skip/fail>`
4. TODOs / limits
5. Integration point: `<where it plugs in>`

**AI WAITS.** Responds to:
- `approve` → Phase 5 (or done on fast track)
- `revise: <feedback>` → rework in scope, loop Phase 3
- `skip-tests` → skip Phase 3, stay at Phase 4
- `abort` → discard, reset scope

---

### Phase 5 — CONTROLLED MERGE
**Who:** AI (scope expands to integration files ONLY)

- Dev lists **integration files** explicitly (router, index, registry, etc.).
- AI edits only those + module files.
- Additive only — no refactoring pre-existing logic.
- Conflict or unexpected dep found → STOP, report before touching anything.

Output: integration diff.

---

### Phase 6 — GLOBAL CHECK
**Who:** AI

1. Run full project test suite. Paste output.
2. Identify broken pre-existing tests from integration.
3. Fix ONLY breakage caused by new module. No opportunistic refactors.
4. Add new module tests to suite if not auto-discovered.
5. Suite fully green → declare done.

Output: before/after output + fix list.

---

## Code Quality Standards

Applied every time AI writes or touches code. Non-negotiable on both tracks.

### Comments — Write for the Stranger

Target reader: dev seeing this file **for the first time**, or returning after **6+ months**.

| What to comment | What NOT to comment |
|---|---|
| **Why** a decision was made (not obvious from code) | What the code literally does (`i++ // increment i`) |
| Edge case or gotcha being handled | Self-explanatory variable names |
| Contract: what caller must guarantee / what fn guarantees | Noise that duplicates the function signature |
| Known limitation or TODO with reason | Dead code (delete it instead) |
| Non-obvious ordering dependency (`// must run after X`) | Generic filler (`// helper function`) |

Comment style rules:
- First line of every non-trivial function/class: one sentence — *what it does + why it exists here*.
- Inline comment: right of the line, only when the line alone is misleading.
- Block above: for multi-line logic blocks that need context.
- No commented-out code left in. Use `// TODO:` with reason + ticket if needed.

### Long-Term Cleanliness

- Follow **idiomatic conventions of the language** in use (e.g., `snake_case` in Python, `camelCase` in JS/TS, error-first callbacks in Node, `Result` types in Rust).
- Prefer **explicit over clever** — readable > terse (except where language idiom says otherwise).
- Functions do one thing. If name needs "and" → split it.
- No magic numbers/strings — named constants with a comment explaining the value.
- Public API surface documented (JSDoc / docstring / rustdoc) even if internal-only — future you is a stranger too.
- Avoid premature abstraction. Abstract only when second repetition confirmed.
- Fail fast: validate inputs at boundary, not deep inside logic.
- Dependency direction: module depends inward (domain), never outward (infra) without explicit interface.

---

## Scope Guard

| Situation | AI Action |
|-----------|-----------|
| File outside scope needs edit | STOP. Report. Ask dev to expand scope. |
| Bug found in unrelated code | Note it. Do NOT fix. File separate task. |
| Tempted to clean nearby code | Don't. Out of scope. |
| Test needs new shared util | STOP. Propose in Phase 4. Dev decides. |
| Integration breaks unrelated code | STOP. Report root cause. Do NOT fix it. |

---

## Commands

| Command | Effect |
|---------|--------|
| `/modular start` | Phase 1 — AI prompts scope declaration |
| `/modular fast` | Phase 1 in fast-track mode |
| `/modular scope` | Echo current scope lock |
| `/modular status` | Current phase + next action |
| `/modular expand <files>` | Add files to scope mid-session |
| `/modular approve` | Advance past current gate |
| `/modular revise <feedback>` | Loop back in phase with feedback |
| `/modular skip-tests` | Skip Phase 3 (adds TODO) |
| `/modular abort` | Discard work, reset scope |
| `/modular done` | Close out — brief completion summary |

---

## Status Template

`/modular status` output:

```
MODULAR STATUS
==============
Module:  <name>
Track:   full | fast
Phase:   <N — name>
Scope:   <files>
Pending: <next action>
Gate:    OPEN | WAITING DEV | PASSED
Tests:   pass | skip | pending
```

---

## Anti-Patterns (AI refuses these)

- Edit outside declared scope during Phase 2.
- Skip Phase 3 silently without `SKIP TESTS: yes` declared.
- Auto-merge without explicit `approve` at Phase 4.
- Fix bugs in other modules "while in there".
- Add deps to `package.json` / `requirements.txt` without reporting.
- Refactor pre-existing logic during Phase 5 merge.
- Leave code without comments if a new dev would be confused by it.
- Use non-idiomatic patterns for the language without a documented reason.

---

## Activation

On trigger:
1. Say: `Modular mode active. Scope LOCKED. Declare files.`
2. Ask: full track or fast track?
3. Prompt Phase 1 scope declaration.
4. Echo confirmed scope. Write no code until confirmed.
