import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export function useProjects() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["/api/projects"],
  });

  return {
    projects: projects as Project[] | undefined,
    isLoading,
    error,
  };
}
