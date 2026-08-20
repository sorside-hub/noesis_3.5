import React from 'react';
import { Plus, Database, Zap } from 'lucide-react';

interface EmptyStateProps {
  onCreateNote: () => void;
  onQuickCapture?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onCreateNote, onQuickCapture }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-bg-primary px-6 text-center select-none">
      {/* Icon & Vault Header */}
      <div className="w-14 h-14 rounded-2xl bg-bg-surface border border-border-default flex items-center justify-center text-text-primary mb-4 shadow-xs">
        <Database size={24} strokeWidth={1.75} />
      </div>

      <h2 className="text-xl font-bold text-text-heading tracking-tight mb-1.5 font-sans">
        Vault Noesis
      </h2>

      <p className="text-xs text-text-muted max-w-xs leading-relaxed mb-6">
        Pilih catatan dari sidebar atau mulai tangkap ide baru.
      </p>

      {/* Action Hub */}
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
        {/* New Note Button */}
        <button
          type="button"
          onClick={onCreateNote}
          className="flex flex-col items-start p-3 sm:p-3.5 rounded-xl bg-bg-surface hover:bg-bg-hover border border-border-default hover:border-border-subtle text-left transition-all duration-150 cursor-pointer group shadow-2xs"
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="w-7 h-7 rounded-lg bg-bg-primary border border-border-default flex items-center justify-center text-text-primary group-hover:scale-105 transition-transform">
              <Plus size={15} />
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-text-muted bg-bg-primary px-1.5 py-0.5 rounded border border-border-subtle">
              Ctrl+N
            </span>
          </div>
          <span className="text-xs font-semibold text-text-heading group-hover:text-text-primary">
            Catatan Baru
          </span>
          <span className="text-[11px] text-text-muted mt-0.5 line-clamp-1">
            Mulai lembar kosong
          </span>
        </button>

        {/* Quick Capture (00-Inbox) Button */}
        <button
          type="button"
          onClick={onQuickCapture || onCreateNote}
          className="flex flex-col items-start p-3 sm:p-3.5 rounded-xl bg-bg-surface hover:bg-bg-hover border border-border-default hover:border-border-subtle text-left transition-all duration-150 cursor-pointer group shadow-2xs relative overflow-hidden"
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="w-7 h-7 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
              <Zap size={15} />
            </div>
            <span className="text-[10px] font-medium text-accent-primary bg-accent-primary/10 px-1.5 py-0.5 rounded border border-accent-primary/20">
              00-Inbox
            </span>
          </div>
          <span className="text-xs font-semibold text-text-heading group-hover:text-text-primary">
            Quick Capture
          </span>
          <span className="text-[11px] text-text-muted mt-0.5 line-clamp-1">
            Auto simpan ke 00-Inbox
          </span>
        </button>
      </div>
    </div>
  );
};
