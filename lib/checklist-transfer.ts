export const CHECKLIST_STORAGE_KEY = "birzont-checklist-items";
export const CHECKLIST_UPDATED_EVENT = "birzont-checklist-updated";

export function saveChecklistItems(items: readonly string[]) {
  sessionStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(CHECKLIST_UPDATED_EVENT));
}

export function loadChecklistItems(): string[] {
  try {
    const raw = sessionStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}
