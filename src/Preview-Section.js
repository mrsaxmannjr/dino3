import React from "react";

export class PreviewSection extends React.Component {
  togglePreview() {
    const preview = document.querySelector('#application-preview');
    preview.classList.toggle('hidden');
  }
  render() {
    return (
      <div>
        <p id="message">&nbsp;</p>
        <button id="preview-toggle" onClick={this.togglePreview}>Show Preview</button>
        <section id="application-preview" className="hidden"></section>
      </div>
    )
  }
}