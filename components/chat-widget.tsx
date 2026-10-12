"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import type { UIMessage } from "ai";

function getTextContent(message: UIMessage): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => (p as { type: "text"; text: string }).text)
    .join("");
}

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpaceRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";
  const lastMessage = messages[messages.length - 1];
  const showLoading =
    status === "submitted" ||
    (status === "streaming" &&
      (!lastMessage || lastMessage.role !== "assistant" || !getTextContent(lastMessage)));

  const LOADING_WORDS = ["Thinking", "Looking up", "Searching", "Writing"];
  const [loadingIdx, setLoadingIdx] = useState(0);
  useEffect(() => {
    if (!isLoading) return;
    const t = setInterval(() => setLoadingIdx((i) => (i + 1) % LOADING_WORDS.length), 1200);
    return () => clearInterval(t);
  }, [isLoading]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== "user" || !containerRef.current || !scrollSpaceRef.current) return;
    const container = containerRef.current;
    const scrollSpace = scrollSpaceRef.current;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const els = container.querySelectorAll("[data-role='user']");
        const el = els[els.length - 1] as HTMLElement | undefined;
        if (!el) return;
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const promptOffset = container.scrollTop + elRect.top - containerRect.top - 12;
        const contentHeight = container.scrollHeight - scrollSpace.offsetHeight;
        const neededSpace = Math.max(0, promptOffset + container.clientHeight - contentHeight);
        scrollSpace.style.height = `${neededSpace}px`;
        container.scrollTop = promptOffset;
      });
    });
  }, [messages.length]);

  const handleSend = (text?: string) => {
    const msg = text ?? input;
    if (!msg.trim() || isLoading) return;
    sendMessage({ text: msg });
    setInput("");
  };

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!open && (
          <span
            aria-hidden="true"
            className="relative rounded-xl bg-black px-3 py-2 text-xs font-medium text-white shadow-lg after:absolute after:-right-1 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:bg-black"
          >
            Ask about Fulail
          </span>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close AI assistant" : "Ask about Fulail"}
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition-transform hover:scale-105 hover:bg-zinc-800"
        >
          <MessageCircle size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 flex max-h-[calc(100dvh-2rem)] w-[min(380px,calc(100vw-2rem))] flex-col rounded-2xl border border-zinc-100 bg-white shadow-2xl sm:bottom-6 sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-black px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">Ask about Fulail</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="flex h-[min(48vh,440px)] min-h-[260px] flex-col gap-4 overflow-y-auto overscroll-contain px-4 py-4">
            {messages.length === 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-center text-xs text-zinc-400">
                  Ask me anything about Fulail&apos;s experience, skills, or projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What tech stack does he use?",
                    "What is he working on now?",
                    "Is he open to work?",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 transition-colors hover:border-black hover:text-black"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                data-role={m.role}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                {m.role === "user" ? (
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900">
                    {getTextContent(m)}
                  </div>
                ) : (
                  <div className="max-w-[90%] text-sm leading-relaxed text-zinc-800 prose prose-sm prose-zinc max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:mb-2 [&>ul]:pl-4 [&>ol]:mb-2 [&>ol]:pl-4 [&>li]:mb-0.5 [&>strong]:font-semibold [&>h3]:font-semibold [&>h3]:text-zinc-900 [&>h3]:mb-1">
                    <ReactMarkdown
                      remarkPlugins={[remarkBreaks]}
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
                          >
                            {children}
                          </a>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-zinc-900">{children}</strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="my-1 list-disc pl-4 space-y-0.5">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="my-1 list-decimal pl-4 space-y-0.5">{children}</ol>
                        ),
                        li: ({ children }) => <li className="text-sm">{children}</li>,
                        p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                      }}
                    >
                      {getTextContent(m)}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            {showLoading && (
              <div className="flex justify-start">
                <span className="text-xs text-zinc-400 animate-pulse">
                  {LOADING_WORDS[loadingIdx]}…
                </span>
              </div>
            )}
            {error && (
              <p className="text-center text-xs text-red-500">Something went wrong. Try again.</p>
            )}
            {/* Gives the newest prompt room to scroll to the top before its reply streams. */}
            {messages.length > 0 && (
              <div ref={scrollSpaceRef} aria-hidden="true" className="shrink-0" />
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-zinc-100 px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              placeholder="Ask anything..."
              disabled={isLoading}
              className="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-900 disabled:opacity-50"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-opacity disabled:opacity-40 hover:bg-zinc-800"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
