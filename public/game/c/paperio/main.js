const key_audio = ["key1.wav", "key2.wav", "key3.wav"];

document.addEventListener("keydown", () => {
	new Audio(`css/${key_audio[Math.floor(Math.random() * key_audio.length)]}`).play();
});

(async () => {
	const config = await (await fetch("/config.json")).json();

	const game_list = document.getElementById("game-list");

	config.games.forEach(game => {
		const href = game.disabled ? "javascript: void(0)" : `${config.games_path}${game.path}/`;
		game_list.innerHTML += `<li class="game"><a class="game-link" href="${href}">${game.name}</a></li>`;
	});
})();