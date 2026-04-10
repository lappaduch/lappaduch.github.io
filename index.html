<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kam na pivo?</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #1a1208;
    --surface: #251a0a;
    --surface2: #2e2010;
    --amber: #e8a020;
    --amber-light: #f5c050;
    --amber-dim: #8a5a0a;
    --cream: #f0e6c8;
    --cream-dim: #9a8a6a;
    --red: #c0392b;
    --green: #27ae60;
    --border: rgba(232,160,32,0.2);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--cream);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
    background-image:
      radial-gradient(ellipse 60% 40% at 20% 80%, rgba(232,160,32,0.06) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 20%, rgba(232,160,32,0.04) 0%, transparent 70%);
  }

  header {
    text-align: center;
    padding: 2.5rem 1rem 1.5rem;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  header::after {
    content: '\ud83c\udf7a';
    position: absolute;
    font-size: 2rem;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.08;
    font-size: 8rem;
    top: -1rem;
    pointer-events: none;
  }
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 900;
    color: var(--amber);
    letter-spacing: -1px;
    position: relative;
  }
  .subtitle {
    color: var(--cream-dim);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 0.4rem;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    max-width: 1100px;
    margin: 0 auto;
    min-height: calc(100vh - 140px);
  }

  .panel {
    padding: 1.5rem;
    border-right: 1px solid var(--border);
  }
  .panel:last-child { border-right: none; }

  .panel-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--amber-light);
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .panel-title span { font-size: 1.2rem; }

  /* ADD PUB FORM */
  .add-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .add-form input {
    flex: 1;
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--cream);
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s;
  }
  .add-form input:focus { border-color: var(--amber); }
  .add-form input::placeholder { color: var(--cream-dim); }
  .btn {
    background: var(--amber);
    color: var(--bg);
    border: none;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    white-space: nowrap;
  }
  .btn:hover { background: var(--amber-light); }
  .btn:active { transform: scale(0.97); }
  .btn.secondary {
    background: transparent;
    border: 1px solid var(--amber-dim);
    color: var(--amber);
  }
  .btn.secondary:hover { background: rgba(232,160,32,0.1); }
  .btn.danger {
    background: transparent;
    border: 1px solid rgba(192,57,43,0.4);
    color: #e74c3c;
    padding: 0.3rem 0.6rem;
    font-size: 0.7rem;
  }
  .btn.danger:hover { background: rgba(192,57,43,0.15); }

  /* PUB LIST */
  .pub-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 200px;
  }

  .pub-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.7rem 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: grab;
    transition: border-color 0.15s, background 0.15s, transform 0.15s, box-shadow 0.15s;
    user-select: none;
    animation: slideIn 0.25s ease;
  }
  .pub-card:active { cursor: grabbing; }
  .pub-card:hover {
    border-color: var(--amber-dim);
    background: var(--surface2);
  }
  .pub-card.dragging {
    opacity: 0.4;
    transform: scale(0.97);
  }
  .pub-card.drag-over {
    border-color: var(--amber);
    background: rgba(232,160,32,0.08);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(232,160,32,0.15);
  }

  .drag-handle {
    color: var(--amber-dim);
    font-size: 0.9rem;
    cursor: grab;
    line-height: 1;
  }
  .pub-name {
    flex: 1;
    font-size: 0.9rem;
    color: var(--cream);
  }
  .pub-emoji {
    font-size: 1.1rem;
  }
  .pub-actions {
    display: flex;
    gap: 0.4rem;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .pub-card:hover .pub-actions { opacity: 1; }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .empty-hint {
    color: var(--cream-dim);
    font-size: 0.78rem;
    text-align: center;
    padding: 2rem 1rem;
    border: 1px dashed var(--border);
    border-radius: 6px;
    line-height: 1.6;
  }

  /* VOTING PANEL */
  .vote-date-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.2rem;
    flex-wrap: wrap;
  }
  .vote-date-row input[type="date"] {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--cream);
    font-family: 'DM Mono', monospace;
    font-size: 0.82rem;
    padding: 0.5rem 0.7rem;
    border-radius: 4px;
    outline: none;
    color-scheme: dark;
  }
  .vote-date-row input:focus { border-color: var(--amber); }

  .vote-candidates