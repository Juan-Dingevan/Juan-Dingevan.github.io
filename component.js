class CustomComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <p>Hypnotic (2023)</p>
        `
    }
}

customElements.define("team-jjm", CustomComponent);