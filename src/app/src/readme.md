### Built-in control flow

- SWITCH

@switch (accessLevel) {
    @case ('admin') { html code }
    @default { html code}
}

- IF

@if (islogged) {
    html code
} @else { 
    html code
}

- For

@for (item of items; track item.id) {
    html code
}

Schematic 

ng generate @angular/core:control-flow