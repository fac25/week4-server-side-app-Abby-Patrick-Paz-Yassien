function Layout({ title, content }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel ="stylesheet" href ="../style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Silkscreen&display=swap" rel="stylesheet">
          <meta charset="UTF-8">
          <title>${title}</title>
        </head>
        <body>
            <main>
              ${content}
            </main>
          </div>
          <script src="script.js"></script>
        </body>
      </html>
    `;
}

module.exports = { Layout };
