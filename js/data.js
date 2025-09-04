window.PROJECTS = [
  {
    id: "devotional-sender",
    title: "Daily Devotional / Motivation Sender",
    summary: "Cron-triggered workflow that fetches a verse or quote and emails/Telegram-delivers it every morning.",
    problem: "Sending daily content manually is time-consuming and inconsistent.",
    flow: [
      "Cron triggers at 08:00",
      "HTTP Request fetches quote/verse",
      "Function formats message",
      "Email/Telegram node sends to recipients"
    ],
    nodes: ["Cron","HTTP Request","Function","Email","Telegram"],
    impact: "Automates delivery of daily content and increases engagement.",
    tags: ["api","messaging","cron"],
    image: "assets/placeholder.png",
    links: { repo: "https://github.com/youruser/n8n-automation-projects/tree/main/devotional-sender", demo: "#" }
  },
  {
    id: "client-reminders",
    title: "Client Reminder Emails",
    summary: "Weekly reminders generated from Google Sheets deadlines and sent via Gmail/SMTP.",
    problem: "Missed follow-ups cause poor client experience.",
    flow: [
      "Weekly Cron checks Google Sheet",
      "IF node filters near-due items",
      "Email node sends templated reminders"
    ],
    nodes: ["Cron","Google Sheets","IF","Email"],
    impact: "Reduces missed deadlines and saves team time.",
    tags: ["sheets","email","productivity"],
    image: "assets/placeholder.png",
    links: { repo: "https://github.com/youruser/n8n-automation-projects/tree/main/client-reminders", demo: "#" }
  },
  {
    id: "lead-to-crm",
    title: "Lead Capture → CRM Automation",
    summary: "Webhooks capture form leads, create records in Supabase/Notion and notify Slack.",
    problem: "Leads need immediate routing to improve conversion.",
    flow: [
      "Webhook receives form submission",
      "Function normalizes fields",
      "Supabase/Notion record created",
      "Slack notifies sales team"
    ],
    nodes: ["Webhook","Function","Supabase/Notion","Slack"],
    impact: "Faster response times and higher lead conversion.",
    tags: ["webhook","crm","notifications"],
    image: "assets/placeholder.png",
    links: { repo: "https://github.com/youruser/n8n-automation-projects/tree/main/lead-to-crm", demo: "#" }
  }
];
