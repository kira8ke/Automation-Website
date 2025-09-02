// Simple projects list used by both pages.
// id MUST be unique and stable (used in URL like project.html?id=devotional-sender)

window.PROJECTS = [
  {
    id: "devotional-sender",
    title: "Daily Devotional / Motivation Sender",
    summary: "Cron-triggered workflow that fetches a verse/quote and emails or Telegram-delivers it every morning.",
    problem: "Consistently sending meaningful morning content is time-consuming and often forgotten.",
    flow: [
      "Cron triggers at 08:00 EAT",
      "HTTP Request node fetches verse/quote from API or Google Sheet",
      "Function node formats message (title, body, footer)",
      "Email/Telegram node sends to recipients list"
    ],
    nodes: ["Cron","HTTP Request","Function","Email","Telegram"],
    impact: "Automates daily content delivery and boosts engagement with zero manual effort.",
    tags: ["api","messaging","cron"],
    image: "assets/placeholder.png", // replace with a screenshot of your n8n canvas
    links: {
      repo: "https://github.com/youruser/n8n-automation-projects/tree/main/devotional-sender",
      demo: "#"
    }
  },
  {
    id: "client-reminders",
    title: "Client Reminder Emails",
    summary: "Weekly reminders generated from Google Sheets deadlines and sent via Gmail/SMTP.",
    problem: "Teams forget follow-ups; manual reminders waste time and cause missed deadlines.",
    flow: [
      "Cron runs every Monday 09:00",
      "Google Sheets node reads rows with upcoming dates",
      "IF node filters by due_date within 7 days",
      "Email node sends templated reminders to each client"
    ],
    nodes: ["Cron","Google Sheets","IF","Email"],
    impact: "Reduces missed deadlines; saves ~2 hours/week.",
    tags: ["sheets","email","productivity","cron"],
    image: "assets/placeholder.png",
    links: {
      repo: "https://github.com/youruser/n8n-automation-projects/tree/main/client-reminders",
      demo: "#"
    }
  },
  {
    id: "lead-to-crm",
    title: "Lead Capture → CRM Automation",
    summary: "Webhooks capture form submissions, enrich data, notify Slack, and create CRM entries.",
    problem: "Leads fall through the cracks without fast routing to a CRM and instant notifications.",
    flow: [
      "Webhook receives form payload",
      "Function node normalizes fields",
      "Notion/Supabase node creates a record",
      "Slack/Email notifies the sales channel"
    ],
    nodes: ["Webhook","Function","Notion/Supabase","Slack","Email"],
    impact: "Near-instant routing improves response rates and conversion.",
    tags: ["webhook","crm","notifications","api"],
    image: "assets/placeholder.png",
    links: {
      repo: "https://github.com/youruser/n8n-automation-projects/tree/main/lead-to-crm",
      demo: "#"
    }
  },
  {
    id: "sheets-to-dashboard",
    title: "Data Pipeline: Google Sheets → Dashboard",
    summary: "Transforms sheet data and pushes to an external API (e.g., Supabase/Grafana).",
    problem: "Manual exports delay reporting and create inconsistency.",
    flow: [
      "Cron triggers every 6 hours",
      "Google Sheets reads tab",
      "Function transforms (clean, aggregate)",
      "HTTP Request POSTs to dashboard API"
    ],
    nodes: ["Cron","Google Sheets","Function","HTTP Request"],
    impact: "Keeps dashboards fresh with hands-off data ops.",
    tags: ["data","dashboard","sheets","supabase","cron"],
    image: "assets/placeholder.png",
    links: {
      repo: "https://github.com/youruser/n8n-automation-projects/tree/main/sheets-to-dashboard",
      demo: "#"
    }
  }
];
