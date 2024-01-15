# About

Next.js app created with [T3 Stack](https://create.t3.gg/) to display NER SCCA Solo live timing and results.

Hosted on Vercel, and fetches the results as json from an Azure Blob Storage account.

# Requirements

-   node.js 18+

# Local Development

1. Run `npm install`
2. Create a .env file with the following content:

```
CLASS_RESULTS_JSON_URL=<json url>
PAX_RESULTS_JSON_URL=<json url>
RAW_RESULTS_JSON_URL=<json url>
```

3. To start a local server, run `npm run dev`
