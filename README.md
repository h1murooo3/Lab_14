# Lab 14 - Lists & User Input

- Student Name: [Mazat Yersultan]
- Student ID: [Your ID]
- Date: 25.04.2026

## Structure

- `task1/` - FlatList Contacts (Lab 14.1)
- `task2/` - Registration Form (Lab 14.2)

## What Was Implemented

- Task 1 uses `FlatList` with virtualization optimizations:
  - `useCallback` for stable render functions
  - `getItemLayout` with fixed row height
  - `initialNumToRender`, `maxToRenderPerBatch`, `windowSize`
  - `removeClippedSubviews`
  - `RefreshControl` for pull-to-refresh
  - custom header and item separators
- Task 2 uses robust form handling:
  - `KeyboardAvoidingView` with iOS/Android behavior split
  - `TouchableWithoutFeedback` + `Keyboard.dismiss()`
  - real-time email regex validation
  - secure password field and disabled button on invalid state

## Files

- Task 1:
  - `task1/src/types.ts`
  - `task1/src/utils/mockData.ts`
  - `task1/src/screens/ContactsScreen.tsx`
- Task 2:
  - `task2/src/screens/RegistrationScreen.tsx`

## Run Static Check

```bash
npm install
npm run typecheck
```
