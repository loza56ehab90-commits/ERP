import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import * as XLSX from "xlsx";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  Bell,
  LogOut,
  Search,
  LayoutDashboard,
  FileText,
  Inbox,
  FolderKanban,
  Settings,
  Plus,
  RefreshCw,
  Download,
  Filter as FilterIcon,
  ChevronDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  PlayCircle,
  X,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Paperclip,
  UploadCloud,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Eye,
  Indent,
  Outdent,
  Archive,
  Menu,
  Moon,
  Sun,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import erpLogo from "@/assets/erp-logo2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Requests — ERP+ Customer Portal" },
      {
        name: "description",
        content:
          "Modern request tracker for the ERP+ Customer Portal. Submit clarifications, improvements, and issues in one place.",
      },
    ],
  }),
  component: RequestsPage,
});

/* ---------------- Types & mock data ---------------- */

type Status = "New" | "In Progress" | "Resolved" | "Closed";
type Classification = "Issue" | "CR" | "Clarification" | "Paid CR" | "Feedback" | "Improvement Request";

interface RequestRow {
  code: number;
  status: Status;
  classification: Classification;
  project: string;
  request: string;
  lastReply: string;
  arabicName: string;
  englishName: string;
  email: string;
  customerCode: string;
  clientEmail: string;
  client: string;
  priority: number | "";
  appName: string;
  closedEstimationTime: string;
  createdDate: string;
  createdBy: string;
}

const INITIAL_ROWS: RequestRow[] = [
  {
    code: 12256,
    status: "Closed",
    classification: "Improvement Request",
    project: "ERP PLUS",
    request:
      "عدم ظهور اى مشروع اركيف عند اضافته التيكت — bug appearing when adding a ticket to any Archive project.",
    lastReply: "تم الانتهاء من هذه التيكت — ticket has been completed.",
    arabicName: "أحمد رياض",
    englishName: "Ahmed R.",
    email: "ahmed@client.com",
    customerCode: "C-1042",
    clientEmail: "ops@client.com",
    client: "Vetara",
    priority: 3,
    appName: "Others",
    closedEstimationTime: "2026-06-10",
    createdDate: "2026-05-28",
    createdBy: "Ahmed R.",
  },
  {
    code: 12257,
    status: "In Progress",
    classification: "Improvement Request",
    project: "ERP PLUS",
    request:
      "أما فى حال وجود CR، لا يتم عرض تصنيف الـ (CR) إذا لم يكن لدى العميل فيديو ع… ",
    lastReply: "The ticket is currently pending and being delivered.",
    arabicName: "منى سعيد",
    englishName: "Mona S.",
    email: "mona@client.com",
    customerCode: "C-1043",
    clientEmail: "mona@client.com",
    client: "Vetara",
    priority: 5,
    appName: "CRM App",
    closedEstimationTime: "2026-07-15",
    createdDate: "2026-06-01",
    createdBy: "Mona S.",
  },
  {
    code: 12258,
    status: "New",
    classification: "Issue",
    project: "ERP PLUS",
    request: "تعديل هشتاجات العميل عمليتين — Please review client hashtags update flow.",
    lastReply: "The ticket is currently pending and being delivered.",
    arabicName: "خالد م.",
    englishName: "Khaled M.",
    email: "khaled@client.com",
    customerCode: "C-1044",
    clientEmail: "khaled@client.com",
    client: "Vetara",
    priority: 2,
    appName: "CRM App",
    closedEstimationTime: "",
    createdDate: "2026-06-20",
    createdBy: "Khaled M.",
  },
  {
    code: 12262,
    status: "In Progress",
    classification: "Improvement Request",
    project: "ERP PLUS",
    request:
      "مقترح تطوير فى بوابة العملاء لأضافه خدمات عمل استفتاء و يتم ظهوره مباشرة فى بواب…",
    lastReply: "تم الانتهاء من العمل على هذه التيكت — completed.",
    arabicName: "ليلى ح.",
    englishName: "Layla H.",
    email: "layla@client.com",
    customerCode: "C-1045",
    clientEmail: "layla@client.com",
    client: "Vetara",
    priority: 4,
    appName: "Others",
    closedEstimationTime: "2026-07-01",
    createdDate: "2026-06-15",
    createdBy: "Layla H.",
  },
  {
    code: 12286,
    status: "Resolved",
    classification: "Improvement Request",
    project: "ERP PLUS",
    request:
      "In PM (Task Assignment) when the remaining hours for the phase is 2 hours or les…",
    lastReply:
      "تم الانتهاء من التجربة وتسليم الطلب. في حال عدم وجود رد خلال 3 أيام عمل، سيتم اعتماده مباشرة.",
    arabicName: "سارة ع.",
    englishName: "Sara A.",
    email: "sara@client.com",
    customerCode: "C-1046",
    clientEmail: "sara@client.com",
    client: "Vetara",
    priority: 6,
    appName: "PM App",
    closedEstimationTime: "2026-06-25",
    createdDate: "2026-06-05",
    createdBy: "Sara A.",
  },
  {
    code: 12301,
    status: "New",
    classification: "Clarification",
    project: "ERP PLUS",
    request: "Need clarification on the invoice numbering sequence after fiscal year rollover.",
    lastReply: "Awaiting response from finance team.",
    arabicName: "يوسف ن.",
    englishName: "Youssef N.",
    email: "youssef@client.com",
    customerCode: "C-1047",
    clientEmail: "youssef@client.com",
    client: "Vetara",
    priority: 7,
    appName: "Others",
    closedEstimationTime: "",
    createdDate: "2026-06-28",
    createdBy: "Youssef N.",
  },
  {
    code: 12312,
    status: "In Progress",
    classification: "Issue",
    project: "ERP+ Cloud Vetara Iraq",
    request: "Attendance app fails to sync check-out events when device is offline for >2h.",
    lastReply: "Under investigation — reproduced on Android 14.",
    arabicName: "ريم ط.",
    englishName: "Reem T.",
    email: "reem@client.com",
    customerCode: "C-1048",
    clientEmail: "reem@client.com",
    client: "Vetara Iraq",
    priority: 8,
    appName: "Attendance App",
    closedEstimationTime: "2026-07-20",
    createdDate: "2026-07-02",
    createdBy: "Reem T.",
  },
];

const CLASSIFICATION_OPTIONS = ["Issue", "CR", "Clarification", "Paid CR", "Feedback"] as const;
const APP_NAME_OPTIONS = [
  "Buildings Finance Fund",
  "Construction",
  "Attendance App",
  "CRM App",
  "Aqaraty App",
  "PM App",
  "Others",
] as const;
const PROJECT_OPTIONS = [
  "Administration",
  "ERP PLUS",
  "ERP+ SERVER",
  "WhistleBlowing",
  "ERP+ Cloud Vetara Iraq",
] as const;

interface ColumnDef {
  key: keyof RequestRow;
  label: string;
  defaultVisible: boolean;
  width?: string;
}

const COLUMNS: ColumnDef[] = [
  { key: "code", label: "Code", defaultVisible: true, width: "w-24" },
  { key: "arabicName", label: "Arabic Name", defaultVisible: false, width: "w-40" },
  { key: "englishName", label: "English Name", defaultVisible: false, width: "w-40" },
  { key: "email", label: "Email", defaultVisible: false, width: "w-48" },
  { key: "customerCode", label: "Customer Code", defaultVisible: false, width: "w-32" },
  { key: "clientEmail", label: "Client Email", defaultVisible: false, width: "w-48" },
  { key: "classification", label: "Classification", defaultVisible: true, width: "w-48" },
  { key: "project", label: "Project", defaultVisible: true, width: "w-40" },
  { key: "client", label: "Client", defaultVisible: false, width: "w-32" },
  { key: "request", label: "Request", defaultVisible: true },
  { key: "lastReply", label: "Last Reply", defaultVisible: true, width: "w-64" },
  { key: "priority", label: "Priority", defaultVisible: false, width: "w-24" },
  { key: "appName", label: "App Name", defaultVisible: true, width: "w-36" },
  { key: "closedEstimationTime", label: "Closed Estimation Time", defaultVisible: true, width: "w-40" },
  { key: "createdDate", label: "Created Date", defaultVisible: true, width: "w-32" },
  { key: "createdBy", label: "Created By", defaultVisible: true, width: "w-36" },
];

const DEFAULT_VISIBILITY: Record<string, boolean> = Object.fromEntries(
  COLUMNS.map((c) => [c.key, c.defaultVisible]),
);

