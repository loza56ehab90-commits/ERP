import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as writeFileSync, t as utils } from "../_libs/xlsx.mjs";
import { A as FileText, B as ChevronsLeft, C as Link, D as Image, E as Inbox, F as Circle, G as Check, H as ChevronRight, I as CirclePlay, J as ArrowUp, K as Bold, L as CircleCheck, M as Download, N as CloudUpload, O as Funnel, P as Clock, R as CircleAlert, S as ListIndentDecrease, T as Italic, U as ChevronLeft, V as ChevronUp, W as ChevronDown, X as Archive, Y as ArrowDown, _ as Menu, a as TextAlignStart, b as ListOrdered, c as Table, d as Settings, f as Search, g as Moon, h as Paperclip, i as TrendingUp, j as Eye, k as FolderKanban, l as Sun, m as Plus, n as X, o as TextAlignEnd, p as RefreshCw, q as Bell, r as Underline, s as TextAlignCenter, t as Zap, u as Sparkles, v as LogOut, w as LayoutDashboard, x as ListIndentIncrease, y as List, z as ChevronsRight } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { a as Label2, c as Root2, d as SubContent2, f as SubTrigger2, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, p as Trigger, r as Item2, s as RadioItem2, t as CheckboxItem2, u as Sub2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cjq7Mzyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSub = Sub2;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var erp_logo2_default = "/assets/erp-logo2-CUg986WN.png";
var INITIAL_ROWS = [
	{
		code: 12256,
		status: "Closed",
		classification: "Improvement Request",
		project: "ERP PLUS",
		request: "عدم ظهور اى مشروع اركيف عند اضافته التيكت — bug appearing when adding a ticket to any Archive project.",
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
		createdBy: "Ahmed R."
	},
	{
		code: 12257,
		status: "In Progress",
		classification: "Improvement Request",
		project: "ERP PLUS",
		request: "أما فى حال وجود CR، لا يتم عرض تصنيف الـ (CR) إذا لم يكن لدى العميل فيديو ع… ",
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
		createdBy: "Mona S."
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
		createdBy: "Khaled M."
	},
	{
		code: 12262,
		status: "In Progress",
		classification: "Improvement Request",
		project: "ERP PLUS",
		request: "مقترح تطوير فى بوابة العملاء لأضافه خدمات عمل استفتاء و يتم ظهوره مباشرة فى بواب…",
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
		createdBy: "Layla H."
	},
	{
		code: 12286,
		status: "Resolved",
		classification: "Improvement Request",
		project: "ERP PLUS",
		request: "In PM (Task Assignment) when the remaining hours for the phase is 2 hours or les…",
		lastReply: "تم الانتهاء من التجربة وتسليم الطلب. في حال عدم وجود رد خلال 3 أيام عمل، سيتم اعتماده مباشرة.",
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
		createdBy: "Sara A."
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
		createdBy: "Youssef N."
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
		createdBy: "Reem T."
	}
];
var CLASSIFICATION_OPTIONS = [
	"Issue",
	"CR",
	"Clarification",
	"Paid CR",
	"Feedback"
];
var APP_NAME_OPTIONS = [
	"Buildings Finance Fund",
	"Construction",
	"Attendance App",
	"CRM App",
	"Aqaraty App",
	"PM App",
	"Others"
];
var PROJECT_OPTIONS = [
	"Administration",
	"ERP PLUS",
	"ERP+ SERVER",
	"WhistleBlowing",
	"ERP+ Cloud Vetara Iraq"
];
var COLUMNS = [
	{
		key: "code",
		label: "Code",
		defaultVisible: true,
		width: "w-24"
	},
	{
		key: "arabicName",
		label: "Arabic Name",
		defaultVisible: false,
		width: "w-40"
	},
	{
		key: "englishName",
		label: "English Name",
		defaultVisible: false,
		width: "w-40"
	},
	{
		key: "email",
		label: "Email",
		defaultVisible: false,
		width: "w-48"
	},
	{
		key: "customerCode",
		label: "Customer Code",
		defaultVisible: false,
		width: "w-32"
	},
	{
		key: "clientEmail",
		label: "Client Email",
		defaultVisible: false,
		width: "w-48"
	},
	{
		key: "status",
		label: "Status",
		defaultVisible: true,
		width: "w-40"
	},
	{
		key: "classification",
		label: "Classification",
		defaultVisible: true,
		width: "w-48"
	},
	{
		key: "project",
		label: "Project",
		defaultVisible: true,
		width: "w-40"
	},
	{
		key: "client",
		label: "Client",
		defaultVisible: false,
		width: "w-32"
	},
	{
		key: "request",
		label: "Request",
		defaultVisible: true
	},
	{
		key: "lastReply",
		label: "Last Reply",
		defaultVisible: true,
		width: "w-64"
	},
	{
		key: "priority",
		label: "Priority",
		defaultVisible: false,
		width: "w-24"
	},
	{
		key: "appName",
		label: "App Name",
		defaultVisible: true,
		width: "w-36"
	},
	{
		key: "closedEstimationTime",
		label: "Closed Estimation Time",
		defaultVisible: true,
		width: "w-40"
	},
	{
		key: "createdDate",
		label: "Created Date",
		defaultVisible: true,
		width: "w-32"
	},
	{
		key: "createdBy",
		label: "Created By",
		defaultVisible: true,
		width: "w-36"
	}
];
var DEFAULT_VISIBILITY = Object.fromEntries(COLUMNS.map((c) => [c.key, c.defaultVisible]));
function useDarkMode() {
	const [dark, setDark] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
	});
	(0, import_react.useEffect)(() => {
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	}, [dark]);
	return [dark, setDark];
}
function StatusBadge({ status }) {
	const { cls, dotCls, label } = {
		New: {
			cls: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60",
			dotCls: "status-dot-new bg-blue-500",
			label: "New"
		},
		"In Progress": {
			cls: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
			dotCls: "status-dot-progress bg-amber-500",
			label: "In Progress"
		},
		Resolved: {
			cls: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
			dotCls: "status-dot-resolved bg-emerald-500",
			label: "Resolved"
		},
		Closed: {
			cls: "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-700/60",
			dotCls: "status-dot-closed bg-slate-400",
			label: "Closed"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", cls),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("status-dot", dotCls) }), label]
	});
}
var NAV = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "#"
	},
	{
		label: "Invoices",
		icon: FileText,
		href: "#"
	},
	{
		label: "Requests",
		icon: Inbox,
		href: "#",
		active: true
	},
	{
		label: "Project",
		icon: FolderKanban,
		href: "#"
	},
	{
		label: "Settings",
		icon: Settings,
		href: "#"
	}
];
function Sidebar({ open, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in",
		onClick: onClose,
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-sidebar text-sidebar-foreground", "transition-transform duration-300 ease-in-out", "lg:static lg:z-auto lg:w-64 lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full"),
		style: { boxShadow: "4px 0 32px -8px oklch(0 0 0 / 0.4), 1px 0 0 0 oklch(1 0 0 / 0.06)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 right-0 h-40 pointer-events-none",
				style: { background: "radial-gradient(ellipse at 60% 0%, oklch(0.60 0.20 258 / 0.18) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center gap-3 px-5 py-5 border-b border-sidebar-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1 shrink-0 logo-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: erp_logo2_default,
							alt: "ERP+ Mobile Application",
							className: "h-full w-full object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold text-sm text-sidebar-foreground",
							children: "ERP+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.18em] text-sidebar-foreground/50 uppercase mt-0.5",
							children: "Customer Portal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "lg:hidden ml-auto flex h-8 w-8 items-center justify-center rounded-full text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pt-5 pb-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-semibold tracking-[0.2em] uppercase text-sidebar-foreground/35",
					children: "Navigation"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-3 py-1 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-0.5",
					children: NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `animate-slide-in-left delay-${[
							100,
							150,
							200,
							250,
							300
						][i] ?? 300}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							onClick: () => onClose(),
							className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group", item.active ? "bg-gradient-to-r from-sidebar-primary/20 to-sidebar-primary/10 text-sidebar-foreground border border-sidebar-primary/25 nav-glow" : "text-sidebar-foreground/65 hover:bg-sidebar-accent/80 hover:text-sidebar-foreground hover:translate-x-1"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200", item.active ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" : "text-sidebar-foreground/50 group-hover:bg-sidebar-accent group-hover:text-sidebar-foreground/80"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-3.5 w-3.5" })
								}),
								item.label,
								item.active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto flex h-1.5 w-1.5 rounded-full bg-sidebar-primary" })
							]
						})
					}, item.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-5 sidebar-gradient-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-4 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold shrink-0",
						children: "AR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-sidebar-foreground truncate",
							children: "Ahmed R."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-sidebar-foreground/45 truncate",
							children: "Client · ERP PLUS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex h-7 w-7 items-center justify-center rounded-lg text-sidebar-foreground/45 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
						"aria-label": "Log out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pb-4 text-[10px] text-sidebar-foreground/35 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-2.5 w-2.5" }), "v4.2.1 · © ERP+ Cloud"]
			})
		]
	})] });
}
function TopBar({ onSearch, searchValue, onMenuClick, dark, onToggleDark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-border",
		style: {
			background: "oklch(var(--background) / 0.85)",
			backdropFilter: "blur(20px) saturate(160%)",
			WebkitBackdropFilter: "blur(20px) saturate(160%)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-16 items-center gap-3 px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onMenuClick,
					className: "lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "global-search",
							value: searchValue,
							onChange: (e) => onSearch(e.target.value),
							placeholder: "Search requests…",
							className: "pl-9 h-9 bg-secondary/70 border-transparent focus-visible:bg-background focus-visible:border-border text-sm rounded-xl"
						}),
						searchValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSearch(""),
							className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: "dark-mode-toggle",
							onClick: onToggleDark,
							className: "flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200",
							"aria-label": "Toggle dark mode",
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							id: "notifications-btn",
							variant: "ghost",
							size: "icon",
							"aria-label": "Notifications",
							className: "relative rounded-xl h-9 w-9",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-accent notif-dot" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 h-6 w-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 pr-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								className: "h-8 w-8 ring-2 ring-border ring-offset-1 ring-offset-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
									className: "bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold",
									children: "AR"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:block text-sm leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: "Ahmed R."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Client · ERP PLUS"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Log out",
							className: "rounded-xl h-9 w-9 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
						})
					]
				})
			]
		})
	});
}
function StatTile({ label, value, hint, icon: Icon, tone, progress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-hover rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] group cursor-default relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
				style: { background: tone === "primary" ? "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.20 258 / 0.05) 0%, transparent 70%)" : tone === "warning" ? "radial-gradient(ellipse at 80% 20%, oklch(0.73 0.17 65 / 0.05) 0%, transparent 70%)" : tone === "success" ? "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.16 155 / 0.05) 0%, transparent 70%)" : "radial-gradient(ellipse at 80% 20%, oklch(0.60 0.20 258 / 0.05) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground/80",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-count-pop mt-2 font-display text-3xl font-bold tracking-tight text-foreground",
							children: value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1.5 text-xs text-muted-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 transition-transform group-hover:translate-y-[-2px] group-hover:text-accent" }), hint]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6", `stat-icon-${tone}`),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				})]
			}),
			progress !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 w-full rounded-full bg-secondary overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full sparkline-bar transition-all duration-700",
						style: { width: `${Math.min(100, progress)}%` }
					})
				})
			})
		]
	});
}
function ColumnVisibilityMenu({ visibility, setVisibility, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "start",
		className: "w-60 max-h-[70vh] overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Display columns" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			COLUMNS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
				checked: visibility[c.key],
				onCheckedChange: (v) => setVisibility({
					...visibility,
					[c.key]: !!v
				}),
				onSelect: (e) => e.preventDefault(),
				children: c.label
			}, c.key))
		]
	})] });
}
function RequestsPage() {
	const [rows, setRows] = (0, import_react.useState)(INITIAL_ROWS);
	const [filter, setFilter] = (0, import_react.useState)("Active");
	const [openAdd, setOpenAdd] = (0, import_react.useState)(false);
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const [colFilters, setColFilters] = (0, import_react.useState)({});
	const [expanded, setExpanded] = (0, import_react.useState)({});
	const [visibility, setVisibility] = (0, import_react.useState)(DEFAULT_VISIBILITY);
	const [sort, setSort] = (0, import_react.useState)(null);
	const [page, setPage] = (0, import_react.useState)(1);
	const [pageSize, setPageSize] = (0, import_react.useState)(5);
	const [search, setSearch] = (0, import_react.useState)("");
	const [refreshKey, setRefreshKey] = (0, import_react.useState)(0);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [attachmentsRow, setAttachmentsRow] = (0, import_react.useState)(null);
	const [replyRow, setReplyRow] = (0, import_react.useState)(null);
	const [dark, setDark] = useDarkMode();
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const handler = (e) => {
			if (e.matches) setSidebarOpen(false);
		};
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		filter,
		colFilters,
		pageSize,
		search,
		refreshKey
	]);
	const filtered = (0, import_react.useMemo)(() => {
		let out = rows.filter((r) => {
			if (filter === "Active" && !(r.status === "New" || r.status === "In Progress")) return false;
			if (filter === "Archived" && r.status !== "Closed") return false;
			for (const [k, v] of Object.entries(colFilters)) {
				if (!v) continue;
				if (!String(r[k] ?? "").toLowerCase().includes(v.toLowerCase())) return false;
			}
			if (search) {
				if (!Object.values(r).join(" ").toLowerCase().includes(search.toLowerCase())) return false;
			}
			return true;
		});
		if (sort) {
			const { key, dir } = sort;
			out = [...out].sort((a, b) => {
				const av = a[key];
				const bv = b[key];
				if (typeof av === "number" && typeof bv === "number") return dir === "asc" ? av - bv : bv - av;
				return dir === "asc" ? String(av ?? "").localeCompare(String(bv ?? "")) : String(bv ?? "").localeCompare(String(av ?? ""));
			});
		}
		return out;
	}, [
		rows,
		filter,
		colFilters,
		sort,
		search,
		refreshKey
	]);
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
			const out = {};
			for (const c of visibleColumns) out[c.label] = r[c.key];
			return out;
		});
		const ws = utils.json_to_sheet(data);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Requests");
		writeFileSync(wb, `requests-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
	};
	const handleAddRequest = (r) => {
		const nextCode = Math.max(...rows.map((x) => x.code)) + 1;
		setRows((prev) => [{
			...r,
			code: nextCode,
			status: "New",
			createdDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			createdBy: "Ahmed R."
		}, ...prev]);
	};
	const handleRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshKey((k) => k + 1);
			setRefreshing(false);
		}, 600);
	};
	const setColSort = (key, dir) => setSort({
		key,
		dir
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-muted/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
				open: sidebarOpen,
				onClose: () => setSidebarOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
					searchValue: search,
					onSearch: setSearch,
					onMenuClick: () => setSidebarOpen(true),
					dark,
					onToggleDark: () => setDark((d) => !d)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "flex-1 px-4 md:px-6 py-6 md:py-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-4 w-4 items-center justify-center rounded bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-2.5 w-2.5 text-primary" })
									}), "Customer Portal"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1.5 font-display text-3xl md:text-4xl font-bold tracking-tight",
									children: "Requests"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground max-w-md",
									children: "Submit clarifications, improvements, and issues — and track every reply in real time."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.youtube.com",
								target: "_blank",
								rel: "noreferrer",
								id: "watch-how-to-btn",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-150 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4 text-destructive" }), "Watch how-to"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up delay-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
										label: "Total Requests",
										value: String(totalCount),
										hint: "in your workspace",
										icon: Inbox,
										tone: "primary",
										progress: totalCount / 20 * 100
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up delay-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
										label: "Active",
										value: String(activeCount),
										hint: "team working on it",
										icon: Clock,
										tone: "warning",
										progress: activeCount / totalCount * 100
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up delay-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
										label: "Resolved",
										value: String(resolvedCount),
										hint: "awaiting confirmation",
										icon: Sparkles,
										tone: "info",
										progress: resolvedCount / totalCount * 100
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up delay-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
										label: "Archived",
										value: String(archivedCount),
										hint: "closed & done",
										icon: CircleCheck,
										tone: "success",
										progress: archivedCount / totalCount * 100
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up delay-200 rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5 px-4 md:px-5 py-3.5 border-b border-border bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											id: "add-request-btn",
											className: "btn-glow gap-1.5 rounded-full text-sm h-9 px-4",
											onClick: () => setOpenAdd(true),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), "Add request"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColumnVisibilityMenu, {
											visibility,
											setVisibility,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												size: "sm",
												className: "gap-1.5 rounded-full h-9 border-border/60 hover:bg-secondary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), "Columns"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex rounded-full bg-secondary/80 p-1 ml-1 border border-border/40",
											children: [
												"All",
												"Active",
												"Archived"
											].map((f) => {
												const count = f === "All" ? totalCount : f === "Active" ? activeCount : archivedCount;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													id: `filter-${f.toLowerCase()}-btn`,
													onClick: () => setFilter(f),
													className: cn("relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200", filter === f ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
													children: [f, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("ml-1.5 inline-flex items-center justify-center rounded-full px-1.5 text-[10px] font-bold", filter === f ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"),
														children: count
													})]
												}, f);
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "ml-auto flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												id: "export-btn",
												variant: "outline",
												size: "sm",
												className: "gap-1.5 rounded-full h-9 border-border/60 hover:bg-secondary",
												onClick: handleExport,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "Export"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												className: cn("h-9 w-9 rounded-xl", refreshing && "animate-spin-slow"),
												onClick: handleRefresh,
												"aria-label": "Refresh",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" })
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-sm",
										style: { tableLayout: "auto" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("thead", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border table-header-gradient text-left text-xs uppercase tracking-wider text-muted-foreground/80",
											children: [visibleColumns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: cn("px-4 py-3 font-semibold", c.width),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [
														c.label,
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
															asChild: true,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																"aria-label": `${c.label} column menu`,
																className: "rounded-md p-0.5 hover:bg-background/80 transition-colors",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 opacity-60" })
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
															align: "start",
															className: "w-48",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
																	onClick: () => setColSort(c.key, "asc"),
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5" }), "Sort ascending"]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
																	onClick: () => setColSort(c.key, "desc"),
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5" }), "Sort descending"]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), "Display data"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent, {
																	className: "w-56 max-h-[60vh] overflow-y-auto",
																	children: COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
																		checked: visibility[col.key],
																		onCheckedChange: (v) => setVisibility({
																			...visibility,
																			[col.key]: !!v
																		}),
																		onSelect: (e) => e.preventDefault(),
																		children: col.label
																	}, col.key))
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), "Filter"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
																	className: "w-64 p-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																		autoFocus: true,
																		value: colFilters[c.key] ?? "",
																		onChange: (e) => setColFilters((s) => ({
																			...s,
																			[c.key]: e.target.value
																		})),
																		placeholder: `Filter ${c.label.toLowerCase()}…`,
																		className: "h-8 text-xs"
																	}), colFilters[c.key] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => setColFilters((s) => ({
																			...s,
																			[c.key]: ""
																		})),
																		className: "mt-2 text-xs text-muted-foreground hover:text-foreground",
																		children: "Clear filter"
																	})]
																})] })
															]
														})] }),
														sort?.key === c.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-accent",
															children: sort.dir === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3 w-3" })
														})
													]
												})
											}, c.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-semibold text-right",
												children: "Actions"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border bg-secondary/30",
											children: [visibleColumns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "pointer-events-none absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														value: colFilters[c.key] ?? "",
														onChange: (e) => setColFilters((s) => ({
															...s,
															[c.key]: e.target.value
														})),
														placeholder: "Filter…",
														className: "h-7 w-full rounded-lg border border-border bg-background pl-7 pr-2 text-xs placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
													})]
												})
											}, c.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-2" })]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [pageRows.map((r, rowIdx) => {
											const isExpanded = expanded[r.code];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												style: { animationDelay: `${rowIdx * 45}ms` },
												className: "animate-row-enter border-b border-border/60 last:border-0 hover:bg-secondary/30 transition-colors table-row-hover",
												children: [visibleColumns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: cn("px-4 py-3.5 align-top", c.width),
													children: c.key === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono font-semibold text-foreground bg-secondary/60 rounded-md px-1.5 py-0.5 text-xs",
														children: ["#", r.code]
													}) : c.key === "status" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status }) : c.key === "classification" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1.5 text-foreground/90 text-xs font-medium",
														children: [r.classification === "Issue" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 text-destructive shrink-0" }) : r.classification === "Improvement Request" || r.classification === "CR" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-accent shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }), r.classification]
													}) : c.key === "request" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "max-w-md",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															dir: "auto",
															className: cn("text-foreground/85 leading-relaxed text-sm", !isExpanded && "line-clamp-2"),
															children: r.request
														}), r.request.length > 60 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => setExpanded((s) => ({
																...s,
																[r.code]: !s[r.code]
															})),
															className: "mt-1 text-xs font-semibold text-accent hover:underline",
															children: isExpanded ? "Show less" : "Read more"
														})]
													}) : c.key === "lastReply" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														dir: "auto",
														className: "text-muted-foreground text-xs line-clamp-3 max-w-xs leading-relaxed",
														children: r.lastReply
													}) : c.key === "priority" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold", Number(r.priority) <= 3 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : Number(r.priority) <= 6 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"),
														children: r.priority || "—"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground/80 text-sm",
														children: String(r[c.key] ?? "—") || "—"
													})
												}, c.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3.5 align-top",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 flex-nowrap",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																onClick: () => setAttachmentsRow(r),
																className: "action-btn border-border/60 bg-secondary/60 text-muted-foreground hover:border-accent/50 hover:bg-accent/10 hover:text-accent",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-3 w-3" }), "Files"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																onClick: () => setReplyRow(r),
																className: "action-btn border-primary/25 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																	xmlns: "http://www.w3.org/2000/svg",
																	className: "h-3 w-3",
																	viewBox: "0 0 24 24",
																	fill: "none",
																	stroke: "currentColor",
																	strokeWidth: "2.5",
																	strokeLinecap: "round",
																	strokeLinejoin: "round",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 17 4 12 9 7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" })]
																}), "Reply"]
															}),
															filter === "Archived" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																onClick: () => setRows((prev) => prev.map((row) => row.code === r.code ? {
																	...row,
																	status: "New"
																} : row)),
																className: "action-btn border-amber-500/40 bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:border-amber-500 hover:text-white dark:text-amber-400",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "h-3 w-3" }), "Restore"]
															}) : r.status === "Closed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "action-btn border-border bg-muted/60 text-muted-foreground cursor-default",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "h-3 w-3" }), "Archived"]
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																onClick: () => setRows((prev) => prev.map((row) => row.code === r.code ? {
																	...row,
																	status: "Closed"
																} : row)),
																className: "action-btn border-slate-600/40 bg-slate-700/10 text-slate-600 hover:bg-slate-700 hover:border-slate-700 hover:text-white dark:text-slate-300 dark:border-slate-600/40 dark:bg-slate-700/20",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "h-3 w-3" }), "Archive"]
															})
														]
													})
												})]
											}, r.code);
										}), pageRows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											colSpan: visibleColumns.length + 1,
											className: "px-4 py-20 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mx-auto max-w-sm animate-fade-up",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/80 text-muted-foreground mb-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-6 w-6" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-foreground",
														children: "No requests match your filters"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm text-muted-foreground mt-1",
														children: "Try clearing a column filter or switching the tab."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => {
															setColFilters({});
															setSearch("");
														},
														className: "mt-4 text-xs font-medium text-accent hover:underline",
														children: "Clear all filters"
													})
												]
											})
										}) })] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 px-4 md:px-5 py-3 border-t border-border bg-secondary/20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													className: "h-8 w-8 rounded-lg",
													disabled: currentPage === 1,
													onClick: () => setPage(1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													className: "h-8 w-8 rounded-lg",
													disabled: currentPage === 1,
													onClick: () => setPage((p) => Math.max(1, p - 1)),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
												}),
												Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(0, currentPage - 3), Math.max(0, currentPage - 3) + 5).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: n === currentPage ? "default" : "ghost",
													size: "sm",
													onClick: () => setPage(n),
													className: cn("h-8 w-8 p-0 rounded-lg text-xs font-semibold", n !== currentPage && "text-muted-foreground hover:text-foreground"),
													children: n
												}, n)),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													className: "h-8 w-8 rounded-lg",
													disabled: currentPage === totalPages,
													onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													className: "h-8 w-8 rounded-lg",
													disabled: currentPage === totalPages,
													onClick: () => setPage(totalPages),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "h-4 w-4" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
											orientation: "vertical",
											className: "h-5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: ["Rows", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: String(pageSize),
												onValueChange: (v) => setPageSize(Number(v)),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 w-16 rounded-lg text-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
													"5",
													"10",
													"25",
													"50"
												].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: n,
													children: n
												}, n)) })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "ml-auto text-xs text-muted-foreground",
											children: [
												"Showing",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-foreground",
													children: [
														filtered.length === 0 ? 0 : pageStart + 1,
														"–",
														Math.min(pageStart + pageSize, filtered.length)
													]
												}),
												" ",
												"of ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: filtered.length
												}),
												" requests"
											]
										})
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRequestDialog, {
				open: openAdd,
				onOpenChange: setOpenAdd,
				nextCode: Math.max(...rows.map((r) => r.code)) + 1,
				onSubmit: handleAddRequest
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentsDialog, {
				row: attachmentsRow,
				onClose: () => setAttachmentsRow(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReplyDialog, {
				row: replyRow,
				onClose: () => setReplyRow(null)
			})
		]
	});
}
function AddRequestDialog({ open, onOpenChange, nextCode, onSubmit }) {
	const [values, setValues] = (0, import_react.useState)({
		classification: "Issue",
		appName: "Others",
		project: "ERP PLUS",
		priority: "",
		request: "",
		file: null
	});
	const editorRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open && editorRef.current) editorRef.current.innerHTML = "";
		if (open) setValues({
			classification: "Issue",
			appName: "Others",
			project: "ERP PLUS",
			priority: "",
			request: "",
			file: null
		});
	}, [open]);
	const exec = (cmd, arg) => {
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
			closedEstimationTime: ""
		});
		onOpenChange(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-2xl p-0 gap-0 overflow-hidden border-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "px-6 pt-6 pb-4 border-b border-border relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 pointer-events-none",
						style: { background: "linear-gradient(135deg, oklch(0.60 0.20 258 / 0.04) 0%, transparent 60%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-xl font-bold",
							children: "New Request"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs mt-0.5",
							children: [
								"Assigned code ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono font-semibold text-foreground",
									children: ["#", nextCode]
								}),
								" — fields marked ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive font-bold",
									children: "*"
								}),
								" are required."
							]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[70vh] overflow-y-auto px-6 py-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
										children: "Code"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: nextCode,
										readOnly: true,
										className: "bg-secondary/60 font-mono text-sm"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
										children: ["Classification ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: values.classification,
										onValueChange: (v) => setValues((s) => ({
											...s,
											classification: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select…" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CLASSIFICATION_OPTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: c,
											children: c
										}, c)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
										children: "Application"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: values.appName,
										onValueChange: (v) => setValues((s) => ({
											...s,
											appName: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: APP_NAME_OPTIONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: a,
											children: a
										}, a)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
										children: ["Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: values.project,
										onValueChange: (v) => setValues((s) => ({
											...s,
											project: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select…" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PROJECT_OPTIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: p,
											children: p
										}, p)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
										children: ["Priority ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-normal normal-case",
											children: "(1 = highest)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 1,
										max: 10,
										placeholder: "1–10",
										className: "w-36",
										value: values.priority,
										onChange: (e) => setValues((s) => ({
											...s,
											priority: e.target.value === "" ? "" : Number(e.target.value)
										}))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
								children: ["Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-input bg-background overflow-hidden focus-within:ring-2 focus-within:ring-ring/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-0.5 border-b border-border bg-secondary/40 px-2 py-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											defaultValue: "p",
											onValueChange: (v) => exec("formatBlock", v === "p" ? "P" : v.toUpperCase()),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "h-7 w-28 text-xs border-transparent bg-transparent shadow-none",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "p",
													children: "Paragraph"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "h1",
													children: "Heading 1"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "h2",
													children: "Heading 2"
												})
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-4 w-px bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Bold,
											label: "Bold",
											onClick: () => exec("bold")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Italic,
											label: "Italic",
											onClick: () => exec("italic")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Underline,
											label: "Underline",
											onClick: () => exec("underline")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-4 w-px bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: TextAlignStart,
											label: "Align left",
											onClick: () => exec("justifyLeft")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: TextAlignCenter,
											label: "Align center",
											onClick: () => exec("justifyCenter")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: TextAlignEnd,
											label: "Align right",
											onClick: () => exec("justifyRight")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-4 w-px bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: List,
											label: "Bullet list",
											onClick: () => exec("insertUnorderedList")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: ListOrdered,
											label: "Numbered list",
											onClick: () => exec("insertOrderedList")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: ListIndentDecrease,
											label: "Outdent",
											onClick: () => exec("outdent")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: ListIndentIncrease,
											label: "Indent",
											onClick: () => exec("indent")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Link,
											label: "Insert link",
											onClick: () => {
												const url = prompt("Enter URL");
												if (url) exec("createLink", url);
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Image,
											label: "Insert image",
											onClick: () => {
												const url = prompt("Enter image URL");
												if (url) exec("insertImage", url);
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarBtn, {
											icon: Table,
											label: "Insert table",
											onClick: () => {
												const html = "<table style=\"border-collapse:collapse\"><tbody>" + Array.from({ length: 2 }).map(() => "<tr>" + Array.from({ length: 2 }).map(() => "<td style=\"border:1px solid #ccc;padding:6px;min-width:60px\">&nbsp;</td>").join("") + "</tr>").join("") + "</tbody></table><p></p>";
												exec("insertHTML", html);
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-[10px] font-medium text-muted-foreground pr-1",
											children: "RTL & EN supported"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: editorRef,
									contentEditable: true,
									suppressContentEditableWarning: true,
									dir: "auto",
									"data-placeholder": "Describe your request in detail — Arabic and English supported…",
									className: "min-h-32 max-h-64 overflow-y-auto px-3 py-2.5 text-sm outline-none [&:empty:before]:content-[attr(data-placeholder)] [&:empty:before]:text-muted-foreground/50"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
									children: ["Attachments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal normal-case text-muted-foreground",
										children: "(optional)"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "file",
									className: "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 px-4 py-8 text-center cursor-pointer hover:bg-secondary/60 hover:border-accent/40 transition-all duration-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 mb-3 animate-float",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-6 w-6 text-accent" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-foreground",
											children: values.file ? values.file.name : "Drop a file or click to browse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: "PNG, JPG, PDF or ZIP up to 20 MB"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "file",
											type: "file",
											className: "hidden",
											onChange: (e) => setValues((s) => ({
												...s,
												file: e.target.files?.[0] ?? null
											}))
										})
									]
								}),
								values.file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 truncate",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-3.5 w-3.5 text-accent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate font-medium",
												children: values.file.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground shrink-0",
												children: [
													"(",
													(values.file.size / 1024).toFixed(1),
													" KB)"
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setValues((s) => ({
											...s,
											file: null
										})),
										className: "text-muted-foreground hover:text-destructive transition-colors ml-2",
										"aria-label": "Remove",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "px-6 py-4 border-t border-border bg-secondary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => onOpenChange(false),
						className: "rounded-xl",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleSave,
						className: "gap-1.5 rounded-xl btn-glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Save Request"]
					})]
				})
			]
		})
	});
}
function AttachmentsDialog({ row, onClose }) {
	const fileInputRef = (0, import_react.useRef)(null);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!row) setFiles([]);
	}, [row]);
	const addFiles = (incoming) => {
		if (!incoming) return;
		setFiles((prev) => [...prev, ...Array.from(incoming).filter((f) => !prev.find((p) => p.name === f.name))]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!row,
		onOpenChange: (v) => {
			if (!v) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-lg p-0 gap-0 overflow-hidden border-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "px-6 pt-6 pb-4 border-b border-border relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 pointer-events-none",
						style: { background: "linear-gradient(135deg, oklch(0.60 0.20 258 / 0.04) 0%, transparent 60%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-5 w-5 text-accent" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-lg font-bold",
							children: "Attachments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs mt-0.5",
							children: ["Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-semibold text-foreground",
								children: ["#", row?.code]
							})]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onDragOver: (e) => {
							e.preventDefault();
							setDragOver(true);
						},
						onDragLeave: () => setDragOver(false),
						onDrop: (e) => {
							e.preventDefault();
							setDragOver(false);
							addFiles(e.dataTransfer.files);
						},
						onClick: () => fileInputRef.current?.click(),
						className: cn("flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-10 cursor-pointer transition-all duration-200", dragOver ? "border-accent bg-accent/10 scale-[1.01]" : "border-border bg-secondary/30 hover:border-accent/40 hover:bg-secondary/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-transform duration-200", dragOver ? "scale-110 animate-float" : ""),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-7 w-7 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold",
									children: ["Drop files here or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent underline underline-offset-2",
										children: "browse"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: "PNG, JPG, PDF, ZIP — up to 20 MB each"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								multiple: true,
								className: "hidden",
								onChange: (e) => addFiles(e.target.files)
							})
						]
					}), files.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: files.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm animate-fade-up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-4 w-4 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-semibold text-foreground",
										children: f.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [(f.size / 1024).toFixed(1), " KB"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFiles((prev) => prev.filter((p) => p.name !== f.name)),
									className: "text-muted-foreground hover:text-destructive transition-colors rounded-lg p-1 hover:bg-destructive/10",
									"aria-label": "Remove",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})
							]
						}, f.name))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground py-2",
						children: "No attachments yet for this request."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "px-6 py-4 border-t border-border bg-secondary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						className: "rounded-xl",
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onClose,
						className: "gap-1.5 rounded-xl",
						disabled: files.length === 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-4 w-4" }),
							"Upload ",
							files.length > 0 ? `(${files.length})` : ""
						]
					})]
				})
			]
		})
	});
}
function ReplyDialog({ row, onClose }) {
	const [comment, setComment] = (0, import_react.useState)("");
	const [replyFile, setReplyFile] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!row) {
			setComment("");
			setReplyFile(null);
		}
	}, [row]);
	const handleSend = () => {
		setComment("");
		setReplyFile(null);
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!row,
		onOpenChange: (v) => {
			if (!v) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl p-0 gap-0 overflow-hidden border-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "px-6 pt-6 pb-4 border-b border-border relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 pointer-events-none",
						style: { background: "linear-gradient(135deg, oklch(0.22 0.055 265 / 0.04) 0%, transparent 60%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								className: "h-5 w-5 text-primary",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 17 4 12 9 7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-lg font-bold",
							children: "Reply to Request"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs mt-0.5",
							children: ["Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-semibold text-foreground",
								children: ["#", row?.code]
							})]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-5 space-y-4",
					children: [
						row?.lastReply && row.lastReply !== "—" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-secondary/40 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold text-sm",
									children: row.createdBy?.charAt(0) ?? "?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold text-foreground",
											children: row.createdBy
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground bg-secondary rounded-full px-2 py-0.5",
											children: row.createdDate
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										dir: "auto",
										className: "text-sm text-foreground/80 leading-relaxed",
										children: row.lastReply
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
								children: "Your reply"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: comment,
								onChange: (e) => setComment(e.target.value),
								placeholder: "Type your reply here…",
								rows: 4,
								dir: "auto",
								className: "w-full resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
									children: ["Attachment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-normal normal-case",
										children: "(optional)"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => fileRef.current?.click(),
									className: "flex items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/30 px-4 py-3 cursor-pointer hover:border-accent/40 hover:bg-secondary/60 transition-all duration-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-5 w-5 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: replyFile ? replyFile.name : "Click to attach a file"
										}),
										replyFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												setReplyFile(null);
											},
											className: "ml-auto text-muted-foreground hover:text-destructive transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									className: "hidden",
									onChange: (e) => setReplyFile(e.target.files?.[0] ?? null)
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "px-6 py-4 border-t border-border bg-secondary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						className: "rounded-xl",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleSend,
						disabled: !comment.trim(),
						className: "gap-1.5 rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							className: "h-4 w-4",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "22",
								y1: "2",
								x2: "11",
								y2: "13"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })]
						}), "Send Reply"]
					})]
				})
			]
		})
	});
}
function ToolbarBtn({ icon: Icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		title: label,
		"aria-label": label,
		onMouseDown: (e) => e.preventDefault(),
		onClick,
		className: "rounded-lg p-1.5 text-muted-foreground hover:bg-background hover:text-foreground transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
	});
}
//#endregion
export { RequestsPage as component };
