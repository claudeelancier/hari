# Srimurugan Travel — 2026 frontend redesign

Premium multi-page frontend for **Sri Murugan Travel Agency** (Madurai, est. 1985).

This repository did not contain the production PHP/MySQL application. The redesign is a complete static frontend that:

- Replaces autoplay hero videos with a cinematic image carousel
- Preserves live-site copy, package names, prices, offices, phones and enquiry field names
- Can be dropped over the existing PHP includes or served as a preview

## Preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Pages

Home, About, Destinations, Tour Packages, International, Domestic, Train, Contact, Enquiry, Customise, Privacy, Terms.

## Connecting the live backend

On the production server, point enquiry forms’ `action` to the existing `enquiry.php` endpoints and restore `include/header.php` / `include/footer.php` if you prefer PHP chrome. Tour cards currently use catalogue data mirrored from the public website; swap `assets/js/data.js` for CMS-driven markup when merging.
