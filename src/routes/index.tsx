import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import * as XLSX from "xlsx";
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
  { key: "status", label: "Status", defaultVisible: true, width: "w-40" },
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

/* ---------------- Small primitives ---------------- */

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, { cls: string; icon: React.ReactNode }> = {
    New: { cls: "bg-info/10 text-info border-info/20", icon: <Sparkles className="h-3 w-3" /> },
    "In Progress": {
      cls: "bg-warning/15 text-warning-foreground border-warning/30",
      icon: <Clock className="h-3 w-3" />,
    },
    Resolved: {
      cls: "bg-success/10 text-success border-success/20",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    Closed: {
      cls: "bg-muted text-muted-foreground border-border",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
  };
  const { cls, icon } = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        cls,
      )}
    >
      {icon}
      {status}
    </span>
  );
}

/* ---------------- Sidebar ---------------- */

const NAV = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Invoices", icon: FileText, href: "#" },
  { label: "Requests", icon: Inbox, href: "#", active: true },
  { label: "Project", icon: FolderKanban, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile/tablet backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-sidebar text-sidebar-foreground shadow-2xl",
          "transition-transform duration-300 ease-in-out",
          "lg:static lg:z-auto lg:w-64 lg:translate-x-0 lg:shadow-none",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-1 shadow-sm shrink-0">
            <img src={erpLogo} alt="ERP+ Mobile Application" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight flex-1 min-w-0">
            <div className="font-display font-semibold text-sm">ERP+</div>
            <div className="text-[10px] tracking-[0.15em] text-sidebar-foreground/60 uppercase">
              Mobile Application
            </div>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden ml-auto flex h-8 w-8 items-center justify-center rounded-full text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="px-3 py-2">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li key={item.label} className={`animate-slide-in-left delay-${[100,150,200,250,300][i] ?? 300}`}>
                <a
                  href={item.href}
                  onClick={() => onClose()}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    item.active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm nav-glow"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-1",
                  )}
                >
                  <item.icon className={cn("h-4 w-4 transition-transform", item.active ? "" : "group-hover:scale-110")} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto px-6 py-6 text-xs text-sidebar-foreground/50">
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
}: {
  onSearch: (v: string) => void;
  searchValue: string;
  onMenuClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center gap-3 px-4 md:px-8">
        {/* Hamburger — shown on mobile/tablet */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search requests, projects…"
            className="pl-9 h-10 bg-secondary/60 border-transparent focus-visible:bg-background"
          />
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
          </Button>
          <div className="mx-2 h-6 w-px bg-border" />
          <div className="flex items-center gap-2 pr-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                AR
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-sm leading-tight">
              <div className="font-medium">Ahmed R.</div>
              <div className="text-xs text-muted-foreground">Client · ERP PLUS</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" aria-label="Log out">
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
}: {
  label: string;
  value: string;
  hint: string;
  icon: React.ElementType;
  tone: "primary" | "info" | "warning" | "success";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    info: "bg-info/10 text-info",
    warning: "bg-warning/15 text-warning-foreground",
    success: "bg-success/10 text-success",
  };
  return (
    <div className="card-hover rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] group cursor-default">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="animate-count-pop mt-2 font-display text-3xl font-semibold tracking-tight">{value}</div>
          <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
            <TrendingUp className="h-3 w-3 transition-transform group-hover:translate-y-[-2px] group-hover:text-accent" />
            {hint}
          </div>
        </div>
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110 group-hover:rotate-3", tones[tone])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
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
  const [attachmentsRow, setAttachmentsRow] = useState<RequestRow | null>(null);
  const [replyRow, setReplyRow] = useState<RequestRow | null>(null);

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
    // refreshKey only forces recompute
    void refreshKey;
    return out;
  }, [rows, filter, colFilters, sort, search, refreshKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(pageStart, pageStart + pageSize);

  const activeCount = rows.filter(
    (r) => r.status === "New" || r.status === "In Progress",
  ).length;
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
    setRows((prev) => [
      {
        ...r,
        code: nextCode,
        status: "New",
        createdDate: new Date().toISOString().slice(0, 10),
        createdBy: "Ahmed R.",
      },
      ...prev,
    ]);
  };

  const setColSort = (key: keyof RequestRow, dir: "asc" | "desc") => setSort({ key, dir });

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar searchValue={search} onSearch={setSearch} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 space-y-6">
          {/* Page header */}
          <div className="animate-fade-up flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground tracking-[0.15em]">
                Customer Portal
              </div>
              <h1 className="mt-1 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Requests
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Submit clarifications, improvements, and issues — and track every reply.
              </p>
            </div>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-150"
            >
              <PlayCircle className="h-4 w-4 text-destructive" />
              Watch how-to
            </a>
          </div>

          {/* KPI tiles */}
          <div className="animate-fade-up delay-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="animate-fade-up delay-100"><StatTile label="Total requests" value={String(rows.length)} hint="in your workspace" icon={Inbox} tone="primary" /></div>
            <div className="animate-fade-up delay-200"><StatTile label="Active" value={String(activeCount)} hint="team working" icon={Clock} tone="warning" /></div>
            <div className="animate-fade-up delay-300"><StatTile label="Resolved" value={String(resolvedCount)} hint="awaiting confirmation" icon={Sparkles} tone="info" /></div>
            <div className="animate-fade-up delay-400"><StatTile label="Archived" value={String(archivedCount)} hint="closed &amp; done" icon={CheckCircle2} tone="success" /></div>
          </div>

          {/* Table card */}
          <div className="animate-fade-up delay-200 rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
            {/* Action bar */}
            <div className="flex flex-wrap items-center gap-3 px-4 md:px-6 py-4 border-b border-border">
              <Button className="btn-glow gap-1.5 rounded-full" onClick={() => setOpenAdd(true)}>
                <Plus className="h-4 w-4" />
                Add request
              </Button>

              <ColumnVisibilityMenu visibility={visibility} setVisibility={setVisibility}>
                <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
                  <Eye className="h-3.5 w-3.5" />
                  Display data
                </Button>
              </ColumnVisibilityMenu>

              {/* Segmented filter */}
              <div className="inline-flex rounded-full bg-secondary p-1 ml-1">
                {(["All", "Active", "Archived"] as FilterKey[]).map((f) => {
                  const count = f === "All" ? rows.length : f === "Active" ? activeCount : archivedCount;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={cn(
                        "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                        filter === f
                          ? "bg-card text-foreground shadow-sm scale-105"
                          : "text-muted-foreground hover:text-foreground hover:scale-105",
                      )}
                    >
                      {f}
                      <span
                        className={cn(
                          "ml-1.5 inline-flex items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                          filter === f ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground",
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1.5 rounded-full" onClick={handleExport}>
                  <Download className="h-3.5 w-3.5" />
                  Export to Excel
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{tableLayout:"auto"}}>
                <thead>
                  <tr className="border-b border-border bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    {visibleColumns.map((c) => (
                      <th key={c.key} className={cn("px-4 py-3 font-medium", c.width)}>
                        <div className="flex items-center gap-1">
                          {c.label}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                aria-label={`${c.label} column menu`}
                                className="rounded p-0.5 hover:bg-background/70"
                              >
                                <ChevronDown className="h-3 w-3 opacity-70" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48">
                              <DropdownMenuItem onClick={() => setColSort(c.key, "asc")}>
                                <ArrowUp className="h-3.5 w-3.5" />
                                Sort ascending
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setColSort(c.key, "desc")}>
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
                                      className="mt-2 text-xs text-muted-foreground hover:text-foreground"
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
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                  <tr className="border-b border-border bg-card">
                    {visibleColumns.map((c) => (
                      <th key={c.key} className="px-3 py-2">
                        <div className="relative">
                          <FilterIcon className="pointer-events-none absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                          <input
                            value={colFilters[c.key as string] ?? ""}
                            onChange={(e) =>
                              setColFilters((s) => ({ ...s, [c.key as string]: e.target.value }))
                            }
                            placeholder="Filter…"
                            className="h-8 w-full rounded-md border border-border bg-background pl-7 pr-2 text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40"
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
                        style={{ animationDelay: `${rowIdx * 40}ms` }}
                        className="animate-row-enter border-b border-border last:border-0 hover:bg-secondary/40 transition-colors group/row"
                      >
                        {visibleColumns.map((c) => (
                          <td key={c.key} className={cn("px-4 py-4 align-top", c.width)}>
                            {c.key === "code" ? (
                              <span className="font-medium text-foreground">#{r.code}</span>
                            ) : c.key === "status" ? (
                              <StatusBadge status={r.status} />
                            ) : c.key === "classification" ? (
                              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                                {r.classification === "Issue" ? (
                                  <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                                ) : r.classification === "Improvement Request" || r.classification === "CR" ? (
                                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                                ) : (
                                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                                )}
                                {r.classification}
                              </span>
                            ) : c.key === "request" ? (
                              <div className="max-w-md">
                                <p
                                  dir="auto"
                                  className={cn(
                                    "text-foreground/90 leading-relaxed",
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
                                    className="mt-1 text-xs font-medium text-accent hover:underline"
                                  >
                                    {isExpanded ? "Show less" : "Read more"}
                                  </button>
                                )}
                              </div>
                            ) : c.key === "lastReply" ? (
                              <p dir="auto" className="text-muted-foreground line-clamp-3 max-w-xs">
                                {r.lastReply}
                              </p>
                            ) : (
                              <span className="text-foreground/90">
                                {String(r[c.key] ?? "—") || "—"}
                              </span>
                            )}
                          </td>
                        ))}
                        {/* Actions cell */}
                        <td className="px-4 py-4 align-top">
                          <div className="flex items-center gap-2 flex-wrap">
                            <button
                              onClick={() => setAttachmentsRow(r)}
                              className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-all hover:border-accent/60 hover:bg-accent/10 hover:text-accent hover:shadow-md"
                            >
                              <Paperclip className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
                              Attachments
                            </button>
                            <button
                              onClick={() => setReplyRow(r)}
                              className="group inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
                              Reply
                            </button>
                            {filter === "Archived" ? (
                              /* Archived tab — allow undoing the archive */
                              <button
                                onClick={() =>
                                  setRows((prev) =>
                                    prev.map((row) =>
                                      row.code === r.code ? { ...row, status: "New" } : row
                                    )
                                  )
                                }
                                className="group inline-flex items-center gap-1.5 rounded-full border border-amber-600/50 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-600 shadow-sm transition-all hover:bg-amber-500 hover:border-amber-500 hover:text-white hover:shadow-md"
                              >
                                <Archive className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
                                Restore
                              </button>
                            ) : r.status === "Closed" ? (
                              /* All tab — row is already archived, show a muted badge */
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                                <Archive className="h-3.5 w-3.5" />
                                Archived
                              </span>
                            ) : (
                              /* Active / All tab — row is not archived yet */
                              <button
                                onClick={() =>
                                  setRows((prev) =>
                                    prev.map((row) =>
                                      row.code === r.code ? { ...row, status: "Closed" } : row
                                    )
                                  )
                                }
                                className="group inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition-all hover:bg-slate-900 hover:border-slate-900 hover:shadow-md"
                              >
                                <Archive className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
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
                      <td colSpan={visibleColumns.length} className="px-4 py-16 text-center">
                        <div className="mx-auto max-w-sm">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                            <Inbox className="h-5 w-5" />
                          </div>
                          <div className="mt-3 font-medium">No requests match your filters</div>
                          <div className="text-sm text-muted-foreground">
                            Try clearing a column filter or switching the tab.
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center gap-3 px-4 md:px-6 py-3 border-t border-border bg-secondary/30">
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === 1}
                  onClick={() => setPage(1)}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
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
                        "h-8 w-8 p-0 rounded-full",
                        n !== currentPage && "text-muted-foreground",
                      )}
                    >
                      {n}
                    </Button>
                  ))}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage(totalPages)}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>

              <Separator orientation="vertical" className="h-6" />

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                Rows
                <Select value={String(pageSize)} onValueChange={(v) => setPageSize(Number(v))}>
                  <SelectTrigger className="h-8 w-16">
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
                <span className="font-medium text-foreground">
                  {filtered.length === 0 ? 0 : pageStart + 1}–{Math.min(pageStart + pageSize, filtered.length)}
                </span>{" "}
                of <span className="font-medium text-foreground">{filtered.length}</span> requests
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setRefreshKey((k) => k + 1)}
                aria-label="Refresh"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
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
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="font-display text-xl">New request</DialogTitle>
          <DialogDescription>
            Assigned code <span className="font-mono text-foreground">#{nextCode}</span> — fields
            marked <span className="text-destructive">*</span> are required.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Code</Label>
              <Input value={nextCode} readOnly className="bg-secondary/60 font-mono" />
            </div>
            <div className="space-y-1.5">
              <Label>
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
              <Label>Application name</Label>
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
              <Label>
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
              <Label>Priority</Label>
              <Input
                type="number"
                min={1}
                max={10}
                placeholder="1–10"
                className="w-32"
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
            <Label>
              Request <span className="text-destructive">*</span>
            </Label>
            <div className="rounded-lg border border-input bg-background overflow-hidden">
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
                <span className="ml-auto text-[10px] font-medium text-muted-foreground pr-2">
                  RTL & English supported
                </span>
              </div>
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                dir="auto"
                data-placeholder="Describe the request in detail — you can mix Arabic and English…"
                className="min-h-32 max-h-64 overflow-y-auto px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40 [&:empty:before]:content-[attr(data-placeholder)] [&:empty:before]:text-muted-foreground/60"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Attachments</Label>
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 px-4 py-6 text-center cursor-pointer hover:bg-secondary/60 hover:border-accent/50 transition-colors"
            >
              <UploadCloud className="h-6 w-6 text-muted-foreground" />
              <div className="mt-2 text-sm font-medium">
                {values.file ? values.file.name : "Drop a file or click to browse"}
              </div>
              <div className="text-xs text-muted-foreground">
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
              <div className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm">
                <span className="flex items-center gap-2 truncate">
                  <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="truncate">{values.file.name}</span>
                </span>
                <button
                  onClick={() => setValues((s) => ({ ...s, file: null }))}
                  className="text-muted-foreground hover:text-destructive"
                  aria-label="Remove"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/30">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="gap-1.5">
            <Plus className="h-4 w-4" />
            Save request
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
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="font-display text-lg flex items-center gap-2">
            <Paperclip className="h-4 w-4 text-accent" />
            Attachments
          </DialogTitle>
          <DialogDescription className="text-xs">
            Request <span className="font-mono text-foreground">#{row?.code}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-5 space-y-4">
          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed py-10 cursor-pointer transition-all",
              dragOver
                ? "border-accent bg-accent/10 scale-[1.01]"
                : "border-border bg-secondary/30 hover:border-accent/50 hover:bg-secondary/60",
            )}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <UploadCloud className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">Drop files here or <span className="text-accent underline underline-offset-2">browse</span></p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF, ZIP — up to 20 MB each</p>
            </div>
            <input ref={fileInputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
          </div>

          {/* File list */}
          {files.length > 0 && (
            <ul className="space-y-2">
              {files.map((f) => (
                <li key={f.name} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Paperclip className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium text-foreground">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <button
                    onClick={() => setFiles((prev) => prev.filter((p) => p.name !== f.name))}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {files.length === 0 && (
            <p className="text-center text-xs text-muted-foreground py-2">No attachments yet for this request.</p>
          )}
        </div>

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/30">
          <Button variant="ghost" onClick={onClose}>Close</Button>
          <Button onClick={onClose} className="gap-1.5" disabled={files.length === 0}>
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
    // In a real app, submit to API here
    setComment("");
    setReplyFile(null);
    onClose();
  };

  return (
    <Dialog open={!!row} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="font-display text-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
            Reply to Request
          </DialogTitle>
          <DialogDescription className="text-xs">
            Request <span className="font-mono text-foreground">#{row?.code}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-5 space-y-4">
          {/* Original message */}
          {row?.lastReply && row.lastReply !== "—" && (
            <div className="rounded-xl border border-border bg-secondary/40 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {row.createdBy?.charAt(0) ?? "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{row.createdBy}</span>
                    <span className="text-xs text-muted-foreground">{row.createdDate}</span>
                  </div>
                  <p dir="auto" className="text-sm text-foreground/80 leading-relaxed">{row.lastReply}</p>
                </div>
              </div>
            </div>
          )}

          {/* Reply textarea */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Your reply</Label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your reply here…"
              rows={4}
              dir="auto"
              className="w-full resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition"
            />
          </div>

          {/* Attachment */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Attachment <span className="text-muted-foreground font-normal">(optional)</span></Label>
            <div
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/30 px-4 py-3 cursor-pointer hover:border-accent/50 hover:bg-secondary/60 transition-colors"
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

        <DialogFooter className="px-6 py-4 border-t border-border bg-secondary/30">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSend} disabled={!comment.trim()} className="gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Reply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
      className="rounded p-1.5 text-muted-foreground hover:bg-background hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
