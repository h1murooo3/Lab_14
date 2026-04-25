# AI Report (Lab 14)

## Tool Used
- Cursor AI assistant (Codex).

## How AI Was Used
- I used AI only to check my code for mistakes and help identify potential errors.
- The final implementation and structure were reviewed and validated in my project files.

## Prompts Used (short)
- "Check the implementation against Lab 14 requirements."
- "Verify FlatList optimization props and form validation logic."
- "Find possible TypeScript issues in screen components."

## Verification Steps
- Confirmed required file structure: `Lab_14/task1/` and `Lab_14/task2/`.
- Verified required components and logic for:
  - FlatList virtualization and pull-to-refresh.
  - Keyboard handling and email validation in registration form.
- Ran a TypeScript check command (`npm run typecheck`).

## What I Learned
- Why `FlatList` virtualization is preferred over `ScrollView` for larger datasets.
- How fixed item height with `getItemLayout` improves scroll performance.
- How `KeyboardAvoidingView` and `TouchableWithoutFeedback` improve mobile form UX.
