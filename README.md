# BEREC Data Fetcher

A Playwright script to download JSON data from BEREC (Body of European Regulators for Electronic Communications).

## What is BEREC?

BEREC is the Body of European Regulators for Electronic Communications, responsible for coordinating telecommunications regulations across Europe. This data is essential for:

- **Telecommunications Providers**: Ensuring compliance with European numbering standards
- **Emergency Services**: Maintaining accurate emergency communication protocols across borders
- **Public Safety Systems**: Implementing standardized public warning systems
- **Regulatory Compliance**: Staying up-to-date with European telecommunications regulations

## Why Keep Data Current?

BEREC data is regularly updated to reflect:

- New member states joining the regulatory framework (e.g., Ukraine joining on December 9th, 2024)
- Changes in numbering ranges and value-added service allocations
- Updates to emergency service protocols and contact information
- Public Warning System (PWS) implementation changes across countries

Having current data ensures your systems remain compliant and can properly route communications across European telecommunications networks.

## Overview

This tool uses **Playwright** to automate the download of three critical datasets from the BEREC website:

- **VAS Numbering Ranges**: Value-added service numbering ranges across European countries
- **Emergency Means**: Emergency communication contact information and protocols
- **PWS Data**: Public Warning System implementation details and requirements

### Why Playwright?

Playwright provides reliable browser automation for fetching data that may require JavaScript rendering. This ensures consistent downloads even if the BEREC website structure changes, as it interacts with the page the same way a human would.

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
