# BEREC Data Fetcher

A Playwright script to download JSON data from BEREC (Body of European Regulators for Electronic Communications).

## Overview

This tool downloads three JSON datasets from the BEREC website:

- **VAS Numbering Ranges**: Value-added service numbering ranges across European countries
- **Emergency Means**: Emergency communication data
- **PWS Data**: Public Warning System data

## Installation

```bash
pnpm install
```

## Usage

Run the download script:

```bash
pnpm download
```

The script will:

1. Create a `data/` folder if it doesn't exist
2. Download all three JSON files from BEREC
3. Save them in the `data/` folder with formatted JSON

### Output Files

- `data/vas-numbering-ranges.json`
- `data/emergency-means.json`
- `data/pws-data.json`

## Data Sources

The script downloads from these URLs:

- https://www.berec.europa.eu/en/vas-numbering-ranges-export/json?page&_format=json
- https://www.berec.europa.eu/en/emergency-means-export/json?page&_format=json
- https://www.berec.europa.eu/en/pws-data-export/json?page&_format=json

## Requirements

- Node.js (v14 or higher)
- pnpm

## License

ISC