/* ---------------- Dark mode hook ---------------- */

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return [dark, setDark] as const;
}

/* ---------------- Premium Status Badge ---------------- */

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, { cls: string; dotCls: string; label: string }> = {
    New: {
      cls: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60",
      dotCls: "status-dot-new bg-blue-500",
      label: "New",
    },
    "In Progress": {
      cls: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
      dotCls: "status-dot-progress bg-amber-500",
      label: "In Progress",
    },
    Resolved: {
      cls: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
      dotCls: "status-dot-resolved bg-emerald-500",
      label: "Resolved",
    },
    Closed: {
      cls: "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-700/60",
      dotCls: "status-dot-closed bg-slate-400",
      label: "Closed",
    },
  };
  const { cls, dotCls, label } = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        cls,
      )}
    >
      <span className={cn("status-dot", dotCls)} />
      {label}
    </span>
  );
}

/* ---------------- Priority helpers ---------------- */

function priorityLabel(priority: number | ""): {
  level: "Critical" | "High" | "Medium" | "Low" | null;
  cls: string;
  dotCls: string;
} {
  if (priority === "" || priority === undefined || priority === null) {
    return { level: null, cls: "", dotCls: "" };
  }
  const p = Number(priority);
  if (p <= 2) return {
    level: "Critical",
    cls: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60",
    dotCls: "bg-red-500",
  };
  if (p <= 4) return {
    level: "High",
    cls: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60",
    dotCls: "bg-orange-500",
  };
  if (p <= 6) return {
    level: "Medium",
    cls: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
    dotCls: "bg-amber-500",
  };
  return {
    level: "Low",
    cls: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
    dotCls: "bg-emerald-500",
  };
}

function PriorityStatusBadge({ row }: { row: { priority: number | ""; status: Status } }) {
  const { level, cls, dotCls } = priorityLabel(row.priority);

  if (!level) {
    // No priority set — fall back to workflow status
    return <StatusBadge status={row.status} />;
  }

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
      cls,
    )}>
      <span className={cn("status-dot", dotCls)} />
      <span className="font-bold tabular-nums">{row.priority}</span>
      <span className="opacity-70">·</span>
      {level}
    </span>
  );
}

