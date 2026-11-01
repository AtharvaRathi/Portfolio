// Match short language names at word boundaries (Go must not match MongoDB).
export function mentionsTechnology(text: string, technology: string) {
  const escaped = technology.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z]|$)`, "i").test(text);
}
