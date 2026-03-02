import type { Phase, Node, Category } from '@/data/roadmap';

export function filterPhases(
  phases: Phase[],
  searchQuery: string,
  phaseIdFilter: string,
): Phase[] {
  const q = searchQuery.trim().toLowerCase();
  const hasQuery = q.length > 0;
  const hasPhaseFilter = phaseIdFilter.length > 0;

  let list = phases;
  if (hasPhaseFilter) list = list.filter((p) => p.phaseId === phaseIdFilter);

  function topicMatches(node: Node): boolean {
    if (!hasQuery) return true;
    const inTitle = node.nodeTitle.toLowerCase().includes(q);
    const inDesc = node.nodeDescription.toLowerCase().includes(q);
    const inResources = node.resources.some((r) => r.title.toLowerCase().includes(q));
    return inTitle || inDesc || inResources;
  }

  return list
    .map((phase): Phase => {
      const categories: Category[] = [];
      for (const cat of phase.categories) {
        const topics = cat.topics.filter(topicMatches);
        if (topics.length > 0) categories.push({ ...cat, topics });
      }
      return { ...phase, categories };
    })
    .filter((phase) => phase.categories.length > 0);
}
