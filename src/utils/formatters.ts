// Shared formatting utilities (safe for both server and client)

export function formatDataRate(mbps: number): string {
  if (mbps >= 1000) {
    return `${mbps / 1000} Gbps`;
  }
  return `${mbps} Mbps`;
}

// Minimal interface for isLegacy check
interface HasLegacyFields {
  notes?: string;
  confusion_points: string[];
}

export function isLegacy(cable: HasLegacyFields): boolean {
  const notesLower = cable.notes?.toLowerCase() || '';
  return (
    notesLower.includes('obsolete') ||
    notesLower.includes('legacy') ||
    notesLower.includes('phased out') ||
    cable.confusion_points.some(
      (p) =>
        p.toLowerCase().includes('obsolete') ||
        p.toLowerCase().includes('deprecated')
    )
  );
}
