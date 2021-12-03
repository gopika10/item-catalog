# Item Catalogue
This is Zing Test Project

## Candidate have to read this requirements before start.

### Common requirements for test tasks:

* Use decomposition (Write all this with thought that current application is enterprise application and it small component will be complex in near future).
* Use RxJs lib.
* Use Redux pattern for store data of a page (single Angular service for store data with Observables).
* Use Typescript (as much as possible, try to cover all places).
* Use all possible optimisations (data-binding, upload modules (which upload strategy do you prefer)
* Use SCSS.
* Ignore *.spec files.
* Create new project 'ng new ....'

## Task

### Open item in child route (complexity - medium)

* full view will divided by 2 columns. left side: list of items. right side - profile of item.
* current page will be on a route - "list".
* list will received from backend by http call (mocked data - use inside of http call RxJs pipe for provide mocks)
* item model has fields 'id', 'name', both are strings type
* click by item of list will open child route with name 'item' and pass to this route QUERY PARAMETER - 'id'
* data will received by http call with mocked data and rendered
* right side - will render extended data for item (get from server extended data id, name, description - mocked data)
