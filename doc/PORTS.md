# Ports

This functionality will scan a api / domain for open ports.

# Example

```bash
vestigo ports --target="127.0.0.1" --protocol="TCP" --report="HTML"
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
-p, --protocol=(TCP|UDP|BOTH)  [default: TCP]
```
Requet protocol can be: TCP, UDP, BOTH.

```
-r, --report=(MD|HTML) [default: MD]
```
Type of report to generate