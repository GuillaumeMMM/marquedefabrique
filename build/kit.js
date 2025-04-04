// Generated on Fri Apr 04 2025 from v1.0.3

export const kit = `/* TITLES */
.mdf-title1,
.mdf-title2,
.mdf-title3,
.mdf-title4 {
  font-weight: 700;
}
.mdf-title1 {
  font-size: 3rem;
}

.mdf-title2 {
  font-size: 2.4rem;
}

.mdf-title3 {
  font-size: 1.7rem;
}

.mdf-title4 {
  font-size: 1.2rem;
}

/* TEXT */
.mdf-emphasis {
  font-weight: 700;
}

.mdf-italic {
  font-style: italic;
}

.mdf-highlighted {
  font-weight: 700;
  color: var(--mdf-color-primary);
}

.mdf-muted {
  color: var(--mdf-color-text-muted);
}

.mdf-block {
  padding: 1rem;
  background-color: var(--mdf-color-secondary-transparent);
  border-radius: 3px;
  border: 2px solid var(--mdf-color-secondary-transparent-2);

  &.mdf-block-info {
    background-color: var(--mdf-color-info-transparent);
    border-color: var(--mdf-color-info);
  }

  &.mdf-block-error {
    background-color: var(--mdf-color-error-transparent);
    border-color: var(--mdf-color-error);
  }

  &.mdf-block-success {
    background-color: var(--mdf-color-success-transparent);
    border-color: var(--mdf-color-success);
  }
}

/* CTA */
.mdf-link {
  color: var(--mdf-color-primary);
  background-color: var(--mdf-color-primary-transparent);
  padding: 1px 2px;
  border-radius: 3px;
  text-underline-offset: 2px;
  text-decoration-color: hsl(from var(--mdf-color-primary) h s calc(l + 10));

  &:hover {
    background-color: var(--mdf-color-primary-transparent-2);
  }

  &:visited {
    color: var(--mdf-color-secondary);
    background-color: var(--mdf-color-primary-transparent);
    text-decoration-color: hsl(
      from var(--mdf-color-secondary) h s calc(l + 10)
    );
  }
}

.mdf-link:focus-visible,
.mdf-button:focus-visible {
  outline: 2px solid var(--mdf-color-primary);
  outline-offset: 3px;
}

.mdf-button {
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  line-height: 1.5rem;
  background-color: var(--mdf-color-primary-light);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  border: 2px solid var(--mdf-color-primary-light);
  font-size: 1rem;

  &:hover {
    background-color: var(--mdf-color-primary);
  }

  &.mdf-button-secondary {
    background-color: var(--mdf-color-secondary-light);
    border-color: var(--mdf-color-secondary-light);

    &:hover {
      background-color: var(--mdf-color-secondary);
    }
  }

  &.mdf-button-tertiary {
    background-color: var(--mdf-color-tertiary-light);
    border-color: var(--mdf-color-tertiary-light);

    &:hover {
      background-color: var(--mdf-color-tertiary);
    }
  }
}

/* FORM */
.mdf-input:focus-visible,
.mdf-textarea:focus-visible,
.mdf-color:focus-visible,
.mdf-select:focus-visible {
  outline: 2px solid var(--mdf-color-primary);
  outline-offset: 3px;
}

.mdf-select-control {
  display: inline-flex;
  flex-direction: column;
}

.mdf-select {
  display: block;
  cursor: pointer;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  line-height: 1.5rem;
  background-color: var(--mdf-color-primary-transparent);
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 2px solid var(--mdf-color-primary);
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 1rem;
  color: black;
  width: 250px;

  &:hover,
  &:focus {
    background-color: var(--mdf-color-primary-transparent-2);
  }
}

.mdf-select:hover {
  background-color: var(--mdf-color-primary-transparent-2);
}

.mdf-input-control,
.mdf-textarea-control {
  display: inline-flex;
  flex-direction: column;
}

.mdf-input[type="text"],
.mdf-input[type="search"],
.mdf-input[type="password"],
.mdf-textarea {
  border: 2px solid var(--mdf-color-primary);
  border-radius: 0.25rem;
  font-size: 16px;
  padding: 0.375rem 0.75rem;
  line-height: 1.5rem;
  background-color: var(--mdf-color-primary-transparent);
  width: 250px;

  &:hover,
  &:focus {
    background-color: var(--mdf-color-primary-transparent-2);
  }
}

.mdf-textarea {
  width: 320px;
  height: 150px;
}

.mdf-checkbox-control {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
}

.mdf-checkbox {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.4em;
  height: 1.4em;
  border: 0.15em solid var(--mdf-color-primary);
  border-radius: 0.25rem;
  padding: 0;
  cursor: pointer;

  display: grid;
  place-content: center;

  &:hover,
  &:focus {
    background-color: var(--mdf-color-primary-transparent-2);
  }
}

.mdf-checkbox::before {
  content: "";
  width: 0.8em;
  height: 0.8em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  box-shadow: inset 1em 1em var(--mdf-color-primary);
  background-color: CanvasText;
}

.mdf-checkbox:checked::before {
  transform: scale(1);
}

.mdf-checkbox:focus-visible {
  border: 2px solid var(--mdf-color-primary);
  outline: 2px solid var(--mdf-color-primary);
  outline-offset: 3px;

  &::before {
    box-shadow: inset 1em 1em var(--mdf-color-primary);
  }
}

.mdf-color-control {
  display: flex;
  flex-direction: column;
  width: 8rem;
}

.mdf-color-label {
  padding: 0.5rem;
  background-color: white;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.mdf-color {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 4rem;
  position: relative;
  z-index: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &:focus {
    border-radius: 0.25rem;
  }

  &::-webkit-color-swatch {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 2px solid black;
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
}

/* TABLES */
.mdf-td,
.mdf-th {
  padding: 0.5rem;
  border: 1px solid var(--mdf-color-secondary);
}

.mdf-th,
:nth-child(even) > .mdf-td {
  background-color: var(--mdf-color-secondary-transparent);
}

/* UTILITIES */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;