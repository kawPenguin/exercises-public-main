customElements.define("inline-circle", class InlineCircle extends HTMLElement {
    // The browser calls this method when an <inline-circle> element
    // is inserted into the document. There is also a disconnectedCallback()
    // that we don't need in this example.
    connectedCallback() {
        // Set the styles needed to create circles
        this.style.display = "inline-block";
        this.style.borderRadius = "50%";
        this.style.borderWidth = "1px";
        this.style.borderStyle = "solid";
        this.style.transform = "translateY(10%)";
        if (!this.hasAttribute("border-color")) {
            this.style.borderColor = "black";
        }

        // If there is not already a size defined, set a default size
        // that is based on the current font size.
        if (!this.style.width) {
            this.style.width = "0.8em";
            this.style.height = "0.8em";
        }
    }

    // The static observedAttributes property specifies which attributes
    // we want to be notified about changes to. (We use a getter here since
    // we can only use "static" with methods.)
    // 追加箇所１
    static get observedAttributes() { return ["diameter", "color", "border-color"]; }

    // This callback is invoked when one of the attributes listed above
    // changes, either when the custom element is first parsed, or later.
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
        case "diameter":
            // If the diameter attribute changes, update the size styles
            this.style.width = newValue;
            this.style.height = newValue;
            break;
        case "color":
            // If the color attribute changes, update the color styles
            this.style.backgroundColor = newValue;
            break;
        // 追加箇所２
        case "border-color":
            this.style.borderColor = newValue;
            break;
        
        }
    }

    // Define JavaScript properties that correspond to the element's
    // attributes. These getters and setters just get and set the underlying
    // attributes. If a JavaScript property is set, that sets the attribute
    // which triggers a call to attributeChangedCallback() which updates
    // the element styles.
    get diameter() { return this.getAttribute("diameter"); }
    set diameter(diameter) { this.setAttribute("diameter", diameter); }
    get color() { return this.getAttribute("color"); }
    set color(color) { this.setAttribute("color", color); }
    // 追加箇所３
    get borderColor() { return this.getAttribute("border-color"); }
    set borderColor(color) { this.setAttribute("border-color", color); }
});