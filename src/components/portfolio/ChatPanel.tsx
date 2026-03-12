import { useState } from "react";
import type { ProjectId } from "../../content/projects/schema";
import { chatProjects, getProjectById, openProject } from "../../content/projects/helpers";

interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  projectId?: ProjectId;
}

const SUGGESTED_PROMPTS = [
  { label: "Show me design systems work", filter: "Design Systems" },
  { label: "What conversational UI have you designed?", filter: "Conversational UI" },
  { label: "Show product design projects", filter: "Product Design" },
  { label: "Tell me about your process", filter: null },
];

function getResponseForPrompt(
  filter: string | null
): { text: string; projectId?: ProjectId } {
  if (filter === "Design Systems") {
    const project = chatProjects.find((p) => p.tags.includes("Design Systems"));
    return {
      text: `I've led design systems work focused on scalability and developer experience. Check out my component library work below.`,
      projectId: project?.id,
    };
  }

  if (filter === "Conversational UI") {
    const project = chatProjects.find((p) => p.tags.includes("Conversational UI"));
    return {
      text: `I specialize in designing AI-powered conversational experiences that feel natural and contextual. Here's a recent example.`,
      projectId: project?.id,
    };
  }

  if (filter === "Product Design") {
    const project = chatProjects.find((p) => p.tags.includes("Product Design"));
    return {
      text: `I focus on end-to-end product design from research to high-fidelity prototypes. Here's one of my favorite projects.`,
      projectId: project?.id,
    };
  }

  return {
    text: `My process starts with understanding user needs through research, then iterating on solutions through prototyping and testing. I work cross-functionally with engineering and product to ship high-quality experiences.`,
  };
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      content: "Hi! Ask me about my work or select a prompt below.",
    },
  ]);

  const handlePromptClick = (prompt: typeof SUGGESTED_PROMPTS[0]) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: prompt.label,
    };

    const response = getResponseForPrompt(prompt.filter);

    const assistantMessage: Message = {
      id: `assistant-${Date.now()}`,
      sender: "assistant",
      content: response.text,
      projectId: response.projectId,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
  };

  const handleOpenCaseStudy = (projectId: ProjectId) => {
    const project = getProjectById(projectId);
    if (project) {
      openProject(project);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto p-6">
      <div className="flex-1 overflow-y-auto space-y-4 mb-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{msg.content}</p>

              {msg.sender === "assistant" && msg.projectId && (
                <button
                  onClick={() => handleOpenCaseStudy(msg.projectId!)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 bg-white px-3 py-1.5 rounded border border-blue-200 hover:border-blue-300 transition-colors"
                >
                  Open case study (Figma)
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600 mb-3">Suggested prompts:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(prompt)}
              className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {prompt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}