# Scan

This functionality will scan a webserver / api for common endpoints

# Example

```bash
vestigo scan --target="https://127.0.0.1/" --method="GET" --no-shortlist 
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

```
-w, --whois
```
Perform a whois on the provided domain name