const template = document.querySelector('#emoji-btn')

class EmojiButton extends HTMLElement {
	constructor() {
		super()
		const root = this.attachShadow({ mode: 'open' })
		root.append(template.content.cloneNode(true))
		this.h3 = root.querySelector('h3')
	}

	get emoji() {
		return this.getAttribute('emoji')
	}

	set emoji(emoji) {
		let text = this.getAttribute('text')
		this.h3.textContent = text + emoji
		this.setAttribute('emoji', emoji)
	}

	static get observedAttributes() {
		return ['emoji']
	}

	attributeChangedCallback(attributeName, oldvalue, newValue) {
		if (oldvalue !== newValue) {
			switch (attributeName) {
				case 'emoji':
					this[attributeName] = newValue
					break
			}
		}
	}
}

customElements.define('emoji-btn', EmojiButton)
