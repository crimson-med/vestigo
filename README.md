# Vestigo
 
 A tool for exploring and investigating APIs and websites.

 # IMPORTANT

 ocliff with npm and vestigo is broken to use the tool clone the repo

# Installation

You can install it globally with:

```
yarn global add vestigo
```

```
npm i -g vestigo
```

Then run the tool

```
vestigo
```

# Running

Scan Example:

```bash
vestigo scan --target="https://127.0.0.1/" --method="GET" --no-shortlist 
  --report="HTML"
```

Port Example:

```bash
vestigo ports --target="127.0.0.1" --protocol="TCP" --report="HTML"
```

As of now reports will be saved at:

```
~/.vestigo/<domain>/<ts>-vestigo.<extension>
```

- `<domain>` = hostname of the target or the ip
- `<ts>` = timestamp of the scan finished
- `<extension>` = extension chosen for report (md, html)


# Functionalities

- [SCAN (webserver endpoint detection)](doc/SCAN.md)
- [PORTS (port scanner)](doc/PORTS.md)

# Report

Vestigo will by default generate a mardown report. You can use parameters to set the report format to HTML.


# Dev Run

To run the tool in dev mode use:

```
bin/run scan --target="https://127.0.0.1/" --method="GET" --report="HTML" -w
```

# To Finish

- [X] Add TCP port scan
- [ ] Add UDP port scan
- [ ] Add Report for port scan


# To Do

- [ ] Get path disclosures for basic get
- [ ] Set the ssl header on a flag
- [ ] Detect and render in the report if bad ssl check
- [ ] Add OS analysis from path disclosure
- [ ] Add verbose parameters
- [ ] Make a request queuing + proxy (param for time between rq)
- [ ] Add https://www.npmjs.com/package/listr for better logging
- [ ] Add release-it
- [ ] Add homebrew distribution
- [ ] Add parameter for choosing report save location
