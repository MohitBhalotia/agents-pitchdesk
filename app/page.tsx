"use client";
import { Suspense } from "react";
import { App } from "./components/App";
import Intelligence from "./components/Intelligence";
import { stsConfig } from "./lib/constants";
import Conversation from "./components/Conversation";
import { isMobile } from "react-device-detect";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
     

      {/* Main Content */}
      <main className="w-full flex flex-col sm:flex-row justify-center items-center h-full">
          {/* Left Panel - Voice Interface */}
          <div className="w-1/2 rounded-xl shadow-lg p-8">
            <div className="text-center mb-8 flex flex-col items-center">
              <h2 className="text-lg sm:text-4xl font-bold text-white mb-2">Pitch Desk</h2>
              <p className="text-gray-600">Interact with your AI Shark</p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="w-full max-w-md">
                <Intelligence />
              </div>

              <div className="w-full max-w-md">
                <Suspense>
                  <App
                    defaultStsConfig={stsConfig}
                    requiresUserActionToInitialize={isMobile}
                  />
                </Suspense>
              </div>
            </div>

          {/* Right Panel - Conversation */}

        </div>
          <div className="overflow-hidden flex-1 relative h-full w-full">
            <Conversation />
          </div>
      </main>
    </div>
  );
}
