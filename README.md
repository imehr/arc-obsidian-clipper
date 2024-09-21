# Arc Obsidian Clipper

This project provides a custom Arc browser Boost script that allows users to easily clip web content directly into their Obsidian vault.

## Features

- Adds a "Clip" button to web pages
- Converts web content to Markdown format
- Includes YAML front matter with metadata
- Supports keyboard shortcut (Control + Shift + M) for quick clipping
- Integrates with Obsidian for seamless note creation

## Installation

1. Clone this repository or download the `arc-obsidian-clipper.js` file.
2. In Arc browser, navigate to the page where you want to use the clipper.
3. Click on the "+" button in the address bar to create a new Boost.
4. Name your Boost (e.g., "Obsidian Clipper") and click "Create Boost".
5. In the Boost editor, paste the contents of `arc-obsidian-clipper.js`.
6. Click "Save" to apply the Boost.

## Usage

1. Navigate to a web page you want to clip.
2. Click the "Clip" button that appears in the bottom-right corner of the page, or use the keyboard shortcut Control + Shift + M.
3. The selected content (or entire page if no selection) will be converted to Markdown and opened in Obsidian.

## Customization

You can customize the Obsidian vault and folder by modifying the following lines in the script:

```javascript
const vault = ''; // Specify your vault name here
const folder = 'Clippings/'; // Specify your desired folder path here
```

## Dependencies

This script uses the following libraries (loaded dynamically):

- [Turndown](https://github.com/domchristie/turndown) for HTML to Markdown conversion
- [Readability](https://github.com/mozilla/readability) for extracting main content from web pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).