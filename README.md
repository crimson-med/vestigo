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

Example:

```
vestigo scan --target="https://127.0.0.1/" --method="GET" --no-shortlist 
  --report="HTML"
```

As of now reports will be saved at:

```
~/.vestigo/<domain>/<ts>-vestigo.<extension>
```

- `<domain>` = hostname of the target or the ip
- `<ts>` = timestamp of the scan finished
- `<extension>` = extension chosen for report (md, html)


# Options

```
-h, --help
```
Show CLI help.

```
-t, --target=target
```
The target that Vestigo will scan

```
-m, --method=(GET|POST|BOTH)  [default: POST]
```
Requet methods can be: GET, POST, BOTH.

```
-p, --no-parameters
```
Don't use extra parameters on endpoints (default on). Vestigo will try to connect to urls adding get parameters example: https://myurl.com/privacy/2

```
-r, --report=(MD|HTML) [default: MD]
```
Type of report to generate

```
-s, --no-shortlist
```
Use to use the long enpoint list (default on). If the shortlist is disabled Vestigo will use a long list of potential endpoints.

```
-w, --whois
```
Perform a whois on the provided domain name

# Report

Vestigo will by default generate a mardown report. You can use parameters to set the report format to HTML.


# Dev Run

To run the tool in dev mode use:

```
bin/run scan --target="https://127.0.0.1/" --method="GET" --report="HTML" -w
```

# To Do

- [ ] Get path disclosures for basic get
- [ ] Set the ssl header on a flag
- [ ] Detect and render in the report if bad ssl check
- [ ] Add OS analysis from path disclosure
- [ ] Add port scan (known ports)
- [ ] Add verbose parameters
- [ ] Make a request queuing + proxy
- [ ] Add https://www.npmjs.com/package/listr for better logging
- [ ] Add release-it
- [ ] Add homebrew distribution
- [ ] Add parameter for choosing report save location
