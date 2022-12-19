# Search Text in html page
This action helps you to search text in a remote html accessible via URL.

## Inputs
```YAML
- uses: snsinahub-org/search-remote-html@v1.0.0
  id: search
  with:
    # Required: true
    url: https://example.com
    search: 'domain'
```
## Output
| Name | Type | Expected values |
| -- | -- | -- |
| found | string | ['true', 'false']

## Example
```YAML
- name: search
  uses: snsinahub-org/search-remote-html@v1.0.0
  id: search
  with:
    url: https://example.com
    search: 'domain'
```
