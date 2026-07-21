# ☕ Sip & Speak

# Lesson Engine

Version: v0.1.0

---

# Purpose

The Lesson Engine is the heart of Sip & Speak.

It separates educational content from the interface.

Sessions describe **what** should happen.

The application decides **how** it should be presented.

Because of this separation, every new session can be created without changing the application code.

---

# Architecture

Sip & Speak is built using four layers.

Session

↓

Scenes

↓

Blocks

↓

Components

---

# Session

A Session is one complete learning experience.

Example:

The Story Behind My Name

Movies We Love

Travel Broadens the Mind

Mind and Body

Music That Shapes Us

---

# Scenes

Scenes divide a session into natural stages.

Typical flow:

Welcome

↓

Warm-up

↓

Useful Language

↓

Challenge

↓

Video Break

↓

Discussion

↓

Roleplay / Debate

↓

Reflection

↓

Completion

---

# Blocks

Each Scene consists of one or more Blocks.

Blocks describe educational actions.

Examples:

Question

Vocabulary Card

Flip Card

Ranking

Opinion Scale

Video

Debate

Roleplay

Reflection

Timer

Quote

Image Prompt

Random Question

---

# Components

Components are reusable UI elements.

Examples:

Button

Card

Progress Bar

Timer

Modal

Video Player

Lexicon Card

Navigation

Badge

Tooltip

Toast

Components never contain lesson content.

They only display data.

---

# Engine Principle

The application should never know which session is currently open.

It only knows how to render Scenes and Blocks.

---

# Rendering Flow

JSON

↓

Scene

↓

Block

↓

Component

↓

Screen

---

# Reusability

Every Block must be reusable.

If a new activity requires writing new HTML instead of new JSON, reconsider the design.

---

# Extensibility

Future features should fit naturally into the existing architecture.

Examples:

Camp Mode

Teacher Mode

Pair Mode

Vocabulary Revision

Bookmarks

Favorites

Collections

Custom Sessions

None of these should require changing previous sessions.

---

# Validation Rules

Every Session must contain:

• title

• level

• estimated duration

• topic

• scenes

Each Scene must contain:

• id

• title

• blocks

Each Block must contain:

• type

• content

---

# Performance

Sessions should load instantly.

The engine should only load the data required for the current session.

---

# Accessibility

The engine must support:

• keyboard navigation

• screen readers

• responsive layouts

• touch devices

Accessibility is part of the architecture, not an afterthought.

---

# Engine Rule #1

Content lives in JSON.

---

# Engine Rule #2

Components never know the lesson.

---

# Engine Rule #3

Every Session is built from reusable Blocks.

---

# Engine Rule #4

A new Session should never require writing new HTML.
