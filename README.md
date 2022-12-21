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
    ignore-ssl: true
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
    ignore-ssl: true
- name: search result print FOUND
  if: ${{ steps.search.outputs.found == 'true' }}
  run: |
    echo FOUND ${{ steps.search.outputs.found }}
- name: search result print NOT FOUND
  if: ${{ steps.search.outputs.found == 'false' }}
  run: |
    echo NOT FOUND ${{ steps.search.outputs.found }}
```