/* ---------------- Sidebar ---------------- */

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Invoices", icon: FileText, href: "#" },
  { label: "Requests", icon: Inbox, href: "#" },
  { label: "Project", icon: FolderKanban, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

function Sidebar({
  open,
  onClose,
  currentTab,
  onTabChange,
}: {
  open: boolean;
  onClose: () => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <>
      {/* Mobile/tablet backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-sidebar text-sidebar-foreground",
          "transition-transform duration-300 ease-in-out",
          "lg:static lg:z-auto lg:w-64 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          boxShadow: "4px 0 32px -8px oklch(0 0 0 / 0.4), 1px 0 0 0 oklch(1 0 0 / 0.06)",
        }}
      >
        {/* Subtle top gradient accent */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, oklch(0.60 0.20 258 / 0.18) 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div className="relative flex items-center gap-3 px-5 py-5 border-b border-sidebar-border/60">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1 shrink-0 logo-glow"
          >
            <img src={erpLogo} alt="ERP+ Mobile Application" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight flex-1 min-w-0">
            <div className="font-display font-bold text-sm text-sidebar-foreground">ERP+</div>
            <div className="text-[10px] tracking-[0.18em] text-sidebar-foreground/50 uppercase mt-0.5">
              Customer Portal
            </div>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden ml-auto flex h-8 w-8 items-center justify-center rounded-full text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav section label */}
        <div className="px-5 pt-5 pb-1">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sidebar-foreground/35">
            Navigation
          </span>
        </div>

        <nav className="px-3 py-1 flex-1">
          <ul className="space-y-0.5">
            {NAV.map((item, i) => {
              const active = item.label === currentTab;
              return (
                <li key={item.label} className={`animate-slide-in-left delay-${[100, 150, 200, 250, 300][i] ?? 300}`}>
                  <button
                    onClick={() => {
                      onTabChange(item.label);
                      onClose();
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group text-left cursor-pointer",
                      active
                        ? "bg-sidebar-primary/20 text-sidebar-foreground border border-sidebar-primary/25 nav-glow"
                        : "text-sidebar-foreground/65 hover:bg-sidebar-accent/80 hover:text-sidebar-foreground hover:translate-x-1",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200",
                        active
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                          : "text-sidebar-foreground/50 group-hover:bg-sidebar-accent group-hover:text-sidebar-foreground/80",
                      )}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    {item.label}
                    {active && (
                      <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-sidebar-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom divider line */}
        <div className="mx-5 sidebar-gradient-line" />

        {/* User section */}
        <div className="px-4 py-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold shrink-0">
            AR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-sidebar-foreground truncate">Ahmed R.</div>
            <div className="text-[10px] text-sidebar-foreground/45 truncate">Client · ERP PLUS</div>
          </div>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg text-sidebar-foreground/45 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
            aria-label="Log out"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="px-5 pb-4 text-[10px] text-sidebar-foreground/35 flex items-center gap-1.5">
          <Zap className="h-2.5 w-2.5" />
          v4.2.1 · © ERP+ Cloud
        </div>
      </aside>
    </>
  );
}

/* ---------------- Top bar ---------------- */

function TopBar({
  onSearch,
  searchValue,
  onMenuClick,
  dark,
  onToggleDark,
}: {
  onSearch: (v: string) => void;
  searchValue: string;
  onMenuClick: () => void;
  dark: boolean;
  onToggleDark: () => void;
}) {
  return (
    <header
      className="sticky top-0 z-20 border-b border-border"
      style={{
        background: "oklch(var(--background) / 0.85)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
      }}
    >
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        {/* Hamburger — mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="global-search"
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search requests…"
            className="pl-9 h-9 bg-secondary/70 border-transparent focus-visible:bg-background focus-visible:border-border text-sm rounded-xl"
          />
          {searchValue && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="ml-auto flex items-center gap-1">
          {/* Dark mode toggle */}
          <button
            id="dark-mode-toggle"
            onClick={onToggleDark}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Notifications */}
          <Button
            id="notifications-btn"
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="relative rounded-xl h-9 w-9"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent notif-dot" />
          </Button>

          <div className="mx-2 h-6 w-px bg-border" />

          {/* User */}
          <div className="flex items-center gap-2.5 pr-1">
            <Avatar className="h-8 w-8 ring-2 ring-border ring-offset-1 ring-offset-background">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold">
                AR
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-sm leading-tight">
              <div className="font-semibold text-foreground">Ahmed R.</div>
              <div className="text-xs text-muted-foreground">Client · ERP PLUS</div>
            </div>
          </div>

          <Button variant="ghost" size="icon" aria-label="Log out" className="rounded-xl h-9 w-9 text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- KPI stat tiles ---------------- */

function StatTile({
  label,
  value,
  hint,
  icon: Icon,
  tone,
  progress,
}: {
  label: string;
  value: string;
  hint: string;
  icon: React.ElementType;
  tone: "primary" | "info" | "warning" | "success";
  progress?: number;
}) {
  return (
    <div className="card-hover rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] group cursor-default relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            tone === "primary"
              ? "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.20 258 / 0.05) 0%, transparent 70%)"
              : tone === "warning"
              ? "radial-gradient(ellipse at 80% 20%, oklch(0.73 0.17 65 / 0.05) 0%, transparent 70%)"
              : tone === "success"
              ? "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.16 155 / 0.05) 0%, transparent 70%)"
              : "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.20 258 / 0.05) 0%, transparent 70%)",
        }}
      />
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {label}
          </div>
          <div className="animate-count-pop mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
            {value}
          </div>
          <div className="mt-1.5 text-xs text-muted-foreground flex items-center gap-1">
            <TrendingUp className="h-3 w-3 transition-transform group-hover:translate-y-[-2px] group-hover:text-accent" />
            {hint}
          </div>
        </div>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
            `stat-icon-${tone}`,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {/* Progress bar */}
      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full sparkline-bar transition-all duration-700"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Column visibility picker ---------------- */

function ColumnVisibilityMenu({
  visibility,
  setVisibility,
  children,
}: {
  visibility: Record<string, boolean>;
  setVisibility: (v: Record<string, boolean>) => void;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60 max-h-[70vh] overflow-y-auto">
        <DropdownMenuLabel>Display columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {COLUMNS.map((c) => (
          <DropdownMenuCheckboxItem
            key={c.key}
            checked={visibility[c.key]}
            onCheckedChange={(v) => setVisibility({ ...visibility, [c.key]: !!v })}
            onSelect={(e) => e.preventDefault()}
          >
            {c.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ---------------- Main page ---------------- */

type FilterKey = "All" | "Active" | "Archived";

function RequestsPage() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [rows, setRows] = useState<RequestRow[]>(INITIAL_ROWS);
  const [filter, setFilter] = useState<FilterKey>("Active");
  const [openAdd, setOpenAdd] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [colFilters, setColFilters] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [visibility, setVisibility] = useState<Record<string, boolean>>(DEFAULT_VISIBILITY);
  const [sort, setSort] = useState<{ key: keyof RequestRow; dir: "asc" | "desc" } | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [attachmentsRow, setAttachmentsRow] = useState<RequestRow | null>(null);
  const [replyRow, setReplyRow] = useState<RequestRow | null>(null);
  const [dark, setDark] = useDarkMode();

  // Close sidebar on desktop resize
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setSidebarOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Reset page on filter changes
  useEffect(() => {
    setPage(1);
  }, [filter, colFilters, pageSize, search, refreshKey]);

  const filtered = useMemo(() => {
    let out = rows.filter((r) => {
      if (filter === "Active" && !(r.status === "New" || r.status === "In Progress")) return false;
      if (filter === "Archived" && r.status !== "Closed") return false;
      for (const [k, v] of Object.entries(colFilters)) {
        if (!v) continue;
        const val = String((r as unknown as Record<string, unknown>)[k] ?? "").toLowerCase();
        if (!val.includes(v.toLowerCase())) return false;
      }
      if (search) {
        const hay = Object.values(r).join(" ").toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
      }
      return true;
    });
    if (sort) {
      const { key, dir } = sort;
      out = [...out].sort((a, b) => {
        const av = a[key];
        const bv = b[key];
        if (typeof av === "number" && typeof bv === "number") {
          return dir === "asc" ? av - bv : bv - av;
        }
        return dir === "asc"
          ? String(av ?? "").localeCompare(String(bv ?? ""))
          : String(bv ?? "").localeCompare(String(av ?? ""));
      });
    }
    void refreshKey;
    return out;
  }, [rows, filter, colFilters, sort, search, refreshKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(pageStart, pageStart + pageSize);

  const totalCount = rows.length;
  const activeCount = rows.filter((r) => r.status === "New" || r.status === "In Progress").length;
  const archivedCount = rows.filter((r) => r.status === "Closed").length;
  const resolvedCount = rows.filter((r) => r.status === "Resolved").length;

  const visibleColumns = COLUMNS.filter((c) => visibility[c.key]);

  const handleExport = () => {
    const data = filtered.map((r) => {
      const out: Record<string, unknown> = {};
      for (const c of visibleColumns) out[c.label] = r[c.key];
      return out;
    });
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Requests");
    XLSX.writeFile(wb, `requests-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleAddRequest = (r: Omit<RequestRow, "code" | "createdDate" | "createdBy" | "status">) => {
    const nextCode = Math.max(...rows.map((x) => x.code)) + 1;
    // Derive initial workflow status from priority: high priority → In Progress, else New
    const p = Number(r.priority);
    const derivedStatus: Status =
      r.priority !== "" && p <= 3 ? "In Progress" : "New";
    setRows((prev) => [
      {
        ...r,
        code: nextCode,
        status: derivedStatus,
        createdDate: new Date().toISOString().slice(0, 10),
        createdBy: "Ahmed R.",
      },
      ...prev,
    ]);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshKey((k) => k + 1);
      setRefreshing(false);
    }, 600);
  };

  const setColSort = (key: keyof RequestRow, dir: "asc" | "desc") => setSort({ key, dir });

  // ---------------- Views ----------------

  const classificationData = useMemo(() => {
    const counts: Record<string, number> = {};
    rows.forEach((r) => {
      counts[r.classification] = (counts[r.classification] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({
      name,
      value,
    }));
  }, [rows]);

  const trendData = useMemo(() => [
    { name: "Aug 02", count: 2 },
    { name: "Aug 03", count: 3 },
    { name: "Aug 04", count: 4 },
    { name: "Aug 05", count: 2 },
    { name: "Aug 06", count: 6 },
    { name: "Aug 07", count: 5 },
    { name: "Aug 08", count: rows.length },
  ], [rows.length]);

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary to-accent/80 p-6 md:p-8 text-white shadow-xl animate-fade-up">
        <div className="absolute top-0 right-0 h-40 w-40 pointer-events-none opacity-20 bg-white rounded-full filter blur-xl transform translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 right-10 h-32 w-32 pointer-events-none opacity-10 bg-white rounded-full filter blur-lg transform translate-y-10" />
        
        <div className="relative z-10 max-w-lg space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-amber-300" />
            Portal Status: Active
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
            Welcome back, Ahmed R.! 👋
          </h2>
          <p className="text-sm text-white/85 leading-relaxed">
            All system integrations are running operational. You have <span className="font-semibold text-amber-300">{activeCount} pending requests</span> awaiting team updates or confirmation.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => { setCurrentTab("Requests"); setFilter("All"); }}
          className="text-left w-full focus:outline-none cursor-pointer"
        >
          <StatTile
            label="Total Requests"
            value={String(totalCount)}
            hint="in your workspace"
            icon={Inbox}
            tone="primary"
            progress={(totalCount / 20) * 100}
          />
        </button>
        <button
          onClick={() => { setCurrentTab("Requests"); setFilter("Active"); }}
          className="text-left w-full focus:outline-none cursor-pointer"
        >
          <StatTile
            label="Active Requests"
            value={String(activeCount)}
            hint="team working on them"
            icon={Clock}
            tone="warning"
            progress={(activeCount / totalCount) * 100}
          />
        </button>
        <button
          onClick={() => { setCurrentTab("Requests"); setFilter("All"); }}
          className="text-left w-full focus:outline-none cursor-pointer"
        >
          <StatTile
            label="Resolved"
            value={String(resolvedCount)}
            hint="awaiting confirmation"
            icon={Sparkles}
            tone="info"
            progress={(resolvedCount / totalCount) * 100}
          />
        </button>
        <button
          onClick={() => { setCurrentTab("Requests"); setFilter("Archived"); }}
          className="text-left w-full focus:outline-none cursor-pointer"
        >
          <StatTile
            label="Archived"
            value={String(archivedCount)}
            hint="closed & done"
            icon={CheckCircle2}
            tone="success"
            progress={(archivedCount / totalCount) * 100}
          />
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Analytics Charts (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Requests Trend Chart */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-foreground">Request Activity Trend</h3>
                <p className="text-xs text-muted-foreground">Volume of requests submitted over the last 7 days</p>
              </div>
              <span className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-2.5 py-1">
                Realtime Sync
              </span>
            </div>

            <div className="h-64 w-full">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.60 0.20 258)" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="oklch(0.60 0.20 258)" stopOpacity={0.01} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      allowDecimals={false}
                    />
                    <ChartTooltip
                      contentStyle={{
                        background: "oklch(var(--card))",
                        borderColor: "oklch(var(--border))",
                        borderRadius: "12px",
                        fontSize: "12px",
                        color: "oklch(var(--foreground))",
                        boxShadow: "0 4px 12px oklch(0 0 0 / 0.08)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="count"
                      stroke="oklch(0.60 0.20 258)"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorTickets)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
                  Loading charts...
                </div>
              )}
            </div>
          </div>

          {/* Classification Distribution list */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] space-y-4">
            <div>
              <h3 className="font-display font-bold text-base text-foreground">Classification Distribution</h3>
              <p className="text-xs text-muted-foreground">Breakdown of support tickets by type</p>
            </div>
            
            <div className="space-y-3.5">
              {classificationData.map((item, idx) => {
                const percentage = Math.round((item.value / totalCount) * 100) || 0;
                const colors = [
                  "bg-blue-500 dark:bg-blue-600",
                  "bg-purple-500 dark:bg-purple-600",
                  "bg-emerald-500 dark:bg-emerald-600",
                  "bg-amber-500 dark:bg-amber-600",
                  "bg-rose-500 dark:bg-rose-600",
                ];
                const barColor = colors[idx % colors.length];
                
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-muted-foreground">{item.value} ({percentage}%)</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all duration-500", barColor)} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side Widgets (1/3 width) */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] space-y-4">
            <h3 className="font-display font-bold text-base text-foreground">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="rounded-xl flex flex-col items-center justify-center p-4 h-auto hover:bg-secondary/60 hover:text-accent gap-2 border-border/80 text-xs font-semibold transition cursor-pointer"
                onClick={() => setOpenAdd(true)}
              >
                <Plus className="h-5 w-5 text-accent" />
                Add Request
              </Button>
              <Button
                variant="outline"
                className="rounded-xl flex flex-col items-center justify-center p-4 h-auto hover:bg-secondary/60 hover:text-accent gap-2 border-border/80 text-xs font-semibold transition cursor-pointer"
                onClick={handleExport}
              >
                <Download className="h-5 w-5 text-accent" />
                Export XLS
              </Button>
            </div>
          </div>

          {/* Recent Timeline activity */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] space-y-4">
            <div>
              <h3 className="font-display font-bold text-base text-foreground">Recent Activity Feed</h3>
              <p className="text-xs text-muted-foreground">Latest replies from ERP+ engineers</p>
            </div>

            <div className="relative">
              {rows.slice(0, 3).map((r) => (
                <div key={r.code} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-foreground">Ticket #{r.code}</span>
                      <span className="text-muted-foreground text-[10px]">{r.createdDate}</span>
                    </div>
                    <p className="text-xs text-foreground/80 line-clamp-2 leading-relaxed" dir="auto">
                      {r.lastReply !== "—" ? r.lastReply : r.request}
                    </p>
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="inline-flex items-center rounded-full bg-secondary/80 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground border border-border/60">
                        {r.status}
                      </span>
                      <button
                        onClick={() => setReplyRow(r)}
                        className="text-[10px] text-accent font-semibold hover:underline cursor-pointer"
                      >
                        Reply &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health indicator checklist */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] space-y-4">
            <h3 className="font-display font-bold text-base text-foreground">Live App Status</h3>
            <div className="space-y-3">
              {[
                { name: "CRM App Server", desc: "Syncing data", status: "online" },
                { name: "PM Application", desc: "Operational", status: "online" },
                { name: "Attendance Api Gateway", desc: "Operational", status: "online" },
              ].map((app) => (
                <div key={app.name} className="flex items-center justify-between p-2 rounded-xl bg-secondary/35 border border-border/40">
                  <div className="flex items-center gap-2.5">
                    <span className="health-pulse shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-tight">{app.name}</p>
                      <p className="text-[10px] text-muted-foreground">{app.desc}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md">
                    Live
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const [invoiceTab, setInvoiceTab] = useState<"current" | "previous">("current");
  const [invoicePage, setInvoicePage] = useState(1);
  const invoicePageSize = 5;

  const currentInvoices = [
    { inv: "INV-2026-081", date: "2026-08-01", desc: "Paid CR - hashtag updater module", status: "Paid", amt: "$1,250.00" },
    { inv: "INV-2026-079", date: "2026-07-15", desc: "CRM App customization request", status: "Paid", amt: "$850.00" },
    { inv: "INV-2026-072", date: "2026-06-20", desc: "PM Application setup & support", status: "Pending", amt: "$1,500.00" },
    { inv: "INV-2026-068", date: "2026-05-10", desc: "ERP+ Core module upgrade", status: "Pending", amt: "$2,100.00" },
    { inv: "INV-2026-061", date: "2026-04-20", desc: "Attendance app integration", status: "Paid", amt: "$750.00" },
    { inv: "INV-2026-055", date: "2026-03-15", desc: "Aqaraty portal setup", status: "Pending", amt: "$1,800.00" },
  ];
  const previousInvoices = [
    { inv: "INV-2025-210", date: "2025-12-18", desc: "Q4 support & maintenance", status: "Paid", amt: "$3,000.00" },
    { inv: "INV-2025-190", date: "2025-11-01", desc: "ERP module customization", status: "Paid", amt: "$1,650.00" },
    { inv: "INV-2025-174", date: "2025-09-25", desc: "Onboarding training sessions", status: "Paid", amt: "$900.00" },
    { inv: "INV-2025-155", date: "2025-08-10", desc: "CRM annual license fee", status: "Paid", amt: "$4,200.00" },
    { inv: "INV-2025-132", date: "2025-06-30", desc: "PM portal setup", status: "Paid", amt: "$1,350.00" },
  ];

  const renderInvoices = () => {
    const invoiceData = invoiceTab === "current" ? currentInvoices : previousInvoices;
    const totalInvPages = Math.max(1, Math.ceil(invoiceData.length / invoicePageSize));
    const invStart = (invoicePage - 1) * invoicePageSize;
    const pagedInv = invoiceData.slice(invStart, invStart + invoicePageSize);

    return (
      <div className="space-y-6 animate-fade-up">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Invoice History</h2>
          <p className="text-sm text-muted-foreground">Review billing reports, charges, and paid receipts</p>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border bg-secondary/30">
            {(["current", "previous"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setInvoiceTab(tab); setInvoicePage(1); }}
                className={cn(
                  "px-6 py-3.5 text-sm font-semibold capitalize transition-all duration-200 border-b-2 cursor-pointer",
                  invoiceTab === tab
                    ? "border-accent text-accent bg-card"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {tab === "current" ? "Current Invoices" : "Previous Invoices"}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border table-header-gradient text-left text-xs uppercase tracking-wider text-muted-foreground/80">
                  <th className="px-5 py-3.5 font-semibold">Invoice No</th>
                  <th className="px-5 py-3.5 font-semibold">Billing Date</th>
                  <th className="px-5 py-3.5 font-semibold">Description</th>
                  <th className="px-5 py-3.5 font-semibold">Status</th>
                  <th className="px-5 py-3.5 font-semibold text-right">Amount</th>
                  <th className="px-5 py-3.5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {pagedInv.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-16 text-center">
                      <div className="flex flex-col items-center gap-3 text-muted-foreground">
                        <FileText className="h-10 w-10 opacity-30" />
                        <p className="text-sm font-medium">There Is No Data To Display</p>
                      </div>
                    </td>
                  </tr>
                ) : pagedInv.map((i) => (
                  <tr key={i.inv} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-5 py-4 font-mono font-semibold text-xs text-foreground">{i.inv}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">{i.date}</td>
                    <td className="px-5 py-4 text-xs text-foreground/90 font-medium">{i.desc}</td>
                    <td className="px-5 py-4">
                      <span className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border",
                        i.status === "Paid"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60"
                          : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60"
                      )}>
                        {i.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-right text-foreground">{i.amt}</td>
                    <td className="px-5 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg text-muted-foreground hover:text-foreground">
                        <Download className="h-3.5 w-3.5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-3 border-t border-border bg-secondary/20">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg cursor-pointer" disabled={invoicePage === 1} onClick={() => setInvoicePage(1)}>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg cursor-pointer" disabled={invoicePage === 1} onClick={() => setInvoicePage((p) => Math.max(1, p - 1))}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-card border border-border text-xs font-bold text-foreground">
                {invoicePage}
              </span>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg cursor-pointer" disabled={invoicePage === totalInvPages} onClick={() => setInvoicePage((p) => Math.min(totalInvPages, p + 1))}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg cursor-pointer" disabled={invoicePage === totalInvPages} onClick={() => setInvoicePage(totalInvPages)}>
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{invoiceData.length}</span> items per page
            </span>
            <span className="ml-auto text-xs text-destructive font-semibold">
              {invoiceData.length === 0 ? "There Is No Data To Display" : `Showing ${invStart + 1}–${Math.min(invStart + invoicePageSize, invoiceData.length)} of ${invoiceData.length}`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const [projectName, setProjectName] = useState("");
  const [projectView, setProjectView] = useState<"Day" | "Week" | "Month">("Week");
  const [showProjectTasks, setShowProjectTasks] = useState(false);

  const projectList = ["ERP PLUS Core", "CRM App Platform", "Attendance Mobile Gateway", "Aqaraty Portal"];

  const projectTasks = [
    { id: 1, title: "Homepage redesign", status: "In Progress", plannedHours: 16, employee: "Ahmed R.", quantity: 3, achievedQty: 2, numHours: 10, worked: "62.5%" },
    { id: 2, title: "API integration layer", status: "Completed", plannedHours: 24, employee: "Sara M.", quantity: 5, achievedQty: 5, numHours: 24, worked: "100%" },
    { id: 3, title: "DB schema migration", status: "Pending", plannedHours: 8, employee: "Karim T.", quantity: 2, achievedQty: 0, numHours: 0, worked: "0%" },
    { id: 4, title: "Notification service", status: "In Progress", plannedHours: 12, employee: "Ahmed R.", quantity: 4, achievedQty: 1, numHours: 3, worked: "25%" },
    { id: 5, title: "QA & testing cycle", status: "Pending", plannedHours: 20, employee: "Nadia O.", quantity: 6, achievedQty: 0, numHours: 0, worked: "0%" },
  ];

  const renderProjects = () => (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">Project Tasks</h2>
        <p className="text-sm text-muted-foreground">Track task progress, planned hours, and employee performance across projects</p>
      </div>

      {/* Project selector + controls */}
      <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
        <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-border bg-secondary/20">
          <div className="flex items-center gap-2 flex-1 min-w-48">
            <label className="text-xs font-semibold text-muted-foreground whitespace-nowrap">Project Name</label>
            <select
              value={projectName}
              onChange={(e) => { setProjectName(e.target.value); setShowProjectTasks(false); }}
              className="flex-1 h-9 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition cursor-pointer"
            >
              <option value="">— Select a project —</option>
              {projectList.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <Button
            className="btn-glow gap-1.5 rounded-xl h-9 px-5 cursor-pointer"
            onClick={() => setShowProjectTasks(!!projectName)}
            disabled={!projectName}
          >
            Show
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 px-5 py-3 border-b border-border">
          <button
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
            onClick={() => {
              if (!showProjectTasks) return;
              // export placeholder
              alert("Exporting to PDF…");
            }}
          >
            <Download className="h-3.5 w-3.5" />
            Export to PDF
          </button>
          <div className="ml-auto inline-flex rounded-xl bg-secondary/80 p-1 border border-border/40">
            {(["Day", "Week", "Month"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setProjectView(v)}
                className={cn(
                  "px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer",
                  projectView === v
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Task table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border table-header-gradient text-left text-xs uppercase tracking-wider text-muted-foreground/80">
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Planned Hours</th>
                <th className="px-4 py-3 font-semibold">Employee Name</th>
                <th className="px-4 py-3 font-semibold">Quantity</th>
                <th className="px-4 py-3 font-semibold">Achieved Qty</th>
                <th className="px-4 py-3 font-semibold">No. of Hours</th>
                <th className="px-4 py-3 font-semibold">Worked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {!showProjectTasks ? (
                <tr>
                  <td colSpan={9} className="px-4 py-16 text-center">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <FolderKanban className="h-10 w-10 opacity-30" />
                      <p className="text-sm font-medium">Select a project and click Show to view tasks</p>
                    </div>
                  </td>
                </tr>
              ) : projectTasks.map((t) => (
                <tr key={t.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground">{t.id}</td>
                  <td className="px-4 py-3.5 text-sm font-medium text-foreground">{t.title}</td>
                  <td className="px-4 py-3.5">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border",
                      t.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60"
                        : t.status === "In Progress"
                        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60"
                        : "bg-secondary text-muted-foreground border-border"
                    )}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-foreground/80">{t.plannedHours}h</td>
                  <td className="px-4 py-3.5 text-xs text-foreground/80">{t.employee}</td>
                  <td className="px-4 py-3.5 text-xs text-foreground/80">{t.quantity}</td>
                  <td className="px-4 py-3.5 text-xs text-foreground/80">{t.achievedQty}</td>
                  <td className="px-4 py-3.5 text-xs text-foreground/80">{t.numHours}h</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: t.worked }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-foreground">{t.worked}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const [settingsPwCurrent, setSettingsPwCurrent] = useState("");
  const [settingsPwNew, setSettingsPwNew] = useState("");
  const [settingsPwConfirm, setSettingsPwConfirm] = useState("");
  const [settingsPwMsg, setSettingsPwMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChangePassword = () => {
    if (!settingsPwCurrent || !settingsPwNew || !settingsPwConfirm) {
      setSettingsPwMsg({ type: "error", text: "Please fill in all password fields." });
      return;
    }
    if (settingsPwNew !== settingsPwConfirm) {
      setSettingsPwMsg({ type: "error", text: "New password and confirm password do not match." });
      return;
    }
    if (settingsPwNew.length < 8) {
      setSettingsPwMsg({ type: "error", text: "Password must be at least 8 characters." });
      return;
    }
    setSettingsPwMsg({ type: "success", text: "Password changed successfully." });
    setSettingsPwCurrent(""); setSettingsPwNew(""); setSettingsPwConfirm("");
    setTimeout(() => setSettingsPwMsg(null), 3500);
  };

  const renderSettings = () => (
    <div className="space-y-6 animate-fade-up max-w-xl">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight">Portal Configuration</h2>
        <p className="text-sm text-muted-foreground">Configure notifications, security credentials, and preferences</p>
      </div>

      {/* Preferences */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider text-muted-foreground/80">Preferences</h3>
          
          <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 border border-border/50">
            <div>
              <p className="text-xs font-semibold text-foreground">Email notifications</p>
              <p className="text-[10px] text-muted-foreground">Receive support alerts on reply updates</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border text-accent focus:ring-ring cursor-pointer" />
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 border border-border/50">
            <div>
              <p className="text-xs font-semibold text-foreground">SMS Alerts</p>
              <p className="text-[10px] text-muted-foreground">Receive texts for priority 1 issues</p>
            </div>
            <input type="checkbox" className="h-4 w-4 rounded border-border text-accent focus:ring-ring cursor-pointer" />
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 border border-border/50">
            <div>
              <p className="text-xs font-semibold text-foreground">Dark mode preference</p>
              <p className="text-[10px] text-muted-foreground">Enables dark system themes</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDark((d) => !d)}
              className="h-8 rounded-lg text-xs cursor-pointer"
            >
              {dark ? "Switch Light" : "Switch Dark"}
            </Button>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-border/60">
          <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider text-muted-foreground/80">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-semibold text-muted-foreground uppercase">English name</Label>
              <Input defaultValue="Ahmed R." readOnly className="bg-secondary/60 rounded-xl" />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-semibold text-muted-foreground uppercase">Email address</Label>
              <Input defaultValue="ahmed@client.com" readOnly className="bg-secondary/60 rounded-xl" />
            </div>
          </div>
        </div>

        <Button className="w-full rounded-xl btn-glow gap-1.5 h-10 text-sm cursor-pointer">
          Save Settings
        </Button>
      </div>

      {/* Change Password */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">Change Password</h3>
            <p className="text-[10px] text-muted-foreground">Update your portal login credentials</p>
          </div>
        </div>

        {settingsPwMsg && (
          <div className={cn(
            "rounded-xl px-4 py-2.5 text-xs font-semibold border",
            settingsPwMsg.type === "success"
              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60"
              : "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60"
          )}>
            {settingsPwMsg.text}
          </div>
        )}

        <div className="space-y-3">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase">Current Password</Label>
            <Input
              type="password"
              placeholder="Enter current password"
              value={settingsPwCurrent}
              onChange={(e) => setSettingsPwCurrent(e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase">New Password</Label>
            <Input
              type="password"
              placeholder="At least 8 characters"
              value={settingsPwNew}
              onChange={(e) => setSettingsPwNew(e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase">Confirm New Password</Label>
            <Input
              type="password"
              placeholder="Repeat new password"
              value={settingsPwConfirm}
              onChange={(e) => setSettingsPwConfirm(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>

        <Button
          className="w-full rounded-xl btn-glow gap-1.5 h-10 text-sm cursor-pointer"
          onClick={handleChangePassword}
        >
          Update Password
        </Button>
      </div>
    </div>
  );

  const renderRequests = () => (
    <>
      {/* Page header */}
      <div className="animate-fade-up flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-primary/10">
              <Inbox className="h-2.5 w-2.5 text-primary" />
            </span>
            Customer Portal
          </div>
          <h1 className="mt-1.5 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Requests
          </h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-md">
            Submit clarifications, improvements, and issues — and track every reply in real time.
          </p>
        </div>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          id="watch-how-to-btn"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-150 shadow-sm"
        >
          <PlayCircle className="h-4 w-4 text-destructive" />
          Watch how-to
        </a>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="animate-fade-up delay-100">
          <StatTile
            label="Total Requests"
            value={String(totalCount)}
            hint="in your workspace"
            icon={Inbox}
            tone="primary"
            progress={(totalCount / 20) * 100}
          />
        </div>
        <div className="animate-fade-up delay-200">
          <StatTile
            label="Active"
            value={String(activeCount)}
            hint="team working on it"
            icon={Clock}
            tone="warning"
            progress={(activeCount / totalCount) * 100}
          />
        </div>
        <div className="animate-fade-up delay-300">
          <StatTile
            label="Resolved"
            value={String(resolvedCount)}
            hint="awaiting confirmation"
            icon={Sparkles}
            tone="info"
            progress={(resolvedCount / totalCount) * 100}
          />
        </div>
        <div className="animate-fade-up delay-400">
          <StatTile
            label="Archived"
            value={String(archivedCount)}
            hint="closed & done"
            icon={CheckCircle2}
            tone="success"
            progress={(archivedCount / totalCount) * 100}
          />
        </div>
      </div>

      {/* Table card */}
      <div className="animate-fade-up delay-200 rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
        {/* Action bar */}
        <div className="flex flex-wrap items-center gap-2.5 px-4 md:px-5 py-3.5 border-b border-border bg-card">
          <Button
            id="add-request-btn"
            className="btn-glow gap-1.5 rounded-full text-sm h-9 px-4 cursor-pointer"
            onClick={() => setOpenAdd(true)}
          >
            <Plus className="h-3.5 w-3.5" />
            Add request
          </Button>

          <ColumnVisibilityMenu visibility={visibility} setVisibility={setVisibility}>
            <Button variant="outline" size="sm" className="gap-1.5 rounded-full h-9 border-border/60 hover:bg-secondary cursor-pointer">
              <Eye className="h-3.5 w-3.5" />
              Columns
            </Button>
          </ColumnVisibilityMenu>

          {/* Segmented filter */}
          <div className="inline-flex rounded-full bg-secondary/80 p-1 ml-1 border border-border/40">
            {(["All", "Active", "Archived"] as FilterKey[]).map((f) => {
              const count = f === "All" ? totalCount : f === "Active" ? activeCount : archivedCount;
              return (
                <button
                  key={f}
                  id={`filter-${f.toLowerCase()}-btn`}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
                    filter === f
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      "ml-1.5 inline-flex items-center justify-center rounded-full px-1.5 text-[10px] font-bold",
                      filter === f
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button
              id="export-btn"
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full h-9 border-border/60 hover:bg-secondary cursor-pointer"
              onClick={handleExport}
            >
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-9 w-9 rounded-xl cursor-pointer", refreshing && "animate-spin-slow")}
              onClick={handleRefresh}
              aria-label="Refresh"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ tableLayout: "auto" }}>
            <thead>
              <tr className="border-b border-border table-header-gradient text-left text-xs uppercase tracking-wider text-muted-foreground/80">
                {visibleColumns.map((c) => (
                  <th key={c.key} className={cn("px-4 py-3 font-semibold", c.width)}>
                    <div className="flex items-center gap-1.5">
                      {c.label}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            aria-label={`${c.label} column menu`}
                            className="rounded-md p-0.5 hover:bg-background/80 transition-colors cursor-pointer"
                          >
                            <ChevronDown className="h-3 w-3 opacity-60" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          <DropdownMenuItem onClick={() => setColSort(c.key, "asc")} className="cursor-pointer">
                            <ArrowUp className="h-3.5 w-3.5" />
                            Sort ascending
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setColSort(c.key, "desc")} className="cursor-pointer">
                            <ArrowDown className="h-3.5 w-3.5" />
                            Sort descending
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <Eye className="h-3.5 w-3.5" />
                              Display data
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-56 max-h-[60vh] overflow-y-auto">
                              {COLUMNS.map((col) => (
                                <DropdownMenuCheckboxItem
                                  key={col.key}
                                  checked={visibility[col.key]}
                                  onCheckedChange={(v) =>
                                    setVisibility({ ...visibility, [col.key]: !!v })
                                  }
                                  onSelect={(e) => e.preventDefault()}
                                  className="cursor-pointer"
                                >
                                  {col.label}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <FilterIcon className="h-3.5 w-3.5" />
                              Filter
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-64 p-2">
                              <Input
                                autoFocus
                                value={colFilters[c.key as string] ?? ""}
                                onChange={(e) =>
                                  setColFilters((s) => ({
                                    ...s,
                                    [c.key as string]: e.target.value,
                                  }))
                                }
                                placeholder={`Filter ${c.label.toLowerCase()}…`}
                                className="h-8 text-xs"
                              />
                              {colFilters[c.key as string] && (
                                <button
                                  onClick={() =>
                                    setColFilters((s) => ({ ...s, [c.key as string]: "" }))
                                  }
                                  className="mt-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                                >
                                  Clear filter
                                </button>
                              )}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {sort?.key === c.key && (
                        <span className="text-accent">
                          {sort.dir === "asc" ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
              {/* Column filter row */}
              <tr className="border-b border-border bg-secondary/30">
                {visibleColumns.map((c) => (
                  <th key={c.key} className="px-3 py-2">
                    <div className="relative">
                      <FilterIcon className="pointer-events-none absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        value={colFilters[c.key as string] ?? ""}
                        onChange={(e) =>
                          setColFilters((s) => ({ ...s, [c.key as string]: e.target.value }))
                        }
                        placeholder="Filter…"
                        className="h-7 w-full rounded-lg border border-border bg-background pl-7 pr-2 text-xs placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                      />
                    </div>
                  </th>
                ))}
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {pageRows.map((r, rowIdx) => {
                const isExpanded = expanded[r.code];
                return (
                  <tr
                    key={r.code}
                    style={{ animationDelay: `${rowIdx * 45}ms` }}
                    className="animate-row-enter border-b border-border/60 last:border-0 hover:bg-secondary/30 transition-colors table-row-hover"
                  >
                    {visibleColumns.map((c) => {
                      if (c.key === "code") {
                        return (
                          <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                            <span className="font-mono font-semibold text-foreground bg-secondary/60 rounded-md px-1.5 py-0.5 text-xs inline-block">
                              #{r.code}
                            </span>
                          </td>
                        );
                      }
                      if (c.key === "classification") {
                        return (
                          <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                            <PriorityStatusBadge row={r} />
                          </td>
                        );
                      }
                      if (c.key === "request") {
                        return (
                          <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                            <div className="max-w-md">
                              <p
                                dir="auto"
                                className={cn(
                                  "text-foreground/85 leading-relaxed text-sm",
                                  !isExpanded && "line-clamp-2",
                                )}
                              >
                                {r.request}
                              </p>
                              {r.request.length > 60 && (
                                <button
                                  onClick={() =>
                                    setExpanded((s) => ({ ...s, [r.code]: !s[r.code] }))
                                  }
                                  className="mt-1 text-xs font-semibold text-accent hover:underline cursor-pointer"
                                >
                                  {isExpanded ? "Show less" : "Read more"}
                                </button>
                              )}
                            </div>
                          </td>
                        );
                      }
                      if (c.key === "lastReply") {
                        return (
                          <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                            <p dir="auto" className="text-muted-foreground text-xs line-clamp-3 max-w-xs leading-relaxed">
                              {r.lastReply}
                            </p>
                          </td>
                        );
                      }
                      if (c.key === "priority") {
                        return (
                          <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                            <div className="flex flex-col items-start gap-0.5">
                              <span className={cn(
                                "inline-flex items-center justify-center h-7 w-7 rounded-full text-xs font-bold border-2",
                                !r.priority
                                  ? "bg-secondary text-muted-foreground border-border"
                                  : Number(r.priority) <= 3
                                  ? "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700"
                                  : Number(r.priority) <= 5
                                  ? "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-700"
                                  : Number(r.priority) <= 7
                                  ? "bg-orange-100 text-orange-700 border-orange-300 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-700"
                                  : "bg-red-100 text-red-700 border-red-300 dark:bg-red-900/40 dark:text-red-300 dark:border-red-700",
                              )}>
                                {r.priority || "—"}
                              </span>
                              <span className={cn(
                                "text-[9px] font-semibold uppercase tracking-wide",
                                !r.priority
                                  ? "text-muted-foreground"
                                  : Number(r.priority) <= 3
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : Number(r.priority) <= 5
                                  ? "text-amber-600 dark:text-amber-400"
                                  : Number(r.priority) <= 7
                                  ? "text-orange-600 dark:text-orange-400"
                                  : "text-red-600 dark:text-red-400"
                              )}>
                                {!r.priority ? "—" : Number(r.priority) <= 3 ? "Low" : Number(r.priority) <= 5 ? "Medium" : Number(r.priority) <= 7 ? "High" : "Critical"}
                              </span>
                            </div>
                          </td>
                        );
                      }
                      
                      return (
                        <td key={c.key} className={cn("px-4 py-3.5 align-top", c.width)}>
                          <span className="text-foreground/80 text-sm">
                            {String(r[c.key] ?? "—") || "—"}
                          </span>
                        </td>
                      );
                    })}
                    {/* Actions cell */}
                    <td className="px-4 py-3.5 align-top">
                      <div className="flex items-center gap-1.5 flex-nowrap">
                        <button
                          onClick={() => setAttachmentsRow(r)}
                          className="action-btn border-border/60 bg-secondary/60 text-muted-foreground hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                        >
                          <Paperclip className="h-3 w-3" />
                          Files
                        </button>
                        <button
                          onClick={() => setReplyRow(r)}
                          className="action-btn border-primary/25 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
                          Reply
                        </button>
                        {filter === "Archived" ? (
                          <button
                            onClick={() =>
                              setRows((prev) =>
                                prev.map((row) =>
                                  row.code === r.code ? { ...row, status: "New" } : row
                                )
                              )
                            }
                            className="action-btn border-amber-500/40 bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:border-amber-500 hover:text-white dark:text-amber-400"
                          >
                            <Archive className="h-3 w-3" />
                            Restore
                          </button>
                        ) : r.status === "Closed" ? (
                          <span className="action-btn border-border bg-muted/60 text-muted-foreground cursor-default">
                            <Archive className="h-3 w-3" />
                            Archived
                          </span>
                        ) : (
                          <button
                            onClick={() =>
                              setRows((prev) =>
                                prev.map((row) =>
                                  row.code === r.code ? { ...row, status: "Closed" } : row
                                )
                              )
                            }
                            className="action-btn border-slate-600/40 bg-slate-700/10 text-slate-600 hover:bg-slate-700 hover:border-slate-700 hover:text-white dark:text-slate-300 dark:border-slate-600/40 dark:bg-slate-700/20"
                          >
                            <Archive className="h-3 w-3" />
                            Archive
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {pageRows.length === 0 && (
                <tr>
                  <td colSpan={visibleColumns.length + 1} className="px-4 py-20 text-center">
                    <div className="mx-auto max-w-sm animate-fade-up">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/80 text-muted-foreground mb-4">
                        <Inbox className="h-6 w-6" />
                      </div>
                      <div className="font-semibold text-foreground">No requests match your filters</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Try clearing a column filter or switching the tab.
                      </div>
                      <button
                        onClick={() => { setColFilters({}); setSearch(""); }}
                        className="mt-4 text-xs font-medium text-accent hover:underline cursor-pointer"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center gap-2 px-4 md:px-5 py-3 border-t border-border bg-secondary/20">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg cursor-pointer"
              disabled={currentPage === 1}
              onClick={() => setPage(1)}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg cursor-pointer"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .slice(Math.max(0, currentPage - 3), Math.max(0, currentPage - 3) + 5)
              .map((n) => (
                <Button
                  key={n}
                  variant={n === currentPage ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPage(n)}
                  className={cn(
                    "h-8 w-8 p-0 rounded-lg text-xs font-semibold cursor-pointer",
                    n !== currentPage && "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n}
                </Button>
              ))}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg cursor-pointer"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg cursor-pointer"
              disabled={currentPage === totalPages}
              onClick={() => setPage(totalPages)}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-5" />

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            Rows
            <Select value={String(pageSize)} onValueChange={(v) => setPageSize(Number(v))}>
              <SelectTrigger className="h-8 w-16 rounded-lg text-xs cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["5", "10", "25", "50"].map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="ml-auto text-xs text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length === 0 ? 0 : pageStart + 1}–{Math.min(pageStart + pageSize, filtered.length)}
            </span>{" "}
            of <span className="font-semibold text-foreground">{filtered.length}</span> requests
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          searchValue={search}
          onSearch={setSearch}
          onMenuClick={() => setSidebarOpen(true)}
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
        />

        <main className="flex-1 px-4 md:px-6 py-6 md:py-8 space-y-6">
          {currentTab === "Dashboard" && renderDashboard()}
          {currentTab === "Requests" && renderRequests()}
          {currentTab === "Invoices" && renderInvoices()}
          {currentTab === "Project" && renderProjects()}
          {currentTab === "Settings" && renderSettings()}
        </main>
      </div>

      <AddRequestDialog
        open={openAdd}
        onOpenChange={setOpenAdd}
        nextCode={Math.max(...rows.map((r) => r.code)) + 1}
        onSubmit={handleAddRequest}
      />
      <AttachmentsDialog row={attachmentsRow} onClose={() => setAttachmentsRow(null)} />
      <ReplyDialog row={replyRow} onClose={() => setReplyRow(null)} />
    </div>
  );
}

/* ---------------- Add request modal ---------------- */

interface AddFormValues {
  classification: Classification;
  appName: string;
  project: string;
  priority: number | "";
  request: string;
  file: File | null;
}

function AddRequestDialog({
  open,
  onOpenChange,
  nextCode,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  nextCode: number;
  onSubmit: (
    r: Omit<RequestRow, "code" | "createdDate" | "createdBy" | "status">,
  ) => void;
}) {
  const [values, setValues] = useState<AddFormValues>({
    classification: "Issue",
    appName: "Others",
    project: "ERP PLUS",
    priority: "",
    request: "",
    file: null,
  });
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && editorRef.current) editorRef.current.innerHTML = "";
    if (open) {
      setValues({
        classification: "Issue",
        appName: "Others",
        project: "ERP PLUS",
        priority: "",
        request: "",
        file: null,
      });
    }
  }, [open]);

  const exec = (cmd: string, arg?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, arg);
  };

  const handleSave = () => {
    const requestText = editorRef.current?.innerText?.trim() ?? "";
    if (!requestText || !values.project || !values.classification) return;
    onSubmit({
      classification: values.classification,
      project: values.project,
      request: requestText,
      lastReply: "—",
      arabicName: "",
      englishName: "",
      email: "",
      customerCode: "",
      clientEmail: "",
      client: "",
      priority: values.priority,
      appName: values.appName,
      closedEstimationTime: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden border-border/60">
        {/* Header with gradient accent */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, oklch(0.60 0.20 258 / 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="flex items-center gap-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-display text-xl font-bold">New Request</DialogTitle>
              <DialogDescription className="text-xs mt-0.5">
                Assigned code <span className="font-mono font-semibold text-foreground">#{nextCode}</span> — fields
                marked <span className="text-destructive font-bold">*</span> are required.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Code</Label>
              <Input value={nextCode} readOnly className="bg-secondary/60 font-mono text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Classification <span className="text-destructive">*</span>
              </Label>
              <Select
                value={values.classification}
                onValueChange={(v) => setValues((s) => ({ ...s, classification: v as Classification }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                  {CLASSIFICATION_OPTIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Application</Label>
              <Select
                value={values.appName}
                onValueChange={(v) => setValues((s) => ({ ...s, appName: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {APP_NAME_OPTIONS.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Project <span className="text-destructive">*</span>
              </Label>
              <Select
                value={values.project}
                onValueChange={(v) => setValues((s) => ({ ...s, project: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_OPTIONS.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Priority <span className="text-muted-foreground font-normal normal-case">(1 = highest)</span></Label>
              <Input
                type="number"
                min={1}
                max={10}
                placeholder="1–10"
                className="w-36"
                value={values.priority}
                onChange={(e) =>
                  setValues((s) => ({
                    ...s,
                    priority: e.target.value === "" ? "" : Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Request <span className="text-destructive">*</span>
            </Label>
            <div className="rounded-xl border border-input bg-background overflow-hidden focus-within:ring-2 focus-within:ring-ring/30 transition">
              <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-secondary/40 px-2 py-1.5">
                <Select
                  defaultValue="p"
                  onValueChange={(v) => exec("formatBlock", v === "p" ? "P" : v.toUpperCase())}
                >
                  <SelectTrigger className="h-7 w-28 text-xs border-transparent bg-transparent shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="p">Paragraph</SelectItem>
                    <SelectItem value="h1">Heading 1</SelectItem>
                    <SelectItem value="h2">Heading 2</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mx-1 h-4 w-px bg-border" />
                <ToolbarBtn icon={Bold} label="Bold" onClick={() => exec("bold")} />
                <ToolbarBtn icon={Italic} label="Italic" onClick={() => exec("italic")} />
                <ToolbarBtn icon={Underline} label="Underline" onClick={() => exec("underline")} />
                <div className="mx-1 h-4 w-px bg-border" />
                <ToolbarBtn icon={AlignLeft} label="Align left" onClick={() => exec("justifyLeft")} />
                <ToolbarBtn icon={AlignCenter} label="Align center" onClick={() => exec("justifyCenter")} />
                <ToolbarBtn icon={AlignRight} label="Align right" onClick={() => exec("justifyRight")} />
                <div className="mx-1 h-4 w-px bg-border" />
                <ToolbarBtn icon={List} label="Bullet list" onClick={() => exec("insertUnorderedList")} />
                <ToolbarBtn icon={ListOrdered} label="Numbered list" onClick={() => exec("insertOrderedList")} />
                <ToolbarBtn icon={Outdent} label="Outdent" onClick={() => exec("outdent")} />
                <ToolbarBtn icon={Indent} label="Indent" onClick={() => exec("indent")} />
                <ToolbarBtn
                  icon={LinkIcon}
                  label="Insert link"
                  onClick={() => {
                    const url = prompt("Enter URL");
                    if (url) exec("createLink", url);
                  }}
                />
                <ToolbarBtn
                  icon={ImageIcon}
                  label="Insert image"
                  onClick={() => {
                    const url = prompt("Enter image URL");
                    if (url) exec("insertImage", url);
                  }}
                />
                <ToolbarBtn
                  icon={TableIcon}
                  label="Insert table"
                  onClick={() => {
                    const html =
                      '<table style="border-collapse:collapse"><tbody>' +
                      Array.from({ length: 2 })
                        .map(
                          () =>
                            "<tr>" +
                            Array.from({ length: 2 })
                              .map(
                                () =>
                                  '<td style="border:1px solid #ccc;padding:6px;min-width:60px">&nbsp;</td>',
                              )
                              .join("") +
                            "</tr>",
                        )
                        .join("") +
                      "</tbody></table><p></p>";
                    exec("insertHTML", html);
                  }}
                />
                <span className="ml-auto text-[10px] font-medium text-muted-foreground pr-1">
                  RTL & EN supported
                </span>
              </div>
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                dir="auto"
                data-placeholder="Describe your request in detail — Arabic and English supported…"
                className="min-h-32 max-h-64 overflow-y-auto px-3 py-2.5 text-sm outline-none [&:empty:before]:content-[attr(data-placeholder)] [&:empty:before]:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Attachments <span className="font-normal normal-case text-muted-foreground">(optional)</span></Label>
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 px-4 py-8 text-center cursor-pointer hover:bg-secondary/60 hover:border-accent/40 transition-all duration-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 mb-3 animate-float">
                <UploadCloud className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-semibold text-foreground">
                {values.file ? values.file.name : "Drop a file or click to browse"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                PNG, JPG, PDF or ZIP up to 20 MB
              </div>
              <input
                id="file"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setValues((s) => ({ ...s, file: e.target.files?.[0] ?? null }))
                }
              />
            </label>
            {values.file && (
              <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-sm">
                <span className="flex items-center gap-2 truncate">
                  <Paperclip className="h-3.5 w-3.5 text-accent" />
                  <span className="truncate font-medium">{values.file.name}</span>
                  <span className="text-xs text-muted-foreground shrink-0">
                    ({(values.file.size / 1024).toFixed(1)} KB)
                  </span>
                </span>
                <button
                  onClick={() => setValues((s) => ({ ...s, file: null }))}
                  className="text-muted-foreground hover:text-destructive transition-colors ml-2"
                  aria-label="Remove"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/20">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSave} className="gap-1.5 rounded-xl btn-glow">
            <Plus className="h-4 w-4" />
            Save Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- Attachments dialog ---------------- */

function AttachmentsDialog({ row, onClose }: { row: RequestRow | null; onClose: () => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => { if (!row) setFiles([]); }, [row]);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    setFiles((prev) => [
      ...prev,
      ...Array.from(incoming).filter((f) => !prev.find((p) => p.name === f.name)),
    ]);
  };

  return (
    <Dialog open={!!row} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden border-border/60">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, oklch(0.60 0.20 258 / 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="flex items-center gap-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
              <Paperclip className="h-5 w-5 text-accent" />
            </div>
            <div>
              <DialogTitle className="font-display text-lg font-bold">Attachments</DialogTitle>
              <DialogDescription className="text-xs mt-0.5">
                Request <span className="font-mono font-semibold text-foreground">#{row?.code}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 py-5 space-y-4">
          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-10 cursor-pointer transition-all duration-200",
              dragOver
                ? "border-accent bg-accent/10 scale-[1.01]"
                : "border-border bg-secondary/30 hover:border-accent/40 hover:bg-secondary/60",
            )}
          >
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-transform duration-200",
              dragOver ? "scale-110 animate-float" : "",
            )}>
              <UploadCloud className="h-7 w-7 text-accent" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold">
                Drop files here or <span className="text-accent underline underline-offset-2">browse</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF, ZIP — up to 20 MB each</p>
            </div>
            <input ref={fileInputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
          </div>

          {/* File list */}
          {files.length > 0 ? (
            <ul className="space-y-2">
              {files.map((f) => (
                <li key={f.name} className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm animate-fade-up">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Paperclip className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-semibold text-foreground">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <button
                    onClick={() => setFiles((prev) => prev.filter((p) => p.name !== f.name))}
                    className="text-muted-foreground hover:text-destructive transition-colors rounded-lg p-1 hover:bg-destructive/10"
                    aria-label="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-xs text-muted-foreground py-2">No attachments yet for this request.</p>
          )}
        </div>

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/20">
          <Button variant="ghost" onClick={onClose} className="rounded-xl">Close</Button>
          <Button onClick={onClose} className="gap-1.5 rounded-xl" disabled={files.length === 0}>
            <UploadCloud className="h-4 w-4" />
            Upload {files.length > 0 ? `(${files.length})` : ""}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- Reply dialog ---------------- */

function ReplyDialog({ row, onClose }: { row: RequestRow | null; onClose: () => void }) {
  const [comment, setComment] = useState("");
  const [replyFile, setReplyFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (!row) { setComment(""); setReplyFile(null); } }, [row]);

  const handleSend = () => {
    setComment("");
    setReplyFile(null);
    onClose();
  };

  return (
    <Dialog open={!!row} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden border-border/60">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, oklch(0.22 0.055 265 / 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="flex items-center gap-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
            </div>
            <div>
              <DialogTitle className="font-display text-lg font-bold">Reply to Request</DialogTitle>
              <DialogDescription className="text-xs mt-0.5">
                Request <span className="font-mono font-semibold text-foreground">#{row?.code}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 py-5 space-y-4">
          {/* Original message */}
          {row?.lastReply && row.lastReply !== "—" && (
            <div className="rounded-xl border border-border bg-secondary/40 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold text-sm">
                  {row.createdBy?.charAt(0) ?? "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm font-semibold text-foreground">{row.createdBy}</span>
                    <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2 py-0.5">{row.createdDate}</span>
                  </div>
                  <p dir="auto" className="text-sm text-foreground/80 leading-relaxed">{row.lastReply}</p>
                </div>
              </div>
            </div>
          )}

          {/* Reply textarea */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Your reply</Label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your reply here…"
              rows={4}
              dir="auto"
              className="w-full resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
            />
          </div>

          {/* Attachment */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Attachment <span className="text-muted-foreground font-normal normal-case">(optional)</span>
            </Label>
            <div
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/30 px-4 py-3 cursor-pointer hover:border-accent/40 hover:bg-secondary/60 transition-all duration-200"
            >
              <UploadCloud className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {replyFile ? replyFile.name : "Click to attach a file"}
              </span>
              {replyFile && (
                <button
                  onClick={(e) => { e.stopPropagation(); setReplyFile(null); }}
                  className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <input ref={fileRef} type="file" className="hidden" onChange={(e) => setReplyFile(e.target.files?.[0] ?? null)} />
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/20">
          <Button variant="ghost" onClick={onClose} className="rounded-xl">Cancel</Button>
          <Button onClick={handleSend} disabled={!comment.trim()} className="gap-1.5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Reply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- Toolbar button ---------------- */

function ToolbarBtn({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className="rounded-lg p-1.5 text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
