const form = document.querySelector("form");
const input = document.querySelector("#input");

const changeImg = (url) => {
	const img = document.querySelectorAll("img");
	img.forEach((image) => {
		image.src =
			"https://imgs.search.brave.com/rq0gyl5s34ijeTCcdhapGaMYt_MB1vJwR62re043dbY/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tLzAw/L3MvT0RBd1dEZ3dN/QT09L3ovdUVFQUFP/U3d3NlpicWVXdy8k/XzMuSlBHP3NldF9p/ZD0y";
	});
};

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: changeImg,
		args: [input.value],
	});
});
