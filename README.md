# Search Text in html page
This action helps you to search text in a remote html accessible via URL. If call's http status code = 200 and text found in the page then action responds `true` otherwise the return value will be `false`

## Inputs
```YAML
- uses: snsinahub-org/search-remote-html@v1.0.0
  id: search
  with:
    # Required: true
    url: https://example.com

    # Required true
    search: 'domain'

    # Required: false
    # Dafault: false
    ignore-ssl: true
```
## Output
| Name | Type | Expected values |
| -- | -- | -- |
| found | string | ['true', 'false']
| httpStatusCode | string | Http status code in the range of 2xx, 3xx, 4xx and 5xx 

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
    echo Http Status code ${{ steps.search.outputs.httpStatusCode }}
- name: search result print NOT FOUND
  if: ${{ steps.search.outputs.found == 'false' }}
  run: |
    echo NOT FOUND ${{ steps.search.outputs.found }}
    echo Http Status code ${{ steps.search.outputs.httpStatusCode }}
```
