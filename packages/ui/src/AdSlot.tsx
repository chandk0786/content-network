import React from "react";

export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-8 rounded-3xl border border-gray-100 bg-linear-to-br from-gray-50 to-white p-5 shadow-sm">
      <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</div>
      <div className="mt-3 flex h-28 w-full items-center justify-center rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 text-sm text-gray-400 border border-gray-100">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Ad Slot
        </span>
      </div>
    </div>
  );
}