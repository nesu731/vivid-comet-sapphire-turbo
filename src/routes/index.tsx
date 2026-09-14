import { createFileRoute } from "@tanstack/react-router";
import { SurveyApp } from "@/components/survey/SurveyApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SurveyApp />;
}
