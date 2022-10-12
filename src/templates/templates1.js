module.exports = { Layout }

function Layout({ title, content }) {
    return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width">
          <link href="/style.css" rel="stylesheet"/>
          <title>${title}</title>
        </head>
        <body>
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `;
  }
  