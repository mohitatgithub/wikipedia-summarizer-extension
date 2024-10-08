document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const title = document.getElementById('wikiInput').value;
    if (title) {
      const summary = await fetchSummary(title);
      document.getElementById('summary').innerText = summary || "No summary available.";
    } else {
      document.getElementById('summary').innerText = "Please enter a valid Wikipedia page title.";
    }
  });
  
  async function fetchSummary(title) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.extract;  // 'extract' contains the summary of the page
    } catch (error) {
      console.error('Error fetching summary:', error);
      return null;
    }
  }
  