const fetch = require("node-fetch");

const token = "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";

async function fetchGitHubFile() {
  const apiUrl = `https://github.com/sukhchain1322/POSdhaba/blob/main/New%20folder/app.js`;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const content = await response.text();
    console.log("Successfully fetched file content from GitHub");
    return content;
  } catch (error) {
    console.error("Error fetching file from GitHub:", error);
    throw error; // Rethrow to handle it outside
  }
}

module.exports = fetchGitHubFile;
