# Vestigo
 
 A tool for exploring and investigating APIs and websites.

# Installation

You can install it globally with:

```
yarn global add vestigo
```

```
npm i -g vestigo
```

```
homebrew vestigo
```

# Running

Example:

```
scan --target="https://127.0.0.1/" --method="GET" --no-shortlist 
  --report="HTML"
```

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

# Report

Vestigo will by default generate a mardown report. You can use parameters to set the report format to HTML.

# To Do

- [ ] Get path disclosures for basic get
- [ ] Set the ssl header on a flag
- [ ] Detect and render in the report if bad ssl check
- [ ] Add whois
- [ ] Add OS analysis from path disclosure
- [ ] Add port scan (known ports)
- [ ] Add verbose parameters
- [ ] Make a request queuing + proxy
- [ ] Add https://www.npmjs.com/package/listr for better logging
- [ ] Add parameter for choosing report save location